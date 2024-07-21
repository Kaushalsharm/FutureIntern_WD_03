const product = [
  {
    id: 0,
    image: 'sp1.webp',
    title: 'FAMOUS BARRS FRENCH ONION SOUP',
    price: 24.00,
  },
  {
    id: 1,
    image: 'sp2.jpg',
    title: 'CHICKEN TORTELLINI SOUP WITH MUSHROOMS AND SPINACH',
    price: 10,
  },
  {
    id: 2,
    image: 'sp4.webp',
    title: 'BEST CREAM OF BROCCOLI SOUP',
    price: 12.00,
  },
  {
    id: 3,
    image: 'sp3.webp',
    title: 'BROTHY BEEF NOODLE SOUP',
    price: 37.99,
  },
  {
    id: 4,
    image: 'sp6.webp',
    title: 'HEARTY PORTUGUESE KALE SOUP',
    price: 5,
  },
  {
    id: 5,
    image: 'sp7.webp',
    title: 'SPICY HEALTHY TACO BEAN SOUP',
    price: 12,
  },
  {
    id: 6,
    image: 'sp5.webp',
    title: 'BEENZEN BUZZARD STEW',
    price: 17.79,
  },
  {
    id: 7,
    image: 'sp8.webp',
    title: 'WALTERS POTATO, BACON, CORN CHOWDER',
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
