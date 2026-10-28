   const presente = document.getElementById("presente");
    const links = document.getElementById("links");

    function abrirPresente() {
        links.classList.add("mostrar");
    }

    presente.addEventListener("click", abrirPresente);

    presente.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            abrirPresente();
        }
    });