/**
 * --- FUNCIÓN RECURSIVA PARA PERMUTACIONES ---
 * Objetivo: Generar todas las reordenaciones de los caracteres de una cadena.
 * @param {string} str La cadena de entrada (ej: "ABC").
 * @returns {string[]} Un arreglo con todas las permutaciones (ej: ["ABC", "ACB", ...]).
 */
function generarPermutaciones(str) {

    // ==================================================================
    // === CASO BASE: La condición de parada de la recursión. ===
    // ==================================================================
    // Si la cadena es de un solo carácter o está vacía, su única
    // permutación es ella misma. Esto evita una llamada infinita.
    if (str.length <= 1) {
        return [str];
    }

    // Arreglo para acumular los resultados de las permutaciones.
    const todasLasPermutaciones = [];

    // ===================================================================
    // === PASO RECURSIVO: La función se descompone y se llama a sí misma. ===
    // ===================================================================
    // Iteramos sobre cada carácter de la cadena para usarlo como el
    // primer carácter de una nueva serie de permutaciones.
    for (let i = 0; i < str.length; i++) {

        // 1. SELECCIONAR un carácter.
        const charActual = str[i];

        // 2. SEPARAR el resto de la cadena.
        // Ejemplo: Si str="SOL" y i=1 (char 'O'), charsRestantes será "SL".
        const charsRestantes = str.slice(0, i) + str.slice(i + 1);

        // 3. RECURSIÓN: Llamamos a la misma función con el problema más pequeño.
        // Obtenemos todas las permutaciones posibles de los caracteres restantes.
        // Ej: generarPermutaciones("SL") devolverá ["SL", "LS"].
        const permutacionesRestantes = generarPermutaciones(charsRestantes);

        // 4. COMBINAR los resultados.
        // Unimos el carácter que seleccionamos al inicio con cada una de las
        // permutaciones del resto de la cadena.
        for (let permutacion of permutacionesRestantes) {
            // Ej: 'O' + "SL" -> "OSL", 'O' + "LS" -> "OLS"
            todasLasPermutaciones.push(charActual + permutacion);
        }
    }

    // Devolvemos el arreglo con todas las combinaciones encontradas.
    return todasLasPermutaciones;
}


// --- INICIO DEL PROGRAMA ---
// Aquí es donde llamamos a nuestra función recursiva para iniciar el proceso.

const miCadena = "ABC";
const resultado = generarPermutaciones(miCadena);

console.log(`Las permutaciones de "${miCadena}" son:`);
console.log(resultado);
console.log(`Total de permutaciones encontradas: ${resultado.length}`); // 3! = 6