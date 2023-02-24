


document.getElementById ("botonvideo").onclick = function(){
    console.log ("Aparece el video");
    document.getElementById('videotutorial').style.display='block';

}
document.getElementById("estudios").addEventListener("click", function(){
    console.log ("Cambia el tamaño del subtitulo Estudios");
    document.getElementById("estudios").style.fontSize = "50px";
});

document.getElementById("habilidades").addEventListener("click", function(){
    console.log ("Cambia el tamaño del subtitulo Habilidades");
    document.getElementById("habilidades").style.fontSize = "40px";
});
document.getElementById("experiencia").addEventListener("click", function(){
    console.log ("Cambia el tamaño del subtitulo Experiencia");
    document.getElementById("experiencia").style.fontSize = "40px";
});