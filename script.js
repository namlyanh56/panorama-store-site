// --- Dictionary Bahasa ---
const translations = {
  id: {
    nav_services: "Layanan",
    nav_offer: "Hot Offer 🔥",
    nav_price: "Harga Bot",
    nav_testi: "Testimoni",
    nav_contact: "Hubungi Admin",
    hero_badge: "Solusi Digital & Bisnis Online",
    hero_title_1: "Optimasi Bisnis dengan",
    hero_desc: "Platform serba ada untuk kebutuhan SMM, Bot Telegram canggih, dan peluang cuan dari aset digitalmu. Operasional 100% Online.",
    btn_explore: "Eksplor Layanan",
    btn_consult: "Konsultasi Gratis",
    stat_bot: "Layanan Bot",
    stat_cust: "Pelanggan Puas",
    stat_resp: "Respon Admin",
    stat_safe: "Transaksi Terjamin",
    offer_badge: "Peluang Cuan 2025 💸",
    offer_title: "Punya Akun Instagram Nganggur?",
    offer_desc: "Akun Instagram tahun 2024 ke bawah bisa dimonetisasi! Bukan scam, bukan ilegal. Murni untuk keperluan promosi (buzzer).",
    offer_li1: "✅ Aman & Legal",
    offer_li2: "✅ Khusus akun tua/lama lebih bernilai",
    offer_li3: "✅ Panduan lengkap tersedia",
    offer_btn_main: "Tanya Harga & Tutor",
    offer_btn_sub: "ke @stuaart",
    service_title: "Layanan Unggulan",
    service_sub: "Pilih layanan digital yang sesuai dengan kebutuhan bisnismu.",
    desc_jaseb: "Bot auto broadcast sederhana dan modern. Kirim pesan massal dengan mudah.",
    desc_vcf: "Konversi format all file to VCF dengan UI simpel & modern. Rapikan kontakmu.",
    desc_member: "Suntik member Group/Channel Telegram untuk meningkatkan kredibilitas.",
    desc_ig: "Followers & Like Instagram. Tingkatkan engagement akunmu secara instan.",
    title_nokos: "Nomor Virtual (Nokos)",
    desc_nokos: "Nomor siap pakai untuk WA/Telegram. Tersedia opsi garansi penuh.",
    desc_prem: "Aktivasi fitur premium Telegram tanpa ribet. Harga bersaing.",
    desc_tiktok: "Followers & Like TikTok. Dorong kontenmu masuk FYP.",
    other_services: "Layanan Lainnya?",
    chat_admin: "Chat Admin @stuaart",
    price_title: "Paket Sewa Bot",
    price_sub: "Investasi kecil untuk otomatisasi maksimal.",
    per_month: "/bulan",
    per_year: "/tahun",
    pkg1_desc: "Auto-broadcast simple.",
    pkg1_f1: "Broadcast andal",
    pkg1_f2: "Server ON 24 Jam",
    pkg1_f3: "Update rutin",
    btn_order: "Order Sekarang",
    pkg2_desc: "Convert file tanpa batas.",
    pkg2_f1: "Unlimited Convert",
    pkg2_f2: "Garansi Gangguan",
    pkg2_f3: "Prioritas Support",
    pkg2_f4: "Hemat 60%",
    btn_take: "Ambil Promo",
    pkg3_desc: "Solusi jangka pendek.",
    pkg3_f2: "Bot Cadangan (Backup)",
    pkg3_f3: "Fast Response",
    testi_title: "Kata Mereka"
  },
  en: {
    nav_services: "Services",
    nav_offer: "Hot Offer 🔥",
    nav_price: "Pricing",
    nav_testi: "Testimonials",
    nav_contact: "Contact Admin",
    hero_badge: "Digital Solutions & Online Business",
    hero_title_1: "Optimize Business with",
    hero_desc: "All-in-one platform for SMM needs, advanced Telegram Bots, and monetization opportunities for your digital assets. 100% Online Operations.",
    btn_explore: "Explore Services",
    btn_consult: "Free Consultation",
    stat_bot: "Bot Services",
    stat_cust: "Happy Clients",
    stat_resp: "Admin Response",
    stat_safe: "Secure Transactions",
    offer_badge: "Money Opportunity 2025 💸",
    offer_title: "Have an Idle Instagram Account?",
    offer_desc: "Instagram accounts from 2024 and older can be monetized! Not a scam, not illegal. Purely for promotional purposes (buzzer).",
    offer_li1: "✅ Safe & Legal",
    offer_li2: "✅ Old accounts are more valuable",
    offer_li3: "✅ Full guide available",
    offer_btn_main: "Ask Price & Tutorial",
    offer_btn_sub: "to @stuaart",
    service_title: "Featured Services",
    service_sub: "Choose digital services that suit your business needs.",
    desc_jaseb: "Simple and modern auto broadcast bot. Send mass messages easily.",
    desc_vcf: "Convert all files to VCF format with simple & modern UI. Organize your contacts.",
    desc_member: "Inject Telegram Group/Channel members to increase credibility.",
    desc_ig: "Instagram Followers & Likes. Instantly boost your account engagement.",
    title_nokos: "Virtual Numbers (Nokos)",
    desc_nokos: "Ready-to-use numbers for WA/Telegram. Full warranty options available.",
    desc_prem: "Activate Telegram Premium features without hassle. Competitive prices.",
    desc_tiktok: "TikTok Followers & Likes. Push your content to FYP.",
    other_services: "Other Services?",
    chat_admin: "Chat Admin @stuaart",
    price_title: "Bot Rental Packages",
    price_sub: "Small investment for maximum automation.",
    per_month: "/month",
    per_year: "/year",
    pkg1_desc: "Simple auto-broadcast.",
    pkg1_f1: "Reliable Broadcast",
    pkg1_f2: "24 Hours Server ON",
    pkg1_f3: "Routine Updates",
    btn_order: "Order Now",
    pkg2_desc: "Unlimited file conversion.",
    pkg2_f1: "Unlimited Convert",
    pkg2_f2: "Downtime Warranty",
    pkg2_f3: "Priority Support",
    pkg2_f4: "Save 60%",
    btn_take: "Grab Promo",
    pkg3_desc: "Short term solution.",
    pkg3_f2: "Backup Bot",
    pkg3_f3: "Fast Response",
    testi_title: "Testimonials"
  }
};

// --- Language Logic ---
let currentLang = localStorage.getItem('lang') || 'id';

function updateContent(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Update Flag & Text
  const isId = lang === 'id';
  document.getElementById('langFlag').textContent = isId ? '🇮🇩' : '🇬🇧';
  document.getElementById('langText').textContent = isId ? 'ID' : 'EN';
  
  const mFlag = document.getElementById('langFlagMobile');
  if(mFlag) mFlag.textContent = isId ? '🇮🇩' : '🇬🇧';
  if(mFlag) mFlag.nextSibling.textContent = isId ? ' ID' : ' EN';

  // Update Texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update Typing Effect Text
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    typingElement.textContent = isId ? 'Teknologi Digital' : 'Digital Technology';
  }
}

// Init Language
updateContent(currentLang);

// Toggle Event Listeners
document.getElementById('langToggle')?.addEventListener('click', () => {
  updateContent(currentLang === 'id' ? 'en' : 'id');
});
document.getElementById('langToggleMobile')?.addEventListener('click', () => {
  updateContent(currentLang === 'id' ? 'en' : 'id');
});

// --- Dark Mode Logic ---
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIcon = document.getElementById('themeIcon');
const themeIconMobile = document.getElementById('themeIconMobile');

function updateTheme(isDark) {
  if (isDark) {
    html.classList.add('dark');
    if(themeIcon) themeIcon.textContent = '☀️';
    if(themeIconMobile) themeIconMobile.textContent = '☀️';
  } else {
    html.classList.remove('dark');
    if(themeIcon) themeIcon.textContent = '🌙';
    if(themeIconMobile) themeIconMobile.textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
updateTheme(savedTheme === 'dark' || (!savedTheme && systemDark));

[themeToggle, themeToggleMobile].forEach(btn => {
  btn?.addEventListener('click', () => {
    updateTheme(!html.classList.contains('dark'));
  });
});

// --- Mobile Menu ---
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// --- Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Interactive Animations ---

// 1. Scroll Reveal (Fade Up)
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Hanya animasi sekali
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. 3D Tilt Effect for Cards
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// 3. Custom Cursor Follower
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline && window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Slight delay for outline
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
  });
}

// 4. Scroll To Top
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove('translate-y-20', 'opacity-0');
  } else {
    scrollBtn.classList.add('translate-y-20', 'opacity-0');
  }
});
scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 5. Lightweight Particle System
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speedX = (Math.random() * 1) - 0.5;
    this.speedY = (Math.random() * 1) - 0.5;
    this.color = Math.random() > 0.5 ? 'rgba(124, 58, 237, 0.3)' : 'rgba(217, 70, 239, 0.3)';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
    if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const numberOfParticles = Math.min(50, (canvas.width * canvas.height) / 15000); // Responsive count
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
