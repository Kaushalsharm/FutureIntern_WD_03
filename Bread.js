const product = [
  {
    id: 0,
    image: 'b1.jpeg',
    title: 'NAAN',
    price: 1,
  },
  {
    id: 1,
    image: 'b2.jpeg',
    title: 'ENGLISH MUFFINS',
    price: 2,
  },
  {
    id: 2,
    image: 'b3.jpeg',
    title: 'AMERICAN INDIAN FRY BREAD',
    price: 18.89,
  },
  {
    id: 3,
    image: 'b4.jpeg',
    title: 'CIABATTA (ITALIAN SLIPPER BREAD)',
    price: 5.99,
  },
  {
    id: 4,
    image: 'b5.jpg',
    title: 'ALOO PARATHA',
    price: 1.5,
  },
  {
    id: 5,
    image: 'b6.jpg',
    title: 'QUICK SOFT BREADSTICKS',
    price: 3.29,
  },
  {
    id: 6,
    image: 'b7.jpg',
    title: 'SWEET CORNBREAD',
    price: 1.1,
  },
  {
    id: 7,
    image: 'b8.jpg',
    title: 'ROTI CANAI (AUTHENTIC MALAYSIAN RECIPE)',
    price: 9.87,
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
