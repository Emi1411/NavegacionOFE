<?php
include("conexion.php");

$obj=new Conexion;
$response=array();

$usuario=$_GET["nomusu"];
$contrasena=$_GET["pass"];

$res=$obj->buscarUsuario($usuario,$contrasena);

if($res==1){
	$response['status'] = 1;
}
else{
	$response['status'] = 0;
}

echo json_encode($response);
?>