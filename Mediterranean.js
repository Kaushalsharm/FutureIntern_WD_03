const product = [
  {
    id: 0,
    image: 'm1.webp',
    title: 'MEDITERRANEAN CHICKEN BREASTS WITH AVOCADO TAPENADE',
    price: 10.49,
  },
  {
    id: 1,
    image: 'm2.webp',
    title: 'CRISPY FRIED FALAFEL',
    price: 2.86,
  },
  {
    id: 2,
    image: 'm3.webp',
    title: 'MEDITERRANEAN TILAPIA POCKETS #RSC',
    price: 15.49,
  },
  {
    id: 3,
    image: 'm4.webp',
    title: 'LEBANESE LENTIL SALAD',
    price: 24.99,
  },
  {
    id: 4,
    image: 'm5.webp',
    title: 'LEBANESE LENTIL SALAD',
    price: 6.30,
  },
  {
    id: 5,
    image: 'm6.webp',
    title: 'SHAKSHUKA BURRITO WITH ROASTED PEPPER SALSA AND TZATZIKI',
    price: 14.45,
  },
  {
    id: 6,
    image: 'm7.webp',
    title: 'PAN SEARED MOROCCAN SALMON',
    price: 55.00,
  },
  {
    id: 7,
    image: 'm8.webp',
    title: 'MEDITERRANEAN LASAGNA',
    price: 30.00,
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
