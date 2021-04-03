Steps to run this project:

Run npm i command
Setup database settings inside ormconfig.json file
Run npm start command


## Pasos realizado para contruir la aplicación.

# Instalar global typeorm: npm i -g typeorm

crear arquitectura base para el proyecto
typeorm init --name crudLoginAngular --database mysql --express
   "typeorm": "0.2.32",
   "reflect-metadata": "^0.1.10",
   "mysql": "^2.14.1",


Segundo bloque de dependencias 

Aceptar todas la peticiones que provengan desde el front:
* npm i cors@2.8.5 (verisones originales del video)

permite generar un token par darle seguridad a la aplicación
* npm i jsonwebtoken@8.5.1 (verisones originales del video)

para encriptar el password del usuario.
* npm i bcryptjs@2.4.3 (verisones originales del video)

realizar validaciones de los campos de la BBDD
* npm i class-validator@0.11.1 (verisones originales del video)

expreción resumida:
* npm i cors jsonwebtoken bcryptjs class-validator


# Dependencias par ambiente de desarrollo:

para reiniciar el servidor
* npm i -D ts-node-dev@1.0.0-pre.44 (verisones originales del video)
* npm i -D typescript@3.8.3 (verisones originales del video)
* npm i -D @types/bcryptjs@2.4.2 (verisones originales del video)
* npm i -D @types/cors@2.8.6 (verisones originales del video)
* npm i -D @types/jsonwebtoken@8.3.8 (verisones originales del video)
* npm i -D @types/express@4.17.3 (verisones originales del video)
* npm i -D @types/node@8.10.59 (verisones originales del video)

expreción resumida:
* npm i -D ts-node-dev typescript @types/bcryptjs @types/cors @types/jsonwebtoken @types/express @types/node

* npm i helmet