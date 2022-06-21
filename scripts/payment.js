let cart = localStorage.length != 0 ? JSON.parse( localStorage.getItem('cartData') ) : [];
let counter = 0;

// Renderizado de icono de carrito
function iconCartRender() {
  counter = localStorage.length != 0 ? (cart.map( obj => obj.ammount ).reduce( ( a, b ) => a + b )) : 0;

  const cartCounter = document.querySelector('.payment__cart-link');
  cartCounter.innerHTML = `<ion-icon name="cart-outline"></ion-icon> Carrito de compras (${counter})`;
};

// Ejecución de renderizado
iconCartRender();

// Mensaje de venta aprobada
const paymentBtn = document.getElementById('payBtn');
paymentBtn.addEventListener('click', () => {
  Swal.fire({
    title: 'Su compra fue procesada',
    text: 'Se le enviará un comprobante de pago a su correo electrónico',
    icon: 'success',
    color: '#fff',
    background: '#202020',
    confirmButtonColor: '#FF0001',
  })
});

// Camnio de lista de ciudades
const country = document.getElementById('countryShip');
const city = document.getElementById('cityShip');

country.addEventListener('click', (e) => {
  if (e.target.value == 'peru') {
    city.innerHTML = `<option value="default">------</option>
                      <option value="cityOne">Cusco</option>
                      <option value="cityTwo">Huancayo</option>
                      <option value="cityThree">Huaraz</option>
                      <option value="cityFour">Lima</option>
                      <option value="cityFive">Piura</option>`
  } else if (e.target.value == 'chile' ) {
    city.innerHTML = `<option value="default">------</option>
                      <option value="cityOne">Puente Alto</option>
                      <option value="cityTwo">Maipú</option>
                      <option value="cityThree">Santiago</option>
                      <option value="cityFour">La Florida</option>
                      <option value="cityFive">Antofagasta</option>`
  } else if (e.target.value == 'argentina' ) {
    city.innerHTML = `<option value="default">------</option>
                      <option value="cityOne">Buenos Aires</option>
                      <option value="cityTwo">Córdoba</option>
                      <option value="cityThree">Rosario</option>
                      <option value="cityFour">Mar del Plata</option>
                      <option value="cityFive">Salta</option>`
  } else if (e.target.value == 'colombia' ) {
    city.innerHTML = `<option value="default">------</option>
                      <option value="cityOne">Cartagena</option>
                      <option value="cityTwo">Cali</option>
                      <option value="cityThree">Santa Marta</option>
                      <option value="cityFour">Barranquilla</option>
                      <option value="cityFive">San Gil</option>`
  } else {
    city.innerHTML = `<option value="default">------</option>`
  }
});



