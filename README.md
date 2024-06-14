# User Cards React Application

## Descripción

Este proyecto es una aplicación de React que muestra una lista de usuarios en formato de tarjetas. Los datos de los usuarios se obtienen de la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users). La aplicación incluye una funcionalidad de búsqueda que permite filtrar usuarios por nombre, y muestra detalles adicionales al pasar el mouse sobre una tarjeta.

## Características

- Mostrar una lista de usuarios en formato de tarjetas.
- Buscar usuarios por nombre.
- Mostrar detalles adicionales al pasar el mouse sobre una tarjeta.
- Diseño responsivo con Flexbox y CSS.

## Tecnologías Utilizadas

- React
- CSS
- Fetch API para obtener datos

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/devHyrum/User-Cards-React-Application.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd User-Cards-React-Application
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Envía tus cambios (`git push origin feature-nueva-caracteristica`).
5. Crea un Pull Request.

## Estructura
   ```plaintext
User-Cards-React-Application/
├── public/
│   ├── search.svg
├── src/
│   ├── Components
│   │    ├── CardList
│   │    │    ├── CardItem.css
│   │    │    ├── CardItem.jsx
│   │    │    ├── CardList.jsx
│   │    ├── Search
│   │         ├── Search.css
│   │         ├── Search.jsx
│   ├── app.jsx
│   ├── index.css
│   ├── main.jsx
└── README.md
