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

const controlMensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Men's");
  view.addToCartBtn(controlAddToCartBtn);
};

const controlWomensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Women's");
  view.addToCartBtn(controlAddToCartBtn);
};

const controlShoppingCartBtn = function () {
  view.toggleModalWindow();
};

const controlModalClose = function (event) {
  const containsHiddenClassCheck = view._cartModal.classList.contains('hidden');
  const clickOnCartNavBtnCheck = event.target === view._cartNavBtn;

  if (!containsHiddenClassCheck && !clickOnCartNavBtnCheck) {
    if (
      !event.target.closest('.modalContent') &&
      event.target === view._cartModal
    )
      view.toggleModalWindow();

    if (event.target.closest('.navBar')) view.toggleModalWindow();

    if (event.target === view._modalClose) view.toggleModalWindow();

    if (event.target === view._continueShoppingBtn) view.toggleModalWindow();
  }
};

const controlAddToCartBtn = function (event) {
  const obj = {
    itemDescription:
      event.target.closest('.productImage').dataset.itemDescription,
    itemCost: +event.target.closest('.productImage').dataset.itemCost,
  };

  model.checkoutData.push(obj);

  view.clearModal();
  view.renderModalWindow(model.checkoutData);
  view.clearCart(controlClearCart);
  view.toggleModalWindow();
  view.removeCartItem(controlRemoveCartItemBtn);
};

const controlClearCart = function () {
  model.checkoutData.length = 0;
  view.clearModal();
  view.renderModalWindow(model.checkoutData);
  view.toggleModalWindow();
};

const controlRemoveCartItemBtn = function (event) {
  const itemIndex = +event.target.closest('.modalCartItem').dataset.index;

  model.checkoutData.splice(itemIndex, 1);

  reRenderModal();
};

export const fetchSignature = function (data) {
  const signature = model.generateSignature(data);
  return signature;
};

const controlFormSubmitHandler = function (event) {
  // view.formSubmitBtn(controlFormSubmitHandler);
  // event.preventDefault();
};

const reRenderModal = function () {
  view.clearModal();
  view.renderModalWindow(model.checkoutData);
  view.toggleModalWindow();
  view.clearCart(controlClearCart);
  view.removeCartItem(controlRemoveCartItemBtn);
  view.closeModalClicks(controlModalClose);
  // view.formSubmitBtn(controlFormSubmitHandler);
  // fetchSignature();
};

const init = function () {
  view.renderHomepage();
  view.renderModalWindow(model.checkoutData);
  view.clearCart(controlClearCart);
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
  view.shoppingCartBtn(controlShoppingCartBtn);
  view.removeCartItem(controlRemoveCartItemBtn);
  view.closeModalClicks(controlModalClose);
};

init();

// My first way of handling clicks outside of the dropdown menu to close it
window.onclick = function (event) {
  // console.log('target', event.target);
  if (view._catDropdownEl.matches('.hidden')) return;
  if (!event.target.matches('.categoryDropdownBtn')) {
    view._catDropdownEl.classList.toggle('hidden');
    ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
      view._catDropdownBtnEl.classList.toggle(attribute)
    );
  }
};
