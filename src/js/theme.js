const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('.theme-switch__toggle'),
};

const localStorageThemeValue = localStorage.getItem('theme');

checkSwitcher();
checkBodyTheme();

refs.switcher.addEventListener('change', switchBodyTheme);

function checkSwitcher() {
  if (localStorageThemeValue === Theme.DARK) {
    refs.switcher.setAttribute('checked', true);
  }
}

function checkBodyTheme() {
  if (!localStorageThemeValue) {
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.body.classList.add(localStorageThemeValue);
  }
}

function switchBodyTheme() {
  refs.switcher.checked ? switchToDark() : switchToLight();
}

function switchToDark() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}

function switchToLight() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}
