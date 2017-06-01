//q -> parametro para poner la ciudad
/*
http://api.openweathermap.org/data/2.5/weather?q=mexico&APPID=4c161114a189a1dab2b3a32e427a4d63

  en input poner la ciudad
  poner todos los datos del clima en json
  si dice lluvia ps una imagen de lluvia etc
*/

//cd /Applications/XAMPP/xamppfiles/htdocs/pw2171server
var iniciaApp = function() {

  var entrar= function() {

    var usuario = $('#txtUsuario').val();
    var clave = $('#txtClave').val();

    var parametros = "opcion=valida"+
                      "&usuario="+usuario+
                      "&clave="+clave+
                      "&id="+Math.random(); //para engañar la cache de la pc

    var validaEntrada = $.ajax({
        method: 'POST',
        url: 'php/datos.php',
        data: parametros,
        dataType: 'json' //Que tipo de datos vamos a recibir
      });

    //Funcion done es el sustituo de success.
    validaEntrada.done(function(data) {
      console.log(data.respuesta);
    });

    validaEntrada.fail(function(jqError, textStatus) {
      console.log('Solicitud fallida: '+textStatus);
    })
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
