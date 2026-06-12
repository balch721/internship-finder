// Drop-in top-right account widget for every page.
// Usage: <script type="module" src="firebase-auth.js"></script>
//        <script type="module" src="account-widget.js"></script>
// It injects its own styles + button, so pages don't need extra markup.

(function () {
  const css = `
  #aif-acct{position:fixed;top:14px;right:16px;z-index:1000;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
  #aif-acct .aif-btn{display:flex;align-items:center;gap:8px;background:#1b1812;border:1px solid #2a261e;color:#f1ecdf;
    font-size:13px;font-weight:600;padding:7px 12px;border-radius:999px;cursor:pointer}
  #aif-acct .aif-btn:hover{border-color:#cfb991}
  #aif-acct .aif-av{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#cfb991,#9a885a);color:#fff;
    display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
  #aif-acct .aif-menu{position:absolute;top:44px;right:0;min-width:210px;background:#14120e;border:1px solid #2a261e;
    border-radius:12px;padding:8px;box-shadow:0 16px 40px rgba(0,0,0,.45);display:none}
  #aif-acct .aif-menu.open{display:block}
  #aif-acct .aif-head{padding:8px 10px 10px;border-bottom:1px solid #2a261e;margin-bottom:6px}
  #aif-acct .aif-name{color:#f1ecdf;font-size:13.5px;font-weight:600}
  #aif-acct .aif-mail{color:#9a9077;font-size:12px;margin-top:2px;word-break:break-all}
  #aif-acct .aif-item{display:block;width:100%;text-align:left;background:none;border:none;color:#d8d0bd;
    font-size:13.5px;padding:9px 10px;border-radius:8px;cursor:pointer;text-decoration:none}
  #aif-acct .aif-item:hover{background:#1b1812;color:#fff}
  #aif-acct .aif-item.danger{color:#ff9aa6}
  @media (max-width:768px){
    /* scroll with the page instead of staying pinned over cards */
    #aif-acct{position:absolute;top:10px;right:10px}
    #aif-acct .aif-btn{font-size:12px;padding:6px 10px;max-width:46vw}
    #aif-acct .aif-btn span:not(.aif-av){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    #aif-acct .aif-menu{max-width:calc(100vw - 20px)}
  }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.id = "aif-acct";
  document.body.appendChild(wrap);

  function initials(user) {
    const n = user.displayName || user.email || "?";
    const parts = n.replace(/@.*/, "").split(/[ ._-]+/).filter(Boolean);
    return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || n[0].toUpperCase();
  }

  function renderSignedOut() {
    wrap.innerHTML = `<a class="aif-btn" href="login.html">Log in</a>`;
  }

  function renderSignedIn(user, A) {
    const name = user.displayName || (user.email ? user.email.split("@")[0] : "Account");
    const firstName = name.split(/[ ._-]+/)[0] || name;  // button shows first name only
    wrap.innerHTML = `
      <button class="aif-btn" id="aif-toggle"><span class="aif-av">${initials(user)}</span><span>${firstName}</span></button>
      <div class="aif-menu" id="aif-menu">
        <div class="aif-head">
          <div class="aif-name">${name}</div>
          <div class="aif-mail">${user.email || ""}</div>
        </div>
        <a class="aif-item" href="account.html">Manage account</a>
        <a class="aif-item" href="tracker.html">Saved &amp; applied</a>
        <button class="aif-item danger" id="aif-signout">Sign out</button>
      </div>`;
    const menu = wrap.querySelector("#aif-menu");
    wrap.querySelector("#aif-toggle").onclick = (e) => { e.stopPropagation(); menu.classList.toggle("open"); };
    document.addEventListener("click", () => menu.classList.remove("open"));
    wrap.querySelector("#aif-signout").onclick = async () => { await A.logout(); };
  }

  // Show the "Log in" button immediately so it's always visible,
  // then upgrade to the signed-in menu once Firebase loads and confirms a user.
  renderSignedOut();

  let tries = 0;
  function ready(cb){
    if(window.AIF_AUTH){ cb(); return; }
    if(tries++ > 75) return; // ~3s; if Firebase never loads, keep the Log in button
    setTimeout(()=>ready(cb),40);
  }
  ready(() => {
    const A = window.AIF_AUTH;
    A.onUser(user => { if(user) renderSignedIn(user, A); else renderSignedOut(); });
  });
})();
