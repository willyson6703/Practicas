# Geotec - Prueba Técnica

## Descripción del Proyecto

Esta aplicación muestra curiosidades sobre gatos de forma interactiva. Los usuarios pueden:
- Ver curiosidades aleatorias sobre gatos.
- Ver una imagen de un gato con la primera palabra de la curiosidad.
- Guardar curiosidades para visualizarlas más tarde.
- Copiar las curiosidades al portapapeles.
- Consultar las curiosidades guardadas en "Mis Curiosidades".
- Disponible en español con posibilidad de traducción.


## Estructura del Proyecto

📂 geotec-app/
│── 📂 src/ (Código fuente)
│ ├── 📂 components/ (Componentes reutilizables)
│ │ ├── Navbar.jsx (Barra de navegación)
│ │ ├── CuriosityCard.jsx (Componente para mostrar curiosidades)
│ │
│ ├── 📂 pages/ (Páginas principales)
│ │ ├── Home.jsx (Pantalla de inicio)
│ │ ├── MyCuriosities.jsx (Pantalla de curiosidades guardadas)
│ │ ├── NewCuriosity.jsx (Pantalla de nueva curiosidad)
│ │
│ ├── 📂 utils/ (Utilidades del proyecto)
│ │ ├── localStorage.js (Manejo de almacenamiento local)
│ │ ├── translation.js (Funcionalidad de traducción opcional)
│ │
│ ├── App.jsx (Componente raíz con rutas)
│ ├── main.jsx (Punto de entrada de la aplicación)
│
│── 📂 public/ (Archivos estáticos)
│── index.html (Página HTML principal)
│
│── package.json (Dependencias y configuración del proyecto)
│── tailwind.config.js (Configuración de Tailwind CSS)
│── vite.config.js (Configuración de Vite)
│── README.md (Este archivo con información del proyecto)


## Tecnologías Utilizadas
- React con Hooks
- Tailwind CSS para los estilos y diseño responsive
- React Router DOM para la navegación
- APIs:
  - Curiosidades aleatorias de gatos: https://catfact.ninja/fact
  - Imágenes de gatos: https://cataas.com
  - Traducción (opcional): https://libretranslate.com
- LocalStorage para guardar curiosidades

## Instalación y Ejecución

### Clonar el repositorio
https://github.com/willyson6703/Practicas.git
### Instalar dependencias

### Ejecutar el proyecto en desarrollo
Abrir en navegador: `http://localhost:XXXX`

## Uso de la Aplicación

1. Desde la pantalla de inicio, hacer clic en el botón "Ver una curiosidad".
2. Se generará una curiosidad aleatoria con una imagen de un gato.
3. Se puede guardar la curiosidad o copiarla al portapapeles.
4. En la sección "Mis Curiosidades", se verán todas las curiosidades guardadas.
5. Al hacer clic en una imagen, se abrirá un modal con más información.

## Pruebas Unitarias

Para ejecutar las pruebas unitarias:

## Mejoras Futuras
- Agregar traducción en inglés y español usando `libretranslate.com`
- Búsqueda de curiosidades guardadas
- Mejoras en la UI (animaciones, efectos hover, etc.)

## Licencia
Este proyecto fue desarrollado como parte de la prueba técnica para Geotec y puede usarse como referencia.

## Autor
Nombre: Wilson Aguilar Lima 
Correo: wil6703(mailto:tuemail@gmail.com)  
GitHub: https://github.com/willyson6703/Practicas.git
,
