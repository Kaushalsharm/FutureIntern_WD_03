const product = [
  {
    id: 0,
    image: 'C1.webp',
    title: 'GREEN & YELLOW SQUASH LINGUINI SHRIMP SCAMPI',
    price: 21.00,
  },
  {
    id: 1,
    image: 'c2.png',
    title: 'ZUCCHINI LASAGNA (LASAGNE) - LOW CARB',
    price: 14.00,
  },
  {
    id: 2,
    image: 'c3.webp',
    title: 'NOT YOUR MAMAS MEATLOAF - LOW CARB & BEEFED UP',
    price: 15.49,
  },
  {
    id: 3,
    image: 'c4.webp',
    title: 'BALSAMIC CHICKEN AND MUSHROOMS',
    price: 15.75,
  },
  {
    id: 4,
    image: 'c5.webp',
    title: 'ONE MINUTE FLAX MUFFIN - LOW CARB',
    price: 13.39,
  },
  {
    id: 5,
    image: 'c6.webp',
    title: 'TARRAGON CHICKEN CASSEROLE',
    price: 33.50,
  },
  {
    id: 6,
    image: 'c7.webp',
    title: 'LOW CARB PIZZA',
    price: 22.34,
  },
  {
    id: 7,
    image: 'c8.webp',
    title: 'LOW CARB CHILI',
    price: 14.49,
  },
];

const categories = product.map(item => item.title);

let cart = [];

document.querySelector("#root").innerHTML = product.map((item, i) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <button onClick='addtocart(${i})'>Add to cart</button>
      </div>
    </div>`;
}).join('');

function addtocart(a) {
  cart.push({...product[a]});
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart(); 
}

function displaycart() {
  let total = 0;
  let j = 0;
  
  document.getElementById("count").innerHTML = cart.length;
  
  if (cart.length === 0) {
    document.querySelector(".cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ 0.00";
  } else {
    document.querySelector(".cartItem").innerHTML = cart.map((item, index) => {
      const { image, title, price } = item;
      total += price;
      document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
      return `
        <div class="cart-item">
          <div class="row-img">
            <img class="rowimg" src=${image}>
          </div>
          <p style="font-size:12px;">${title}</p>
          <h2 style="font-size:15px;">$ ${price.toFixed(2)}</h2>
          <i class="fa-solid fa-trash" onclick='delElement(${index})'></i>
        </div>`;
    }).join('');
  }
}
