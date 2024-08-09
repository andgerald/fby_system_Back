import { Router } from "express";
import { verifyToken } from "../middleware/jwt.js";
import { controllers } from "../controllers/index.js";

const router = Router();


router.get("/SignIn", controllers.create);

router.get("/secret", verifyToken, controllers.secret);

export default router;
