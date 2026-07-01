// mxu.js (Minimal-Version)

const MXU = {
  init(targetId) {
    const root = document.getElementById(targetId);
    if (!root) return;

    root.innerHTML = `
      <div style="
        width:140px;
        height:80px;
        background:#222;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:Arial;
      ">
        MXU ROOT ACTIVE
      </div>
    `;
  },

  channel(targetId) {
    const ch = document.getElementById(targetId);
    if (!ch) return;

    ch.innerHTML = `
      <div style="
        width:200px;
        height:80px;
        background:#444;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:Arial;
      ">
        CHANNEL ACTIVE
      </div>
    `;
  }
};

