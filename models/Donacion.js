export default class Donacion {
    constructor (id, monto, nombreCompleto) {
        if (!monto) {
            throw new Error("El monto no puede ser nulo")
        } else if (monto <=0) {
            throw new Error("El monto debe ser mayor a 0")
        } else if (typeof monto !== "number") {
            throw new Error("El monto debe ser un numero valido")
        }
        
        this.id = id
        this.monto = monto
        this.nombreCompleto = !nombreCompleto ? "Anonimo" : nombreCompleto 
    }
}
