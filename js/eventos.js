
// conector con la seccion #container-zapateria del index.html
const contenedorZapateria = document.querySelector("#container-zapateria")
// conector con la seccion #container-carrito del index.html
const contenedorCarrito = document.querySelector("#container-carrito")
// conector con el button #vaciar-carrito del index.html => section carrito
const vaciarCarrito = document.querySelector("#vaciar-carrito")
// conector con el parrafo #icon-carrito del index.html => section carrito
const contadorCarrito = document.querySelector("#contador-carrito")


// Iteracion de cada objeto del array para crearlos en el HTLM

zapateria.forEach((prod) => {
    let div = document.createElement("div")
    div.setAttribute ("class", "card-prod")
    div.innerHTML =  
        `<img src=${prod.images} alt="${prod.producto}">
        <h3>${prod.producto}</h3>
        <p>Categoria: ${prod.categoria}</p>
        <p class="precio.zapateria">$${prod.precio}</p>
        <button id="btn${prod.id}">agregar al <i class="fa-solid fa-cart-shopping"></i></button>
        `
    contenedorZapateria.appendChild(div)

    // Evento al boton - seleccionar por id
    const botonCard = document.getElementById(`btn${prod.id}`)
    botonCard.addEventListener("click", ()=> {
    agregarCarrito(prod.id)
    // console.log(carrito)
    })
})

// ---------------CARRITO ---------------

// Funcion para agregar al carrio
const agregarCarrito = (prodID) => {
    let cardId = zapateria.find(prod => prod.id === prodID)
    carrito.push(cardId)
    iterarCarrito()
}

// Funcion para eliminar del carrio
const eliminarCarrito = (prodID) => {
    let cardId = carrito.find((prod) => prod.id === prodID)
    let unidad = carrito.indexOf(cardId)
    carrito.splice(unidad, 1)
    iterarCarrito()
}

// Evento button vaciar carrito
vaciarCarrito.addEventListener("click", ()=>{
    carrito.length = 0
    iterarCarrito()
})

// Evento contador carrito


// Iteración para sumar al carrio objeos seleccionados por ID
const iterarCarrito = () => {
    contenedorCarrito.innerHTML="" // para borrar el nodo y que no se acumulen

    carrito.forEach((prod)=> {
        let div = document.createElement("div")
        div.setAttribute ("class", "card-carrito")
        div.innerHTML = 
            `<img src=${prod.images} alt="${prod.producto}">
            <h3>${prod.producto}</h3>
            <p class="precio.zapateria">$${prod.precio}</p>
            <p>Canidad:<span id="cantidad">${prod.cantidad}</span> </p>
            <button id="btn-eliminar${prod.id}" class="btn_eliminar-carrito"> Eliminar <i class="fa-solid fa-trash-can"></i></button>
            `
            // agregar la fincion al boton------------------------------------
        contenedorCarrito.appendChild(div)
        
        // Captura boton eliminar carrito
        const btnEliminarCarrito = document.querySelector(`#btn-eliminar${prod.id}`)
        btnEliminarCarrito.addEventListener("click", ()=> { eliminarCarrito(prod.id)}) //Evento para eliminar por id
    })  
    contadorCarrito.innerHTML = carrito.length
}



