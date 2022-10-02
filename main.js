let miNombre = prompt("Nombre")
let miApellido = prompt("Apellido")
let miEdad = Number(prompt("Mi Edad"))
let miMascota = prompt("Nombre Mascota")
let edadMascota = Number(prompt("Edad Mascota"))

console.log(miNombre)
console.log(miApellido)
console.log(Number(miEdad))
console.log(miMascota)
console.log(Number(edadMascota))

let nombreCompleto = miNombre + " " + miApellido
let textoPresentacion = "Hola me llamo" + " " + miNombre + " " + miApellido + " " + "Mi edad es" + " " + miEdad
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(nombreCompleto)
console.log(textoPresentacion)
console.log(Number(sumaEdades))
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

let frutas = [
    {manzana:"roja"},
    {manzana:"verde"},
    {manzana:"amarilla"}
]

console.log(frutas)
console.log(frutas[2])
console.log(frutas.length)
