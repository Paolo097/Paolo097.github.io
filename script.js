//funcion que aplica el estilo a la opcion seleccionada en el menu y quita previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }    
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("ajs").classList.add("barra-progreso1");
        document.getElementById("c#").classList.add("barra-progreso2");
        document.getElementById("html").classList.add("barra-progreso3");
        document.getElementById("jv").classList.add("barra-progreso4");
        document.getElementById("js").classList.add("barra-progreso5");
        document.getElementById("njs").classList.add("barra-progreso6");
        document.getElementById("py").classList.add("barra-progreso7");
        document.getElementById("sql").classList.add("barra-progreso8");
    }
}

//funcion para ingresar al repositorio haciendo click
var imagen = document.getElementById("balanza");
imagen.addEventListener("click", function() {
  window.location.href = "https://github.com/Paolo097/Proyecto-Calculadora-de-Indices-Corporales-Py";
});

//funcion que muestra un mensaje que se ha enviado correctamente
document.querySelector("#formulario").addEventListener('submit', evento => {
    const nombre=document.querySelector("#Nombre_Completo")
    const email=document.querySelector("#Email")
    const tema=document.querySelector("#Tema")
    const mensaje=document.querySelector("#Mensaje")
    if (nombre.value=='' || email.value=='' || tema.value=='' || mensaje.value=='') {
        alert("Ingrese todos los datos")
        evento.preventDefault()
    } else {
        alert("Su mensaje se ha enviado correctamente, en breve le estaré respondiendo.")
    }
})

