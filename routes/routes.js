import { Router } from "express";
import donacionRoute from "./DonacionRoute.js";
const routes = Router();

routes.use("/donaciones", donacionRoute)

export default routes;