drop database if exists iot;
create database if not exists iot;
show databases;
use iot;

create table if not exists usuario(nombre varchar(100),
nomusu varchar(50),
correo varchar(100),
pass varchar(255))
engine=InnoDB;
desc usuario;

SELECT * FROM usuario;