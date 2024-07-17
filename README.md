# AluraFlix

![Imagen del Proyecto](https://raw.githubusercontent.com/AletzMan/ImagesStorage/main/Screenshot_aluraflix.webp)

AluraFlix es una aplicación desarrollada como parte del challenge de React con Vite del programa ONE (Oracle Next Education). Esta aplicación permite a los usuarios explorar, agregar, editar y eliminar videos en diferentes categorías.

## Características

- **Vista de videos por categoría:** Navega y visualiza videos organizados por categorías.
- **Agregar nuevo video:** Permite a los usuarios agregar nuevos videos a la colección.
- **Editar video:** Modifica la información de los videos existentes.
- **Eliminar video:** Elimina videos de la colección.

## Tecnologías utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite:** Herramienta de desarrollo que proporciona un entorno de desarrollo rápido.
- **CSS:** Para el diseño y la maquetación.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/aluraflix.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd aluraflix
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

    o si usas yarn:

    ```bash
    yarn install
    ```

## Ejecución en modo desarrollo

Para ejecutar la aplicación en modo desarrollo, usa el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5173.

## Configuración de la API con json-server

Para poder probar la aplicación, necesitas ejecutar json-server con un archivo db.json. Sigue estos pasos:

1. Instala json-server de manera global:
```bash
npm install -g json-server
```
2. Crea un archivo db.json en el directorio raíz del proyecto con el siguiente contenido de ejemplo:
```bash
{
    "action": [
        {
             "title": "Furiosa: De la saga Mad Max",
             "poster_path": "http://image.tmdb.org/t/p/w154/tGHUlykWn9V2IIQ4ZaATIAq9VLB.jpg",
             "overview": "En un mundo postapocalíptico donde todo ha perdido su valor.",
             "backdrop_path": "http://image.tmdb.org/t/p/original/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
             "video": "https://www.youtube.com/watch?v=fkjs_kY1F7Q",
             "genre": "action",
             "id": "786892"
        }
    ],
"comedy": [
        {
             "title": "La Familia del Barrio: La Película",
             "poster_path": "http://image.tmdb.org/t/p/w154/9mOEVJCKUWMxTABooY1U0FSwfi6.jpg",
             "overview": "Todo marcha bien hasa que 'El Noruego', compra una máquina del tiempo.",
             "backdrop_path": "http://image.tmdb.org/t/p/original/71mK8XRo1WnZczgRUYSwZJ169Ff.jpg",
             "video": "https://www.youtube.com/watch?v=UiV8ETlWKRY",
             "genre": "comedy",
             "id": "1308623"
        }
    ],
"animation": [
        {
             "title": "Shrek",
             "poster_path": "[http://image.tmdb.org/t/p/w154/9mOEVJCKUWMxTABooY1U0FSwfi6.jpg](http://image.tmdb.org/t/p/w154/jTQONM7jt1yv2lL972TtmWO0UIZ.jpg)",
             "overview": "Hace mucho, mucho tiempo, en una lejanísima ciénaga vivía un intratable.",
             "backdrop_path": "http://image.tmdb.org/t/p/original/sRvXNDItGlWCqtO3j6wks52FmbD.jpg",
             "video": "https://www.youtube.com/watch?v=enHYcGQAB9w",
             "genre": "animation",
             "id": "808"
        }
    ]
}
```
3. Ejecuta json-server:
   ```bash
   json-server --watch db.json --port 3030
    ```

La API estará disponible en http://localhost:3030.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit de ellos.
4. Envía un pull request.
