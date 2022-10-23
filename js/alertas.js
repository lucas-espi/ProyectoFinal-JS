

// Alertas

// Agregado al carrito
const alertaCarrito = () => {
    Swal.fire({
        position: 'top-end',
        showConfirmButton: false,
        timer: 900,
        timerProgressBar:true,
        background: '#bd90e0',
        html:'<div class= "alerta"><p>Producto agregado correctamente! </p><i class="fa-solid fa-cart-shopping"></i> </div>'

      })
}

// Producto no encontrado

const alertaNoEncontrado = () => {
    Swal.fire({
        position: 'top-end',
        showConfirmButton: false,
        timer: 900,
        timerProgressBar:true,
        background: '#D65DB1',
        html:'<div class= "alerta_no-encontrado"><p>Producto no encontrado! </p><i class="fa-solid fa-circle-exclamation"></i></div>'

      })
}

// Producto no encontrado html
const noResultados = () => { 
  contenedorZapateria.innerHTML="";
  let ops = `<div class="no-encontrado">
                <h1>¡Ups...!</h1>
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>No hay resultados.</p>
             </div>`
  contenedorZapateria.innerHTML=ops
  }
  
// Alertas del carro de compras

// conector con boton vaciar carrito
const borrarCarrito = document.querySelector("#vaciar-carrito")
 
borrarCarrito.addEventListener("click", ()=> {
 
    Swal.fire({
        title: "Seguro quieres borrar todo el carrito?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#E4005D',
        cancelButtonColor: '#58D2AE',
        confirmButtonText: 'Eliminar!',
        background:"#454555",
        color:'white',
      }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = 0
            iterarCarrito()  
        }
      })
})


// conector con boton comprar
const btnComprar = document.querySelector("#btn-comprar")
 
btnComprar.addEventListener("click", ()=> {
 
    Swal.fire({
        title: "Confirmar compra!",
        color:'white',
        showCancelButton: true,
        confirmButtonColor: '#3993C8',
        cancelButtonColor: '#A62D6D',
        confirmButtonText: 'confirmar',
        background:"#96AAE0",
      }).then((result) => {
        if (result.isConfirmed) {
          carrito.length = 0
          iterarCarrito()  
          Swal.fire({
            title: "Felicitaciones por su compra!",
            text: "Le estara llegando la factura por email",
            color:'white',
            background:"#96AAE0",
            timerProgressBar:true,
            showConfirmButton: false,
            timer: 2000,
          })
        }
      })
})















