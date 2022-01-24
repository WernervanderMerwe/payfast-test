import * as model from './model.js';
import view from './view.js';

const homeBtn = document.querySelector('.homeBtn');
const catDropdownBtnEl = document.querySelector('.categoryDropdownBtn');
const mensCatBtn = document.querySelector('.mensCatBtn');
const womensCatBtn = document.querySelector('.womensCatBtn');

homeBtn.addEventListener('click', function () {
  view.renderHomepage();
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
  view.shoppingCartBtn(controlShoppingCartBtn);
});

// setout timer to close dropdown
catDropdownBtnEl.addEventListener('click', function () {
  view.dropdownFunction();
  view.renderBothCategoriesPage(model.categoryData, 'All Products');
});

mensCatBtn.addEventListener('click', function () {
  view.renderCategoryPage(model.categoryData, "Men's");
});

womensCatBtn.addEventListener('click', function () {
  view.renderCategoryPage(model.categoryData, "Women's");
});

const controlMensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Men's");
};

const controlWomensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Women's");
};

const controlShoppingCartBtn = function (event) {
  // * these if Statements handles the events within the Modal *
  if (!event.target.closest('.modalContent')) view.toggleModalWindow();
  if (event.target === view._modalClose) view.toggleModalWindow();
  if (event.target === view._continueShoppingBtn) view.toggleModalWindow();
};

const init = function () {
  view.renderHomepage();
  view.renderModalWindow(model.checkoutData);
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
  view.shoppingCartBtn(controlShoppingCartBtn);
};

init();

// My first way of handling clicks outside of the dropdown menu to close it
window.onclick = function (event) {
  // console.log('target', event.target);
  // console.log(view._cartModal);
  if (view._catDropdownEl.matches('.hidden')) return;
  if (!event.target.matches('.categoryDropdownBtn')) {
    view._catDropdownEl.classList.toggle('hidden');
    ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
      view._catDropdownBtnEl.classList.toggle(attribute)
    );
  }
};
