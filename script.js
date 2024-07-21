const product = [
    {
      id: 0,
      image: 'r1.jpeg',
      title: 'FARMERS QUICHE',
      price: 1.70,
    },
    {
      id: 1,
      image: 'r2.webp',
      title: 'BAGEL FRENCH TOAST CASSEROLE',
      price: 0.53,
    },
    {
      id: 2,
      image: 'r7.jpeg',
      title: 'OPPOSITE OF A SMOOTHIE: BREAKFAST CRUNCHY',
      price: 1.2,
    },
    {
      id: 3,
      image: 'r4.jpeg',
      title: 'MONTE CRISTO SANDWICH',
      price: 15.99,
    },
    {
      id: 4,
      image: 'r5.jpg',
      title: 'DUTCH BABY',
      price: 25,
    },
    {
      id: 5,
      image: 'r8.jpeg',
      title: 'ISRAELI SHAKSHUKA',
      price: 10,
    },
    {
      id: 6,
      image: 'r9.jpeg',
      title: 'FLUFFY MATCHA HOTCAKES',
      price: 16.25,
    },
    {
      id: 7,
      image: 'R3.jpeg',
      title: 'EASY BREAKFAST TACOS',
      price: 1.4,
    },
  ];
  
  const categories = product.map(item => ({ ...item })); // Map to create a new array of product objects
  
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
  