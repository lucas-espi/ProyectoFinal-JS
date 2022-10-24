// Para abrir y cerrar el carrito.

const iconCarrito = document.querySelector("#icon-carrito")
const lateralCarrito = document.querySelector(".card-lateral")
const closeCarrito = document.querySelector(".close-cart")
const btnComprar = document.querySelector("#btn-comprar")
const boxComprar = document.querySelector(".box-compra")
const closeCompra = document.querySelector(".close-compra")

iconCarrito.addEventListener("click", () => {
    lateralCarrito.classList.add("active")
})

closeCarrito.addEventListener("click", () => {
    lateralCarrito.classList.remove("active")
})

btnComprar.addEventListener("click", ()=> {
    boxComprar.classList.add("action")
})

closeCompra.addEventListener("click", ()=> {
    boxComprar.classList.remove("action")
})