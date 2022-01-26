import * as model from './model.js';
import view from './view.js';

const homeBtn = document.querySelector('.homeBtn');
const catDropdownBtnEl = document.querySelector('.categoryDropdownBtn');
const mensCatBtn = document.querySelector('.mensCatBtn');
const womensCatBtn = document.querySelector('.womensCatBtn');
const addToCartBtn = document.querySelector('.addToCartBtn');

homeBtn.addEventListener('click', function () {
  view.renderHomepage();
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
  view.shoppingCartBtn(controlShoppingCartBtn);
});

// setout timer to close dropdown
catDropdownBtnEl.addEventListener('click', function () {
  view.dropdownFunction();
  view.renderCategoryPage(model.categoryData, 'All Products');
  view.addToCartBtn(controlAddToCartBtn);
});

mensCatBtn.addEventListener('click', function () {
  view.renderCategoryPage(model.categoryData, "Men's");
  view.addToCartBtn(controlAddToCartBtn);
});

womensCatBtn.addEventListener('click', function () {
  view.renderCategoryPage(model.categoryData, "Women's");
  view.addToCartBtn(controlAddToCartBtn);
});

// addToCartBtn?.addEventListener('click', function () {
//   view.addToCartBtn(controlAddToCartBtn);
//   console.log('2)+cartBtn');
// });

const controlMensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Men's");
  view.addToCartBtn(controlAddToCartBtn);
};

const controlWomensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Women's");
  view.addToCartBtn(controlAddToCartBtn);
};

const controlShoppingCartBtn = function (event) {
  // * these if Statements handles the events within the Modal *
  if (!event.target.closest('.modalContent')) view.toggleModalWindow();
  if (event.target === view._modalClose) view.toggleModalWindow();
  if (event.target === view._continueShoppingBtn) view.toggleModalWindow();
};

const controlAddToCartBtn = function (event) {
  const obj = {
    itemDescription:
      event.target.closest('.productImage').dataset.itemDescription,
    itemCost: +event.target.closest('.productImage').dataset.itemCost,
  };

  model.checkoutData.push(obj);
  // console.log(model.checkoutData);

  view.clearModal();
  view.renderModalWindow(model.checkoutData);
  view.clearCart(controlClearCart);
  view.toggleModalWindow();
  view.shoppingCartBtn(controlShoppingCartBtn);
};

const controlClearCart = function (event) {
  model.checkoutData.length = 0;
  view.clearModal();
  view.renderModalWindow(model.checkoutData);
  view.toggleModalWindow();
  view.shoppingCartBtn(controlShoppingCartBtn);
};

const init = function () {
  view.renderHomepage();
  view.renderModalWindow(model.checkoutData);
  view.clearCart(controlClearCart);
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
  view.shoppingCartBtn(controlShoppingCartBtn);
};

init();

// My first way of handling clicks outside of the dropdown menu to close it
window.onclick = function (event) {
  // console.log('target', event.target);
  // console.log('target', event.target.closest('.productImage'));
  // console.log(view._cartModal);
  if (view._catDropdownEl.matches('.hidden')) return;
  if (!event.target.matches('.categoryDropdownBtn')) {
    view._catDropdownEl.classList.toggle('hidden');
    ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
      view._catDropdownBtnEl.classList.toggle(attribute)
    );
  }
};
