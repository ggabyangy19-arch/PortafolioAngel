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
    gallery: [
      {
        phase: 'Interfaz',
        title: 'Centro de respuesta',
        description:
          'Panel de monitoreo con alertas activas, mapa de ubicaciones y estado del dispositivo.',
        src: '/images/optimized/NIA-Dashboard.jpg',
        alt: 'Centro de respuesta de NIA con indicadores, mapa de alertas y detalle del dispositivo.',
      },
      {
        phase: 'Datos',
        title: 'Base de datos',
        description:
          'Tablas de alertas, historial de estados, dispositivos y contactos de emergencia.',
        src: '/images/NIA-Database.png',
        alt: 'Tablas de la base de datos de NIA en phpMyAdmin.',
      },
      {
        phase: 'Hardware',
        title: 'Prototipo',
        description:
          'ESP32, GPS NEO-6M y módulo de alimentación montados sobre protoboard.',
        src: '/images/optimized/NIA-Prototipo.jpg',
        alt: 'Prototipo de NIA con ESP32, módulo GPS y portapilas sobre protoboard.',
      },
    ],
    repository: {
      url: 'https://github.com/angelmon19/NIA',
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
    gallery: [
      {
        phase: 'Gestión',
        title: 'Project Charter',
        description:
          'Definición del proyecto, alcance, entregables y metodología de trabajo.',
        src: '/images/optimized/SGI-ProjectCharter.jpg',
        alt: 'Documento Project Charter del Sistema de Gestión Industrial.',
      },
      {
        phase: 'Gestión',
        title: 'Declaración de alcance',
        description:
          'Objetivos, módulos funcionales y arquitectura prevista del sistema.',
        src: '/images/optimized/SGI-ProjectScope.jpg',
        alt: 'Documento de declaración de alcance del Sistema de Gestión Integral.',
      },
      {
        phase: 'Sistema',
        title: 'Acceso al sistema',
        description:
          'Pantalla de inicio de sesión para usuarios de planta.',
        src: '/images/SGI-Iniciodesesion.png',
        alt: 'Pantalla de inicio de sesión del sistema SGI.',
      },
      {
        phase: 'Sistema',
        title: 'Catálogo de máquinas',
        description:
          'Registro y administración de máquinas, áreas y estados operativos.',
        src: '/images/SGI-CreacionDeCatalogos.png',
        alt: 'Formulario de alta de máquinas en el sistema SGI.',
      },
      {
        phase: 'Sistema',
        title: 'Dashboard operativo',
        description:
          'Resumen de producción, calidad, máquinas y operadores activos.',
        src: '/images/SGI-Dashboard.png',
        alt: 'Dashboard con indicadores de producción y calidad del sistema SGI.',
      },
      {
        phase: 'Datos',
        title: 'Base de datos',
        description:
          'Tablas del sistema gestionadas desde phpMyAdmin en el entorno local.',
        src: '/images/SGI-XAMPP.png',
        alt: 'Listado de tablas de la base de datos de SGI en phpMyAdmin.',
      },
    ],
  },
]
