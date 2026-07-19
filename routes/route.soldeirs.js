import express from "express";
import { checkBody, checkQuery, checkID } from "../middlewhere/middlewhere.soldiers.js";
import { createSoldier, getSoldeirs, getSoldierByID } from "../ctrl/ctrl.soldiers.js";

const router = express.Router();

router.post("/", checkBody, createSoldier);

router.get("/", checkQuery, getSoldeirs);

router.get("/:id", checkID, getSoldierByID);

export default router;





