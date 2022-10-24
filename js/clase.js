
const tarjetaPago= document.querySelector(".tarjeta")
const vencimientoPago = document.querySelector(".vencimiento")
const seguridadPago = document.querySelector(".seguridad")

let metodoPago = []

// CLASE
class Pago{
    constructor(tarjeta, vto, codigo) {
        this.tarjeta = tarjeta;
        this.vto   = vto;
        this.codigo  = codigo;
    }
    incorporarPago(){
        metodoPago.push (Pago)
    }
}

// Se podria hacer de manera dinamica, pero para el caso use de forma manual 
metodoPago.push (new Pago (1234567891011123, 1243, 589))

metodoPago.forEach(medio => {
    tarjetaPago.value = medio.tarjeta
    vencimientoPago.value = medio.vto
    seguridadPago.value = medio.codigo    
});
