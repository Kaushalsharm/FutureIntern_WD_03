const product = [
  {
    id: 0,
    image: 'h1.jpg',
    title: 'TILAPIA AL AJILLO (GARLIC TILAPIA)',
    price: 13.00,
  },
  {
    id: 1,
    image: 'h2.webp',
    title: 'HONEY GINGER GRILLED SALMON',
    price: 18.99,
  },
  {
    id: 2,
    image: 'h3.webp',
    title: 'VEGGIE PACKED CHEESY CHICKEN SALAD (REDUCED FAT)',
    price: 15.49,
  },
  {
    id: 3,
    image: 'h4.webp',
    title: 'CITRUSY KALE SALAD W/ BLUEBERRIES AND PEPITAS (& VARIATIONS)',
    price: 14.00,
  },
  {
    id: 4,
    image: 'h5.webp',
    title: 'TOMATO AND BARLEY SOUP',
    price: 12.34,
  },
  {
    id: 5,
    image: 'h6.webp',
    title: 'WW 0 POINT WEIGHT WATCHERS CABBAGE SOUP',
    price: 12.00,
  },
  {
    id: 6,
    image: 'h7.webp',
    title: 'COUSCOUS-CHICKPEA SALAD',
    price: 10.00,
  },
  {
    id: 7,
    image: 'h8.webp',
    title: 'GRILLED ORANGE CHICKEN BREASTS',
    price: 13.99,
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
