import Donacion from "../models/Donacion.js";

const donaciones = []

export default class DonacionService {
    crearDonacion = (body) => {
        const {monto, nombreCompleto} = body
        const id = donaciones.length + 1
        const nuevaDonacion = new Donacion(id, monto, nombreCompleto)

        donaciones.push(nuevaDonacion)

        if (nuevaDonacion.nombreCompleto.toUpperCase() !== "ANONIMO" && nuevaDonacion.monto > 10000) {
            console.log(`Se ha registrado una nueva donacion no anonima mayor a 10000, a nombre de: ${nombreCompleto} de un total de $${monto}`)
        }

        return nuevaDonacion
    }

    listadoDonaciones (monto) {
        return donaciones.filter(d => (d.nombreCompleto.toUpperCase() !== "ANONIMO") && (d.monto> monto))
    }
}