const product = [
  {
    id: 0,
    image: 'd1.jpeg',
    title: 'BEST BUCKEYES (PEANUT BUTTER AND CHOCOLATE CANDIES)',
    price: 1.8,
  },
  {
    id: 1,
    image: 'd2.webp',
    title: 'SPECIAL MOCHA CUPCAKES',
    price: 6,
  },
  {
    id: 2,
    image: 'd3.jpg',
    title: 'LIGHT MY FIRE BROWNIE SUNDAES',
    price: 1.25,
  },
  {
    id: 3,
    image: 'd4.jpg',
    title: 'RICE PUDDING',
    price: 3.97,
  },
  {
    id: 4,
    image: 'd5.jpeg',
    title: 'DECADENT KRISPIES BAR',
    price: 13.89,
  },
  {
    id: 5,
    image: 'd6.jpg',
    title: 'NEW ORLEANS DOUBLE-CHOCOLATE PRALINE-FUDGE CAKE',
    price: 3.29,
  },
  {
    id: 6,
    image: 'd7.jpg',
    title: 'NEW ORLEANS DOUBLE-CHOCOLATE PRALINE-FUDGE CAKE',
    price: 7.79,
  },
  {
    id: 7,
    image: 'd8.webp',
    title: 'EASY STRAWBERRY JELL-O PIE',
    price: 4.13,
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
