import express from "express";
import { checkBody, checkQuery } from "../middlewhere/middlewhere.soldiers.js";
import { createSoldier, getSoldeirs } from "../ctrl/ctrl.soldiers.js";

const router = express.Router();

router.post("/", checkBody, createSoldier);

router.get("/", checkQuery, getSoldeirs)

router.get("/", )

export default router;





