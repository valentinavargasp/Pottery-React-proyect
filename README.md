[![Pottery Store](https://firebasestorage.googleapis.com/v0/b/pottery-e-commerce-d6db2.appspot.com/o/potery-store.png?alt=media&token=b14ed33b-66b2-4699-9e7f-6167515fca0c "Pottery Store")](http://gs://pottery-e-commerce-d6db2.appspot.com/potery-store.png "Pottery Store")

# **Pottery Store** | Proyecto realizado para el curso de React Coderhouse.
##### Pottery Store es una tienda en línea que ofrece una variedad de productos inspirados en el universo de Harry Potter. Se pueden encontrar tazas, platos, tazones y más, todos diseñados con temática de Harry Potter.#### Pottery Store es una tienda en línea que ofrece una variedad de productos inspirados en el universo de Harry Potter. Se pueden encontrar tazas, platos, tazones y más, todos diseñados con temática de Harry Potter. 

## Tabla de Contenidos

- [Instalación](#instalación)
- [Herramientas Utilizadas](#herramientas-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Secciones y Componentes del Proyecto](#secciones-y-componentes-del-proyecto)
- [Autora](#autora)


## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

1. Clona el repositorio:

    ```sh
    git clone https://github.com/valentinavargasp/Pottery-React-proyect
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Iniciar la aplicación

    ```sh
    npm run dev
    ```
## Herramientas Utilizadas

- **React.js**: La biblioteca principal para construir la interfaz de usuario.
- **React Router**: Utilizado para gestionar la navegación y las rutas dentro de la aplicación.
- **useState y useEffect**: Hooks de React para manejar el estado y los efectos secundarios.
- **useContext**: Para gestionar el estado global del carrito de compras.
- **Firebase**: Utilizado para el almacenamiento y gestión de los datos de productos y categorías.
- **PropTypes**: Para validar los tipos de props en los componentes.
- **CSS**: Para el diseño y estilizado de la aplicación.
- **HTML**: Para la estructura básica de la aplicación.
- **JavaScript**: Para la lógica de la aplicación.
- **Vite**: Utilizado como servidor de desarrollo para una mejor experiencia al trabajar con React.
- **ESLint**: Para mantener la calidad y consistencia del código.
- **Prettier**: Para formatear el código automáticamente.

## Estructura del Proyecto

- **public/**: Contiene archivos estáticos públicos.
- **src/**: Directorio principal del proyecto que contiene los componentes y estilos.
  - **assets/**: Imágenes y otros recursos estáticos.
  - **components/**: Componentes reutilizables de la aplicación.
  - **context/**: Proveedores de contexto para el estado global.
  - **data/**: Datos JSON de productos y categorías que luego son cargados mediante Firebase.
  - **css/**: Archivos de estilos CSS.
- **App.jsx**: Componente principal de la aplicación.
- **index.jsx**: Punto de entrada de la aplicación.
- **firebase/**: Configuración y servicios de Firebase.

## Secciones y Componentes del Proyecto

### Productos
El proyecto ofrece una variedad de productos como tazas, platos y tazones. Cada producto cuenta con su propia tarjeta de presentación que incluye una imagen, nombre, descripción y un contador de ítems para agregar al carrito.

### Carrito de Compras
Los usuarios pueden agregar productos al carrito, ajustar las cantidades y proceder al checkout para finalizar la compra.

### Checkout
El formulario de checkout permite a los usuarios ingresar su información personal y completar la compra. Una vez realizada la compra, se muestra una sección con un mensaje de confirmación y un código de seguimiento.

### Estilos
Los estilos del proyecto mantienen una temática acorde al universo de Harry Potter, utilizando una paleta de colores y tipografía adecuada.


## Autora
Valentina Vargas Pescara - [https://github.com/valentinavargasp](#)
