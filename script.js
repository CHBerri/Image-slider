(function () {
    const pictures = [
        "1", "2", "3", "4", "5", "6", "7", "8"
    ];
    
    const botones = document.querySelectorAll("svg")
    const contenedor = document.getElementById("contenedor-de-imagenes")
    const texto = document.getElementById("texto")
    
    let indice = 0;
    
    document.addEventListener("keydown", function (event) {
        if(event.key === 'ArrowLeft') {
            moverALaIzquierda()
        } else if (event.key === 'ArrowRight') {
            moverALaDerecha()
        }
    })

    botones.forEach(function (boton) {
        boton.addEventListener("click", function (e) {
            if(boton.classList.contains("btn-right")){
                moverALaDerecha()
            }
            if(boton.classList.contains("btn-left")) {
                moverALaIzquierda()
            }
    
        })
    })

    function moverALaDerecha() {
        indice++;
        if(indice > pictures.length -1) {
            indice = 0
        }
        texto.textContent = `${indice + 1}/8`
        contenedor.style.background = `url('${pictures[indice]}.jpg')`
        contenedor.style.backgroundPosition = 'center'
        contenedor.style.backgroundSize = 'cover'
    }

    function moverALaIzquierda() {
        indice--;
        if(indice < 0) {
            indice = pictures.length -1;
        }
        texto.textContent = `${indice + 1}/8`
        contenedor.style.background = `url('${pictures[indice]}.jpg')`
        contenedor.style.backgroundPosition = 'center'
        contenedor.style.backgroundSize = 'cover'
    }

})();

