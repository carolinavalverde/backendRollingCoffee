import express from 'express';
import 'dotenv/config'; //permite procesar variable de entorno
import cors from 'cors';
import morgan from 'morgan';

//1- configurar un puerto
const aap = express();
app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), ()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})

//2- definir o configurar los middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); //nos da informacion extra en la terminal
app.use(express.json()); //permite interpretar los datos en formato json
app.use(express.urlencoded({extended:true})); //ayuda a interpretar los datos del body del request

//3- configurar las rutas