/**
 * PANORAMA STORE INTERACTIVE SCRIPT
 * Features: Dark Mode, Custom Cursor, Scroll Reveal, 3D Tilt, Parallax, Typewriter
 */

// --- 1. THEME MANAGEMENT ---
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIcon = document.getElementById('themeIcon');
const themeIconMobile = document.getElementById('themeIconMobile');

function updateThemeIcons(isDark) {
    const icon = isDark ? '☀️' : '🌙';
    if(themeIcon) themeIcon.textContent = icon;
    if(themeIconMobile) themeIconMobile.textContent = icon;
}

const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
  html.classList.add('dark');
  updateThemeIcons(true);
} else {
    updateThemeIcons(false);
}

const toggleTheme = () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
};

themeToggle?.addEventListener('click', toggleTheme);
themeToggleMobile?.addEventListener('click', toggleTheme);


// --- 2. MOBILE MENU ---
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Update Year
document.getElementById('year').textContent = new Date().getFullYear();


// --- 3. CUSTOM CURSOR ---
const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");

// Only activate custom cursor on non-touch devices
if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with slight delay/animation via CSS transition
        // But we update position via JS
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect on interactable elements
    const interactables = document.querySelectorAll('a, button, .interactable');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
}


// --- 4. SCROLL REVEAL ANIMATION ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Stop observing once revealed
            // observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));


// --- 5. ANIMATED COUNTERS ---
const counters = document.querySelectorAll('.counter-value');
let hasCounted = false;

const startCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
            hasCounted = true; // Run once
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });
};

const counterObserver = new IntersectionObserver(startCounters, { threshold: 0.5 });
const statsSection = document.querySelector('.counter-value')?.closest('.grid'); // Observe the container
if (statsSection) counterObserver.observe(statsSection);


// --- 6. TYPEWRITER EFFECT ---
const typeTextSpan = document.getElementById('typewriter-text');
const words = ["Teknologi Digital", "Automasi Bot", "Social Media", "Cuan Online"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    if (!typeTextSpan) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typeTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster deleting
    } else {
        typeTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normal typing
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Word complete, pause before deleting
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // Deletion complete, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter when loaded
document.addEventListener('DOMContentLoaded', typeWriter);


// --- 7. 3D TILT EFFECT (Manual Implementation) ---
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to card
        const y = e.clientY - rect.top; // Mouse Y relative to card
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});


// --- 8. HEADER SCROLL EFFECT ---
const header = document.getElementById('main-header');
const navGlass = document.getElementById('nav-glass');
const navContainer = document.getElementById('nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navGlass.classList.add('shadow-lg');
        navGlass.classList.replace('border-white/20', 'border-white/40');
        navContainer.classList.replace('h-20', 'h-16'); // Shrink height
    } else {
        navGlass.classList.remove('shadow-lg');
        navGlass.classList.replace('border-white/40', 'border-white/20');
        navContainer.classList.replace('h-16', 'h-20'); // Restore height
    }
});


// --- 9. SIMPLE PARALLAX BACKGROUND ---
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.animate-blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
        const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
        // Apply slight translation on top of the CSS animation
        // Note: This might conflict slightly with CSS animation transform, so we use marginTop/Left or background position for safer mix, 
        // but for blobs using transform, let's just gently nudge them
        // blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`; 
        // (Skipped to avoid conflict with 'animate-blob' css keyframes)
    });
});
