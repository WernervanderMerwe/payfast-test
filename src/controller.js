import * as model from './model.js';
import view from './view.js';

const catDropdownEl = document.querySelector('.categoryDropdown');
const catDropdownBtnEl = document.querySelector('.categoryDropdownBtn');
const homeBtn = document.querySelector('.homeBtn');
const mensCatBtn = document.querySelector('.mensCatBtn');
const womensCatBtn = document.querySelector('.womensCatBtn');

const dropdownFunction = function () {
  catDropdownEl.classList.toggle('hidden');
  ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
    catDropdownBtnEl.classList.toggle(attribute)
  );
};

homeBtn.addEventListener('click', function () {
  view.renderHomepage();
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
});

// setout timer to close dropdown
catDropdownBtnEl.addEventListener('click', function () {
  dropdownFunction();
  view.renderBothCategoriesPage(model.categoryData, 'All Products');
});

mensCatBtn.addEventListener('click', function () {
  // move this to view in a render function
  view.renderCategoryPage(model.categoryData, "Men's");
});

womensCatBtn.addEventListener('click', function () {
  // move this to view in a render function
  view.renderCategoryPage(model.categoryData, "Women's");
});

const controlMensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Men's");
};

const controlWomensCatBtn = function () {
  view.renderCategoryPage(model.categoryData, "Women's");
};

const init = function () {
  view.renderHomepage(model.categoryData);
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
};

init();

view.renderPayFastForm();

window.onclick = function (event) {
  if (catDropdownEl.matches('.hidden')) return;
  if (!event.target.matches('.categoryDropdownBtn')) {
    catDropdownEl.classList.toggle('hidden');
    ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
      catDropdownBtnEl.classList.toggle(attribute)
    );
  }
};
