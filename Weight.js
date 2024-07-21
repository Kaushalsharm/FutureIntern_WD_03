const product = [
  {
    id: 0,
    image: 'w1.webp',
    title: 'CHICKEN YAKITORI',
    price: 3.4,
  },
  {
    id: 1,
    image: 'w2.webp',
    title: 'WW TRUFFLES',
    price: 22.00,
  },
  {
    id: 2,
    image: 'w3.webp',
    title: 'WW HAM AND CHEESE STUFFED POTATOES',
    price: 7.49,
  },
  {
    id: 3,
    image: 'w4.webp',
    title: 'HONEY-GLAZED SALMON WITH WASABI',
    price: 15,
  },
  {
    id: 4,
    image: 'w5.webp',
    title: ' BROCCOLI CHEESE SOUP',
    price: 10.00,
  },
  {
    id: 5,
    image: 'w6.webp',
    title: 'GRILLED CHICKEN AND KEY LIME SALSA',
    price: 12.99,
  },
  {
    id: 6,
    image: 'w7.webp',
    title: 'BAKED SPICY FRENCH FRIES',
    price: 7.79,
  },
  {
    id: 7,
    image: 'w8.webp',
    title: 'HOPPIN JOHN WITH SHRIMP',
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
