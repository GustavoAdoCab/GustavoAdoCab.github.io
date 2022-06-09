
//FUNCION PARA MODAL
var mostrarmodal = document.getElementById("modal");
var cerrarmodal = document.getElementById("cerrarbtn");
var btnejecutar = document.getElementById("Btn");
var btnejecutar1 = document.getElementById("Btn1");
  
  
    btnejecutar.onclick = function(){
        mostrarmodal.style.display = "block";
    }

    btnejecutar1.onclick = function(){
        mostrarmodal.style.display = "block";
    }

    cerrarmodal.onclick = function(){
        mostrarmodal.style.display = "none";
    }
  
    window.onclick = function (event){
        if (event.target == mostrarmodal){
          mostrarmodal.style.display = "none";
        }
    };

//FUNCION ANCLA

$(document).ready(function () {
    $("#subir").click(function () {
      $("html,body").animate(
        {
          scrollTop: "0px",
        },
        1000
      );
    });
});

//FUNCION SLIDE

$(function() {
    $(".rslides").responsiveSlides();
});

//FUNCION MENU MOVIL

$("#iconomenu").click(function () {
    $("#menu").slideToggle();
});

