// Dark mode toggle + persist
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
  themeIcon.textContent = '☀️';
}
themeToggle?.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();