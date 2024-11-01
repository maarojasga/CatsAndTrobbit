# Cats and Trobbit Backend

Este proyecto es un backend en Nest.js que permite gestionar imágenes de gatos utilizando la API de [TheCatAPI](https://thecatapi.com/) y manejar datos de gatos en MongoDB.

## Requisitos

- Node.js (versión 16 o superior)
- Docker (para ejecutar MongoDB en un contenedor)

## Configuración Inicial

1. **Clona el Repositorio**

2. **Instala dependencias**

    ```bash
    npm install
    ```

3. **Agrega tus avriables de entorno en .env**

4. **Inicia MongoDB con Docker**

    ```bash
    docker-compose up -d
    ```

5. **Ejecuta el proyecto**

    ```bash
    npm run start
    ```
## Endpoints disponibles

### Imágenes de Gatos
GET /images: Obtiene una lista de 10 imágenes aleatorias de TheCatAPI.
GET /images/favourites: Obtiene la lista de imágenes favoritas.
POST /images/favourites/add: Agrega una imagen a favoritos enviando el imageId en el cuerpo de la solicitud.
DELETE /images/favourites/delete/:id Elimina una imagen de favoritos mediante el id de la imagen.

### Gatos
GET /cats: Obtiene una lista de todos los gatos en la base de datos.
GET /cats/:id Obtiene un gato específico por id.
POST /newCat/add: Crea un nuevo gato.
PUT /cats/:id Actualiza un gato existente por id.
DELETE /cats/:id Elimina un gato de la base de datos por id