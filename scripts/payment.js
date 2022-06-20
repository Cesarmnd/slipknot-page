let cart = localStorage.length != 0 ? JSON.parse( localStorage.getItem('carrito') ) : [];
let counter = 0;

// Renderizado de icono de carrito
function iconCartRender() {
  counter = localStorage.length != 0 ? (cart.map( obj => obj.ammount ).reduce( ( a, b ) => a + b )) : 0;

  const cartCounter = document.querySelector('.payment__cart-link');
  cartCounter.innerHTML = `<ion-icon name="cart-outline"></ion-icon> Carrito de compras (${counter})`;
}


iconCartRender()