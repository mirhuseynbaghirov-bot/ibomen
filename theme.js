// Rəng və şrifti config-dən səhifəyə tətbiq edir
function lum(hex){
  const n = parseInt(hex.replace("#", ""), 16), f = c => { c /= 255; return c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4); };
  return .2126 * f(n >> 16 & 255) + .7152 * f(n >> 8 & 255) + .0722 * f(n & 255);
}
export function applyTheme(t){
  const r = document.documentElement.style;
  r.setProperty("--ink", t.ink); r.setProperty("--accent", t.accent);
  r.setProperty("--bg", t.bg);   r.setProperty("--soft", t.soft);
  r.setProperty("--green", t.accent);                                   // admin panel üçün
  r.setProperty("--on-accent", lum(t.accent) > .42 ? "#111111" : "#ffffff");
  const fams = [...new Set([t.font, t.fontDisplay].filter(Boolean))];
  if (fams.length){
    if (t.font) r.setProperty("--font", `'${t.font}', system-ui, sans-serif`);
    r.setProperty("--display", `'${t.fontDisplay || t.font}', Impact, sans-serif`);
    const l = document.createElement("link"); l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?" + fams.map(f => `family=${f.replace(/ /g, "+")}:wght@400;500;600;700;800`).join("&") + "&display=swap";
    document.head.appendChild(l);
  }
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = t.ink;
}
