const product = [
  {
    id: 0,
    image: 'p1.jpeg',
    title: 'RANCH AND AVOCADO PASTA SALAD',
    price: 9.60,
  },
  {
    id: 1,
    image: 'P2.jpeg',
    title: 'MACARONI WITH FONTINA AND GORGONZOLA CHEESES',
    price: 8.99,
  },
  {
    id: 2,
    image: 'P3.jpeg',
    title: 'CARAMELIZED ONION-CRANBERRY CREAM CHEESE BITES',
    price: 8.69,
  },
  {
    id: 3,
    image: 'P4.jpeg',
    title: 'SWEET ITALIAN SAUSAGE WITH PENNE PASTA',
    price: 7.25,
  },
  {
    id: 4,
    image: 'P5.webp',
    title: 'BALSAMIC CHICKEN PASTA',
    price: 5.00,
  },
  {
    id: 5,
    image: 'P6.jpeg',
    title: 'LEMON CHICKEN PASTA',
    price: 30.00,
  },
  {
    id: 6,
    image: 'P7.jpeg',
    title: 'STUFFED PASTA SHELLS FOR MEAT-LOVERS',
    price: 16.99,
  },
  {
    id: 7,
    image: 'P8.jpeg',
    title: 'GINGER PEANUT CHICKEN PASTA',
    price: 26.87,
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
