import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  registerController,
  logincontroller,
  testcontroller,
} from "../controllers/authController.js";

//routing object
const router = express.Router();
//routing
//Register || method post
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", logincontroller);
router.get("/test", requireSignIn, isAdmin, testcontroller);
export default router;
