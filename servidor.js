var cafecito = require("express");
var aplicacion = cafecito();
 
aplicacion.get('/', inicio);
aplicacion.get("/curso", curso);

function inicio(peticion, resultado)
{
    resultado.send("Este es el home");
}

function curso(peticion, resultado)
{
    resultado.send("Estos son los cursos");
}

aplicacion.listen(8989);