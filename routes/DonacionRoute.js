import DonacionController from "../controllers/DonacionController.js";
import { Router } from "express";

const donacionRoute = Router()
const donacionController = new DonacionController()

donacionRoute.post("/crearDonacion", donacionController.crearDonacion)
donacionRoute.get("/listadoDonaciones", donacionController.listadoDonaciones)

export default donacionRoute