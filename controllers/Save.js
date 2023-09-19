document
    .getElementById("GuardadoDeDogmas")
    .addEventListener("click", function () {
        // Obtén el contenido de los divs
        const outputContent = document.getElementById("output").innerHTML;
        const oppositeOutputContent =
            document.getElementById("oppositeOutput").innerHTML;
        const traduccionContent =
            document.getElementById("traduccion").innerHTML;

        // Combina los contenidos en un nuevo div dentro del modal en el orden deseado
        const contenidoGuardado = document.getElementById("Guardado0utput");
        contenidoGuardado.innerHTML =
            outputContent + oppositeOutputContent + traduccionContent;

        // Muestra el modal
        const modal = document.getElementById("modal");
        modal.style.display = "block";

        // Cierra el modal al hacer clic en la "x"
        const closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    });
Guardado0utput;
GuardadoOppositeOutput;
GuardadoTraduccion;

const reiniciar = document.getElementById("reiniciarDogma");
reiniciar.addEventListener("click", () => {});
