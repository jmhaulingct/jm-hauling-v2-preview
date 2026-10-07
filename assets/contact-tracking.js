document.addEventListener('click', function(event) {
  const link = event.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  let name;
  if (href.startsWith('tel:')) name = 'call_click';
  else if (href.startsWith('sms:')) name = 'text_click';
  else if (href.includes('clienthub.getjobber.com') || href.endsWith('#quote')) name = 'quote_click';
  if (!name) return;
  // Clicks indicate interest; they are never reported as completed leads.
  if (typeof window.gtag === 'function') window.gtag('event', name, {page_path: location.pathname, transport_type: 'beacon'});
  if (typeof window.fbq === 'function') window.fbq('trackCustom', name, {page_path: location.pathname});
});
