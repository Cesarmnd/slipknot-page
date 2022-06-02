// Creación de arrays
let products =[];
let lista = [];
let cart = localStorage.length != 0 ? JSON.parse(localStorage.getItem('carrito')) : [];

// Variables
let counter = 0; 

// Creación de class Product
class Product  {
  constructor ( id, stock, name, price, img ) {
    this.id = id;
    this.stock = stock;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

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
    })

    render();
}

// Renderizado de productos y carrito
function render() {
  // Selección de contenedores
  const masksContainer = document.querySelector('.mask');
  const clothesContainer = document.querySelector('.cloth');
  const necksContainer = document.querySelector('.neck');
  const miscContainer = document.querySelector('.misc');
  const cartCounter = document.querySelector('.store__cart-link');

  const counterContainer = document.createElement('span');
  counterContainer.textContent = `(${counter})`;

  cartCounter.appendChild(counterContainer);

  products.forEach( obj => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'store__item-container';
    itemContainer.innerHTML = `<h3 class="store__name">${obj.name}</h3>
                      <img src=${obj.img}>
                      <p class="store__price">USD ${obj.price}</p>
                      <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
                      value="Agregar al carrito"></input>`;
  
    // Selección de sección de renderizado 
    obj.id < 9 ? masksContainer.appendChild(itemContainer)
    : obj.id < 15 ?  clothesContainer.appendChild(itemContainer)
    : obj.id < 24 ? necksContainer.appendChild(itemContainer)
    : miscContainer.appendChild(itemContainer)
  
    // Agregado de eventos a los botones
    document.getElementById(obj.id).addEventListener('click', addCart);
  }); 
};

// Función para añadir al carrito
function addCart(e) {
  let itemId = e.target.id;
  let foundItem = cart.find(item => item.id === products[itemId].id);

  // Evitar items repetidos
  (!foundItem && products[itemId].stock > 0) ? 
      ( products[itemId].ammount = 1,
        products[itemId].stock--,
        counter++, 
        console.log(counter),
        cart.push(products[itemId]),
        Swal.fire({
          color: '#fff',
          text: 'Su producto fue añadido',
          background: '#202020',
          confirmButtonColor: '#FF0001',
        })
      )
    
  : (foundItem && products[itemId].stock > 0) ?
      ( products[itemId].ammount++,
        products[itemId].stock--,
        counter++, 
        console.log(counter),
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
  let carritoJson = JSON.stringify(cart);
  localStorage.setItem('carrito', carritoJson);
};

// Inicio de programa.
callFetch();
