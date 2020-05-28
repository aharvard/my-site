const footerDateSpan = document.getElementById('footer-date');
const year = new Date();
footerDateSpan.innerText = year.getFullYear();

function themeToggle() {
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  const themeButton = document.createElement('button');
  footer.insertAdjacentElement('beforeend', themeButton);

  function setSessionStorage(isDark, isLight) {
    sessionStorage.setItem('Dark Mode', isDark);
    sessionStorage.setItem('Light Mode', isLight);
    updateDOM();
    console.log(`😎isDark: ${isDark}`);
    console.log(`😎isLight: ${isLight}`);
  }
  let PCSDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let PCSLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setSessionStorage(PCSDark, PCSLight);

  console.log(`SessionStorage Dark: ${sessionStorage.getItem('Dark Mode')}`);
  console.log(`SessionStorage Light: ${sessionStorage.getItem('Light Mode')}`);

  // Update the text of the theme button
  // Toggle Light Dark Class
  // let lightMode;
  // let darkMode;
  function updateDOM() {
    let lightMode = sessionStorage.getItem('Light Mode');
    let darkMode = sessionStorage.getItem('Dark Mode');
    // body.classList.add(lightMode ? 'light' : 'dark');
    // body.classList.remove(lightMode ? 'dark' : 'light');
    themeButton.innerText = lightMode && 'Go Dark';
    themeButton.innerText = darkMode && 'Go Light';
  }

  // Watch for OS color scheme change and update UI
  window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    e.matches ? setSessionStorage(true, false) : setSessionStorage(false, true);
  });

  // Watch for click on theme button and update UI
  themeButton.addEventListener('click', function () {
    let lightMode = sessionStorage.getItem('Light Mode');
    let darkMode = sessionStorage.getItem('Dark Mode');
    setSessionStorage(lightMode, darkMode);
    updateDOM();
  });
}

themeToggle();
