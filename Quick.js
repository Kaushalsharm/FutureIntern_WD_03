const product = [
  {
    id: 0,
    image: 'q1.jpeg',
    title: 'SHEET PAN TATER TOT BAKE',
    price: 0.95,
  },
  {
    id: 1,
    image: 'q2.jpeg',
    title: 'SHEET PAN SPICY CORN SALSA',
    price: 7.95,
  },
  {
    id: 2,
    image: 'q3.jpg',
    title: 'SHEET PAN QUICHE WITH MUSHROOMS, GRUYERE & BACON',
    price: 16.49,
  },
  {
    id: 3,
    image: 'q4.jpeg',
    title: 'THAI PEANUT COCONUT CHICKEN',
    price: 6.99,
  },
  {
    id: 4,
    image: 'q5.jpeg',
    title: 'SHEET PAN SWEET POTATO BREAKFAST HASH',
    price: 9,
  },
  {
    id: 5,
    image: 'q6.jpeg',
    title: 'SHEET PAN SHRIMP SCAMPI',
    price: 5.95,
  },
  {
    id: 6,
    image: 'q7.webp',
    title: 'SHEET PAN BREAKFAST FRIED RICE',
    price: 9,
  },
  {
    id: 7,
    image: 'q8.jpeg',
    title: 'SHEET PAN BISCUITS WITH BACON, CHEDDAR & HERBS',
    price: 9.99,
  },
];

const categories = product.map(item => ({ ...item })); // Create a new array of product objects

let i = 0;
document.querySelector("#root").innerHTML = categories.map(item => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <button onClick='addtocart(${i++})'>Add to cart</button>
      </div>
    </div>`;
}).join('');

let cart = [];

function addtocart(a) {
  cart.push({ ...product[a] }); // Push the product object from 'product' array
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart(); 
}

function displaycart() {
  let j = 0;
  let total = 0;
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
          <p style="font-size: 12px;">${title}</p>
          <h2 style="font-size: 15px;">$ ${price.toFixed(2)}</h2>
          <i class="fa-solid fa-trash" onclick='delElement(${index})'></i>
        </div>`;
    }).join('');
  }
}