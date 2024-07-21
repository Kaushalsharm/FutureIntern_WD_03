const product = [
  {
    id: 0,
    image: 'd1.jpeg',
    title: 'BACON CHEDDAR MASHED POTATOES',
    price: 13.99,
  },
  {
    id: 1,
    image: 'd2.jpeg',
    title: 'CHEESY MINI CORN MUFFINS',
    price: 7.99,
  },
  {
    id: 2,
    image: 'd3.jpeg',
    title: 'BROCCOLI DAL CURRY',
    price: 3,
  },
  {
    id: 3,
    image: 'd4.jpeg',
    title: 'ROASTED CARROTS WITH LEMON DRESSING',
    price: 4,
  },
  {
    id: 4,
    image: 'q5.jpeg',
    title: '"ALMOST" BOSTON MARKET CREAMED SPINACH',
    price: 3.99,
  },
  {
    id: 5,
    image: 'd6.jpg',
    title: 'SIMPLE GARLIC MASHED POTATOES',
    price: 4.14,
  },
  {
    id: 6,
    image: 'q7.jpeg',
    title: 'ZESTY HERBED CARROTS',
    price: 7,
  },
  {
    id: 7,
    image: 'd8.jpeg',
    title: 'BLACK ANGUS CHEESY GARLIC BREAD',
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