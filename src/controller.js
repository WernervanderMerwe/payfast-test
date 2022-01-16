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
  view.renderBothCategoriesPage(model.categoryData);
});

mensCatBtn.addEventListener('click', function () {
  // move this to view in a render function
  view.renderCategoryPage(model.categoryData[0]);
});

womensCatBtn.addEventListener('click', function () {
  // move this to view in a render function
  view.renderCategoryPage(model.categoryData[1]);
});

const controlMensCatBtn = function () {
  view.renderCategoryPage(model.categoryData[0]);
};

const controlWomensCatBtn = function () {
  view.renderCategoryPage(model.categoryData[1]);
};

const init = function () {
  view.renderHomepage(model.categoryData);
  view.mensCatBtn(controlMensCatBtn);
  view.womensCatBtn(controlWomensCatBtn);
};

init();

// view.test();
// view.clear();

// view.renderCategoryPage(model.categoryData[0]);
// view.renderCategoryPage(model.categoryData[1]);

// view.renderBothCategoriesPage(model.categoryData);

window.onclick = function (event) {
  if (catDropdownEl.matches('.hidden')) return;
  if (!event.target.matches('.categoryDropdownBtn')) {
    catDropdownEl.classList.toggle('hidden');
    ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
      catDropdownBtnEl.classList.toggle(attribute)
    );
  }
};
