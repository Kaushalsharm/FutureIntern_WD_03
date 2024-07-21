const product = [
  {
    id: 0,
    image: 's1.jpeg',
    title: 'PINTO BEANS AND RICE IN A CROCK POT (OR ON STOVE TOP)',
    price: 1.50,
  },
  {
    id: 1,
    image: 's2.webp',
    title: 'CHEESY MINI CORN MUFFINS',
    price: 5.99,
  },
  {
    id: 2,
    image: 's3.webp',
    title: 'PEPSI PORK ROAST',
    price: 3.99,
  },
  {
    id: 3,
    image: 's4.jpeg',
    title: 'DEBBIE CROCK POT CHILI',
    price: 8.56,
  },
  {
    id: 4,
    image: 's5.webp',
    title: 'PERFECT POT ROAST (SLOW-COOKER)',
    price: 3.99,
  },
  {
    id: 5,
    image: 's6.jpeg',
    title: 'PULLED PORK (CROCK POT)',
    price: 14.14,
  },
  {
    id: 6,
    image: 's7.jpeg',
    title: 'EASY AND TASTY BARBECUE CHICKEN SANDWICHES IN THE CROCK POT',
    price: 9.49,
  },
  {
    id: 7,
    image: 's8.jpeg',
    title: 'CROCK POT THYME ROASTED BEETS',
    price: 10.99,
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