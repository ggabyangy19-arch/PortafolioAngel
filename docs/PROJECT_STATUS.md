# Estado del proyecto

## Fase actual

Rediseño frontend minimalista técnico implementado. El portafolio continúa como una aplicación estática de una sola página construida con Vite, JavaScript y CSS vanilla.

## Trabajo completado

- Se reemplazó la estética oscura con gradientes por una dirección editorial industrial clara.
- Se separaron los datos de NIA, RCG y SGI en `src/data/projects.js`.
- Se sustituyeron las tarjetas de proyecto por expedientes desplegables accesibles.
- NIA se abre inicialmente y solo puede permanecer abierto un expediente a la vez.
- Se añadieron estados distintos para repositorio disponible, repositorio vacío y repositorio no publicado.
- Se cambió la navegación interna principal a enlaces de ancla semánticos.
- Se añadió el perfil público de GitHub al bloque de contacto.
- Se actualizó la tipografía, el color del navegador y el favicon.
- Se corrigió una línea inválida en `.gitignore`.

## Decisiones vigentes

- No se agregaron frameworks ni dependencias de interfaz.
- Los nombres de proyecto visibles son NIA (Notificación Inmediata de Alerta), RCG (Robot Controlado por Gestos) y SGI (Sistema de Gestión Inteligente).
- Las capturas no se inventan: mientras no existan archivos verificados se muestra un placeholder explícito.
- Solo NIA ofrece una acción activa hacia GitHub porque es el único repositorio relacionado con contenido público verificable.
- El repositorio de SGI existe, pero se presenta como pendiente de contenido.

## Pendientes de contenido

- Agregar capturas optimizadas con relación 16:10 para NIA, RCG y SGI.
- Alinear el README de NIA, que todavía desarrolla la sigla como "Notificación Inmediata de Auxilio", con el nombre oficial aprobado "Notificación Inmediata de Alerta".
- Publicar el repositorio de RCG y añadir su URL en `src/data/projects.js`.
- Publicar contenido en `https://github.com/angelmon19/sgi-industrial` y habilitar su acción.
- Agregar el archivo PDF del currículum en `public/documents/cv-angel-uriel-montero-cruz.pdf` y cambiar `cvAvailable` a `true`.
- Definir la URL pública del portafolio antes de añadir metadatos canónicos y `og:url`.

## Próxima acción recomendada

Integrar las tres capturas reales y revisar la redacción de cada expediente contra la documentación definitiva de sus repositorios.
