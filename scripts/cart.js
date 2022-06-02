// Selección de contenedores
const itemsContainer = document.querySelector('.carts__list');
const sectionItems = document.createElement('section');
sectionItems.classList.add( 'carts__products-container', 'products-container');

//  Elección entre mensaje de carrito vacio o del contenido del carrito
let items = localStorage.length != 0 ? itemCartContainer() : emptyWarning();

// Actualizar elementos del carrito
const cartList = localStorage.length != 0 ? JSON.parse(localStorage.getItem('carrito')) : [];
cartList != [] && placeItem();

// Render del contenedor de items
function itemCartContainer () {
  sectionItems.innerHTML = `<div class="carts__product-header product-header">
                        <h2 class="carts__product-title product-title">Product</h2>
                        <h3 class="carts__price price" >Price</h3>
                        <h3 class="carts__quantity quantity">Quantity</h3>
                        <h3 class="carts__total total">Total</h3>
                      </div>
                      <div class="carts__products products">

                      </div> 
                      <section class="carts__btns">
                        <button class="carts__button" id="back">Atras</button>
                        <button class="carts__button" id="emptyCart">Vaciar carrito</button>
                        <button class="carts__button" id="pay">Pagar</button> 
                      </section>`;
  itemsContainer.appendChild(sectionItems);  
};

// Render del mensaje de carrito vacio
function emptyWarning () {
  sectionItems.innerHTML = `<h2> Ud. aún no tiene productos en su carrito. </h2>`;
  itemsContainer.appendChild(sectionItems);  
};

// Render de elementos del carrito
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
  localStorage.length === 0 && document.getElementById('emptyCart').setAttribute("disabled", '');
}

// Botón de pago
const payBtn = document.getElementById('pay')
payBtn.addEventListener('click', () => {
  window.location.href = "./pago.html"
})

// Botón de vaciado de carrito
const emptyBtn = document.getElementById('emptyCart');
emptyBtn.addEventListener('click', emptyCart);

// Vaciado de carrito
function emptyCart () {
  Swal.fire({
    title: '¿Eliminar todos los elementos del carrito?',
    icon: 'warning',
    color: '#fff',
    background: '#202020',
    showCancelButton: true,
    confirmButtonColor: '#FF0001',
    cancelButtonColor: '#500',
    confirmButtonText: 'Eliminar'
  })
  .then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('carrito');
      items = localStorage.length != 0 ? itemCartContainer() : emptyWarning();
      Swal.fire({
        title: 'Eliminado',
        text: 'Los elementos de tu carrito fueron eliminados',
        icon: 'success',
        color: '#fff',
        background: '#202020',
        confirmButtonColor: '#FF0001',})
    }
  })
}





