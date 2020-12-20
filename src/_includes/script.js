const footerDateSpan = document.getElementById('footer-date');
const year = new Date();
footerDateSpan.innerText = year.getFullYear();

function themeToggle() {
  // Create DOM
  const body = document.querySelector('body');
  const footer = document.querySelector('.footer__content');
  const themeButton = document.createElement('button');
  themeButton.classList.add('theme-toggle-button');
  footer.insertAdjacentElement('beforeend', themeButton);

  // Has the user set dark or light color scheme?
  let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Update the text of the theme button
  function updateButtonText() {
    themeButton.innerText = isDark
      ? '⚪️ Go Light'
      : isLight
      ? '⚫️ Go Dark'
      : null;
  }

  // Manages adding and toggle body classes
  function themeClass() {
    // set class if there is none set
    if (body.classList.length === 0) {
      body.classList.add(isDark ? 'dark' : isLight ? 'light' : null);
    } else {
      // toggle classes if one is set

      if (isDark) {
        body.classList.remove('light');
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
      }
    }
  }

  // Set class based on current color
  themeClass();

  // Update Button Text
  updateButtonText();

  // Watch for OS color scheme change and update UI
  window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    if (e.matches) {
      isDark = true;
      isLight = false;
    } else {
      isDark = false;
      isLight = true;
    }
    window.requestAnimationFrame(themeClass);
    window.requestAnimationFrame(updateButtonText);
  });

  // Watch for click on theme button and update UI
  themeButton.addEventListener('click', function () {
    isDark = !isDark;
    isLight = !isLight;
    window.requestAnimationFrame(themeClass);
    window.requestAnimationFrame(updateButtonText);
  });
}

themeToggle();

const body = document.querySelector('.body');
const menuButton = document.querySelector('.header__menu-button');
const modal = document.querySelector('.modal');

function handleMenu() {
  body.classList.toggle('menu-open');
  modal.classList.toggle('modal--open');
}
menuButton.addEventListener('click', handleMenu);
