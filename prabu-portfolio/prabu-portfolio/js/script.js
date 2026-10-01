/* Prabhu A - Portfolio scripts */

/* ============ REPLACE YOUR IMAGES HERE ============
   Paste a link ("images/me.jpg" or "https://...") between the quotes.
   Leave "" to keep the placeholder. */
const IMAGES = {
    profile: "",   // your photo (portrait 3:4)
    photoshop: "",   // Photoshop logo
    illustrator: "",   // Illustrator logo
    figma: "",   // Figma logo
    canva: "",   // Canva logo
    work1: "",   // Graphic design cover (4:3)
    work2: "",   // UI/UX cover (4:3)
    summary: "",   // Professional summary photo (4:5)
    /* Graphic design page (poster 4:5) */
    social1: "", social2: "", social3: "", social4: "",   // 4 social media posters
    ad1: "", ad2: "", ad3: "", ad4: "",                   // 4 advertisement posters
    product1: "", product2: "", product3: "", product4: "", // 4 product posters
    brand1: "",                                           // 1 brand poster (16:9)
    /* UI/UX page: case study cover images (16:10) */
    uxcover1: "", uxcover2: "", uxcover3: ""
};

/* ===== GROWPLANT CASE STUDY LINK =====
   Paste your Figma / Behance / Notion / PDF link between the quotes.
   Example: "https://www.figma.com/design/xxxx" */
const GROWPLANT_LINK = "https://www.behance.net/gallery/243081243/GROWPLANT-UI-UX-CASE-STUDY";
/* ===================================== */

/* Graphic page posters use direct <img src="images/..."> paths in the HTML above. */
/* "View case study" buttons: open your link, or scroll to the details if no link yet */
document.querySelectorAll('[data-case]').forEach(a => {
    if (GROWPLANT_LINK) {a.href = GROWPLANT_LINK; a.target = '_blank'; a.rel = 'noopener'}
    else a.addEventListener('click', e => {e.preventDefault(); document.getElementById('pl-details').scrollIntoView({behavior: 'smooth'})});
});
document.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
}));

/* graphic design tabs: Social media shows first */
document.querySelectorAll('.gtab').forEach(t => t.onclick = () => {
    document.querySelectorAll('.gtab').forEach(x => x.classList.toggle('on', x === t));
    document.querySelectorAll('.gp').forEach(g => g.hidden = g.id !== t.dataset.t);
});

/* All portfolio images use direct <img src="images/..."> paths. */

/* profile photo: gentle 3D tilt that follows the cursor */
(() => {
    const p = document.querySelector('.portrait');
    if (!p || matchMedia('(hover:none)').matches) return;
    p.addEventListener('mousemove', e => {
        const img = p.querySelector('img'); if (!img) return;
        const r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        img.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translate(${x * -12}px,${y * -12}px)`;
    });
    p.addEventListener('mouseleave', () => {const img = p.querySelector('img'); if (img) img.style.transform = ''});
})();


/* orbiting tool icons around the profile photo */
(() => {
    const v = document.querySelector('.hero-visual'); if (!v) return;
    const icons = [...v.querySelectorAll('.ico')];
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    let W, H, S;
    const measure = () => {W = v.clientWidth; H = v.clientHeight; S = icons[0].offsetWidth};
    measure(); addEventListener('resize', measure);
    const t0 = performance.now();
    const frame = now => {
        const t = reduce ? 0 : (now - t0) / 1000;
        icons.forEach((el, i) => {
            const a = t * 0.55 + i * 2 * Math.PI / icons.length + .6;
            const rx = W / 2 + S * .3, ry = H / 2 + S * .22;
            const x = W / 2 + Math.cos(a) * rx, y = H / 2 + Math.sin(a) * ry;
            const front = Math.sin(a);
            el.style.transform = `translate(${x - S / 2}px,${y - S / 2}px) scale(${.82 + (front + 1) * .13})`;
            el.style.zIndex = front > .05 ? 3 : 0;
        });
        if (!reduce) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
})();

const bar = document.getElementById('bar');
addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, {passive: true});

const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {e.target.classList.add('in'); io.unobserve(e.target)}
}), {threshold: .12});
document.querySelectorAll('.rv,.gr,#steps').forEach(el => io.observe(el));

const menu = document.getElementById('menu'), links = document.getElementById('links');
menu.onclick = () => {const o = links.classList.toggle('open'); menu.setAttribute('aria-expanded', o); menu.textContent = o ? 'Close' : 'Menu'};
links.querySelectorAll('a').forEach(a => a.onclick = () => {links.classList.remove('open'); menu.textContent = 'Menu'});


/* simple page router: #/graphic, #/ui-ux, otherwise home */
function route() {
    const id = {'#/graphic': 'p-graphic', '#/ui-ux': 'p-uiux'}[location.hash];
    document.getElementById('home').hidden = !!id;
    document.querySelectorAll('.page').forEach(p => p.hidden = p.id !== id);
    if (id) {scrollTo(0, 0); return }
    if (location.hash.length > 1) {try {const t = document.querySelector(location.hash); t && setTimeout(() => t.scrollIntoView(), 30)} catch (e) { } }
}
addEventListener('hashchange', route); route();

/* lightbox for poster images */
const lb = document.getElementById('lb');
document.addEventListener('click', e => {
    if (e.target.tagName === 'IMG' && e.target.closest('.poster')) {lb.firstElementChild.src = e.target.src; lb.hidden = false}
    else if (lb.contains(e.target) || e.target === lb) lb.hidden = true;
});
addEventListener('keydown', e => {if (e.key === 'Escape') lb.hidden = true});

/* Contact form: sends the typed message straight to the inbox via FormSubmit */
const CONTACT_EMAIL = 'prabhusmart2005@gmail.com';
document.getElementById('toTop').onclick = e => {e.preventDefault(); scrollTo({top: 0, behavior: 'smooth'})};
document.getElementById('form').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target, btn = document.getElementById('sendBtn'), st = document.getElementById('fstatus');
    const f = new FormData(form);
    const name = (f.get('name') || '').trim(), email = (f.get('email') || '').trim(), message = (f.get('message') || '').trim();
    st.className = 'fstatus';
    if (f.get('_honey')) return;
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        st.textContent = 'Please enter your name, a valid email and a message.'; st.classList.add('err'); return;
    }
    btn.disabled = true; btn.textContent = 'Sending...'; st.textContent = '';
    try {
        const r = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name, email, message, _subject: 'New portfolio message from ' + name, _replyto: email, _template: 'table', _captcha: 'false'})
        });
        const d = await r.json();
        if (!r.ok || String(d.success) === 'false') throw new Error('fail');
        st.textContent = 'Thank you, ' + name + '! Your message has been sent. I will get back to you soon.';
        st.classList.add('ok'); form.reset();
    } catch (err) {
        st.textContent = 'Could not send directly. Opening your email app instead...'; st.classList.add('err');
        location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Portfolio message from ' + name) +
            '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    } finally {
        btn.disabled = false; btn.textContent = 'Send message';
    }
});
