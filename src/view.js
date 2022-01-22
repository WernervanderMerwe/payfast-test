import { categoryData } from './model.js';

class View {
  _parentElement = document.querySelector('.mainContainer');
  _mensHomeBtn;
  _womensHomeBtn;
  _data;

  centerDivMarkup =
    'absolute flex left-1/2 top-1/2 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 text-center';

  test() {
    return console.log(this._parentElement);
  }

  renderHomepage() {
    const markup = `
        <div class="relative">
          <img src="./img/Home splash.jpg"/>
          <div class="flex absolute inset-y-0 w-1/2 z-10">
            <p class="m-auto text-3xl font-bold text-slate-800">Opening Sale! </p>
          </div>
        </div>
        <div class="flex justify-center py-10">
          <h1 class="font-bold text-2xl self-center">Shop by Men's or Women's Hoodies</h1> 
        </div>
  
  
        <div class=" grid grid-cols-2 gap-4 mx-4">
          <div class=" mensHomeBtn relative container shadow-md hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer duration-75">
            <img src="./img/men hoody C.jpg" />
            <div class="flex absolute inset-y-0 right-0 w-1/2 z-10">
              <p class="m-auto text-2xl font-bold">Men's </p>
            </div>
          </div>
  
          <div class="womensHomeBtn relative container shadow-md hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer duration-75">
            <img src="./img/woman hoody C.jpg" />
            <div class="flex absolute inset-y-0 left-0 w-1/2 z-10">
              <p class="my-auto mx-4 text-2xl font-bold">Women's </p>
            </div>
          </div>
        </div>
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);

    // addeventlistener
    this._mensHomeBtn = document.querySelector('.mensHomeBtn');
    this._womensHomeBtn = document.querySelector('.womensHomeBtn');
  }

  mensCatBtn(handler) {
    this._mensHomeBtn.addEventListener('click', handler);
  }

  womensCatBtn(handler) {
    this._womensHomeBtn.addEventListener('click', handler);
  }

  renderCategoryPage(data, category) {
    console.log(data, category);

    const newData = data.filter(prods => prods.category === category);
    console.log(newData);
    const markup = `
      <div class="categoryPage">
        <div>
          <h1 class=" text-2xl font-bold m-4">${category} Wear</h1>
          <div class=" flex h-96 gap-4 m-4">

            ${newData
              .map(
                product => `
            <div class=" flex relative group">
              <img 
              src="${product.imgUrl}" 
              alt="${product.alt}"
              class=" group-hover:blur-sm group-hover:grayscale"/>

              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-white opacity-0 group-hover:opacity-100">
                R${product.cost}
              </p>

              <form action="https://sandbox.payfast.co.za/eng/process" method="post">
              <input type="hidden" name="merchant_id" value="10024906">
              <input type="hidden" name="merchant_key" value="0elf9cy9yzqs7">
              <input type="hidden" name="amount" value="${product.cost}">
              <input type="hidden" name="item_name" value="${product.product}">
              <input 
              type="submit" 
              value="Buy Now" 
              class="${this.centerDivMarkup} translate-y-5 px-2 rounded-full bg-red-600 text-white hover:cursor-pointer">
            </form>

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
    return markup;
  }

  renderBothCategoriesPage(data, category) {
    // Keeping the old logic for future reference
    // const markup = data
    //   .map((cat, _, arr) => this.renderCategoryPage(cat, category))
    //   .join('');

    const newData = data;

    const markup = `
      <div class="categoryPage">

        <div>
          <h1 class=" text-2xl font-bold m-4">${category}</h1>
          <div class=" flex h-96 gap-4 m-4">

            ${newData
              .map(
                product => `
            <div class=" flex relative group">
              <img 
              src="${product.imgUrl}" 
              alt="${product.alt}"
              class=" group-hover:blur-sm group-hover:grayscale"/>
                    
              <p class="${this.centerDivMarkup} -translate-y-1/2">
                ${product.category} 
                R${product.cost}
              </p>

              <form action="https://sandbox.payfast.co.za/eng/process" method="post">
                <input type="hidden" name="merchant_id" value="10024906">
                <input type="hidden" name="merchant_key" value="0elf9cy9yzqs7">
                <input type="hidden" name="amount" value="${product.cost}">
                <input type="hidden" name="item_name" value="${product.product}">
                <input 
                type="submit" 
                value="Buy Now" 
                class="${this.centerDivMarkup} translate-y-5 border px-2 rounded-full bg-red-600 text-white hover:cursor-pointer">
              </form>
        
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

  renderPayFastForm() {
    const markup = `
      <form action="https://sandbox.payfast.co.za/eng/process" method="post">
        <input type="hidden" name="merchant_id" value="10024906">
        <input type="hidden" name="merchant_key" value="0elf9cy9yzqs7">
        <input type="hidden" name="amount" value="${categoryData[0].cost}">
        <input type="hidden" name="item_name" value="${categoryData[0].alt}">
        <input type="submit" value="Pay Now" class="border bg-black text-white hover:cursor-pointer">
      </form> 
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this._parentElement.innerHTML = '';
  }
}

export default new View();
