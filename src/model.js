const params = new URLSearchParams({
  merchant_id: '',
  merchant_key: '',
  amount: '',
  passphrase: '',
});

const api = async function () {
  try {
    const response = await fetch('https://api.payfast.co.za/ping');
    // const response = await fetch("https://www.payfast.co.za/eng/process", {
    //   method: "POST", {
    //     merchant_id: '',
    //     merchant_key: '',
    //     amount: '',
    //     passphrase: '',
    //   }
    // });
    //  Read fetch api mdn to continue
    const apiData = await response.json();

    return apiData;
  } catch (err) {
    console.error(`💥💥💥${err}`);
  }
};
// api();

// Usually this info comes from a backend, I might write a promise for this
// Object.keys is another way of handling the data for map()
export const categoryData = [
  {
    heading: "Men's Wear",
    img1Url: '/img/men hoody product yellow.jpg',
    img2Url: '/img/men hoody product creme.jpg',
    cost1: '600',
    cost2: '650',
    alt: "Men's Hoody Product",
  },
  {
    heading: "Women's Wear",
    img1Url: '/img/womans hoody product black.jpg',
    img2Url: '/img/womans hoody product white.jpg',
    cost1: '500',
    cost2: '550',
    alt: "Women's Hoody Product",
  },

  /* change the object to look something like this
    mens: [{
    heading: "Men's Wear",
    imgUrl: '/img/men hoody product yellow.jpg',
    cost: '600',
    alt: "Men's Hoody Product",
  },
  {
    heading: "Men's Wear",
    imgUrl: '/img/men hoody product creme.jpg',
    cost: '650',
    alt: "Men's Hoody Product",
  }],
  womens: {
    heading: "Women's Wear",
    img1Url: '/img/womans hoody product black.jpg',
    img2Url: '/img/womans hoody product white.jpg',
    cost1: '500',
    cost2: '550',
    alt: "Women's Hoody Product",
  },
  */
];
