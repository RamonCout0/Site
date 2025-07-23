function switchLanguage(lang) {
  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-pt');
  });
  document.title = lang === 'en'
    ? document.querySelector('title').getAttribute('data-en')
    : document.querySelector('title').getAttribute('data-pt');
}

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById('language-select');
  const savedLang = localStorage.getItem('site-language') || 'pt';
  langSelect.value = savedLang;
  switchLanguage(savedLang);

  langSelect.addEventListener('change', () => {
    const selectedLang = langSelect.value;
    switchLanguage(selectedLang);
    localStorage.setItem('site-language', selectedLang);
  });
});
