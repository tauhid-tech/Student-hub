// ==========================================
// CENTRALIZED BOTTOM STICKY BANNER AD LOADER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Prevent duplicate insertion
  if (document.getElementById("sticky-ad-wrapper")) return;

  // 1. Create outer fixed banner container
  const banner = document.createElement("div");
  banner.id = "sticky-ad-wrapper";
  banner.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #0f172a;
    border-top: 1px solid #334155;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.4);
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px 10px 10px 10px;
    box-sizing: border-box;
  `;

  // 2. Add top bar with label and Close (✕) button
  const topBar = document.createElement("div");
  topBar.style.cssText = `
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  `;

  const adLabel = document.createElement("span");
  adLabel.textContent = "ADVERTISEMENT";
  adLabel.style.cssText = `
    font-size: 10px;
    font-weight: 700;
    color: #64748b;
    letter-spacing: 0.5px;
  `;

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.title = "Close ad";
  closeBtn.style.cssText = `
    background: #334155;
    border: none;
    color: #94a3b8;
    font-size: 11px;
    font-weight: bold;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  closeBtn.onclick = () => {
    banner.remove();
    document.body.style.paddingBottom = "0px";
  };

  topBar.appendChild(adLabel);
  topBar.appendChild(closeBtn);

  // 3. Ad Content Frame (320x50 Banner)
  const adContent = document.createElement("div");
  adContent.id = "ad-slot-frame";
  adContent.style.cssText = `
    width: 320px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // 4. Inject your Adsterra 320x50 Banner Configuration
  window.atOptions = {
    'key' : 'e47b7549d4a248b4adbd6d8af46d85aa',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };

  const adScript = document.createElement("script");
  adScript.type = "text/javascript";
  adScript.src = "https://www.highrevenueformat.com/e47b7549d4a248b4adbd6d8af46d85aa/invoke.js";
  
  adContent.appendChild(adScript);

  banner.appendChild(topBar);
  banner.appendChild(adContent);
  document.body.appendChild(banner);

  // 5. Ensure bottom content and buttons aren't covered
  document.body.style.paddingBottom = "90px";
});
