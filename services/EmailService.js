export default class EmailService {
    enviarMail(donacion) {
        console.log(`Se ha registrado una nueva donacion no anonima mayor a 10000, a nombre de: ${donacion.nombreCompleto} de un total de $${donacion.monto}`)
    }
}