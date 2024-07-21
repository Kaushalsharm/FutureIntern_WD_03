const product = [
  {
    id: 0,
    image: 's1.webp',
    title: 'LEMON AND GARLIC ROAST CHICKEN',
    price: 12.4,
  },
  {
    id: 1,
    image: 's2.webp',
    title: 'COMPANY PORK ROAST',
    price: 4.98,
  },
  {
    id: 2,
    image: 's3.webp',
    title: 'COD BAKED WITH CREAM AND BAY LEAVES',
    price: 8.30,
  },
  {
    id: 3,
    image: 's4.webp',
    title: 'TENDER FLAT IRON STEAK',
    price: 9.99,
  },
  {
    id: 4,
    image: 's5.webp',
    title: 'YUMMIEST EVER BAKED MAC AND CHEESE',
    price: 6.98,
  },
  {
    id: 5,
    image: 's6.webp',
    title: 'PINK FLIRTINI',
    price: 10.00,
  },
  {
    id: 6,
    image: 's7.webp',
    title: 'COPYCAT STARBUCKS MANGO DRAGONFRUIT REFRESHER',
    price: 17.79,
  },
  {
    id: 7,
    image: 's8.webp',
    title: 'PINK MOJITO',
    price: 30.99,
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
