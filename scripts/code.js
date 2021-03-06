// Arrays
let products =[]; // Lista total de productos
let cart = localStorage.length != 0 ? JSON.parse( localStorage.getItem('cartData') ) : []; // Productos del carrito

// Variables
let counter = localStorage.length != 0 ? (cart.map( obj => obj.ammount ).reduce( ( a, b ) => a + b )) : 0; // Número total de elementos en el carrito
  
// Creación de class Product
class Product  {
  constructor ( id, stock, name, price, img ) {
    this.id = id;
    this.stock = stock;
    this.name = name;
    this.price = price;
    this.img = img;
  }
};

// Llamado de productos desde el JSON
const callFetch = async () => {
  const resp = await fetch('../scripts/products.json');
  const data = await resp.json();

  data.forEach((item) => {
    products.push(new Product (
      item.id,
      item.stock,
      item.nombre,
      item.precio,
      item.img));
  });
  iconCartRender();
  itemsRender();
};

/* Funciones de renderizado */

// Botón para ver carrito
function iconCartRender() {
  counter = localStorage.length != 0 ? (cart.map( obj => obj.ammount ).reduce( ( a, b ) => a + b )) : 0; // Actualiza el valor del counter al añadir o quitar items

  const cartCounter = document.querySelector('.store__cart-link');
  cartCounter.innerHTML = `<ion-icon name="cart-outline"></ion-icon> Carrito (${counter})`;
}

// Galería de productos
function itemsRender() {
  // Contenedores
  const masksContainer = document.querySelector('.mask');
  const clothesContainer = document.querySelector('.cloth');
  const necksContainer = document.querySelector('.neck');
  const miscContainer = document.querySelector('.misc');
  
  products.forEach( obj => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'store__item-container';
    itemContainer.innerHTML = `<h3 class="store__name">${obj.name}</h3>
                              <img src=${obj.img}>
                              <p class="store__price">USD ${obj.price}</p>
                              <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}" value="Agregar al carrito"></input>`;
  
    // Selección de contenedor de renderizado 
    obj.id < 9 ? masksContainer.appendChild(itemContainer)
    : obj.id < 15 ?  clothesContainer.appendChild(itemContainer)
    : obj.id < 24 ? necksContainer.appendChild(itemContainer)
    : miscContainer.appendChild(itemContainer);
  
    // Agregado de eventos a los botones
    document.getElementById(obj.id).addEventListener('click', addCart);
  });
};

/* Funciones de modificacián */

// Añadir al carrito
function addCart(e) {
  let itemId = e.target.id;
  let foundItem = cart.find(item => item.id === products[itemId].id);

  // Evitar items repetidos
  (!foundItem && products[itemId].stock > 0) ? 

      ( products[itemId].stock--,
        cart.push(products[itemId]),
        cart.find(item => item.id === products[itemId].id).ammount = 1,
        Swal.fire({
          color: '#fff',
          text: 'Su producto fue añadido',
          background: '#202020',
          confirmButtonColor: '#FF0001',
        }))
    
  : (foundItem && foundItem.stock > 0) ?
      ( products[itemId].stock--,
        cart.find(item => item.id === products[itemId].id).ammount++,
        Swal.fire({
          color: '#fff',
          text: 'Su producto fue añadido',
          background: '#202020',
          confirmButtonColor: '#FF0001',
        }))
        
  : Swal.fire({
    color: '#fff',
      icon: 'error',
      iconColor: 'f0f',
      title: 'Oops...',
      text: 'No hay stock disponible',
      background: '#202020',
      confirmButtonColor: '#FF0001',
    });

  // Añadido al local Storage
  let cartDataJson = JSON.stringify(cart);
  localStorage.setItem('cartData', cartDataJson);

  // Actualización del total de productos
  iconCartRender();
};

// Inicio de programa
callFetch();