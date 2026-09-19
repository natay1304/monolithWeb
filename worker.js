/**
 * MONOLITH.CONTACT — Worker entry point.
 *
 * Serves the static site as-is (ASSETS binding) and adds one dynamic route,
 * POST /api/brief, that sends the brief form straight to Resend instead of
 * building a mailto: link — see docs/... (removed from this branch, see
 * project history) for why the mailto flow existed before.
 *
 * Required secret (Cloudflare dashboard → Settings → Variables and secrets):
 *   RESEND_API_KEY   — from resend.com, after the sending domain is verified
 *
 * Optional vars (sensible defaults below if unset):
 *   BRIEF_FROM   — "MONOLITH <brief@monolith.contact>" — must be a verified
 *                  Resend sender on the monolith.contact domain
 *   BRIEF_TO     — destination inbox, defaults to mail@monolith.contact
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/brief') {
      if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405);
      return handleBrief(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleBrief(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const company = String(data.company || '').trim();
  const email = String(data.email || '').trim();
  if (!company || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  const needs = Array.isArray(data.needs) ? data.needs.filter(Boolean) : [];
  const text = [
    `Company: ${company}`,
    `Industry: ${String(data.industry || '')}`,
    `Needs: ${needs.join(', ')}`,
    `Stage: ${String(data.stage || '')}`,
    `Email: ${email}`,
    '',
    String(data.message || '')
  ].join('\n');

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: 'not_configured' }, 500);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: env.BRIEF_FROM || 'MONOLITH <brief@monolith.contact>',
      to: env.BRIEF_TO || 'mail@monolith.contact',
      reply_to: email,
      subject: `BRIEF — ${company}`,
      text
    })
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    return json({ ok: false, error: 'send_failed', detail: detail.slice(0, 300) }, 502);
  }

  return json({ ok: true });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
