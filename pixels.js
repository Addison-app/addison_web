/* ============================================================
   Retargeting pixels (Meta + TikTok)
   ------------------------------------------------------------
   Paste your IDs below. Each pixel only loads if its ID is set,
   so leaving one blank simply disables it.

   Meta Pixel ID:   Events Manager → Data Sources → your pixel
   TikTok Pixel ID: TikTok Ads Manager → Assets → Events → Web
   ============================================================ */

var META_PIXEL_ID   = '';   // e.g. '1234567890123456'
var TIKTOK_PIXEL_ID = '';   // e.g. 'CABCDE12AB34CD56EF78'

/* ---------- Meta (Facebook/Instagram) Pixel ---------- */
if (META_PIXEL_ID) {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

/* ---------- TikTok Pixel ---------- */
if (TIKTOK_PIXEL_ID) {
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  }(window, document, 'ttq');
}

/* ---------- Optional: fire a conversion event on download clicks ----------
   This piggybacks on the store/badge/phone links so a click counts as a
   retargeting conversion event in both Meta and TikTok. */
document.addEventListener('DOMContentLoaded', function () {
  var downloadSelectors = [
    '.app-store-badge-link',
    '.google-play-badge-link',
    '.hero-phone-link',
    '.story-shot'
  ];
  document.querySelectorAll(downloadSelectors.join(',')).forEach(function (el) {
    el.addEventListener('click', function () {
      if (window.fbq) fbq('track', 'Lead');
      if (window.ttq) ttq.track('ClickButton', { content_name: 'download' });
    });
  });
});
