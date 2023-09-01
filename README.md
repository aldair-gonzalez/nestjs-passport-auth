# Aplicación de inicio de sesión y registro de usuarios simple

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" />
</p>

Esta aplicación utiliza JWT para la autenticación.

## Descripción

Esta aplicación permite a los usuarios iniciar sesión y registrarse en una aplicación web. Para iniciar sesión, el usuario debe proporcionar su dirección de correo electrónico y contraseña. Para registrarse, el usuario debe proporcionar su nombre, apellido, dirección de correo electrónico y contraseña.

## Cómo funciona

La aplicación utiliza el protocolo JWT para la autenticación. JWT es un estándar abierto para el intercambio de información segura entre dos partes. Cuando un usuario inicia sesión, la aplicación genera un token JWT. Este token contiene la información de autenticación del usuario. El token se almacena en el navegador del usuario y se utiliza para autenticar las solicitudes posteriores.

## Código

El código de la aplicación está escrito en TypeScript. La aplicación utiliza el framework NestJS para el desarrollo de aplicaciones web.

## Instalación y ejecución

Para instalar la aplicación, usa el siguiente comando:

  ```shell
  npm install
  ```

Para ejecutar la aplicación, usa el siguiente comando:

  ```
  npm run start
  ```

## Uso

Para iniciar sesión en la aplicación, envía una solicitud POST a la ruta /auth/login con los siguientes datos:

```
  {
    email: "your@email.com",
    password: "your_password"
  }
```

Si la autenticación es exitosa, se devolverá un token JWT. Puedes usar este token para autenticar las solicitudes posteriores.

Para registrarse en la aplicación, envía una solicitud POST a la ruta /auth/register con los siguientes datos:

  ```
    {
      name: "Your Name",
      last_name: "Your Last Name",
      email: "your@email.com",
      password: "your_password"
    }
  ```

Si el registro es exitoso, se devolverá un token JWT. Puedes usar este token para autenticar las solicitudes posteriores.

## Ejemplos

Iniciar sesión
```
curl -X POST 

-H "Content-Type: application/json" 

-d '{"email": "your@email.com", "password": "your_password"}' 

http://localhost:8080/auth/login
```

Obtener el perfil del usuario

```
curl -H "Authorization: Bearer <token>" 

http://localhost:8080/auth/profile
```

## Licencia

Este proyecto está disponible bajo la [Licencia MIT](LICENSE).