import menuTemplate from '../templates/menu.hbs';
import menuItems from '../menu.json';

const markup = menuTemplate(menuItems);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
