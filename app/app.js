import express from "express";
import { create } from 'express-handlebars';

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import cors from "cors";
import morgan from "morgan";

import controlls from "./controlls/Canciones.controlls.js";

const app = express();

const hbs = create({
	partialsDir: [
		path.resolve(__dirname, "../views/partials"),
	],
});


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "../views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('tiny'));

app.use(express.static("public"));


app.get("/", (req,res)=>{
    res.render("home",{
        viewHome: true
    })
});


app.get("/api/canciones", controlls.getAll);
app.get("/api/canciones/:id", controlls.getByPk);
app.get("/api/canciones/titulo/:titulo", controlls.getTitleSongs);


app.post("/api/canciones", controlls.addSong);

app.put("/api/canciones", controlls.updateSong);

app.delete("/api/canciones/:id", controlls.deleteSong);

export default app;