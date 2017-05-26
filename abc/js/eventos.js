//cd /Applications/XAMPP/xamppfiles/htdocs/pw2171server
var iniciaApp = function() {
  //console.log("Hola App");
  $('#menu').hide();
  var entrar= function() {

    $.ajax({
      url: "php/datos.php",
      type: "GET",
      data: "opcion=hola",
      success: function(msg){
        console.log(msg);
      }
    });

    console.log($('#txtUsuario').val());
    console.log($('#txtClave').val());
    $('#menu').show();
  };

  var teclaUsuario= function(tecla) {
    if(tecla.which===13){
      $('#txtClave').focus();
    }
  }
  var teclaClave= function(tecla) {
    if(tecla.which===13){
      $('#btnEntrar').focus();
      entrar();
    }
  }
  //Eventos
  $('#btnEntrar').on('click', entrar);
  $('#txtUsuario').on('keypress', teclaUsuario);
  $('#txtClave').on('keypress', teclaClave);
}

//Hasta que la pagina esté bien cargada
$(document).ready(iniciaApp);
