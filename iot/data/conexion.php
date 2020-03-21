<?php
class Conexion{
	var $conn;

	function conectar(){
		$this->conn=mysqli_connect("localhost","root","") or die("Conexión fallida".mysql_error());

		mysqli_select_db($this->conn,"iot") or die("No se puede conectar a la base de datos");

		return $this->conn;
	}

	function buscarUsuario($nomusu,$pass){
		$this->conectar();
		if(!$this->conn){
			exit("Error en la conexión");
		}
		else{
			$consulta="SELECT * FROM usuario WHERE nomusu='".$nomusu."'AND pass='".$pass."'";
			$result=mysqli_query($this->conn, $consulta);
			$num=mysqli_num_rows($result);
			return $num;
		}
	}

	function registrarUsuario($consulta){
		$this->conectar();
		if(!$this->conn){
			exit("Error en la conexión");
		}
		else{
			$result=mysqli_query($this->conn,$consulta);
			return $result;
		}
	}
}
?>