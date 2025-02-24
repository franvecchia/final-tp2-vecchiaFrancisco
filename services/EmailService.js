const email = "administrador@hotmail.com"

export default class EmailService {
    enviarMail(donacion) {
        console.log(`Email para ${email}, nueva donacion a nombre de: ${donacion.nombreCompleto} de un total de $${donacion.monto}`)
    }
}