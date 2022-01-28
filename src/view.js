import * as config from './config.js';
import { fetchSignature } from './controller.js';

class View {
  _parentElement = document.querySelector('.mainContainer');
  _modalContainer = document.querySelector('.modalContainer');
  _navBar = document.querySelector('.navBar');
  _catDropdownEl;
  _catDropdownBtnEl;
  _mensCatHomeBtn;
  _womensCatHomeBtn;
  _cartNavBtn;
  _cartModal;
  _modalContent;
  _modalClose;
  _continueShoppingBtn;
  _removeCartItem;

  centerDivMarkup =
    'absolute flex left-1/2 top-1/2 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 text-center';

  dropdownFunction = function () {
    this._catDropdownEl = document.querySelector('.categoryDropdown');
    this._catDropdownBtnEl = document.querySelector('.categoryDropdownBtn');
    this._catDropdownEl.classList.toggle('hidden');
    ['rounded-full', 'hover:bg-gray-200', 'bg-gray-200'].forEach(attribute =>
      this._catDropdownBtnEl.classList.toggle(attribute)
    );
  };

  renderHomepage() {
    const markup = `
        <div class="relative">
          <img src="./img/Home splash.jpg"/>
          <div class="flex absolute inset-y-0 w-1/2 z-20">
            <p class="m-auto text-3xl font-bold text-slate-800">Opening Sale! </p>
          </div>
        </div>
        <div class="flex justify-center py-10">
          <h1 class="font-bold text-2xl self-center">Shop by Men's or Women's Hoodies</h1> 
        </div>
  
        <div class=" grid grid-cols-2 gap-4 mx-4">
          <div class=" mensHomeBtn relative container shadow-md hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer duration-75">
            <img src="./img/men hoody C.jpg" />
            <div class="flex absolute inset-y-0 right-0 w-1/2 z-20">
              <p class="m-auto text-2xl font-bold">Men's </p>
            </div>
          </div>
  
          <div class="womensHomeBtn relative container shadow-md hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer duration-75">
            <img src="./img/woman hoody C.jpg" />
            <div class="flex absolute inset-y-0 left-0 w-1/2 z-20">
              <p class="my-auto mx-4 text-2xl font-bold">Women's </p>
            </div>
          </div>
        </div>
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);

    // addeventlistener
    this._mensCatHomeBtn = document.querySelector('.mensHomeBtn');
    this._womensCatHomeBtn = document.querySelector('.womensHomeBtn');
    this._catDropdownEl = document.querySelector('.categoryDropdown');
  }

  mensCatBtn(handler) {
    this._mensCatHomeBtn.addEventListener('click', handler);
  }

  womensCatBtn(handler) {
    this._womensCatHomeBtn.addEventListener('click', handler);
  }

  renderCategoryPage(data, category) {
    let newData = data.filter(prods => prods.category === category);

    if (!newData.length) newData = data;

    const markup = `
      <div class="categoryPage">

        <div>
          <h1 class=" text-2xl font-bold p-4">${
            category !== 'All Products' ? `${category} Wear` : category
          }</h1>
          <div class=" flex h-96 gap-4 m-4">

            ${newData
              .map(
                product => `
            <div class="productImage flex relative group"
            data-item-description="${product.product}" 
            data-item-cost="${product.cost}"
            >
              <img 
              src="${product.imgUrl}" 
              alt="${product.alt}"
              class=" group-hover:blur-sm group-hover:grayscale"/>

              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-white opacity-0 group-hover:opacity-100">
                R${product.cost}
              </p>

              <button class="addToCartBtn ${this.centerDivMarkup} translate-y-5 px-2 rounded-full bg-red-600 text-white">
                Add to Cart
              </button>

            </div>
            `
              )
              .join('')}
              
          </div>
        </div>
      </div>
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addToCartBtn(handler) {
    this._addToCartBtnAll = document.querySelectorAll('.addToCartBtn');

    this._addToCartBtnAll.forEach(prod =>
      prod.addEventListener('click', handler)
    );
  }

  toggleModalWindow() {
    this._cartModal.classList.toggle('hidden');
    this._cartModal.classList.toggle('z-30');
  }

  shoppingCartBtn(handler) {
    this._cartNavBtn.addEventListener('click', handler);
  }

  closeModalClicks(handler) {
    this._body = document.querySelector('body');
    this._body.addEventListener('click', handler);
  }

  clearCart(handler) {
    this._clearCartBtn = document.querySelector('.clearCartBtn');
    this._clearCartBtn.addEventListener('click', handler);
  }

  removeCartItem(handler) {
    this._removeCartItem = document.querySelectorAll('.removeCartItemBtn');
    this._removeCartItem.forEach(item =>
      item.addEventListener('click', handler)
    );
  }

  isCartEmptyDisplay(data) {
    let total = 0;
    let markup;

    if (data.length > 0) {
      markup = data
        .map((prod, i) => {
          total = total + prod.itemCost;

          return `        
            <div class="modalCartItem grid grid-cols-5 border-b-2 rounded-lg my-2 data-index="${i}">
              <div class=" text-2xl col-span-2">${prod.itemDescription}</div>
                <button class="removeCartItemBtn p-2 justify-self-end font-bold text-2xl">&times</button>
              <div class=" text-2xl col-end-6 font-sans">R ${prod.itemCost}</div>
            </div>
          `;
        })
        .join('');
    } else {
      markup = `
        <P>
          No Products in Cart yet 🙁
        </P>
      `;
    }
    return { html: markup, total: total };
  }

  renderModalWindow(data) {
    const isCartEmptyDisplayObj = this.isCartEmptyDisplay(data);

    const signature = fetchSignature({
      amount: isCartEmptyDisplayObj.total,
      item_name: `${data.length} Products`,
    });

    const markup = `
      <div class=" cartModal fixed hidden pt-28 w-full max-w-6xl h-full bg-black bg-opacity-40 overflow-auto">
        <div class=" modalContent bg-gray-100 m-auto border-2 border-blue-500 p-5 w-9/12 rounded-lg">
          <span class="modalClose float-right font-bold text-2xl text-center hover:cursor-pointer">&times</span>
          <h1 class=" font-bold text-3xl">Shopping Cart</h1>
          

            ${isCartEmptyDisplayObj.html}

          
          <div class="grid grid-cols-3 text-2xl font-bold">
            <div class="">
              <span>Total:</span>
              <span class="font-sans">R ${isCartEmptyDisplayObj.total}</span> 
            </div>
            <button class="clearCartBtn col-end-4 bg-gray-300 border rounded-full">Clear cart</button>
          </div>

          <div class="mt-5 grid grid-cols-3">
            <button class="continueShoppingBtn border rounded-full shadow-md bg-green-600">Continue Shopping</button>

            <form class="formSubmit col-end-4"action="https://sandbox.payfast.co.za/eng/process" method="post">
              <input type="hidden" name="merchant_id" value="${config.merchant_id}">
              <input type="hidden" name="merchant_key" value="${config.merchant_key}">
              <input type="hidden" name="return_url" value="${config.returnUrl}">
              <input type="hidden" name="amount" value="${isCartEmptyDisplayObj.total}">
              <input type="hidden" name="item_name" value="${data.length} Products">
              <input type="hidden" name="signature" value="${signature}">
              <input 
              type="submit" 
              value="Pay Now" 
              class="w-full rounded-full shadow-md bg-red-600 text-white hover:cursor-pointer">
            </form>

          </div>

      </div>
    `;

    console.log(signature);

    this._modalContainer.insertAdjacentHTML('afterbegin', markup);

    // Addeventlistener
    this._cartNavBtn = document.querySelector('.cartNavBtn');
    this._cartModal = document.querySelector('.cartModal');
    this._modalContent = document.querySelector('.modalContent');
    this._modalClose = document.querySelector('.modalClose');
    this._continueShoppingBtn = document.querySelector('.continueShoppingBtn');
  }

  clearModal() {
    this._modalContainer.innerHTML = '';
  }

  clear() {
    this._parentElement.innerHTML = '';
  }
}

export default new View();
