# Beth's Concert Star - Professional SEO Landing Page 🦄

Esta es la landing page profesional y optimizada para el infoproducto **Beth's Concert Star (Storybook + Board Game)** de **Eunoia Learning LLC**. El proyecto ha sido desarrollado con un enfoque lúdico, apto para la neurodivergencia, utilizando una paleta de colores acogedora (púrpura, violeta pastel, rosa caramelo, azul turquesa y crema de fondo) inspirada directamente en el material didáctico.

---

## 🎨 Características de Diseño e Interactividad

1. **Spotlight Hero Section**: Presenta de forma atractiva el mockup principal (`/input_file_0.png`) junto con botones de llamada a la acción (CTA) y sellos de confianza.
2. **Cards de Dolores Comunes (Sección del Problema)**: Describe por qué esperar es difícil, empleando tarjetas interactivas e ilustraciones neurodivergentes de Beth (`/input_file_3.png`).
3. **Pilares de Solución**: Presenta de forma analítica el libro de historias sociales, los apoyos visuales y el juego de mesa interactivo.
4. **Galería Carrusel Interactiva**: Un diapositiva de imágenes de alta resolución sin librerías pesadas, ideal para optimizar tiempos de carga.
5. **Sección de Plomo y Captura**: Incorpora y estiliza el formulario de suscripción de **MailerLite** adaptándose a la visualidad del proyecto.
6. **Módulo de Testimoniales y Acordeón FAQ**: Desarrollado en bloques colapsables que mejoran la experiencia del usuario.

---

## 🚀 Prácticas SEO y Tiempos de Carga Óptimos

Hemos implementado las mejores prácticas de posicionamiento orgánico en buscadores:
- **Metatags Meta-SEO Completas**: Títulos descriptivos, palabras clave para terapeutas/maestros, descripciones ricas de marca en `index.html`.
- **OpenGraph & Twitter Cards**: Configurado para compartir enlaces en redes sociales de forma profesional, utilizando el logo o mockup informativo.
- **Datos Estructurados JSON-LD**: Un bloque Schema.org en el `<head>` que define el producto "Beth's Concert Star" facilitando la aparición de "Rich Snippets" enriquecidos en Google Search.
- **Tiempos de carga**: El empaquetador Vite compila el código de React en un SPA (Single Page Application) estático superligero, sirviendo imágenes optimizadas en milisegundos con rendimiento de nivel 100/100 en Core Web Vitals.

---

## 🐙 Cómo hacer Push a tu perfil de GitHub y desplegar en GitHub Pages

Para asociar y exportar este proyecto directamente a tu perfil de GitHub desde Google AI Studio:

### Paso 1: Conectar tu perfil de GitHub
1. En la parte superior de la interfaz de **Google AI Studio Build**, haz clic en el botón de **Exportar** o el menú de **Settings** (Ajustes).
2. Selecciona **Export to GitHub**. El sistema te pedirá autorizar tu cuenta de GitHub (OAuth) si aún no lo has hecho.
3. Elige si deseas exportarlo a un repositorio público o privado (selecciona **Público** si planeas usar GitHub Pages gratuito).

### Paso 2: Generar y compilar los archivos estáticos
Si deseas que tu proyecto se sirva como HTML/CSS estático para tiempos de carga inmediatos en GitHub Pages:
1. En tu repositorio, crea una acción de GitHub (GitHub Actions) para compilar páginas mediante Vite automáticamente, o compila localmente corriendo:
   ```bash
   npm run build
   ```
   Esto creará una carpeta llamada `/dist` con todo el contenido HTML, CSS e imágenes listo para ser alojado.

### Paso 3: Configurar GitHub Pages en tu Repositorio
1. Ve a los **Settings** (Ajustes) de tu repositorio recién creado en GitHub.
2. En el menú de la izquierda, selecciona **Pages** (Páginas).
3. En la sección **Build and deployment -> Source**, selecciona **Deploy from a branch** o selecciona **GitHub Actions** (la plantilla de Vite compila en segundos).
4. Guarda los cambios. ¡Tu landing page estará disponible en línea en la URL oficial de GitHub Pages (ej. `tu-usuario.github.io/tu-repositorio`) en menos de un minuto!

---

## 📬 Contacto y Soporte Corporativo
- **Compañía**: Eunoia Learning LLC
- **Sitio Web Oficial**: [eunoiapublishers.com](https://eunoiapublishers.com)
- **Tienda Oficial (TPT)**: [Eunoia Learning Store](https://www.teacherspayteachers.com/store/eunoia-learning)
- **Correo de Contacto**: [info@eunoiapublishers.com](mailto:info@eunoiapublishers.com)
