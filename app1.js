const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin,  //define la entrada que sera por el teclado
    output: process.stdout // define la salida que sera por consola 
})

function celsiusf(celsius){
    return(celsius*9/5)+32;
}
rl.question('ingrese la temperatura en grados celsius:',(respuesta) =>{
    const celsius = parseFloat(respuesta);
    const fahrenheit = celsiusf(celsius)
    console.log(`${celsius}°C es igual a ${fahrenheit}°F`);
    rl.close();

},)