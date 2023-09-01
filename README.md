# Autenticación con Passport en NestJS

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" />
</p>

Un proyecto de ejemplo que demuestra cómo implementar la autenticación utilizando Passport en una aplicación NestJS.

## Características

- Autenticación local utilizando Passport
- Autenticación con JWT (JSON Web Tokens)
- Registro y inicio de sesión de usuarios
- Rutas protegidas utilizando guards

## Instalación

1. Clona este repositorio.

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Empezando

1. Crea un archivo .env basado en el archivo .env.example proporcionado y configura los ajustes de tu base de datos.

2. Ejecuta la aplicación en modo de desarrollo:
   ```bash
   npm run start:dev
   ```

3. Accede a la API en http://localhost:8080/api/.

## Uso

- Registrar un nuevo usuario: POST /auth/register
- Iniciar sesión con correo electrónico y contraseña: POST /auth/login
- Acceder a rutas protegidas: GET /protected (requiere token JWT)

## Tecnologías

- [NestJS](https://nestjs.com)
- [Passport](http://www.passportjs.org)
- [JWT (JSON Web Tokens)](https://jwt.io)
- [MySQL](https://www.mysql.com)

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, siéntete libre de crear un issue o pull request.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
