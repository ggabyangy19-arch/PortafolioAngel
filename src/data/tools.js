export const engineeringTools = [
  {
    id: 'solidworks',
    code: 'SW',
    name: 'SolidWorks',
    field: 'Diseño mecánico 3D',
    description:
      'Modelado de piezas y ensambles, documentación de planos y revisión de diseño.',
    evidence: [
      {
        src: '/images/SolidWorks-01.png',
        alt: 'Soporte de rodamiento modelado en SolidWorks.',
        caption: 'Soporte de rodamiento',
      },
      {
        src: '/images/SolidWorks-02.png',
        alt: 'Elemento roscado modelado en SolidWorks.',
        caption: 'Elemento roscado',
      },
      {
        src: '/images/SolidWorks-03.png',
        alt: 'Ensamble de rodillos y bandas modelado en SolidWorks.',
        caption: 'Ensamble de rodillos',
      },
      {
        src: '/images/SolidWorks-04.png',
        alt: 'Soporte angular con ranuras modelado en SolidWorks.',
        caption: 'Soporte angular',
      },
    ],
  },
  {
    id: 'tia-portal',
    code: 'TIA',
    name: 'TIA Portal',
    field: 'Automatización y PLC',
    description:
      'Configuración de PLC S7-1200, definición de variables y programación de control.',
    evidence: [
      {
        src: '/images/TiaPortal.png',
        alt: 'Tabla de variables de PLC en TIA Portal para una estación de Factory I/O.',
        caption: 'Variables de PLC',
      },
    ],
  },
  {
    id: 'factory-io',
    code: 'FIO',
    name: 'Factory I/O',
    field: 'Simulación industrial',
    description:
      'Simulación 3D de estaciones y líneas de producción vinculadas al PLC.',
    evidence: [
      {
        src: '/images/optimized/FactoryIO-01.jpg',
        alt: 'Estación de clasificación de cajas simulada en Factory I/O.',
        caption: 'Estación de clasificación',
      },
      {
        src: '/images/optimized/FactoryIO-02.jpg',
        alt: 'Vista general de una línea de transporte simulada en Factory I/O.',
        caption: 'Línea de transporte',
      },
    ],
  },
  {
    id: 'fluidsim',
    code: 'FS',
    name: 'FluidSIM',
    field: 'Neumática y control',
    description:
      'Diseño y simulación de circuitos neumáticos y esquemas eléctricos de control.',
    evidence: [
      {
        src: '/images/FluidSIM-01.png',
        alt: 'Diagrama de potencia, control y esquema de escalera en FluidSIM.',
        caption: 'Diagrama eléctrico y de control con KOP',
      },
      {
        src: '/images/FluidSIM-02.png',
        alt: 'Lógica de relevadores representada en FluidSIM.',
        caption: 'Circuito elctroneumático',
      },
      {
        src: '/images/FluidSIM-03.png',
        alt: 'Circuito neumático con cilindros y válvulas en FluidSIM.',
        caption: 'Circuito neumático por Metodo de Cascada',
      },
      {
        src: '/images/FluidSIM-04.png',
        alt: 'Circuito neumático con electroválvulas en FluidSIM.',
        caption: 'Control neumatico Metodo de paso a paso',
      },
    ],
  },
]

export const aiTools = [
  {
    name: 'Claude Code',
    role: 'Implementación, revisión y refactorización de código.',
  },
  {
    name: 'Codex',
    role: 'Generación y ajuste de código durante el desarrollo.',
  },
  {
    name: 'ChatGPT',
    role: 'Análisis técnico, redacción y estructuración de documentación.',
  },
  {
    name: 'Cursor',
    role: 'Edición de código y revisión de cambios con asistencia de IA.',
  },
  {
    name: 'GitHub Copilot',
    role: 'Autocompletado y apoyo en la implementación de código.',
  },
  {
    name: 'Gemini',
    role: 'Consulta técnica y análisis de información.',
  },
]
