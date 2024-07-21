const product = [
  {
    id: 0,
    image: 'l1.webp',
    title: 'CHORIZO AND EGG BURRITOS',
    price: 7.99,
  },
  {
    id: 1,
    image: 'l2.jpeg',
    title: 'SIMPLE PASTA TOSS',
    price: 12,
  },
  {
    id: 2,
    image: 'l3.jpeg',
    title: 'EASY ENCHILADAS',
    price: 1.29,
  },
  {
    id: 3,
    image: 'l4.jpeg',
    title: 'HEALTHY EGG SALAD SANDWICH',
    price: 3,
  },
  {
    id: 4,
    image: 'l5.jpeg',
    title: 'CHEESY TURKEY BURGER',
    price: 7.79,
  },
  {
    id: 5,
    image: 'l6.jpeg',
    title: 'TOMATO & EGG MUFFIN',
    price: 15.69,
  },
  {
    id: 6,
    image: 'l7.jpeg',
    title: 'BOSTON FENWAY FRANKSH',
    price: 6.25,
  },
  {
    id: 7,
    image: 'l8.jpeg',
    title: 'TEA ROOM TUNA SALAD',
    price: 2.4,
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
