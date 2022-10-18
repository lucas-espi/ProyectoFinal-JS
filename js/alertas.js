

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















