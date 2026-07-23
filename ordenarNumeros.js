// 1. Solicitar al usuario 3 números por prompt y guardarlos en variables
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// 2. Identificar si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log(`Los tres números son iguales: ${num1}, ${num2}, ${num3}`);
} else {
    // 3. Analizar y ordenar los números
    let numeros = [num1, num2, num3];

    // Ordenar de mayor a menor
    let deMayorAMenor = [...numeros].sort((a, b) => b - a);

    // Ordenar de menor a mayor
    let deMenorAMayor = [...numeros].sort((a, b) => a - b);

    // Identificar el mayor, el del centro y el menor
    let numeroMayor = deMayorAMenor[0];
    let numeroCentro = deMayorAMenor[1];
    let numeroMenor = deMayorAMenor[2];

    // 4. Imprimir por consola los resultados
    console.log("--- ANÁLISIS DE NÚMEROS ---");
    console.log("Número mayor:", numeroMayor);
    console.log("Número del centro:", numeroCentro);
    console.log("Número menor:", numeroMenor);

    console.log("Orden de mayor a menor:", deMayorAMenor.join(", "));
    console.log("Orden de menor a mayor:", deMenorAMayor.join(", "));
}
