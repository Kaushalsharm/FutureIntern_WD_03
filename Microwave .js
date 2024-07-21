const product = [
  {
    id: 0,
    image: 'm1.jpeg',
    title: 'SIMPLE CHICKEN AND SAUSAGE PAELLA',
    price: 21,
  },
  {
    id: 1,
    image: 'm2.jpeg',
    title: 'BROCCOLI HAM STROGANOFF',
    price: 11.47,
  },
  {
    id: 2,
    image: 'm3.jpg',
    title: 'MICROWAVE SALMON FILLETS',
    price: 16.49,
  },
  {
    id: 3,
    image: 'm4.jpg',
    title: 'MICROWAVE FRIED RICE',
    price: 1.49,
  },
  {
    id: 4,
    image: 'm5.jpeg',
    title: 'ONE STEP CHILI',
    price: 17.99,
  },
  {
    id: 5,
    image: 'm6.jpeg',
    title: 'LEMONY WALDORF FISH FILLETS FOR MICROWAVE',
    price: 10.95,
  },
  {
    id: 6,
    image: 'm7.jpg',
    title: 'SOUTHWESTERN RICE BOWL',
    price: 9,
  },
  {
    id: 7,
    image: 'm8.jpeg',
    title: 'CHICKEN RANCH TACOS',
    price: 2,
  },
];

const categories = product.map(item => ({ ...item })); // Create a new array of product objects

let i = 0;
document.querySelector("#root").innerHTML = categories.map(item => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price.toFixed(2)}</h2>
        <button onClick='addtocart(${i++})'>Add to cart</button>
      </div>
    </div>`;
}).join('');

let cart = [];

function addtocart(a) {
  cart.push({ ...product[a] }); // Push the product object from 'product' array
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart(); 
}

function displaycart() {
  let j = 0;
  let total = 0;
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
          <p style="font-size: 12px;">${title}</p>
          <h2 style="font-size: 15px;">$ ${price.toFixed(2)}</h2>
          <i class="fa-solid fa-trash" onclick='delElement(${index})'></i>
        </div>`;
    }).join('');
  }
}