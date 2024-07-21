const product = [
  {
    id: 0,
    image: 'v1.webp',
    title: 'CREAMY VEGAN PESTO PASTA WITH BROCCOLI',
    price: 13.99,
  },
  {
    id: 1,
    image: 'v2.webp',
    title: 'VEGAN BACON',
    price: 12.99,
  },
  {
    id: 2,
    image: 'v3.webp',
    title: 'EASY BLACK BEANS AND RICE',
    price: 13.54,
  },
  {
    id: 3,
    image: 'v4.webp',
    title: 'ALOO GOBI',
    price: 14.99,
  },
  {
    id: 4,
    image: 'v5.webp',
    title: 'VEGAN FRENCH TOAST',
    price: 12.76,
  },
  {
    id: 5,
    image: 'v6.webp',
    title: 'VEGAN PESTO SAUCE',
    price: 13.29,
  },
  {
    id: 6,
    image: 'v7.webp',
    title: 'VEGAN PANCAKES',
    price: 11.87,
  },
  {
    id: 7,
    image: 'v8.webp',
    title: 'VEGAN CORNBREAD',
    price: 12.59,
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
