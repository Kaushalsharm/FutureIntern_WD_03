const product = [
  {
    id: 0,
    image: 'drk1.jpg',
    title: 'SUMMER BERRY MOJITO',
    price: 20,
  },
  {
    id: 1,
    image: 'drk0.jpeg',
    title: 'CUBAN MOJITOS',
    price: 6,
  },
  {
    id: 2,
    image: 'drk3.jpeg',
    title: 'FROZEN MANGO MARGARITA',
    price: 19.99,
  },
  {
    id: 3,
    image: 'drk4.webp',
    title: 'CHAMPAGNE SORBET FLOATS',
    price: 25,
  },
  {
    id: 4,
    image: 'drk5.jpg',
    title: 'RECIBIDO JULEP',
    price: 23,
  },
  {
    id: 5,
    image: 'drk6.jpg',
    title: 'RELAXING LAVENDER GIN & TONIC BY THE PITCHER',
    price: 27.99,
  },
  {
    id: 6,
    image: 'drk8.webp',
    title: 'SUMMER ELDERBERRY COCKTAIL',
    price: 9.99,
  },
  {
    id: 7,
    image: 'drk8.jpeg',
    title: 'FROZEN STRAWBERRY DAIQUIRI',
    price: 2.29,
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
