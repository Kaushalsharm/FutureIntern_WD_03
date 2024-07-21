const product = [
  {
    id: 0,
    image: 'ch1.jpeg',
    title: 'COWBOY STEAK CHILI IN A CROCK POT',
    price: 22.4,
  },
  {
    id: 1,
    image: 'ch2.jpeg',
    title: 'SLOW-COOKED CHICKEN CHILI',
    price: 6.90,
  },
  {
    id: 2,
    image: 'ch3.jpeg',
    title: 'GROUND TURKEY AND WHITE BEAN CHILI',
    price: 4.99,
  },
  {
    id: 3,
    image: 'ch4.jpeg',
    title: 'HORMEL CHILI DIP',
    price: 7.99,
  },
  {
    id: 4,
    image: 'ch5.webp',
    title: 'HEARTY VEGETARIAN TOFU CHILI',
    price: 2.44,
  },
  {
    id: 5,
    image: 'ch6.jpeg',
    title: 'TASTY LOW SODIUM CHILI',
    price: 1.39,
  },
  {
    id: 6,
    image: 'ch7.jpeg',
    title: 'LEFTOVER TURKEY OR CHICKEN CHILI',
    price: 3.79,
  },
  {
    id: 7,
    image: 'ch8.jpeg',
    title: 'CHILI COLORADO',
    price: 16.87,
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
