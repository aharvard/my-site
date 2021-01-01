const body = document.querySelector('body');

function renderThemeToggle() {
  // Create DOM
  const footer = document.querySelector('.footer__content');
  const themeButton = document.createElement('button');
  themeButton.classList.add('theme-toggle-button');
  footer.insertAdjacentElement('afterbegin', themeButton);

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
  function setThemeClass() {
    if (isDark) {
      body.classList.remove('light');
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
    }
  }

  function mirrorToLocalStorage() {
    localStorage.setItem('themePref', JSON.stringify({isDark, isLight}));
  }

  function restoreFromLocalStorage() {
    const themPref = JSON.parse(localStorage.getItem('themePref'));
    if (themPref) {
      isDark = themPref.isDark;
      isLight = themPref.isLight;
    }
  }
  restoreFromLocalStorage();

  // Set class based on current color
  setThemeClass();

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
    mirrorToLocalStorage();
    window.requestAnimationFrame(setThemeClass);
    window.requestAnimationFrame(updateButtonText);
  });

  // Watch for click on theme button and update UI
  themeButton.addEventListener('click', function () {
    isDark = !isDark;
    isLight = !isLight;
    mirrorToLocalStorage();
    window.requestAnimationFrame(setThemeClass);
    window.requestAnimationFrame(updateButtonText);
  });
}
renderThemeToggle();

function renderMenuButton() {
  const modal = document.querySelector('.modal');
  const menuButton = document.createElement('button');
  menuButton.classList.add('header__menu-button');
  menuButton.innerHTML = `
    <svg 
      height="14px" 
      viewBox="0 0 22 14" 
      width="22px" 
      class="icon-menu" 
      aria-hidde="true"
      overflow="visible" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink">
        <g 
          id="menu-lines" 
          fill="none" 
          fill-rule="evenodd" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2">
            <line class="menu-line" id="line-top" x1="1" y1="1" x2="21" y2="1" id="Path"></line>
            <line class="menu-line" id="line-middle-1" x1="1" y1="7" x2="21" y2="7" id="Path"></line>
            <line class="menu-line" id="line-middle-2" x1="1" y1="7" x2="21" y2="7" id="Path"></line>
            <line class="menu-line" id="line-bottom" x1="1" y1="13" x2="21" y2="13" id="Path"></line>
        </g>
      </svg>`;

  document
    .querySelector('.header__menu-button-container')
    .insertAdjacentElement('afterbegin', menuButton);

  function handleMenu() {
    let isOpen = false;
    return function () {
      const main = document.querySelector('.main');
      const footer = document.querySelector('.footer');
      isOpen = !isOpen;
      body.classList.toggle('menu-open');
      modal.classList.toggle('modal--open');
      if (main) {
        if (isOpen) {
          main.style.display = 'none';
          footer.style.display = 'none';
        } else {
          main.style.display = 'block';
          footer.style.display = 'block';
        }
      }
      return isOpen;
    };
  }
  menuButton.addEventListener('click', handleMenu());
}
renderMenuButton();
