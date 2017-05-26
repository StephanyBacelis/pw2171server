<?php

  require('utilerias.php');

  function valida()
  {
    $respuesta=false;
    $conexion=conecta();

    $u=GetSQLValueString($_GET['usuario'], 'text');
    $c=GetSQLValueString(md5($_GET['clave']), 'text');

    $consulta = sprintf('select usuario,clave from usuarios where usuario=%s and clave=%s limit 1', $u,$c);

    $resultado=mysql_query($consulta);

    if(mysql_num_rows($resultado)>0){
      $respuesta=true;
    }
    //quitar , si solo devuelve un valor
    //                    llave json   llave php
    $salidaJSON = array('respuesta' => $respuesta );

    //print cuenta como una respuesta.
    print(json_encode($salidaJSON));
  }

  function hola()
  {
    print('hola');
  }

  //Menu principal
  $opcion=$_GET["opcion"];

  switch ($opcion) {
    case 'valida':
      valida();
      break;
    case 'hola':
      hola();
      break;
    default:
      # code...
      break;
  }


/*  $id = $_POST['id'];
  print('asdasd'.$id);*/
  //http://localhost/pw2171server/abc/php/datos.php?opcion=valida&usuario=asd&clave=213
?>
