import sequelize from "./app/config/db.config.js";
import app from "./app/app.js";



import { Canciones } from "./app/models/index.js";

const main = async ()=>{
    try {
        // await sequelize.authenticate();
        await sequelize.sync({force: false, alter: true});
        console.log("Conectado a DB");

        app.listen(3000, ()=>{
            console.log("Servidor escuchando en el puerto http://localhost:3000");
        })

    } catch (error) {
        console.log(error);
    }
}

main();