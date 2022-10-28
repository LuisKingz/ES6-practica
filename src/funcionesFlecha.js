console.log('Destructuración de arreglos');
const nombres = ['Luis Fernando', 'Monse', 'Brandon', 'Oscar', 'David'];

const numero_caracter = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras de caracteres`);

console.log(numero_caracter)
/* (parametro) => {
    return //codigo
} */

// PARAMETROS POR DEFECTO
console.log('Parametros por defecto');
function registrarUsuario(nombre = 'Sin nombre', pais = 'Sin pais', correo = 'Sin correo', telefono = '0000000') {
    return `Nombre: ${nombre}, pais: ${pais}, correo: ${correo}, telefono: ${telefono}`
}

console.log(registrarUsuario('Luis', 'México', 'correo@correo.com'));

//DESTRUCTURAR ARREGLOS 
console.log('Destructuración de Objetos');
const persona = ['Luis Fernando', 23, 'México'];
const mostrarInfo = ([nombre, edad, pais, profesion = 'No especificado'] = persona) => console.log(`Nombre: ${nombre}, Edad: ${edad}, Pais: ${pais}, Profesion: ${profesion}`);
mostrarInfo(persona);
alert('Revistar la consola del navegador')

// CLASES




console.log('Uso de Clases');
class Usuario {

    constructor(nombre = 'No definida', edad = 'No definida') {
        this.nombre = nombre,
            this.edad = edad;
    }

    mostrarInfo() {
        $('#bodyT').append(
            `<tr>
                <td>
                ${this.nombre}
                </td>
                <td>
                ${this.edad}
                </td>
            </tr>`);
    }


}
let nombre;
let edad;

$('#btn').click(function () {
    nombre = $('#sample3').val();
    edad = $('#sample4').val();
    const persona = new Usuario(nombre, edad);
    persona.mostrarInfo();
});


