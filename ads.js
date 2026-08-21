/* ==========================================================
   CENTRAL AD INJECTION SCRIPT - Student Hub (By Tauhid)
   Loads Adsterra automatically on:
   1. Easy / Medium / Hard Selection View
   2. Score Result View
   ========================================================== */

(function () {
  const AD_KEY = 'e47b7549d4a248b4adbd6d8af46d85aa';
  const AD_INVOKE_URL = `https://www.highperformanceformat.com/${AD_KEY}/invoke.js`;

  function createAdBannerElement() {
    const wrapper = document.createElement('div');
    wrapper.className = 'central-ad-slot';
    wrapper.style.cssText = 'display:flex; justify-content:center; align-items:center; width:100%; margin:16px 0; min-height:50px; overflow:hidden;';

    const iframe = document.createElement('iframe');
    iframe.srcdoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;background:transparent;overflow:hidden;}</style>
      </head>
      <body>
        <script>
          var atOptions = {
            'key' : '${AD_KEY}',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        <\/script>
        <script src="${AD_INVOKE_URL}"><\/script>
      </body>
      </html>
    `;
    iframe.width = "320";
    iframe.height = "50";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";

    wrapper.appendChild(iframe);
    return wrapper;
  }

  function injectAds() {
    // 1. Inject into Level Selection Area (below grid list)
    const selectionGrid = document.querySelector('#viewSelection .grid-list');
    if (selectionGrid && !document.getElementById('ad-selection-slot')) {
      const adSlot1 = createAdBannerElement();
      adSlot1.id = 'ad-selection-slot';
      selectionGrid.insertAdjacentElement('afterend', adSlot1);
    }

    // 2. Inject into Score Result View (below score details)
    const scoreDetail = document.getElementById('scoreDetail');
    if (scoreDetail && !document.getElementById('ad-result-slot')) {
      const adSlot2 = createAdBannerElement();
      adSlot2.id = 'ad-result-slot';
      scoreDetail.insertAdjacentElement('afterend', adSlot2);
    }
  }

  // Run automatically when the DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAds);
  } else {
    injectAds();
  }
})();
