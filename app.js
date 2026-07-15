import express from "express";
import soldiersRouter from "./routes/route.soldeirs.js";
import { errorHandler } from "./middlewhere/middlewhere.soldiers.js"

const app = express();

app.use(express.json());

app.use("/soldiers", soldiersRouter)

const PORT = process.env.PORT;

app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`Server is running on http://localhostPORT`); 
});

app.use(errorHandler);




