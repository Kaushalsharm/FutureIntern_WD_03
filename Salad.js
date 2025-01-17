const product = [
  {
    id: 0,
    image: 'S1.jpeg',
    title: 'SPINACH & ROQUEFORT SALAD',
    price: 4.29,
  },
  {
    id: 1,
    image: 'S2.webp',
    title: 'CHUNKY BLUE CHEESE SALAD DRESSING',
    price: 2.08,
  },
  {
    id: 2,
    image: 'S3.jpeg',
    title: 'KITTENCALS FAMOUS GREEK SALAD',
    price: 3.49,
  },
  {
    id: 3,
    image: 'S4.jpg',
    title: 'MOROCCAN CARROT SALAD',
    price: 4.79,
  },
  {
    id: 4,
    image: 'S5.webp',
    title: 'CHICKPEA AND FRESH TOMATO TOSS',
    price: 10.50,
  },
  {
    id: 5,
    image: 'S6.jpeg',
    title: 'CUCUMBER CILANTRO PASTA SALAD',
    price: 5.06,
  },
  {
    id: 6,
    image: 'S7.jpeg',
    title: 'ITALIAN CHOPPED SALAD IN SHELLS',
    price: 9.99,
  },
  {
    id: 7,
    image: 'S8.webp',
    title: 'TOSSED SALAD WITH MANDARIN ORANGES',
    price: 3.50,
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
