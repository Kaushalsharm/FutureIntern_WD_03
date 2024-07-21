const product = [
  {
    id: 0,
    image: 'j1.webp',
    title: 'PAN-FRIED TOFU WITH SPICY PEANUT SAUCE',
    price: 32.4,
  },
  {
    id: 1,
    image: 'j2.webp',
    title: 'SWEET CHILI-GLAZED TOFU WITH BOK CHOY',
    price: 39,
  },
  {
    id: 2,
    image: 'j3.webp',
    title: 'TOFU AND BROCCOLI WITH PEANUT SAUCE',
    price: 33.49,
  },
  {
    id: 3,
    image: 'j4.webp',
    title: 'THE BEST TOFU SCRAMBLE',
    price: 35.00,
  },
  {
    id: 4,
    image: 'j5.webp',
    title: 'GREEN BEANS & TOFU WITH CRUNCHY THAI PEANUT SAUCE',
    price: 15.00,
  },
  {
    id: 5,
    image: 'j6.webp',
    title: 'SOBA SOUP WITH SPINACH AND TOFU',
    price: 10.00,
  },
  {
    id: 6,
    image: 'j7.webp',
    title: 'LIGHT SPINACH PASTA WITH TOFU',
    price: 7.79,
  },
  {
    id: 7,
    image: 'j8.webp',
    title: 'ACADIAS TOFU STIR FRY',
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
