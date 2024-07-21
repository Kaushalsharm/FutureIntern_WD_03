const product = [
  {
    id: 0,
    image: 'A1.jpeg',
    title: 'MOZZARELLA STICKS',
    price: 2.4,
  },
  {
    id: 1,
    image: 'A2.jpeg',
    title: 'CHEESY SHELL TACO BITES',
    price: 6,
  },
  {
    id: 2,
    image: 'A3.jpeg',
    title: 'CARAMELIZED ONION-CRANBERRY CREAM CHEESE BITES',
    price: 5.49,
  },
  {
    id: 3,
    image: 'A4.jpeg',
    title: 'EASY APRICOT BITES',
    price: 15,
  },
  {
    id: 4,
    image: 'A5.jpeg',
    title: 'SAUSAGE BALLS',
    price: 15,
  },
  {
    id: 5,
    image: 'A6.jpeg',
    title: 'CHEESY ARTICHOKE CHICKEN BALLS',
    price: 3.29,
  },
  {
    id: 6,
    image: 'A7.jpg',
    title: 'EASY BACON-WRAPPED DATES',
    price: 7.79,
  },
  {
    id: 7,
    image: 'A8.jpeg',
    title: 'STUFFED MUSHROOMS WITH ROASTED RED PEPPERS AND MANCHEGO CHEESE',
    price: 6.87,
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
