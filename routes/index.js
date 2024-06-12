import { Router } from "express";
import { verifyToken } from "../middleware/jwt.js";
import { controllers } from "../controllers/index.js";

const router = Router();

//INTENTE HACERLO CON LA RUTA POST Y LUEGO REDIRIGIR A LA RUTA SECRET PERO NO ME RESULTO ASIQUE DEJO
//lA RUTA GET
router.get("/SignIn", controllers.create);

router.get("/secret", verifyToken, controllers.secret);

export default router;
