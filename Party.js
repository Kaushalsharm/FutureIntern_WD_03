const product = [
  {
    id: 0,
    image: 'p1.webp',
    title: 'MOJITO SHRIMP TACO CUPS',
    price: 23.95,
  },
  {
    id: 1,
    image: 'p2.webp',
    title: 'MOZZARELLA STICKS',
    price: 6,
  },
  {
    id: 2,
    image: 'p3.webp',
    title: 'BACON BITES FLAMBE',
    price: 7.49,
  },
  {
    id: 3,
    image: 'p4.webp',
    title: 'CHEESY SHELL TACO BITES',
    price: 9.00,
  },
  {
    id: 4,
    image: 'p5.webp',
    title: 'CARAMELIZED ONION-CRANBERRY CREAM CHEESE BITES',
    price: 5.49,
  },
  {
    id: 5,
    image: 'p6.webp',
    title: 'EASY APRICOT BITES',
    price: 15.60,
  },
  {
    id: 6,
    image: 'p8.webp',
    title: 'SAUSAGE BALLS',
    price: 17.79,
  },
  {
    id: 7,
    image: 'p7.webp',
    title: 'BUFFALO CHICKEN CHEESE BALLS WITH BLUE CHEESE DIP',
    price: 10.87,
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
