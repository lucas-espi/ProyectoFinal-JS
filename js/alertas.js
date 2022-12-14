

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

// conector con boton finalizar Compra
const finalizarCompra = document.querySelector(".finalizar")

finalizarCompra.addEventListener("click", ()=> {
 
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
        boxComprar.classList.remove("action")  
        Swal.fire({
          title: "Felicitaciones por su compra!",
          text: "Se enviara la factura al email ingresado",
          color:'white',
          background:"#96AAE0",
          timerProgressBar:true,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
})










