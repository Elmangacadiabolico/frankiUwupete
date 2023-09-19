const clearButton = document.getElementById("clearButton");
const inputElement = document.getElementById("theinput");
const inputSilenciado = document.querySelector(".inputSilenciado");
const inputActivado = document.getElementById("activarButton");

clearButton.addEventListener("click", () => {
    // Obtener el valor actual del input
    const inputValue = inputElement.value;

    // Crear un array de caracteres a partir del valor del input
    const inputArray = inputValue.split("");

    // Buscar y eliminar las ocurrencias de "C" y "G" juntas en el array
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] === "C" && inputArray[i + 1] === "G") {
            inputArray.splice(i, 2); // Eliminar "C" y "G" juntos
            i--; // Retroceder el índice para verificar nuevamente
        }
    }

    // Obtener el resultado como una cadena
    const resultadoBorrado = inputArray.join("");

    // Mostrar el resultado en el div con la clase "inputSilenciado"
    inputSilenciado.textContent = `Resultado silenciado es : ${resultadoBorrado}`;

    // Establecer el valor del input con las ocurrencias de 'CG' borradas
    inputElement.value = resultadoBorrado;
});

activarButton.addEventListener("click", () => {
    const inputValue = inputElement.value;
    const inputArray = inputValue.split("");
    /*for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] === "C" && inputArray[i + 1] === "G") {
            inputArray.splice(i, 2);
            i--;
        }
    }*/
    const resultadoActivado = inputElement.value;
    inputSilenciado.textContent = `Resultado del A.D.N activado  es : ${resultadoActivado}`;
    inputElement.value = resultadoBorrado;
});
