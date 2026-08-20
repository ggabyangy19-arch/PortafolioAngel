const galleryPhases = [
  {
    phase: 'Concepto',
    title: 'Definición inicial',
    description: 'Espacio reservado para documentar el planteamiento y los primeros esquemas del proyecto.',
  },
  {
    phase: 'Desarrollo',
    title: 'Proceso de construcción',
    description: 'Espacio reservado para mostrar componentes, pruebas parciales o avances de integración.',
  },
  {
    phase: 'Prototipo',
    title: 'Validación del prototipo',
    description: 'Espacio reservado para presentar el prototipo durante sus pruebas funcionales.',
  },
  {
    phase: 'Resultado',
    title: 'Estado alcanzado',
    description: 'Espacio reservado para mostrar el resultado más reciente y su evidencia visual.',
  },
]

function createGallery(projectId, projectName) {
  return galleryPhases.map((item, index) => {
    const number = String(index + 1).padStart(2, '0')

    return {
      ...item,
      src: `/projects/${projectId}/fase-${number}.webp`,
      alt: `${projectName}: ${item.phase.toLowerCase()}`,
      available: false,
    }
  })
}

export const projects = [
  {
    id: 'nia',
    code: 'NIA',
    name: 'Notificación Inmediata de Alerta',
    category: 'Sistema IoT de asistencia',
    status: 'Prototipo funcional',
    statusTone: 'complete',
    summary:
      'Pulsera SOS con ESP32 y GPS que registra alertas y las concentra en una plataforma web de monitoreo.',
    details: [
      {
        label: 'Problema',
        value:
          'Comunicar una emergencia y su ubicación desde un dispositivo portátil hacia un centro de respuesta.',
      },
      {
        label: 'Participación',
        value:
          'Integración de hardware, recepción de alertas, persistencia en base de datos y dashboard de seguimiento.',
      },
      {
        label: 'Solución técnica',
        value:
          'ESP32 y GPS NEO-6M conectados con un backend PHP/MySQL y una interfaz web para consultar y gestionar incidentes.',
      },
      {
        label: 'Resultado',
        value:
          'Prototipo capaz de registrar ubicación, fecha, dispositivo, batería, prioridad y estado de las alertas.',
      },
    ],
    technologies: ['ESP32', 'GPS NEO-6M', 'PlatformIO', 'PHP', 'MySQL', 'Leaflet'],
    gallery: createGallery('nia', 'Notificación Inmediata de Alerta'),
    repository: {
      state: 'available',
      url: 'https://github.com/angelmon19/NIA',
      message: 'Código y documentación disponibles',
    },
  },
  {
    id: 'rcg',
    code: 'RCG',
    name: 'Robot Controlado por Gestos',
    category: 'Robótica e inteligencia artificial',
    status: 'Planeación y desarrollo',
    statusTone: 'active',
    summary:
      'Proyecto multidisciplinario para controlar un brazo robótico mediante gestos, sensores y reconocimiento asistido por inteligencia artificial.',
    details: [
      {
        label: 'Problema',
        value:
          'Explorar una interacción natural y sin contacto para operar un sistema robótico con orientación industrial.',
      },
      {
        label: 'Participación',
        value:
          'Project Manager de un equipo de cuatro integrantes, con coordinación de objetivos, roles y entregables.',
      },
      {
        label: 'Gestión aplicada',
        value:
          'Distribución de responsabilidades, cronograma, identificación de riesgos y análisis de aplicaciones industriales.',
      },
      {
        label: 'Estado actual',
        value:
          'Planeación del proyecto, definición de roles y análisis técnico inicial.',
      },
    ],
    technologies: ['Robótica', 'Sensores', 'Simulación', 'Visión artificial', 'IA'],
    gallery: createGallery('rcg', 'Robot Controlado por Gestos'),
    repository: {
      state: 'unpublished',
      url: null,
      message: 'Repositorio pendiente de publicación',
    },
  },
  {
    id: 'sgi',
    code: 'SGI',
    name: 'Sistema de Gestión Inteligente',
    category: 'Digitalización industrial',
    status: 'En desarrollo',
    statusTone: 'active',
    summary:
      'Sistema para centralizar información de producción, maquinaria, operadores, inventarios, mantenimiento y sensores industriales.',
    details: [
      {
        label: 'Problema',
        value:
          'Concentrar información operativa dispersa para facilitar el registro, la consulta y el seguimiento de procesos industriales.',
      },
      {
        label: 'Participación',
        value:
          'Planeación, análisis funcional, documentación, diseño de base de datos y desarrollo de módulos web.',
      },
      {
        label: 'Gestión aplicada',
        value:
          'Project Charter, alcance, EDT/WBS, cronograma, matriz RACI, comunicaciones y enfoque híbrido PMI-Scrum.',
      },
      {
        label: 'Estado actual',
        value:
          'Arquitectura funcional, documentación, base de datos y módulos iniciales de captura y consulta.',
      },
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Power BI', 'ESP32', 'OEE'],
    gallery: createGallery('sgi', 'Sistema de Gestión Inteligente'),
    repository: {
      state: 'empty',
      url: 'https://github.com/angelmon19/sgi-industrial',
      message: 'Repositorio creado; contenido pendiente de publicación',
    },
  },
]
