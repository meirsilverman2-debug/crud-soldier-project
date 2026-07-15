import express from "express";
import { checkBody } from "../middlewhere/middlewhere.soldiers.js";
import { createSoldier } from "../ctrl/ctrl.soldiers.js";

const router = express.Router();

router.post("/",checkBody, createSoldier);

export default router;





