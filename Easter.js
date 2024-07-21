const product = [
  {
    id: 0,
    image: 'e1.webp',
    title: 'CARROT CAKE',
    price: 7.4,
  },
  {
    id: 1,
    image: 'e2.webp',
    title: 'DEVILED EGGS WITH LEMON',
    price: 18,
  },
  {
    id: 2,
    image: 'e3.webp',
    title: 'ITALIAN EASTER EGG BASKET',
    price: 4.11,
  },
  {
    id: 3,
    image: 'e4.webp',
    title: 'SPRING GREEN RISOTTO, INAS WAY',
    price: 14.33,
  },
  {
    id: 4,
    image: 'e5.webp',
    title: 'DANISH EASTER CAKE',
    price: 15,
  },
  {
    id: 5,
    image: 'e6.webp',
    title: 'SOUTHERN SWEET ICED TEA',
    price: 7.88,
  },
  {
    id: 6,
    image: 'e7.webp',
    title: 'SALMON PATTIES',
    price: 6.20,
  },
  {
    id: 7,
    image: 'e8.webp',
    title: 'GREAT EASY CREPES',
    price: 8.49,
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
