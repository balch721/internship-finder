// Ultra-smooth crossfade page transition (shared).
//   <script src="transition.js?v=4"></script>
// Fades the page in on load; on internal link click, fades to black, navigates,
// next page fades in. No moving parts, so it's perfectly smooth everywhere.

(function(){
  const DUR = 420;
  const css = `
  html.pgfade-init body{opacity:0}
  body{transition:opacity ${DUR}ms ease}
  body.pgfade-out{opacity:0}
  @media (prefers-reduced-motion: reduce){ html.pgfade-init body{opacity:1} body{transition:none} }
  `;
  const style=document.createElement("style"); style.textContent=css;
  (document.head||document.documentElement).appendChild(style);
  document.documentElement.classList.add("pgfade-init");

  function fadeIn(){
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      document.documentElement.classList.remove("pgfade-init");
    }));
  }
  if(document.readyState!=="loading") fadeIn();
  else document.addEventListener("DOMContentLoaded", fadeIn);

  function fileOf(href){ try{ const u=new URL(href,location.href); if(u.origin!==location.origin) return null;
    const last=u.pathname.split("/").pop(); return /\.html?$/.test(last||"")?(last||"index.html"):null; }catch(e){ return null; } }

  document.addEventListener("click",(e)=>{
    const a=e.target.closest && e.target.closest("a");
    if(!a) return;
    if(a.target==="_blank"||a.hasAttribute("download")||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0) return;
    const file=fileOf(a.getAttribute("href"));
    if(!file) return;
    if(file===location.pathname.split("/").pop()) return;
    e.preventDefault();
    const url=a.href;
    document.body.classList.add("pgfade-out");
    setTimeout(()=>{ window.location.href=url; }, DUR);
  }, true);

  window.addEventListener("pageshow",(e)=>{ if(e.persisted){ document.body.classList.remove("pgfade-out"); document.documentElement.classList.remove("pgfade-init"); } });
})();
