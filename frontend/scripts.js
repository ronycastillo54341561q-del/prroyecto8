const API = 'http://localhost:3014';
async function cargarAlumnos(){
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    const res = await fetch(`${API}/alumnos`);
    const alumnos = await res.json();

    //iterar el arreglo alumnos y hacer que aparezca en el contenedor 
    //como items
    alumnos.forEach(alumno => {
        const item = document.createElement("div");
        item.className = "item";
        //creacion de elementos
        const nombre = document.createElement("h2");
        const apellido = document.createElement("h3");
        const edad = document.createElement("p");

        //asignacion de texto
        nombre.textContent = alumno.nombre;
        apellido.textContent = alumno.apellido;
        edad.textContent = alumno.edad;

        //asignar a la caja
        item.appendChild(nombre);
        item.appendChild(apellido);
        item.appendChild(edad);
        contenedor.appendChild(item);
    });
};

function limpiarAlumnos(){
    document.getElementById("contenedor").innerHTML = "";
}