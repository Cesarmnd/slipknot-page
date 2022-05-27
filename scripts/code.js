//  Lista de productos
let products =[];

class Product  {
  constructor ( id, stock, name, price, img ) {
    this.id = id;
    this.stock = stock;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

function objectGenerator ( id, stock, name, price, img ) {
    const item = new Product (id, stock, name, price, img);
    products.push(item);
}

objectGenerator(0,10,'Shawn Crahan', 25,'../images/masks/clownmask.png')
objectGenerator(1,1,'Craig Jones', 25,'../images/masks/craigmask.png')
objectGenerator(2,1,'Mick Thomson', 25,'../images/masks/mickmask.png')
objectGenerator(3,10,'Corey Taylor', 25,'../images/masks/coreymask.png')
objectGenerator(4,10,'Sid Wilson', 25,'../images/masks/sidmask.png')
objectGenerator(5,10,'Jim Root', 25,'../images/masks/jimmask.png')
objectGenerator(6,10,'Alessandro Venturella', 25,'../images/masks/vmanmask.png')
objectGenerator(7,10,'Jay Weignberg', 25,'../images/masks/jaymask.png')
objectGenerator(8,10,'Michael Pfaff', 25,'../images/masks/tortillamask.png')

objectGenerator(9,10,'Polo Gris', 15,'../images/store/shirt.png')
objectGenerator(10,10,'Polo Artwork de Iowa', 15,'../images/store/slipknotfront.png')
objectGenerator(11,10,'Polera Negra Iowa', 15,'../images/store/SLIPKNOTIOWA20HOODIEFRONT.png')
objectGenerator(12,10,'Traje de la banda', 15,'../images/store/traje.png')
objectGenerator(13,10,'Sombrero Negro', 15,'../images/store/sombreronegro.png')
objectGenerator(14,10,'Polera Negra con Logo', 15,'../images/store/poleralogo.png')

objectGenerator(15,10,'Shawn Crahan', 20,'../images/store/CLOWNNECKGAITER.png')
objectGenerator(16,10,'Craig Jones', 20,'../images/store/CRAIGNECKGAITER.png')
objectGenerator(17,10,'Mick Thomson', 20,'../images/store/MICKNECKGAITER.png')
objectGenerator(18,10,'Corey Taylor', 20,'../images/store/COREYNECKGAITER.png')
objectGenerator(19,10,'Sid Wilson', 20,'../images/store/SIDNECKGAITER.png')
objectGenerator(20,10,'Jim Root', 20,'../images/store/JIMNECKGAITER.png')
objectGenerator(21,10,'Alessandro Venturella', 20,'../images/store/V-MANNECKGAITER.png')
objectGenerator(22,10,'Jay Weignberg', 20,'../images/store/JAYNECKGAITER.png')
objectGenerator(23,10,'Michael Pfaff', 20,'../images/store/NEWGUYNECKGAITER.png')

objectGenerator(24,10,'Album "We are not your kind"', 8,'../images/store/cd.png')
objectGenerator(25,10,'Rompecabezas de Iowa', 8,'../images/store/Slipknot_Iowa_3Dpuzzle.png')
objectGenerator(26,10,'Rompecabezas de Vol.3', 8,'../images/store/Puzzle.png')
objectGenerator(26,10,'Freesbee Negro', 8,'../images/store/Puzzle.png')
objectGenerator(27,10,'Freesbee Rojo', 8,'../images/store/freesbeeblack.png')

console.log(products);

// Creación de arrays
let lista = [];
let cart = localStorage.length != 0 ? JSON.parse(localStorage.getItem('carrito')) : [];

// Función para añadir al carrito
function addCart(e) {
  let itemId = e.target.id;
  let foundItem = cart.find(item => item.id === products[itemId].id);

  // Evitar items repetidos
  (!foundItem && products[itemId].stock > 0) ? 
      ( products[itemId].ammount = 1,
        products[itemId].stock--,
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
}

// Renderizado de productos y carrito
function render() {
  // Selección de contenedores
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
}


// Inicio de programa
render()




























// // Creación de arrays
// let lista = [];
// let cart =[];

// // Selección de contenedores
// const masksContainer = document.querySelector('.mask');
// const clothesContainer = document.querySelector('.cloth');
// const necksContainer = document.querySelector('.neck');
// const miscContainer = document.querySelector('.misc');


// // Función para añadir al carrito
// function addCart(e) {
//   let itemId = e.target.id;
//   let foundItem = cart.find(item => item.id === products[itemId].id);

//   // Evitar items repetidos
//   (!foundItem && products[itemId].stock > 0) ? 
//       ( products[itemId].ammount = 1,
//         products[itemId].stock--,
//         cart.push(products[itemId]),
//         alert('Su producto fue añadido') )
    
//   : (foundItem && products[itemId].stock > 0) ?
//       ( products[itemId].ammount++,
//         products[itemId].stock--,
//         alert('Su producto fue añadido') )

//   : alert('No hay stock disponible');

//   // Añadido al local Storage
//   let carritoJson = JSON.stringify(cart);
//   localStorage.setItem('carrito', carritoJson);
// }

// // Agregado de eventos al botón carrito
// let cartBtn = document.getElementById('cartItems');
// cartBtn.addEventListener('click', showCart)

// // Función para mostrar productos
// function showCart () {
//   (cart.length === 0) && alert('Aún no tiene items en su carrito');
//   lista = [];
//   let newCart = JSON.parse(localStorage.getItem('carrito'));
//   newCart.forEach(( object) => 
//     lista.push(`Nombre: ${object.nombre} => Precio: ${object.precio} => Cantidad: ${object.ammount};
// `));

// // Muestreo temporal de productos
//   alert(`Ud tiene los siguientes productos en su carrito:
// ${lista.join('')}`);
// }

// // Renderizado de productos y carrito
// function render() {
//   products.forEach( obj => {
//     const item = document.createElement('div');
//     item.className = 'store__item-container';
//     item.innerHTML = `<h3 class="store__name">${obj.nombre}</h3>
//                       <img src=${obj.img}>
//                       <p class="store__price">USD ${obj.precio}</p>
//                       <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
//                       value="Agregar al carrito"></input>`;
  
//     // Selección de sección de renderizado 
//     obj.id < 9 ? masksContainer.appendChild(item)
//     : obj.id < 15 ?  clothesContainer.appendChild(item)
//     : obj.id < 24 ? necksContainer.appendChild(item)
//     : miscContainer.appendChild(item)
  
//     // Agregado de evento a los botones
//     document.getElementById(obj.id).addEventListener('click', addCart);
//   }); 

//   // Importado del carrito de compras del localStorage
//   localStorage.length ===0 ? cart = JSON.parse(localStorage.getItem('carrito')) : cart =[]
// }


// // Inicio de programa
// render()

