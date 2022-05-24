//  Lista de productos
let products = [
  // Máscaras
  { id: 0, stock:10, nombre: 'Shawn Crahan', precio: 25, img: '../images/masks/clownmask.png' },
  { id: 1, stock:10, nombre: 'Craig Jones', precio: 25, img: '../images/masks/craigmask.png' },
  { id: 2, stock:10, nombre: 'Mick Thomson', precio: 25, img: '../images/masks/mickmask.png' },
  { id: 3, stock:10, nombre: 'Corey Taylor', precio: 25, img: '../images/masks/coreymask.png' },
  { id: 4, stock:10, nombre: 'Sid Wilson', precio: 25, img: '../images/masks/sidmask.png' },
  { id: 5, stock:10, nombre: 'Jim Root', precio: 25, img: '../images/masks/jimmask.png' },
  { id: 6, stock:10, nombre: 'Alessandro Venturella', precio: 25, img: '../images/masks/vmanmask.png' },
  { id: 7, stock:10, nombre: 'Jay Weignberg', precio: 25, img: '../images/masks/jaymask.png' },
  { id: 8, stock:10, nombre: 'Michael Pfaff', precio: 25, img: '../images/masks/tortillamask.png' },

  // Prendas
  { id: 9, stock:10, nombre: 'Polo Gris', precio: 15, img: '../images/store/shirt.png' },
  { id: 10, stock:10, nombre: 'Polo Artwork de Iowa', precio: 15, img: '../images/store/slipknotfront.png' },
  { id: 11, stock:10, nombre: 'Polera Negra Iowa', precio: 15, img: '../images/store/SLIPKNOTIOWA20HOODIEFRONT.png' },
  { id: 12, stock:10, nombre: 'Traje de la banda', precio: 25, img: '../images/store/traje.png' },
  { id: 13, stock:10, nombre: 'Sombrero Negro', precio: 25, img: '../images/store/sombreronegro.png' },
  { id: 15, stock:10, nombre: 'Polera Negra con Logo', precio: 25, img: '../images/store/poleralogo.png' },

  // Polainas
  { id: 16, stock:10, nombre: 'Shawn Crahan', precio: 20, img: '../images/store/CLOWNNECKGAITER.png' },
  { id: 17, stock:10, nombre: 'Craig Jones', precio: 20, img: '../images/store/CRAIGNECKGAITER.png' },
  { id: 18, stock:10, nombre: 'Mick Thomson', precio: 20, img: '../images/store/MICKNECKGAITER.png' },
  { id: 19, stock:10, nombre: 'Corey Taylor', precio: 20, img: '../images/store/COREYNECKGAITER.png' },
  { id: 20, stock:10, nombre: 'Sid Wilson', precio: 20, img: '../images/store/SIDNECKGAITER.png' },
  { id: 21, stock:10, nombre: 'Jim Root', precio: 20, img: '../images/store/JIMNECKGAITER.png' },
  { id: 22, stock:10, nombre: 'Alessandro Venturella', precio: 20, img: '../images/store/V-MANNECKGAITER.png' },
  { id: 23, stock:10, nombre: 'Jay Weignberg', precio: 20, img: '../images/store/JAYNECKGAITER.png' },
  { id: 24, stock:10, nombre: 'Michael Pfaff', precio: 20, img: '../images/store/NEWGUYNECKGAITER.png' },

  // Miscelanea
  { id: 25, stock:10, nombre: 'Album "We are not your kind"', precio: 8, img: '../images/store/cd.png' },
  { id: 26, stock:10, nombre: 'Rompecabezas de Iowa', precio: 8, img: '../images/store/Slipknot_Iowa_3Dpuzzle.png' },
  { id: 27, stock:10, nombre: 'Rompecabezas de Vol.3', precio: 8, img: '../images/store/Puzzle.png' },
  { id: 28, stock:10, nombre: 'Freesbee Negro', precio: 8, img: '../images/store/freesbeeblack.png' },
  { id: 29, stock:10, nombre: 'Freesbee Rojo', precio: 8, img: '../images/store/frissbeered.png' }
];

// Creación de arrays
let lista = [];
let cart =[];

// Selección de contenedores
const masksContainer = document.querySelector('.mask');
const clothesContainer = document.querySelector('.cloth');
const necksContainer = document.querySelector('.neck');
const miscContainer = document.querySelector('.misc');


// Función para añadir al carrito
function addCart(e) {
  let itemId = e.target.id;
  let foundItem = cart.find(item => item.id === products[itemId].id);

  // Evitar items repetidos
  (!foundItem && products[itemId].stock > 0) ? 
      ( products[itemId].ammount = 1,
        products[itemId].stock--,
        cart.push(products[itemId]),
        alert('Su producto fue añadido') )
    
  : (foundItem && products[itemId].stock > 0) ?
      ( products[itemId].ammount++,
        products[itemId].stock--,
        alert('Su producto fue añadido') )

  : alert('No hay stock disponible');

  // Añadido al local Storage
  let carritoJson = JSON.stringify(cart);
  localStorage.setItem('carrito', carritoJson);
}

// Agregado de eventos al botón carrito
let cartBtn = document.getElementById('cartItems');
cartBtn.addEventListener('click', showCart)

// Función para mostrar productos
function showCart () {
  (cart.length === 0) && alert('Aún no tiene items en su carrito');
  lista = [];
  let newCart = JSON.parse(localStorage.getItem('carrito'));
  newCart.forEach(( object) => 
    lista.push(`Nombre: ${object.nombre} => Precio: ${object.precio} => Cantidad: ${object.ammount};
`));

// Muestreo temporal de productos
  alert(`Ud tiene los siguientes productos en su carrito:
${lista.join('')}`);
}

// Renderizado de productos y carrito
function render() {
  products.forEach( obj => {
    const item = document.createElement('div');
    item.className = 'store__item-container';
    item.innerHTML = `<h3 class="store__name">${obj.nombre}</h3>
                      <img src=${obj.img}>
                      <p class="store__price">USD ${obj.precio}</p>
                      <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
                      value="Agregar al carrito"></input>`;
  
    // Selección de sección de renderizado 
    obj.id < 9 ? masksContainer.appendChild(item)
    : obj.id < 15 ?  clothesContainer.appendChild(item)
    : obj.id < 24 ? necksContainer.appendChild(item)
    : miscContainer.appendChild(item)
  
    // Agregado de evento a los botones
    document.getElementById(obj.id).addEventListener('click', addCart);
  }); 

  // Importado del carrito de compras del localStorage
  localStorage.length ===0 ? cart = JSON.parse(localStorage.getItem('carrito')) : cart =[]
}


// Inicio de programa
render()

