/* ================================================================
   AATRAL 2K26 — Shared Utilities
================================================================ */

/* ── STARS ── */
function initStars() {
  const bg = document.getElementById("starsBg");
  if (!bg) return;
  for (let i = 0; i < 180; i++) {
    const s = document.createElement("div"),
      sz = Math.random() * 2.8 + 0.3;
    s.className = "sp";
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--mn:${(Math.random() * 0.15 + 0.03).toFixed(2)};--mx:${(Math.random() * 0.55 + 0.2).toFixed(2)};--d:${(Math.random() * 5 + 2).toFixed(1)}s;--dl:${(Math.random() * 7).toFixed(1)}s`;
    bg.appendChild(s);
  }
}

/* ── NAV ── */
function initNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  window.addEventListener("scroll", () =>
    nav.classList.toggle("scrolled", scrollY > 50),
  );
  const hbg = document.getElementById("hbg");
  if (hbg)
    hbg.addEventListener("click", () =>
      document.getElementById("nlinks").classList.toggle("mopen"),
    );
}

/* ── REVEAL ── */
function initReveal() {
  const ro = new IntersectionObserver(
    (en) =>
      en.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("vis"), i * 65);
          ro.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
}

/* ── TOAST ── */
function toast(msg, type = "ok") {
  document.querySelectorAll(".toast").forEach((t) => t.remove());
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.textContent = (type === "ok" ? "✅ " : "❌ ") + msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateY(15px)";
    t.style.transition = ".4s";
    setTimeout(() => t.remove(), 400);
  }, 3500);
}

/* ── COUNTDOWN ── */
function initCountdown(elementId) {
  function tick() {
    const diff = CFG.eventDate - Date.now();
    const el = document.getElementById(elementId || "cd");
    if (!el) return;
    if (diff <= 0) {
      el.innerHTML =
        "<span style=\"color:var(--gold);font-family:'Cinzel Decorative';font-size:1rem;letter-spacing:2px\">🎉 AATRAL IS LIVE!</span>";
      return;
    }
    const d = document.getElementById("cdd"),
      h = document.getElementById("cdh"),
      m = document.getElementById("cdm"),
      s = document.getElementById("cds");
    if (d) d.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
    if (h)
      h.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(
        2,
        "0",
      );
    if (m)
      m.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(
        2,
        "0",
      );
    if (s)
      s.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(
        2,
        "0",
      );
  }
  tick();
  setInterval(tick, 1000);
}

/* ── IMAGE UPLOAD TO CLOUDINARY ── */
async function uploadImage(base64Image, cloudName, uploadPreset) {
  try {
    const form = new FormData();
    form.append("file", base64Image);
    form.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: form,
      },
    );

    if (!res.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const json = await res.json();
    return json.secure_url; // Public HTTPS link to the uploaded image
  } catch (error) {
    console.error("Image upload error:", error);
    throw error;
  }
}

/* ── INIT ALL ── */
document.addEventListener("DOMContentLoaded", () => {
  initStars();
  initNav();
  initReveal();
});
