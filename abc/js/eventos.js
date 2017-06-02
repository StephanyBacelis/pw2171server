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
      //console.log(data.respuesta);
      if(data.respuesta==true){
        $('#datosUsuario').hide();
        //etiqueta
        $('nav').show('slow');
        $('#secUsuarios').show('slow');
      }else{
        alert('Usuario no válido');
      }
    });

    validaEntrada.fail(function(jqError, textStatus) {
      alert('Solicitud fallida: '+textStatus);
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
  var teclaNomUsuario= function(tecla) {
    if(tecla.which===13){
      //$('#txtNomNombre').focus();
      datosUsuario();
    }
  }

  var datosUsuario = function() {
    var usuario = $('#txtNomUsuario').val();
    var parametros = "opcion=datosUsuario"+
                     "&usuario="+usuario+
                     "&id="+Math.random(); //Sirve para el control, para el cache

    var du = $.ajax({
      method: 'POST',
      url: 'php/datos.php',
      data: parametros,
      dataType: 'json' //Que tipo de datos vamos a recibir
    });

    du.done(function(data) {
      if(data.respuesta==true){
        $('#txtNomNombre').val(data.nombre);
        $('#txtNomClave').val(data.clave);
        $('#txtNomDepto').val(data.departamento);
        $('#txtNomVigencia').val(data.vigencia);
      }else{
        $('#txtNomNombre').focus();
      }
    });

    du.fail(function(jqError, textStatus) {
      alert('Solicitud fallida: '+textStatus);
    });
  }

  var altas = function() {
    var usuario = $('#txtNomUsuario').val();
    var nombre = $('#txtNomNombre').val();
    var clave = $('#txtNomClave').val();
    var departamento = $('#txtNomDepto').val();
    var vigencia = $('#txtNomVigencia').val();
    var parametros = 'opcion=alta'+
                     '&usuario='+ usuario +
                     '&nombre='+ nombre +
                     '&clave='+ clave +
                     '&departamento='+ departamento +
                     '&vigencia='+ vigencia +
                     '&id='+Math.random();

   var altaUsuario = $.ajax({
     method: 'POST',
     url: 'php/datos.php',
     data: parametros,
     dataType: 'json' //Que tipo de datos vamos a recibir
   });

   altaUsuario.done(function(data) {
     if(data.respuesta == true){
       alert('Usuario dado de alta');
     }else{
       alert('Usuario existente o no se pudo registrar');
     }
   });

   altaUsuario.fail(function(jqError, textStatus) {
     alert('Solicitud fallida: '+textStatus);
   })
  }

  //Eventos
  $('#btnEntrar').on('click', entrar);
  $('#btnAltas').on('click', altas);

  $('#txtUsuario').on('keypress', teclaUsuario);
  $('#txtClave').on('keypress', teclaClave);
  $('#txtNomUsuario').on('keypress', teclaNomUsuario);
}

//Hasta que la pagina esté bien cargada
$(document).ready(iniciaApp);
