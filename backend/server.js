const express = require("express")
const path = require("path");
const cors = require("cors");
const PORT = 3014;
const app = express();

//config 
app.use(express.static(path.join(__dirname,"../frontend")));
app.use(cors());
app.get('/alumnos',(req,res) => {
    res.json([
        {nombre:"Juan",apellido:"Castro",edad:36},
        {nombre:"Maria",apellido:"Castillo",edad:25},
        {nombre:"Carlos",apellido:"López",edad:48},
        {nombre:"Estrada",apellido:"Mendoza",edad:18},
        {nombre:"Juan",apellido:"Castro",edad:36},
        {nombre:"Maria",apellido:"Castillo",edad:25},
    ]);
});

app.listen(PORT,()=> console.log(`server on: http://localhost:${PORT}`))