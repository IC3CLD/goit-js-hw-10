import css from "./css/style.css";
import menu from "./menu.json";
import template from "./template.hbs"

console.log(menu);
const body = document.querySelector(`body`);
const productCard = template(menu);
const menuUl = document.querySelector(`.js-menu`);

menuUl.insertAdjacentHTML(`afterbegin`, productCard);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const checkBox = document.getElementById(`theme-switch-toggle`);

checkBox.addEventListener(`change`, () => {
    if(checkBox.checked) {
       localStorage.setItem(`theme`, ` `);
       body.classList.add(Theme.DARK);
       body.classList.remove(Theme.LIGHT);

    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.removeItem(`theme`);
    }
})

if(localStorage.getItem(`theme`)){
    body.classList.add(Theme.DARK);
    checkBox.checked = true;
}

