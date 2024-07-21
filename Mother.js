const product = [
  {
    id: 0,
    image: 'A1.webp',
    title: 'GINGER ALE BAKED HAM',
    price: 34.00,
  },
  {
    id: 1,
    image: 'A2.webp',
    title: 'CITRUS BEET SALAD',
    price: 10.12,
  },
  {
    id: 2,
    image: 'A3.webp',
    title: 'FAVA BEAN AND GRILLED SHRIMP SALAD IN RADICCHIO CUPS',
    price: 15.00,
  },
  {
    id: 3,
    image: 'A4.webp',
    title: 'SPINACH & ARTICHOKE MASHED POTATOES',
    price: 22.89,
  },
  {
    id: 4,
    image: 'A5.webp',
    title: 'RHUBARB CRISP',
    price: 17.00,
  },
  {
    id: 5,
    image: 'A6.webp',
    title: 'SPINACH, STRAWBERRY, MANDARIN SALAD WITH POPPY SEED DRESSING',
    price: 10.29,
  },
  {
    id: 6,
    image: 'A7.webp',
    title: 'ASIAN PASTA SALAD',
    price: 7.79,
  },
  {
    id: 7,
    image: 'A8.webp',
    title: 'ASPARAGUS GRUYERE TART',
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
