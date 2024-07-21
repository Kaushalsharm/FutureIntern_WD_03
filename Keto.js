const product = [
  {
    id: 0,
    image: 'k1.webp',
    title: 'CHICKEN PARMESAN (LOW-CARB, KETO)',
    price: 12.95,
  },
  {
    id: 1,
    image: 'k2.webp',
    title: 'CAJUN SHRIMP AND MASHED CAULIFLOWER',
    price: 16.00,
  },
  {
    id: 2,
    image: 'k3.webp',
    title: 'STUFFED BELL PEPPERS (VEGETARIAN OR BEEF)',
    price: 8.99,
  },
  {
    id: 3,
    image: 'k4.webp',
    title: 'KETO RAINBOW PIZZA',
    price: 13.56,
  },
  {
    id: 4,
    image: 'k5.webp',
    title: 'KETO TURKEY SANDWICH WITH CRANBERRY RELISH',
    price: 12.00,
  },
  {
    id: 5,
    image: 'h6.webp',
    title: 'CINNAMON FLAX MUFFINS',
    price: 7.99,
  },
  {
    id: 6,
    image: 'h7.jpg',
    title: 'CAULIFLOWER GRILLED CHEESECAULIFLOWER GRILLED CHEESE',
    price: 18.99,
  },
  {
    id: 7,
    image: 'k8.webp',
    title: 'MY FAMOUS BACON WRAPPED JALAPENOS (POPPERS)',
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
