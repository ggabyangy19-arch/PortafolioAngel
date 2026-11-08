# Imágenes del portafolio

Las capturas de proyectos y herramientas se almacenan en `public/images/` y se referencian desde `src/data/projects.js` y `src/data/tools.js`.

## Convención de nombres

- Proyectos: `NIA-*.png`, `SGI-*.png`.
- Herramientas: `SolidWorks-*.png`, `TiaPortal.png`, `FactoryIO-*.png`, `FluidSIM-*.png`.

## Versiones optimizadas

Cuando el archivo original supera los 400 KB se genera una versión JPEG en `public/images/optimized/`. El sitio referencia esa versión para reducir el peso de carga y conserva el PNG original como fuente.

## Cómo agregar una imagen

1. Colocar el archivo en `public/images/`.
2. Si pesa más de 400 KB, generar la versión optimizada en `public/images/optimized/`.
3. Añadir la ruta y el texto alternativo en el arreglo `gallery` del proyecto o en `evidence` de la herramienta correspondiente.
