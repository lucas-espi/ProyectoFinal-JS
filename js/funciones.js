

// Productos agregados por funcion cargaAutomatica() al array zapateria=[]
function cargaAutomatica() {
zapateria.push({producto:"zapatillas revolution 6",id:crearID(),categoria:"running",marca:"nike",precio: 21900,cantidad:1, images:"../images/1.jpg"})
zapateria.push({producto:"zapatillas zoom Winflo 8",id:crearID(),categoria:"running",marca:"nike",precio:36299,cantidad:1, images:"../images/2.jpg"})
zapateria.push({producto:"zapatillas supercross 3",id:crearID(),categoria:"outdoor",marca:"salomon",precio:31499,cantidad:1,images: "../images/3.jpg"})
zapateria.push({producto:"zapatillas gondor II",id:crearID(),categoria:"outdoor",marca:"topper",precio:17000,cantidad:1, images:"../images/4.jpg"})
zapateria.push({producto:"botas de hombre ultra venture",id:crearID(),categoria:"trekking",marca:"montagne",precio:37000,cantidad:1,images:"../images/5.jpg"})
zapateria.push({producto:"botas ona",id:crearID(),categoria:"trekking",marca:"montagne",precio:22110,cantidad:1,images:"../images/6.jpg"})
zapateria.push({producto:"botas Craddock",id:crearID(),categoria:"urbano",marca:"montagne",precio:12037,cantidad:1,images:"../images/7.jpg"})
zapateria.push({producto:"ojota azul Adidas Adilette Shower",id:crearID(),categoria:"urbano",marca:"adidas",precio:7500,cantidad:1,images:"../images/8.jpg"})
zapateria.push({producto:"crocs crocband clog",id:crearID(),categoria:"urbano",marca:"crocs",precio:9899,cantidad:1,images:"../images/9.jpg"})
zapateria.push({producto:"zapatilla negra Adidas superstart",id:crearID(),categoria:"urbano",marca:"adidas",precio:25899,cantidad:1,images:"../images/10.jpg"})
}
cargaAutomatica()



































// FILTROS
// Filtro por precio con función filtrado()

// function filtrado() {

//     let filtrado = prompt("Ingrese filtrar por 'categoria', 'precio', 'marca':")
//     if (filtrado == "categoria") {
//         let ingresoCategoria = prompt("Ingrese la categoria a filtrar: 'running', 'outdoor', 'trekking', 'urbano' ")
//         let categoriaBuscada = zapateria.filter(calsado=> calsado.categoria == ingresoCategoria)
//         console.table(categoriaBuscada)
//     }  else if (filtrado == "precio"){
//         let ingreso = Number(prompt("Ingresa el precio maximo por el cual desea filtrar: "))
//         let precioMenor = zapateria.filter(calsado => calsado.precio <= ingreso)
//         console.table (precioMenor) 
//     } else if (filtrado == "marca") {
//         let marcaBuscada = prompt("Ingresa la marca a filtrar: 'nike', 'salomon', 'topper', 'montagne', 'adidas', 'crocs' :")
//         let marcaFiltrada = zapateria.filter(calsado => calsado.marca == marcaBuscada)
//         console.table(marcaFiltrada)
//     } else { 
//         console.warn("No ha ingresado alguno de los caracteres indicados")
//     } 
// }

// // FIND
// // Busqueda con find, con la finción busqueda()
// function busqueda() {
//     let ingresoId = Number(prompt("Ingresa el ID a buscar: "))
//     let buscarId = zapateria.find(calsado => calsado.id == ingresoId)
//     console.table(buscarId)
// }
