const product = [
  {
    id: 0,
    image: 'c1.jpg',
    title: 'BAKED ZITI',
    price: 40,
  },
  {
    id: 1,
    image: 'c2.jpg',
    title: 'MEATBALL SUB CASSEROLE',
    price: 41,
  },
  {
    id: 2,
    image: 'c3.jpeg',
    title: 'CHEESY SHRIMP & GRITS CASSEROLE',
    price: 25.49,
  },
  {
    id: 3,
    image: 'c4.jpeg',
    title: 'RO-TEL CHICKEN SPAGHETTI',
    price: 16,
  },
  {
    id: 4,
    image: 'c5.webp',
    title: 'ABSOLUTE BEST EVER LASAGNA',
    price: 8,
  },
  {
    id: 5,
    image: 'c6.jpeg',
    title: 'CLASSIC BAKED SPAGHETTI',
    price: 18,
  },
  {
    id: 6,
    image: 'c7.jpg',
    title: 'CHICKEN RICE CASSEROLE',
    price: 24,
  },
  {
    id: 7,
    image: 'c8.jpeg',
    title: 'MAKE AHEAD MASHED POTATO CASSEROLE',
    price: 20,
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
