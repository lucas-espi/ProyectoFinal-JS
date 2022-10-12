// CONSTANTE PARA CREAD ID DE PRODUCTOS
const crearID = () => parseInt( Math.random() * 100000) //Crea id para el preducto del array

// ARRAY 
const zapateria = []
// CARRITO
let carrito = []



// bbdd traidos desde bbdd.json
const URL = "bbdd/bbdd.json"

const cargaAutomatica = async() => {
    const response = await fetch(URL)
    const data = await response.json()
          zapateria = data

}
cargaAutomatica()

