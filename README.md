PostgreSQL Node REST API

Requisitos:
Antes de ejecutar el proyecto, asegúrate de tener lo siguiente instalado en tu máquina:

Node.js (Versión recomendada: 20.x o superior)
PostgreSQL (Asegúrate de que PostgreSQL esté instalado y en ejecución en tu máquina local)
Postman o cualquier otra herramienta para probar APIs (para probar los endpoints de la API)

1. Instalar dependencias
   Navega a la carpeta del proyecto e instala las dependencias necesarias para Node.js:

cd ruta/a/tu/proyecto
npm install

2. Configurar la Base de Datos PostgreSQL
   Asegúrate de que PostgreSQL esté instalado y en funcionamiento. Puedes crear una nueva base de datos para este proyecto.

Abre tu cliente de PostgreSQL (por ejemplo, psql o pgAdmin) y ejecuta el siguiente SQL para crear la base de datos:

CREATE DATABASE usersDB;
Ejecuta las migraciones para crear las tablas necesarias, incluida la tabla users. Puedes ejecutar los comandos SQL para crear la tabla o dejar que Sequelize lo haga automáticamente.

3. Configurar Variables de Entorno
   Crea un archivo .env en la raíz de tu proyecto y agrega las siguientes variables:

PORT=5000
DB_HOST=localhost
DB_USER=tu_usuario_db
DB_PASSWORD=tu_contraseña_db
DB_NAME=usersDB

Sustituye tu_usuario_db y tu_contraseña_db por tu nombre de usuario y contraseña de PostgreSQL.

4. Iniciar el Servidor
   Una vez que todo esté configurado, puedes iniciar la aplicación con el siguiente comando:

npm start o npm run dev
El servidor se ejecutará en http://localhost:5000.

1. Crear un Usuario
   Ruta: POST /api/users

Descripción: Crea un nuevo usuario en el sistema. El cuerpo de la solicitud debe contener los siguientes parámetros:

name (cadena): El nombre del usuario.
email (cadena): El correo electrónico del usuario (debe ser único).
password (cadena): La contraseña del usuario.
role (cadena): El rol del usuario (puede ser "Admin" o "User").
Ejemplo de Cuerpo de la Solicitud:

{
"name": "Jesus",
"email": "jesus@gmail.com",
"password": "password123",
"role": "User"
}

Respuesta:

Éxito: 201 Creado con los datos del usuario
Error: 400 Solicitud incorrecta si falla la validación (por ejemplo, si el correo electrónico no es único)

2. Obtener Todos los Usuarios
   Ruta: GET /api/users

Descripción: Obtiene una lista de todos los usuarios registrados.

Respuesta:

Éxito: 200 OK con la lista de usuarios
Error: 500 Error interno del servidor si algo sale mal

3. Obtener un Usuario por ID
   Ruta: GET /api/users/:id

Descripción: Obtiene un usuario específico por su ID.

Ejemplo: GET /api/users/1

Respuesta:

Éxito: 200 OK con los datos del usuario
Error: 404 No encontrado si el usuario no existe

4. Actualizar un Usuario
   Ruta: PUT /api/users/:id

Descripción: Actualiza el nombre y el rol de un usuario existente por su ID.

Ejemplo de Cuerpo de la Solicitud:

{
"name": "Nombre Actualizado",
"role": "Admin"
}

Respuesta:
Éxito: 200 OK con los datos actualizados del usuario
Error: 404 No encontrado si el usuario no existe

5. Eliminar un Usuario
   Ruta: DELETE /api/users/:id

Descripción: Elimina un usuario por su ID.

Ejemplo: DELETE /api/users/1

Respuesta:

Éxito: 204 Sin contenido cuando el usuario es eliminado correctamente
Error: 404 No encontrado si el usuario no existe

Ejemplos de pruebas Capturas de Pantalla

# screenshot links:

# creating a user route POST : http://localhost:5000/api/users

![post create a user](image.png)

# validate email uniquenes:

![error while same email](image-1.png)

# getting all users route GET : http://localhost:5000/api/users

![fetching all users](image-2.png)

# getting a user by id route GET: http://localhost:5000/api/users/1

![a user by id](image-3.png)

# user not found by id: http://localhost:5000/api/users/2

![user not found](image-4.png)

# updating a user name and role by id: route PUT http://localhost:5000/api/users/1

![update user](image-5.png)

# deleting a user by id route DELETE: http://localhost:5000/api/users/1

![delete user](image-6.png)
![empty array after deleting user](image-7.png)
