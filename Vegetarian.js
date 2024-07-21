const product = [
  {
    id: 0,
    image: 'r1.webp',
    title: 'THAI SATAY NOODLES',
    price: 11.49,
  },
  {
    id: 1,
    image: 'r2.webp',
    title: 'FALAFEL',
    price: 2,
  },
  {
    id: 2,
    image: 'r3.webp',
    title: 'MEXICAN NOODLE BAKE (MEATLESS)',
    price: 5.49,
  },
  {
    id: 3,
    image: 'r4.webp',
    title: 'SWEETIE PIES MAC AND CHEESE',
    price: 4.38,
  },
  {
    id: 4,
    image: 'r5.webp',
    title: 'BROCCOLI STUFFED VIDALIA ONIONS',
    price: 31.39,
  },
  {
    id: 5,
    image: 'r6.webp',
    title: 'NIFS BACONLESS PASTA CARBONARA WITH BREADCRUMBS',
    price: 23.29,
  },
  {
    id: 6,
    image: 'r7.webp',
    title: 'LENTIL SLOPPY JOES',
    price: 17.79,
  },
  {
    id: 7,
    image: 'r8.webp',
    title: '7-LAYER PARTY DIP TORTA',
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
