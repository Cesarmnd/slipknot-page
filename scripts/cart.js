const itemsContainer = document.querySelector('.carts');
const section = document.createElement('section');
section.classList.add( 'carts__products-container', 'products-container');

let items = localStorage.length != 0 ? itemCartContainer() : emptyWarning();

function itemCartContainer () {
  section.innerHTML = `<div class="carts__product-header product-header">
                        <h2 class="carts__product-title product-title">Product</h2>
                        <h3 class="carts__price price" >Price</h3>
                        <h3 class="carts__quantity quantity">Quantity</h3>
                        <h3 class="carts__total total">Total</h3>
                      </div>
                      <div class="carts__products products">

                      </div> `;
  itemsContainer.appendChild(section);  
};

function emptyWarning () {
  section.innerHTML = `<h2> Ud. aún no tiene productos en su carrito. </h2>`;
  itemsContainer.appendChild(section);  
};

function placeItem () {
  const cartProducts = document.querySelector('.carts__products');

  cartList.forEach( ( obj ) => {
    const productContainer = document.createElement('section')
    productContainer.className = 'carts__product-container'
    
    productContainer.innerHTML = `
      <div class="carts__product-title">
        <img src=${obj.img} title=${obj.name} class="carts__img">
        <p>${obj.name}</p>
      </div>
      <p class="carts__price">${obj.price}</p>
      <p class="carts__quantity">${obj.ammount}</p>
    `
    cartProducts.appendChild(productContainer)
  });
}

const cartList = localStorage.length != 0 ? JSON.parse(localStorage.getItem('carrito')) : [];

cartList != [] && placeItem() 