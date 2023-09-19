document.getElementById("reiniciarDogma").addEventListener("click", function() {
    // Obtener los elementos div por sus IDs
    var outputDiv = document.getElementById("output");
    var oppositeOutputDiv = document.getElementById("oppositeOutput");
    var traduccionDiv = document.getElementById("traduccion");

    // Eliminar el contenido de los divs
    outputDiv.innerHTML = "";
    oppositeOutputDiv.innerHTML = "";
    traduccionDiv.innerHTML = "";
});