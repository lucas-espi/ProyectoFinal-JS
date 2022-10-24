
// conector con la seccion #box-zapateria del index.html - div filtro
const contenedorZapateria = document.querySelector("#box-zapateria")
// conector con la seccion #box-carrito del index.html
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
// Precio filtro
let spanPrecio = document.querySelector(".precio-max") 




// -------------CONEXION FEETCH CON JSON LOCAL---------------------------
const zapateria = []


const cargarContenido  = async ()=> {

    try {
        const response = await fetch(URL)
        const data = await response.json()
        zapateria.push(...data)
        
        filtroSearch(zapateria)
        filtrosSeleccion(zapateria)

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
}

// ----------------------------FILTRADO----------------------------------

// Filtro por busqueda input type="search"
const filtroSearch = (array) => {
    contieneZapateria(array)

    inputFiltrar.addEventListener("input", ()=> {
        inputFiltrar.value = inputFiltrar.value.trim().toLocaleLowerCase()
        if (inputFiltrar.value !== "") {
            const valueFilter = array.filter( prod => prod.producto.includes(inputFiltrar.value))
            if (valueFilter.length > 0){ 
                contieneZapateria(valueFilter)
            }else if(valueFilter.length < 1){
                noResultados()   
            } else{
                console.warn("aqui hay problemas")
            }
        } else {
            contieneZapateria(array)
        }
    })
}

// Filtro unico por categoria y precio 
const filtrosSeleccion = (array) => {
    contieneZapateria(array)
    filtroPrecio(array)
    // Filtro categoria + filtro precio en cadena segun categoria...
    filterCategoria.addEventListener("click", ()=>{
                if (filterCategoria.value === "todas") {
                    contieneZapateria(array);
                    filtroPrecio(array)
                } else if (filterCategoria.value === "zapatilla") {
                    const catZapatilla = array.filter(prod => prod.categoria === filterCategoria.value);
                    contieneZapateria(catZapatilla);
                    filtroPrecio(catZapatilla)
                } else if (filterCategoria.value === "ojota"){
                    const catOjota = array.filter(prod => prod.categoria === filterCategoria.value);
                    contieneZapateria(catOjota);
                    filtroPrecio(catOjota)
                } else {
                    noResultados()
                }
    })
}

// Filtro por precio
const filtroPrecio = (array) =>{
    contieneZapateria(array)
    filterPrecio.addEventListener("click", ()=>{
        if (filterPrecio.value > 0) {
            const precioMax = array.filter(prod => prod.precio < filterPrecio.value);
            spanPrecio.innerHTML = filterPrecio.value
            if (precioMax.length > 0){ 
                contieneZapateria(precioMax)
            }else if (precioMax.length < 1){
                noResultados()
            }
        } else {
            noResultados()
        }
    })
}





// -----------------------------CARRITO -----------------------------

// Funcion para agregar al carrito
const agregarCarrito = (prodID) => {
    // contador productos en carrito
    const repite = carrito.some (prod => prod.id === prodID)
    if (repite) {
        let prod = carrito.map (prod => { 
            (prod.id === prodID) ? prod.cantidad ++ : console.warn("Revisa el error en función agregarCarrito()")
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


// Iteración para sumar al carrio objeos seleccionados por ID
const iterarCarrito = () => {
    contenedorCarrito.innerHTML="" 
    carrito.forEach((prod)=> {
        let div = document.createElement("div")
        div.setAttribute ("class", "card-carrito")
        div.innerHTML = 
            `<img class="imagen_card-carrito"  src=${prod.imagen} alt="${prod.producto}">
            <h4 class="h4-card">${prod.producto}</h4>
            <p class="precio-card-carro">$${prod.precio}</p>
            <p class="cantidad-card">x<span id="cantidad">${prod.cantidad}</span> </p>
            <button id="btn-eliminar${prod.id}" class="btn_eliminar-carrito"><i class="fa-solid fa-trash-can"></i></button>
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







