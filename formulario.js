const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("Email")
const telefono = document.getElementById("telefono")
const formulario = document.getElementById("form")
const parrafo = document.getElementById("error")


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}




formulario.addEventListener("submit", e=> {

    e.preventDefault()

    if (expresiones.nombre.test(nombre.value)) {
        nombre.classList.remove('incorrecto')
        nombre.classList.add('item-form')
        }
    else {
        nombre.classList.add('incorrecto')
        nombre.classList.remove('item-form')
    }
    if (expresiones.nombre.test(apellido.value)) {
        apellido.classList.remove('incorrecto')
        apellido.classList.add('item-form')
        }
    else {
        apellido.classList.add('incorrecto')
        apellido.classList.remove('item-form')
    }

    if (expresiones.correo.test(email.value)) {
        email.classList.remove('incorrecto')
        email.classList.add('item-form')
        }
    else {
        email.classList.add('incorrecto')
        email.classList.remove('item-form')
    }

    if (expresiones.telefono.test(telefono.value)) {
        telefono.classList.remove('incorrecto')
        telefono.classList.add('item-form')
        }
    else {
        telefono.classList.add('incorrecto')
        telefono.classList.remove('item-form')
    }
})
