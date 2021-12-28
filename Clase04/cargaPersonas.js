var persona = { nombre: "", edad: 0 };
function cambioNombre(control) {
    persona.nombre = control.value;
    mostrarPersona();
}
function cambioEdad(control) {
    persona.edad = parseInt(control.value);
    mostrarPersona();
}
function mostrarPersona() {
    document.getElementById("spanNombre").innerText = persona.nombre;
    document.getElementById("spanEdad").innerText = persona.edad.toString();
}
