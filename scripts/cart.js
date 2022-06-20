// ARRAYS 
let cart = localStorage.length != 0 ? JSON.parse( localStorage.getItem('carrito') ) : [];
// Class o funciones constructoras
// Variables globales
let counter = 0;

// Resto del codigo


// Selección de contenedores
const itemsContainer = document.querySelector('.carts__list');
const sectionItems = document.createElement('section');
sectionItems.classList.add( 'carts__products-container', 'products-container');

const sectionButtons = document.createElement('section');
sectionButtons.classList.add( 'carts__btns');

const sectionAllItems = document.createElement('section');
sectionAllItems.classList.add( 'carts__totalAllItems');



//  Elección entre mensaje de carrito vacio o del contenido del carrito
let items = localStorage.length != 0 ? itemCartContainer() : emptyWarning();

// Actualizar elementos del carrito
cart != [] && placeItem();

// Renderizado de icono de carrito
function iconCartRender() {
  counter = localStorage.length != 0 ? (cart.map( obj => obj.ammount ).reduce( ( a, b ) => a + b )) : 0;

  const cartCounter = document.querySelector('.carts__cart-link');
  cartCounter.innerHTML = `</ion-icon> Carrito de compras (${counter})`;
}

function increaseItem (e) {
  let selectedItemId = e.target.getAttribute('tagItem');
  let selectedItem = cart.find( item => item.id == selectedItemId );
  
  if (selectedItem.stock > 1) {
    selectedItem.ammount++;
    selectedItem.stock--;
    localStorage.setItem('carrito', JSON.stringify(cart));
    document.getElementById(selectedItemId).innerHTML = selectedItem.ammount;
    document.querySelector(`[totalTag="${selectedItemId}"]`).innerHTML = `USD ${selectedItem.ammount * selectedItem.price}`;
    iconCartRender();
    totalAllItems ();
  } else {
    Swal.fire({
      color: '#fff',
        icon: 'error',
        iconColor: 'f0f',
        title: 'Oops...',
        text: 'No hay stock disponible',
        background: '#202020',
        confirmButtonColor: '#FF0001',
      });
  }
}

function decreaseItem (e) {
  let selectedItemId = e.target.getAttribute('tagItem')
  let selectedItem = cart.find( item => item.id == selectedItemId )
  
  if (selectedItem.ammount > 1) {
    selectedItem.ammount--
    selectedItem.stock++
    localStorage.setItem('carrito', JSON.stringify(cart))
    document.getElementById(selectedItemId).innerHTML = selectedItem.ammount
    document.querySelector(`[totalTag="${selectedItemId}"]`).innerHTML = `USD ${selectedItem.ammount * selectedItem.price}`;
    iconCartRender()
    totalAllItems ()
  }
}

function removeItem (e) {
  let newList = JSON.stringify(cart.filter( item => item.id != e.target.getAttribute('tagItem')));
  localStorage.setItem('carrito', newList);
  cart = JSON.parse( localStorage.getItem('carrito') )
  localStorage.getItem('carrito' ) == '[]' && localStorage.clear();
  location.reload();
}

// Render del contenedor de items
function itemCartContainer () {
  sectionItems.innerHTML = `<div class="carts__product-header product-header">
                        <h2 class="carts__product-title product-title">Producto</h2>
                        <h3 class="carts__price price" >Precio</h3>
                        <h3 class="carts__quantity quantity">Cantidad</h3>
                        <h3 class="carts__total total">Total</h3>
                      </div>
                      <div class="carts__products products">

                      </div> 
                      `;
  itemsContainer.appendChild(sectionItems);
  buttonsCartContainer();
};

// Render del contenedor de botones
function buttonsCartContainer () {
  sectionButtons.innerHTML = ` 
                        <button class="carts__button" id="back" onClick="history.back()">Atrás</button>
                        <button class="carts__button" id="emptyCart">Vaciar carrito</button>
                        <button class="carts__button" id="pay">Pagar</button> 
                        `;
  itemsContainer.appendChild(sectionButtons);
}

//  Render de total general
function totalAllItems () {
  const cartProducts = document.querySelector('.carts__products');
  let total = cart.map(item => (item.ammount * item.price)).reduce((a, b) => a + b)
  sectionAllItems.innerHTML = `Total a pagar: USD ${total}`;
  cartProducts.appendChild(sectionAllItems);
}

// Render del mensaje de carrito vacio
function emptyWarning () {
  sectionItems.innerHTML = `<div class="carts__warning">
                              <h2 class="carts__warning-text"> Ud. aún no tiene productos en su carrito. </h2>
                              <button class="carts__button" onClick="history.back()">Atrás</button>
                            </div>
                              `;
                            
  itemsContainer.appendChild(sectionItems);  
  sectionButtons.classList.add( 'hidden');
  buttonsCartContainer ();
  iconCartRender();
};


// Render de elementos del carrito
function placeItem () {
  const cartProducts = document.querySelector('.carts__products');

  cart.forEach( ( obj ) => {
    const productContainer = document.createElement('section')
    productContainer.className = 'carts__product-container'
    
    productContainer.innerHTML = `
      <div class="carts__product-title">
        <button class="carts__btn remove" tagItem="${obj.id}">X</button>
        <img src=${obj.img} title=${obj.name} class="carts__img">
        <p carts__element-name>${obj.name}</p>
      </div>

      <p class="carts__price">USD ${obj.price}</p>

      <div class="carts__quantity"> 
        <button class="carts__btn decrease" tagItem="${obj.id}">-</button>
        <p class="carts__quantity-valor" id="${obj.id}">${obj.ammount}</p>
        <button class="carts__btn increase" tagItem="${obj.id}">+</button>
      </div>

      <p class="carts__total-item" totalTag="${obj.id}">USD ${(obj.price * obj.ammount)}</p>
    `;
    
     cartProducts.appendChild(productContainer);
    iconCartRender();
  });


  document.querySelectorAll('.remove').forEach(item => {
    item.addEventListener('click', removeItem)
  });
  document.querySelectorAll('.increase').forEach(item => {
    item.addEventListener('click', increaseItem)
  });
  document.querySelectorAll('.decrease').forEach(item => {
    item.addEventListener('click', decreaseItem)
  });
  totalAllItems ()
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
      iconCartRender();
      items = localStorage.length != 0 ? itemCartContainer() : emptyWarning();
      Swal.fire({
        title: 'Eliminado',
        text: 'Los elementos de tu carrito fueron eliminados',
        icon: 'success',
        color: '#fff',
        background: '#202020',
        confirmButtonColor: '#FF0001',})
    }
  });
}



// usar seion storage