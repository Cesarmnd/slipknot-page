let mascaras = [
  { id: 0, nombre: 'Shawn Crahan', precio: 25, img: '../images/masks/clownmask.png' },
  { id: 1, nombre: 'Craig Jones', precio: 25, img: '../images/masks/craigmask.png' },
  { id: 2, nombre: 'Mick Thomson', precio: 25, img: '../images/masks/mickmask.png' },
  { id: 3, nombre: 'Corey Taylor', precio: 25, img: '../images/masks/coreymask.png' },
  { id: 4, nombre: 'Sid Wilson', precio: 25, img: '../images/masks/sidmask.png' },
  { id: 5, nombre: 'Jim Root', precio: 25, img: '../images/masks/jimmask.png' },
  { id: 6, nombre: 'Alessandro Venturella', precio: 25, img: '../images/masks/vmanmask.png' },
  { id: 7, nombre: 'Jay Weignberg', precio: 25, img: '../images/masks/jaymask.png' },
  { id: 8, nombre: 'Michael Pfaff', precio: 25, img: '../images/masks/tortillamask.png' }
];

let prendas = [
  { id: 9, nombre: 'Polo Gris', precio: 15, img: '../images/store/shirt.png' },
  { id: 10, nombre: 'Polo Artwork de Iowa', precio: 15, img: '../images/store/slipknotfront.png' },
  { id: 11, nombre: 'Polera Negra Iowa', precio: 15, img: '../images/store/SLIPKNOTIOWA20HOODIEFRONT.png' },
  { id: 12, nombre: 'Traje de la banda', precio: 25, img: '../images/store/traje.png' },
  { id: 13, nombre: 'Sombrero Negro', precio: 25, img: '../images/store/sombreronegro.png' },
  { id: 15, nombre: 'Polera Negra con Logo', precio: 25, img: '../images/store/poleralogo.png' }
];

let polainas = [
  { id: 16, nombre: 'Shawn Crahan', precio: 20, img: '../images/store/CLOWNNECKGAITER.png' },
  { id: 17, nombre: 'Craig Jones', precio: 20, img: '../images/store/CRAIGNECKGAITER.png' },
  { id: 18, nombre: 'Mick Thomson', precio: 20, img: '../images/store/MICKNECKGAITER.png' },
  { id: 19, nombre: 'Corey Taylor', precio: 20, img: '../images/store/COREYNECKGAITER.png' },
  { id: 20, nombre: 'Sid Wilson', precio: 20, img: '../images/store/SIDNECKGAITER.png' },
  { id: 21, nombre: 'Jim Root', precio: 20, img: '../images/store/JIMNECKGAITER.png' },
  { id: 22, nombre: 'Alessandro Venturella', precio: 20, img: '../images/store/V-MANNECKGAITER.png' },
  { id: 23, nombre: 'Jay Weignberg', precio: 20, img: '../images/store/JAYNECKGAITER.png' },
  { id: 24, nombre: 'Michael Pfaff', precio: 20, img: '../images/store/NEWGUYNECKGAITER.png' }
];

let miscelanea = [
  { id: 25, nombre: 'Album "We are not your kind"', precio: 8, img: '../images/store/cd.png' },
  { id: 26, nombre: 'Rompecabezas de Iowa', precio: 8, img: '../images/store/Slipknot_Iowa_3Dpuzzle.png' },
  { id: 27, nombre: 'Rompecabezas de Vol.3', precio: 8, img: '../images/store/Puzzle.png' },
  { id: 28, nombre: 'Freesbee Negro', precio: 8, img: '../images/store/freesbeeblack.png' },
  { id: 29, nombre: 'Freesbee Rojo', precio: 8, img: '../images/store/frissbeered.png' }
];

const masksContainer = document.querySelector('.mask');
const clothesContainer = document.querySelector('.cloth');
const necksContainer = document.querySelector('.neck');
const miscContainer = document.querySelector('.misc');

mascaras.forEach( obj => {
  const item = document.createElement('div');
  item.className = 'store__item-container';
  item.innerHTML = `<h3 class="store__name">${obj.nombre}</h3>
                    <img src=${obj.img}>
                    <p class="store__price">USD ${obj.precio}</p>
                    <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
                    value="Agregar al carrito"></input>`;
  masksContainer.appendChild(item);
});


prendas.forEach( obj => {
  const item = document.createElement('div');
  item.className = 'store__item-container';
  item.innerHTML = `<h3 class="store__name">${obj.nombre}</h3>
                    <img src=${obj.img}>
                    <p class="store__price">USD ${obj.precio}</p>
                    <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
                    value="Agregar al carrito"></input>`;
  clothesContainer.appendChild(item);
});

polainas.forEach( obj => {
  const item = document.createElement('div');
  item.className = 'store__item-container';
  item.innerHTML = `<h3 class="store__name">${obj.nombre}</h3>
                    <img src=${obj.img}>
                    <p class="store__price">USD ${obj.precio}</p>
                    <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
                    value="Agregar al carrito"></input>`;
  necksContainer.appendChild(item);
});

miscelanea.forEach( obj => {
  const item = document.createElement('div');
  item.className = 'store__item-container';
  item.innerHTML = `<h3 class="store__name">${obj.nombre}</h3>
                    <img src=${obj.img}>
                    <p class="store__price">USD ${obj.precio}</p>
                    <input class="store__btn add-cart cart1" type="button" name="addCart" id="${obj.id}"
                    value="Agregar al carrito"></input>`;
  miscContainer.appendChild(item);
});