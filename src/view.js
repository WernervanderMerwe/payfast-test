class View {
  _parentElement = document.querySelector('.mainContainer');
  _mensHomeBtn;
  _womensHomeBtn;
  _data;

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

  renderCategoryPage(data) {
    // make heading Clickable
    const markup = `
      <div class="categoryPage">
        <div>
          <h1 class=" text-2xl font-bold m-4">${data.heading}</h1>
          <div class=" flex h-96 gap-4 m-4">
          
            <div class=" flex relative group">
              <img 
              src="${data.img1Url}" 
              alt="${data.alt}"
              class=" group-hover:blur-sm group-hover:grayscale"/>
              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-white opacity-0 group-hover:opacity-100">
                R ${data.cost1}
              </p>
            </div>

            <div class=" flex relative group">
              <img 
              src="${data.img2Url}" 
              alt="${data.alt}"
              class=" group-hover:blur-sm group-hover:grayscale"/>
              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-white opacity-0 group-hover:opacity-100">
                R ${data.cost2}
              </p>
            </div>

          </div>
        </div>
      </div>
    `;

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    return markup;
  }

  renderBothCategoriesPage(data) {
    const markup = data
      .map(category => this.renderCategoryPage(category))
      .join('');

    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this._parentElement.innerHTML = '';
  }
}

export default new View();
