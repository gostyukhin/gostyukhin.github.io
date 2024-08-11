// Burger menu
const headerMobileIcon = document.querySelector('.header__mobile-icon');
const listItemMenu = document.querySelector('.header__mobile-list');

const body = document.querySelector('.main');
const promoBlock = document.querySelector('.promo__block');
const teamBlock = document.querySelector('.team__block');
const footer = document.querySelector('.footer');

const open = document.querySelector('#open-mobile-menu').addEventListener('click', function () {
  listItemMenu.classList.add('header__open-menu');
  headerMobileIcon.classList.add('none');
  body.classList.add('off');
  promoBlock.classList.add('off');
  teamBlock.classList.add('off');
  footer.classList.add('off');
})

const close = document.querySelector('#close-mobile-menu').addEventListener('click', function () {
  listItemMenu.classList.remove('header__open-menu');
  headerMobileIcon.classList.remove('none');
  body.classList.remove('off');
  promoBlock.classList.add('off');
  teamBlock.classList.add('off');
  footer.classList.add('off');
})


// Tabs
const tabs = document.querySelectorAll('.tabs__btn');
const content = document.querySelectorAll('.products-cards__grid')

tabs.forEach((item) => {
  item.addEventListener("click", function () {

    let button = item;
    let tabId = button.getAttribute("data-tab");
    const currentTab = document.querySelector(tabId);

    tabs.forEach((item) => {
      item.classList.remove('bg-button-active-cards');
    });

    content.forEach((item) => {
      item.classList.add('off');
    });

    item.classList.add('bg-button-active-cards');
    currentTab.classList.remove('off');
  });
});

// активный класс кнопки по умолчанию
document.querySelector('.tabs__btn').click();


// счетчик корзины
const btnCart = document.querySelectorAll('.card-button');
const counterCart = document.querySelector('.cart__count');
const counterCartMobile = document.querySelector('.cart__count-mobile');

btnCart.forEach((item) => {

  item.addEventListener('click', function () {

    counterCart.classList.remove('off');
    counterCartMobile.classList.remove('off');
  });
});

let count = 0;

btnCart.forEach((item) => {
  item.addEventListener('click', function () {
    count += 1;
    counterCartMobile.textContent = count;
    counterCart.textContent = count;
  });
});
