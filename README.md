Warning: fs was declared with const; use let for reassignable variables.
# Marquina.dev

Portafolio personal de Sebastian Marquina, estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI. Presenta proyectos académicos de desarrollo web, visión por computadora y preparación de datos.

## Iniciar el proyecto

```bash
npm install
npm start
```

## Publicar en GitHub Pages

El proyecto incluye un flujo de GitHub Actions en `.github/workflows/pages.yml`. Después de crear un repositorio y subir el contenido de esta carpeta a la rama `main`:

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, selecciona **GitHub Actions** como origen.
3. Revisa la pestaña **Actions**. Al completarse el flujo, GitHub mostrará la dirección pública del sitio.

El flujo detecta automáticamente si se trata de un sitio de usuario (`usuario.github.io`) o de un sitio de proyecto (`usuario.github.io/nombre-del-repositorio`) y ajusta la ruta de los recursos.

## Contenido

- Perfil y formación
- Proyectos académicos y tecnologías utilizadas
- Habilidades en desarrollo
- Enlaces de contacto, LinkedIn y GitHub

Los enlaces de votación apuntan al repositorio `vote-online`. KaiSeñas enlaza el frontend en `actualizacion` y el backend en `actualizacion-ia`; ambas son las ramas en desarrollo con mayor avance de sus respectivos repositorios.

Las descripciones reflejan el alcance académico o de prototipo indicado para cada proyecto. Añade enlaces a repositorios solo cuando estén disponibles y puedas confirmar autoría y permisos.
