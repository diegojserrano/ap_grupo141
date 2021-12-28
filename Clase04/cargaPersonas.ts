let persona = { nombre: "", edad: 0 }


function cambioNombre(control: HTMLInputElement): void {
    persona.nombre = control.value
    mostrarPersona()
}


function cambioEdad(control: HTMLInputElement): void {
    persona.edad = parseInt(control.value)
    mostrarPersona()
}


function mostrarPersona(): void {
    document.getElementById("spanNombre").innerText = persona.nombre
    document.getElementById("spanEdad").innerText = persona.edad.toString()
}
