
// conector con la seccion #container-zapateria del index.html - div filtro
const contenedorZapateria = document.querySelector("#box-zapateria")
// conector con la seccion #container-carrito del index.html
const contenedorCarrito = document.querySelector("#box-carrito")
// conector con el button #vaciar-carrito del index.html => section carrito
const vaciarCarrito = document.querySelector("#vaciar-carrito")
// conector con el parrafo #contador-carrito del index.html => section carrito
const contadorCarrito = document.querySelector("#contador-carrito")
// conector con el parrafo #precio-carrito del index.html => section carrito
const precioCarrito = document.querySelector("#precio-carrito")
// Filtro busqueda
const inputFiltrar = document.querySelector("#input-filtro")
// Filtro precio
const filterPrecio = document.querySelector(".range-precio")
// Filtro categoria
const filterCategoria = document.querySelector(".select-categoria")





// -------------CONEXION FEETCH CON JSON LOCAL---------------------------
const zapateria = []

const cargarContenido  = async ()=> {

    try {
        const response = await fetch(URL)
        const data = await response.json()
        zapateria.push(...data)
        
        llamarFiltro(zapateria)
        //filtroPrecio(zapateria)
        //filtroCategoria(zapateria)

    } catch (error) {
        Swal.fire ({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al cargar los productos'
        })
    }  
}
cargarContenido()

// ---------------------CONTENEDOR ZAPATERIA-----------------------------

// Funcion que itera al json
const contieneZapateria = (array) =>{  
    contenedorZapateria.innerHTML=""
    array.forEach((prod) => {
        let div = document.createElement("div")
        div.setAttribute ("class", "card-prod")
                div.innerHTML +=  
                    `<img class="imagen-card" src=${prod.imagen} alt="${prod.producto}">
                    <h3 class="h3-card">${prod.producto}</h3>
                    <p class="categoria-card">Categoria: ${prod.categoria}</p>
                    <p class="precio-card"><span class="precio-color">$${prod.precio}</span></p>
                    <button id="btn${prod.id}" class="btn-card">agregar al <i class="fa-solid fa-cart-shopping"></i></button>
                    `
                contenedorZapateria.appendChild(div)

        // Evento al boton - seleccionar por id
        const botonCard = document.getElementById(`btn${prod.id}`)
        botonCard.addEventListener("click", ()=> {
                 agregarCarrito(prod.id);
                 alertaCarrito() //Alerta para cada vez que se agrega un producto al carrito 
        });
    });
    //llamarFiltro(array)
}

// ----------------------------FILTRADO----------------------------------

// Funcion para encontrar por filtro
// Filtro por busqueda
const llamarFiltro = (array) => {
    contieneZapateria(array)

    inputFiltrar.addEventListener("input", ()=> {
        inputFiltrar.value = inputFiltrar.value.trim().toLocaleLowerCase()
        if (inputFiltrar.value !== "") {
            const valueFilter = array.filter( prod => prod.producto.includes(inputFiltrar.value))
            if (valueFilter.length > 0){ 
                contieneZapateria(valueFilter)
            }else if(valueFilter.length === 0){
                 alertaNoEncontrado()   
            } else{
                console.warn("aqui hay problemas")
            }
        } else {
            contieneZapateria(array)
        }
    })

}
let spanPrecio = document.querySelector(".precio-max") 
       //spanPrecio = filterPrecio.value
// Filtro por precio
const filtroPrecio = (array) =>{
    contieneZapateria(array)
    

    filterPrecio.addEventListener("click", ()=>{
        if (filterPrecio.value > 0) {
            const precioMax = array.filter(prod => prod.precio < filterPrecio.value);
            spanPrecio.innerHTML = filterPrecio.value
            if (precioMax.length > 0){ 
                contieneZapateria(precioMax)
            }else{
                 console.warn("aqui hay problemas")
            }
        } else {
            contieneZapateria(array)
        }
    })
}
// Filtro por categoria
const filtroCategoria = (array) => {
    filterCategoria.addEventListener("click", ()=>{
        if (filterCategoria.value === "zapatilla") {
            const catZapatilla = array.filter(prod => prod.categoria === filterCategoria.value);
            contieneZapateria(catZapatilla)
        } else if (filterCategoria.value === "ojota"){
            const catOjota = array.filter(prod => prod.categoria === filterCategoria.value);
            contieneZapateria(catOjota)
        } else {
            contieneZapateria(array)
        }
    })

}




// -----------------------------CARRITO -----------------------------

// Funcion para agregar al carrito
const agregarCarrito = (prodID) => {
    // contador productos en carrito
    const repite = carrito.some (prod => prod.id === prodID)

    if (repite) {
        let prod = carrito.map (prod => { //ver si con esta variable puedo atrapar la cantidad de todo el carro

            (prod.id === prodID) ? prod.cantidad ++ : console.warn("Revisa el error en función ahregarCarrito()")
        })
    } else {    
        let cardId = zapateria.find(prod => prod.id === prodID)
        carrito.push(cardId)
    }
    iterarCarrito()
}

// Funcion para eliminar del carrito
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



// Iteración para sumar al carrio objeos seleccionados por ID
const iterarCarrito = () => {
    contenedorCarrito.innerHTML="" // para borrar el nodo y que no se acumulen

    carrito.forEach((prod)=> {
        let div = document.createElement("div")
        div.setAttribute ("class", "card-carrito")
        div.innerHTML = 
            `<img class="imagen_card-carrito"  src=${prod.imagen} alt="${prod.producto}">
            <h3 class="h3-card">${prod.producto}</h3>
            <p class="precio-card">$${prod.precio}</p>
            <p class="cantidad-card">Canidad:<span id="cantidad">${prod.cantidad}</span> </p>
            <button id="btn-eliminar${prod.id}" class="btn_eliminar-carrito"> Eliminar <i class="fa-solid fa-trash-can"></i></button>
            `
            contenedorCarrito.appendChild(div)

        localStorage.setItem("carrito", JSON.stringify(carrito))
        
        // Captura boton eliminar carrito
        const btnEliminarCarrito = document.querySelector(`#btn-eliminar${prod.id}`)
        btnEliminarCarrito.addEventListener("click", ()=> { eliminarCarrito(prod.id)}) //Evento para eliminar por id
    
    })  

    // Revisar la forma de tomar todos los productos (repetidos)
    contadorCarrito.innerHTML = carrito.length
    precioCarrito.innerHTML= carrito.reduce((acc, prod)=> acc + prod.precio, 0)
}


// Local Storag
document.addEventListener("DOMContentLoaded", ()=> {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        iterarCarrito()
    }
})







