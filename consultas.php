<?php
  include('utilerias.php');
  $conexion=conecta();

  $consulta = sprintf('select * from usuarios order by usuario');
  $resultado = mysql_query($consulta);
  $tabla ='<TABLE border=1>';
  $tabla.='<tr>';
  $tabla.='<th>Usuario</th>';
  $tabla.='<th>Nombre</th>';
  $tabla.='<th>Departament</th>';
  $tabla.='<th>Vigencia</th>';
  $tabla.='<th>Acción</th>';
  $tabla.='</tr>';
  //$resultado es un dataset
  if(mysql_num_rows($resultado)>0){
    //Hay registros

    //Convertir en un array asociativo. Es falsa cuando llegue al endof
    while ($registro=mysql_fetch_array($resultado)) {
      $tabla.='<tr>';
      $tabla.='<td>'.$registro['usuario'].'</td>';
      $tabla.='<td>'.$registro['nombre'].'</td>';
      $tabla.='<td>'.$registro['departamento'].'</td>';
      $tabla.='<td>'.$registro['vigencia'].'</td>';
      $tabla.='<td><a href="borrabaja.php?txtUsuario='.$registro['usuario'].'">Baja</a></td>';
      $tabla.='<td><a href="cambio.php?txtUsuario='.$registro['usuario'].'">Cambio</a></td>';
      $tabla.='</tr>';
    }
  }else{
    $tabla.='<tr>';
    $tabla.='<td colspan=5>Sin datos</td>';
    $tabla.='</tr>';
  }

  $tabla.='</table>';
  print($tabla);
?>
