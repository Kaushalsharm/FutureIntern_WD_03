const product = [
  {
    id: 0,
    image: 'C1.jpeg',
    title: 'OATMEAL RAISIN COOKIES',
    price: 1.5,
  },
  {
    id: 1,
    image: 'C2.webp',
    title: 'FUDGE CRINKLES (A GREAT 4 INGREDIENT CAKE MIX COOKIE)',
    price: 29.99,
  },
  {
    id: 2,
    image: 'C3.jpeg',
    title: 'CHEWY CHOCOLATE COOKIES',
    price: 3.49,
  },
  {
    id: 3,
    image: 'C4.jpeg',
    title: 'WORLDS BEST CHOCOLATE CHIP COOKIES',
    price: 2.36,
  },
  {
    id: 4,
    image: 'C5.jpeg',
    title: 'SAUSAGE BALLS',
    price: 0.89,
  },
  {
    id: 5,
    image: 'C6.jpeg',
    title: 'CHEESECAKE COOKIES',
    price: 3.75,
  },
  {
    id: 6,
    image: 'C7.webp',
    title: 'GRANNYS SUGAR COOKIES',
    price: 35,
  },
  {
    id: 7,
    image: 'C8.webp',
    title: 'ELOISES EASY SUGAR COOKIES',
    price: 6.00,
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
