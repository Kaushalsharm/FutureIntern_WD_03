const product = [
  {
    id: 0,
    image: 'air1.webp',
    title: 'AIR FRYER CRISPY PANKO SHRIMP',
    price: 4.97,
  },
  {
    id: 1,
    image: 'air2.jpeg',
    title: 'AIR FRYER MISO GLAZED SALMON WITH BRUSSELS SPROUTS',
    price: 7,
  },
  {
    id: 2,
    image: 'air3.jpeg',
    title: 'AIR FRYER BEEF JERKY',
    price: 6.49,
  },
  {
    id: 3,
    image: 'air4.webp',
    title: 'AIR FRYER BREAKFAST BAKE',
    price: 9,
  },
  {
    id: 4,
    image: 'air4.jpeg',
    title: 'BBQ CHICKEN FLATBREADS FROM EVERY DAY EASY AIR FRYER',
    price: 6.99,
  },
  {
    id: 5,
    image: 'air5.webp',
    title: 'SHRIMP SCAMPI FROM EVERY DAY EASY AIR FRYER',
    price: 11.99,
  },
  {
    id: 6,
    image: 'air6.jpg',
    title: '5-INGREDIENT BROWNIES FROM EVERY DAY EASY AIR FRYER',
    price: 4.79,
  },
  {
    id: 7,
    image: 'air7.webp',
    title: 'AIR FRIED PEPPERONI WRAPS',
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
