const iconCarrito = document.querySelector("#icon-carrito")
const lateralCarrito = document.querySelector(".card-lateral")
const closeCarrito = document.querySelector(".close-cart")


iconCarrito.addEventListener("click", () => {
    lateralCarrito.classList.add("active")
})


closeCarrito.addEventListener("click", () => {
    lateralCarrito.classList.remove("active")
})