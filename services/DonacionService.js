import Donacion from "../models/Donacion.js";
import EmailService from "./EmailService.js";

const donaciones = []
const emailService = new EmailService()

export default class DonacionService {

    crearDonacion = (body) => {
        const {monto, nombreCompleto} = body
        const id = donaciones.length + 1
        const nuevaDonacion = new Donacion(id, monto, nombreCompleto)

        donaciones.push(nuevaDonacion)

        if (nuevaDonacion.nombreCompleto.toUpperCase() !== "ANONIMO" && nuevaDonacion.monto > 10000) {
            emailService.enviarMail(nuevaDonacion)
        }

        return nuevaDonacion
    }

    listadoDonaciones (monto) {
        return donaciones.filter(d => (d.nombreCompleto.toUpperCase() !== "ANONIMO") && (d.monto> monto))
    }
}