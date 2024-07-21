const product = [
  {
    id: 0,
    image: 'g1.webp',
    title: 'ORANGE CREAMSICLE CHEESECAKE BASKETBALL',
    price: 24.00,
  },
  {
    id: 1,
    image: 'g2.webp',
    title: 'CHARRED JALAPENO POPPERS',
    price: 52.00,
  },
  {
    id: 2,
    image: 'g3.webp',
    title: 'MINI PIZZAS',
    price: 15.49,
  },
  {
    id: 3,
    image: 'g4.webp',
    title: 'CHOCOLATE PEANUT BUTTER RICE KRISPIES TREATS',
    price: 8.54,
  },
  {
    id: 4,
    image: 'g5.webp',
    title: 'LINDAS TACO SCOOP APPETIZERS',
    price: 13.00,
  },
  {
    id: 5,
    image: 'g6.webp',
    title: 'RANCH SALAD',
    price: 13.29,
  },
  {
    id: 6,
    image: 'g7.webp',
    title: 'BEER JELLO SHOTS',
    price: 25.99,
  },
  {
    id: 7,
    image: 'g8.webp',
    title: 'YUMMY BAKED POTATO SKINS',
    price: 12.87,
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
