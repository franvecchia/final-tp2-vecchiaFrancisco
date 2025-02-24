import DonacionService from "../services/DonacionService.js";

export default class DonacionController {
    service = new DonacionService()

    crearDonacion = async (req, res) => {
        try {
            const {monto, nombreCompleto} = req.body
            const data = this.service.crearDonacion({monto, nombreCompleto});
            res.status(201).send({success: true, message: data})
        } catch (error) {
            res.status(400).send({success: false, message: error.message})
        }
    }

    listadoDonaciones = async (req, res) => {
        try {
            const {monto} = req.body
            const data = this.service.listadoDonaciones(monto);
            res.status(200).send({success: true, message: data})
        } catch (error) {
            res.status(400).send({success: false, message: error.message})
        }
    }
}