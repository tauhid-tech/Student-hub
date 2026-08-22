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

  // 2. Add top bar with small 'Advertisement' label and Close (✕) button
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

  // Dismiss banner on tap
  closeBtn.onclick = () => {
    banner.remove();
    document.body.style.paddingBottom = "0px";
  };

  topBar.appendChild(adLabel);
  topBar.appendChild(closeBtn);

  // 3. Ad Content Slot (Standard mobile banner: 320x50 or 300x50)
  const adContent = document.createElement("div");
  adContent.id = "ad-slot-frame";
  adContent.style.cssText = `
    width: 320px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e293b;
    border-radius: 8px;
    border: 1px dashed #475569;
    color: #94a3b8;
    font-size: 12px;
    text-align: center;
  `;

  // -------------------------------------------------------------------------
  // PLACE YOUR AD PROVIDER SCRIPT / CODE HERE:
  // -------------------------------------------------------------------------
  adContent.innerHTML = `
    <span style="padding: 10px; font-size: 11px; color: #64748b;">
      Ad Space (320x50 Banner)
    </span>
  `;
  // -------------------------------------------------------------------------

  banner.appendChild(topBar);
  banner.appendChild(adContent);
  document.body.appendChild(banner);

  // 4. Ensure bottom content and buttons aren't covered
  document.body.style.paddingBottom = "90px";
});
