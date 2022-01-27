// Keeping this to see if I cant get it to work through the fetch api in the future
const api = async function () {
  try {
    const response = await fetch('https://sandbox.payfast.co.za/eng/process', {
      method: 'POST',
      headers: {
        merchant_id: '10024906',
        merchant_key: '0elf9cy9yzqs7',
        amount: '650',
        item_name: 'Creme hoody',
        version: 'v1',
        timestamp: ``,
        signature: 'fb5521d086eb66ce99898726ee984d64',
      },
    });

    const apiData = await response.json();
    console.log(apiData);

    return apiData;
  } catch (err) {
    console.error(`💥💥💥${err}`);
  }
};
// api();

export const categoryData = [
  {
    id: 1,
    heading: "Men's Wear",
    category: "Men's",
    imgUrl: '/img/men hoody product yellow.jpg',
    product: "Men's Yellow Hoody",
    cost: '600',
    alt: "Men's Hoody Product",
  },
  {
    id: 2,
    heading: "Men's Wear",
    category: "Men's",
    imgUrl: '/img/men hoody product creme.jpg',
    product: "Men's Creme Hoody",
    cost: '650',
    alt: "Men's Hoody Product",
  },
  {
    id: 3,
    heading: "Women's Wear",
    category: "Women's",
    imgUrl: '/img/womans hoody product black.jpg',
    product: "Women's Black Hoody",
    cost: '500',
    alt: "Women's Hoody Product",
  },
  {
    id: 4,
    heading: "Women's Wear",
    category: "Women's",
    imgUrl: '/img/womans hoody product white.jpg',
    product: "Women's White Hoody",
    cost: '550',
    alt: "Women's Hoody Product",
  },
];

export const checkoutData = [
  // {
  //   itemDescription: "Men's Creme Hoody",
  //   itemCost: 650,
  // },
  // {
  //   itemDescription: "Women's White Hoody",
  //   itemCost: 550,
  // },
];
