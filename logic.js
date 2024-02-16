function asigarTexto(elemento, texto) {

    let elementoHTML = document.getElementById(elemento);
    elementoHTML.value = texto;

}

function asignarTextoHTML(element, text) {

    let elementoHTML1 = document.getElementById(element);
    elementoHTML1.innerHTML = text;

}

function cambiarImagen() {
    var image = document.getElementById('muñeco');

    if ((image.getAttribute("src").endsWith("imagenes/advertencia.png"))) {


        image.src = "imagenes/encriptado.png";

    } else if (image.getAttribute("src").endsWith("imagenes/candado.png")) {

        image.src = "imagenes/encriptado.png";

    }
}

function copy() {
    
    var textoArea = document.getElementById('texto');

    textoArea.select();
    textoArea.setSelectionRange(0, 99999);
     
    asignarTextoHTML('p-texto', "Texto copiado!");
}

function cambiarImagenDesencriptado() {

    let imagen1 = document.getElementById('muñeco');

    if (imagen1.getAttribute('src').endsWith("imagenes/encriptado.png")) {

        imagen1.src = "imagenes/candado.png";
    }


}

function encriptar() {

     let changeImage = document.getElementById('muñeco');

    if (isNaN(ObtenerTexto) || ObtenerTexto == null || ObtenerTexto.trim() === '') {

        asignarTextoHTML('h3-texto', 'Ingrese un texto valido');
        asignarTextoHTML('p-texto', 'Para encriptar o desencriptar, debe ingresar un texto');
    

    }


    var ObtenerTexto = document.getElementById('texto').value.toLowerCase();

    //i = tome letras mayusculas y minusculas
    //g = tome en cuenta toda la linea o la oracion 
    // m = tome en cuenta multiples lineas

    /*var textoEncriptado = ObtenerTexto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "ines");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");*/

    const reemplazos = {
        'e': 'enter',
        'o': 'ober',
        'i': 'ines',
        'a': 'ai',
        'u': 'ufat'
    };

    const textoEncriptado = ObtenerTexto.replace(/[eoiau]/img, match => reemplazos[match])

    asigarTexto('texto', textoEncriptado);

    if (textoEncriptado !== '') {
        asignarTextoHTML('h3-texto', 'ENCRIPTADO CON EXITO');
        asignarTextoHTML('p-texto', 'Ahora puede copiar este texto!');
        cambiarImagen();
        var elementoCopy = document.getElementById('copy');
        elementoCopy.style.opacity = 1;
    }

}


function desencriptar() {




    let ObtenerTextoEncriptado = document.getElementById('texto').value.toLowerCase();

    /*var textoDesencriptado = ObtenerTextoEncriptado.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/ines/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");*/

    const reemplazar = {

        'enter': 'e',
        'ober': 'o',
        'ines': 'i',
        'ai': 'a',
        'ufat': 'u'

    }

    const textoDesencriptado = ObtenerTextoEncriptado.replace(/(enter|ober|ines|ai|ufat)/img, match => reemplazar[match]);

    asigarTexto('texto', textoDesencriptado);

    if (textoDesencriptado !== '') {

        asignarTextoHTML('h3-texto', 'DESENCRIPTADO CON EXITO');
        asignarTextoHTML('p-texto', 'Intente encriptar otro texto');
        cambiarImagenDesencriptado();
        const elementCopy = document.getElementById('copy');
        elementCopy.style.opacity = 0;
    } else {


    }



}