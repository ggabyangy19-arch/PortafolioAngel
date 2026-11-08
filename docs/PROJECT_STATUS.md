# Estado del proyecto

## Fase actual

Portafolio estático de una sola página construido con Vite, JavaScript y CSS vanilla. La interfaz editorial industrial está implementada con contenido real, galerías de proyectos y evidencia de herramientas de ingeniería.

## Trabajo completado

- Se eliminó por completo el proyecto RCG; el portafolio presenta únicamente NIA y SGI.
- Se retiraron todos los placeholders, estados de “pendiente” y mensajes provisionales del sitio.
- Se integraron las capturas reales de NIA (3) y SGI (6) en galerías con rotación, controles manuales y vista ampliada accesible.
- Se añadió el bloque de herramientas dentro de Competencias con evidencia de SolidWorks, TIA Portal, Factory I/O y FluidSIM.
- Se incorporaron Claude Code, Codex, ChatGPT, Cursor, GitHub Copilot y Gemini como parte del flujo de desarrollo asistido por IA.
- Se añadió el ancla `#herramientas` y su enlace en la navegación principal.
- Se simplificaron las acciones de contacto y descarga del currículum.
- Se eliminaron assets sin uso y estilos de plantilla.
- Se actualizaron los metadatos de proyectos y herramientas en `src/data/`.

## Decisiones vigentes

- No se agregaron frameworks ni dependencias de interfaz.
- Los proyectos visibles son NIA (Notificación Inmediata de Alerta) y SGI (Sistema de Gestión Inteligente).
- Solo NIA enlaza a un repositorio público con contenido verificable.
- Las galerías muestran únicamente imágenes reales; no se generan marcos vacíos ni textos de captura pendiente.
- La rotación se detiene durante hover, foco, interacción manual, pestaña oculta, vista ampliada y preferencias de movimiento reducido.
- Las herramientas de IA se presentan dentro de la sección de Competencias, sin una sección independiente.
- La numeración visible conserva Competencias como 03 y Formación como 04.

## Verificación reciente

- `npm run build` completado sin errores.
- Revisión en navegador a 1440, 768 y 390 px: sin desbordamiento horizontal, sin imágenes rotas y sin errores de consola.
- Galerías verificadas con 3 capturas de NIA y 6 de SGI; bloque de herramientas con 4 fichas de ingeniería y 6 herramientas de IA.
- Navegación `#herramientas` activa y menú móvil funcional.

## Pendientes de contenido

- Alinear el README del repositorio NIA, que desarrolla la sigla como “Notificación Inmediata de Auxilio”, con el nombre visible del portafolio.
- Definir la URL pública del portafolio antes de añadir metadatos canónicos y `og:url`.

## Próxima acción recomendada

Revisar la redacción de cada expediente contra la documentación definitiva de sus repositorios y definir la URL pública para completar los metadatos.
