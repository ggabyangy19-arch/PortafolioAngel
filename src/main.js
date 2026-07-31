import './style.css'

// Replace each empty value with the verified professional contact detail.
const professionalContact = {
  phone: '(55) 8358-1780',
  email: 'angelmonterocruz19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/angel-uriel-montero-cruz-394355422/',
  portfolioUrl: '',
}

// Place the PDF at public/documents/cv-angel-uriel-montero-cruz.pdf,
// then change this flag to true to enable every CV action.
const cvPath = '/documents/cv-angel-uriel-montero-cruz.pdf'
const cvAvailable = false

const menuIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
`

const closeIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
`

const downloadIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
  </svg>
`

function renderCvAction(className, label, statusId) {
  if (cvAvailable) {
    return `
      <a href="${cvPath}" class="${className}" download>
        ${downloadIcon}
        <span>${label}</span>
      </a>
    `
  }

  return `
    <button
      type="button"
      class="${className} button-disabled"
      data-cv-path="${cvPath}"
      aria-describedby="${statusId}"
      disabled
    >
      ${downloadIcon}
      <span>${label}</span>
    </button>
  `
}

function renderContactItem(label, value, type = 'url') {
  if (!value) {
    return `
      <div class="contact-item contact-item-pending">
        <span>${label}</span>
        <strong>Pendiente de agregar</strong>
      </div>
    `
  }

  const href = type === 'email'
    ? `mailto:${value}`
    : type === 'tel'
      ? `tel:${value.replace(/\s+/g, '')}`
      : value

  return `
    <a href="${href}" class="contact-item"${type === 'url' ? ' target="_blank" rel="noopener noreferrer"' : ''}>
      <span>${label}</span>
      <strong>${value}</strong>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14 5h5v5M19 5l-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      </svg>
    </a>
  `
}

document.querySelector('#app').innerHTML = `
  <button type="button" class="skip-link" data-scroll-target="contenido-principal">Saltar al contenido</button>

  <header class="header">
    <nav class="navbar container" aria-label="Navegación principal">
      <button type="button" class="logo logo-button" data-scroll-target="inicio" aria-label="Ir al inicio">
        <span class="logo-mark" aria-hidden="true">AU</span>
        <span>Angel Uriel</span>
      </button>

      <button
        class="menu-toggle"
        id="menu-toggle"
        type="button"
        aria-label="Abrir menú de navegación"
        aria-controls="nav-menu"
        aria-expanded="false"
      >
        ${menuIcon}
      </button>

      <div class="nav-menu" id="nav-menu">
        <button type="button" class="nav-link active" data-scroll-target="inicio" aria-current="location">Inicio</button>
        <button type="button" class="nav-link" data-scroll-target="perfil">Perfil</button>
        <button type="button" class="nav-link" data-scroll-target="proyectos">Proyectos</button>
        <button type="button" class="nav-link" data-scroll-target="competencias">Competencias</button>
        <button type="button" class="nav-link" data-scroll-target="formacion">Formación</button>
        <button type="button" class="nav-link" data-scroll-target="contacto">Contacto</button>
      </div>
    </nav>
  </header>

  <main id="contenido-principal" tabindex="-1">
    <section class="hero section" id="inicio" data-nav-section>
      <div class="hero-glow hero-glow-one" aria-hidden="true"></div>
      <div class="hero-glow hero-glow-two" aria-hidden="true"></div>

      <div class="hero-content container">
        <div class="hero-text">
          <span class="eyebrow">Ingeniería · Gestión · Tecnología</span>

          <h1>Angel Uriel Montero Cruz</h1>
          <p class="hero-role">Gestión de Proyectos Tecnológicos e Industriales</p>

          <p class="hero-description">
            Estudiante de Ingeniería Mecatrónica orientado a la planeación,
            documentación y coordinación de proyectos multidisciplinarios.
            Complemento mi perfil con conocimientos de automatización,
            desarrollo de software, bases de datos e IoT para comprender la
            ejecución técnica y tomar decisiones con mayor fundamento.
          </p>

          <div class="hero-actions">
            <button type="button" class="button button-primary" data-scroll-target="proyectos">
              Ver casos de proyecto
            </button>

            ${renderCvAction('button button-secondary', 'Descargar CV', 'hero-cv-status')}

            <button type="button" class="button button-text" data-scroll-target="contacto">Contactar</button>
          </div>

          <p class="availability">
            <span class="status-dot" aria-hidden="true"></span>
            Disponible para residencias profesionales, proyectos y colaboración.
          </p>

          <div class="hero-facts" aria-label="Resumen profesional">
            <article>
              <span>Enfoque principal</span>
              <strong>Gestión de proyectos tecnológicos</strong>
            </article>
            <article>
              <span>Base técnica</span>
              <strong>Automatización, software y datos</strong>
            </article>
            <article>
              <span>Formación</span>
              <strong>Ingeniería Mecatrónica · 2022–2027</strong>
            </article>
          </div>
        </div>

        <aside class="professional-summary" aria-label="Áreas del perfil profesional">
          <div class="summary-heading">
            <span class="summary-kicker">Perfil multidisciplinario</span>
            <h2>De la planeación a la ejecución técnica</h2>
            <p>
              Una visión integral para conectar objetivos, personas,
              documentación y tecnología.
            </p>
          </div>

          <ul class="summary-list">
            <li>
              <span aria-hidden="true">01</span>
              <strong>Gestión de proyectos</strong>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <strong>Automatización e IoT</strong>
            </li>
            <li>
              <span aria-hidden="true">03</span>
              <strong>Desarrollo y datos</strong>
            </li>
            <li>
              <span aria-hidden="true">04</span>
              <strong>Documentación técnica</strong>
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section section-secondary" id="perfil" data-nav-section>
      <div class="container">
        <div class="section-heading">
          <span class="section-number" aria-hidden="true">01</span>
          <div>
            <span class="eyebrow">Perfil profesional</span>
            <h2>Gestión con comprensión técnica</h2>
          </div>
        </div>

        <div class="about-grid">
          <div class="about-text">
            <p>
              Soy estudiante de Ingeniería Mecatrónica y estoy construyendo un
              perfil orientado a la gestión de proyectos tecnológicos e industriales.
            </p>
            <p>
              Me interesa coordinar soluciones multidisciplinarias relacionadas
              con automatización, software, datos e inteligencia artificial. Por
              ello, desarrollo conocimientos técnicos que me permiten comprender
              mejor la ejecución de los proyectos y comunicarme con diferentes
              especialistas.
            </p>
            <p>
              He trabajado en planeación, documentación y desarrollo de proyectos,
              elaborando alcance, requerimientos, EDT/WBS, cronogramas, matrices
              RACI, bases de datos, interfaces web y prototipos con sistemas embebidos.
            </p>
          </div>

          <dl class="about-details">
            <div>
              <dt>Ubicación</dt>
              <dd>Cuautitlán Izcalli, Estado de México</dd>
            </div>
            <div>
              <dt>Formación</dt>
              <dd>Ingeniería Mecatrónica</dd>
            </div>
            <div>
              <dt>Egreso estimado</dt>
              <dd>2027</dd>
            </div>
            <div>
              <dt>Intereses</dt>
              <dd>Project Management, digitalización industrial e Industria 4.0</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section" id="proyectos" data-nav-section>
      <div class="container">
        <div class="section-heading section-heading-projects">
          <div class="section-heading-left">
            <span class="section-number" aria-hidden="true">02</span>
            <div>
              <span class="eyebrow">Planeación y ejecución</span>
              <h2>Casos de proyecto</h2>
            </div>
          </div>
          <p>
            Proyectos académicos y técnicos presentados desde el contexto, la
            participación personal y el estado verificable de cada iniciativa.
          </p>
        </div>

        <div class="projects-grid">
          <article class="project-card project-featured">
            <div class="project-visual project-visual-sgi" aria-hidden="true">
              <span class="project-code">SGI</span>
              <span class="project-index">Caso 01</span>
            </div>
            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Proyecto académico y de desarrollo</span>
                <span class="project-status">En desarrollo</span>
              </div>
              <h3>Sistema de Gestión Industrial — SGI</h3>
              <dl class="project-details">
                <div>
                  <dt>Contexto</dt>
                  <dd>Propuesta para centralizar información de producción, maquinaria, operadores, inventarios, mantenimiento y sensores industriales.</dd>
                </div>
                <div>
                  <dt>Mi participación</dt>
                  <dd>Planeación del proyecto, análisis funcional, documentación, diseño de base de datos y desarrollo de módulos web.</dd>
                </div>
                <div>
                  <dt>Gestión aplicada</dt>
                  <dd>Project Charter, interesados, alcance, EDT/WBS, cronograma, matriz RACI, comunicaciones y enfoque híbrido PMI–Scrum.</dd>
                </div>
                <div>
                  <dt>Alcance técnico</dt>
                  <dd>PHP, MySQL, JavaScript, Bootstrap, Power BI, ESP32 y OEE.</dd>
                </div>
                <div>
                  <dt>Resultado actual</dt>
                  <dd>Arquitectura funcional, documentación del proyecto, base de datos y módulos iniciales de captura y consulta.</dd>
                </div>
              </dl>
              <div class="tags" aria-label="Tecnologías del proyecto">
                <span>PHP</span><span>MySQL</span><span>JavaScript</span><span>Power BI</span><span>ESP32</span>
              </div>
              <span class="project-availability">Caso sin enlace público</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-visual project-visual-robot" aria-hidden="true">
              <span class="project-code">AI</span>
              <span class="project-index">Caso 02</span>
            </div>
            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Proyecto multidisciplinario</span>
                <span class="project-status">Planeación y desarrollo</span>
              </div>
              <h3>Brazo robótico controlado por gestos e inteligencia artificial</h3>
              <dl class="project-details">
                <div>
                  <dt>Contexto</dt>
                  <dd>Propuesta para controlar un brazo robótico mediante gestos, sensores e inteligencia artificial con orientación industrial.</dd>
                </div>
                <div>
                  <dt>Mi participación</dt>
                  <dd>Project Manager del equipo de cuatro integrantes.</dd>
                </div>
                <div>
                  <dt>Gestión aplicada</dt>
                  <dd>Distribución de responsabilidades, definición de objetivos, entregables, cronograma, riesgos y aplicaciones industriales.</dd>
                </div>
                <div>
                  <dt>Alcance técnico</dt>
                  <dd>Robótica, sensores, simulación, reconocimiento de gestos e IA.</dd>
                </div>
                <div>
                  <dt>Resultado actual</dt>
                  <dd>Planeación del proyecto, definición de roles y análisis técnico inicial.</dd>
                </div>
              </dl>
              <div class="tags" aria-label="Tecnologías del proyecto">
                <span>Robótica</span><span>Sensores</span><span>Simulación</span><span>IA</span>
              </div>
              <span class="project-availability">Caso sin enlace público</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-visual project-visual-sos" aria-hidden="true">
              <span class="project-code">SOS</span>
              <span class="project-index">Caso 03</span>
            </div>
            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Prototipo IoT</span>
                <span class="project-status project-status-complete">Concluido y funcional</span>
              </div>
              <h3>Pulsera SOS con ESP32 y GPS</h3>
              <dl class="project-details">
                <div>
                  <dt>Contexto</dt>
                  <dd>Dispositivo para enviar alertas y coordenadas GPS a un sistema web.</dd>
                </div>
                <div>
                  <dt>Mi participación</dt>
                  <dd>Integración de hardware, backend, base de datos y dashboard.</dd>
                </div>
                <div>
                  <dt>Gestión aplicada</dt>
                  <dd>No documentada como metodología formal para este caso.</dd>
                </div>
                <div>
                  <dt>Alcance técnico</dt>
                  <dd>ESP32, GPS NEO-6M, PlatformIO, PHP, MySQL y Bootstrap.</dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>Prototipo funcional capaz de registrar alertas y mostrar ubicación, fecha, dispositivo, batería y nivel de alerta desde diferentes equipos.</dd>
                </div>
              </dl>
              <div class="tags" aria-label="Tecnologías del proyecto">
                <span>ESP32</span><span>GPS NEO-6M</span><span>PlatformIO</span><span>PHP</span><span>MySQL</span>
              </div>
              <span class="project-availability">Caso sin enlace público</span>
            </div>
          </article>

          <article class="project-card">
            <div class="project-visual project-visual-pm" aria-hidden="true">
              <span class="project-code">PM</span>
              <span class="project-index">Caso 04</span>
            </div>
            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Sistema web</span>
                <span class="project-status">Conceptualización y planeación</span>
              </div>
              <h3>Plataforma de gestión PMI y Scrum</h3>
              <dl class="project-details">
                <div>
                  <dt>Contexto</dt>
                  <dd>Plataforma para administrar proyectos tradicionales, ágiles e híbridos.</dd>
                </div>
                <div>
                  <dt>Mi participación</dt>
                  <dd>Definición de alcance, procesos, roles, artefactos, permisos y arquitectura funcional.</dd>
                </div>
                <div>
                  <dt>Gestión aplicada</dt>
                  <dd>PMBOK, SBOK, Scrum, backlog, sprints, documentación y trazabilidad.</dd>
                </div>
                <div>
                  <dt>Alcance técnico</dt>
                  <dd>Arquitectura funcional de un sistema web; tecnologías pendientes de documentar.</dd>
                </div>
                <div>
                  <dt>Resultado actual</dt>
                  <dd>Definición inicial del producto y estructura funcional.</dd>
                </div>
              </dl>
              <div class="tags" aria-label="Enfoques del proyecto">
                <span>PMBOK</span><span>SBOK</span><span>Scrum</span><span>Backlog</span><span>Trazabilidad</span>
              </div>
              <span class="project-availability">Caso sin enlace público</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-secondary" id="competencias" data-nav-section>
      <div class="container">
        <div class="section-heading">
          <span class="section-number" aria-hidden="true">03</span>
          <div>
            <span class="eyebrow">Conocimientos aplicados</span>
            <h2>Competencias</h2>
          </div>
        </div>

        <div class="competencies-grid">
          <article class="competency-panel competency-panel-primary">
            <span class="panel-label">Enfoque principal</span>
            <h3>Gestión de proyectos</h3>
            <p>Herramientas y prácticas utilizadas en la definición, planeación y seguimiento del trabajo.</p>
            <ul class="competency-list">
              <li>PMI y PMBOK</li><li>Scrum y SBOK</li><li>Definición de alcance</li>
              <li>Requerimientos</li><li>EDT/WBS</li><li>Cronogramas</li>
              <li>Matriz RACI</li><li>Gestión de interesados</li><li>Riesgos</li>
              <li>Backlog y sprints</li><li>Documentación técnica</li>
            </ul>
          </article>

          <article class="competency-panel">
            <span class="panel-label">Base técnica</span>
            <h3>Capacidades técnicas complementarias</h3>
            <div class="technical-groups">
              <div>
                <h4>Automatización e IoT</h4>
                <p>ESP32, Arduino, sensores, GPS, PLC, OEE y fundamentos de SCADA.</p>
              </div>
              <div>
                <h4>Desarrollo y datos</h4>
                <p>PHP, JavaScript, Python, HTML, CSS, SQL, MySQL, Power BI, Git y GitHub.</p>
              </div>
              <div>
                <h4>Herramientas</h4>
                <p>ProjectLibre, Lucidchart, XAMPP, VS Code, Microsoft Office y TIA Portal.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="formacion" data-nav-section>
      <div class="container">
        <div class="section-heading">
          <span class="section-number" aria-hidden="true">04</span>
          <div>
            <span class="eyebrow">Preparación profesional</span>
            <h2>Formación</h2>
          </div>
        </div>

        <div class="education-grid">
          <article class="education-primary">
            <span class="timeline-date">2022–2027</span>
            <h3>Ingeniería Mecatrónica</h3>
            <p>Tecnológico de Estudios Superiores de Cuautitlán Izcalli</p>
            <span class="education-status">En curso · Egreso estimado en 2027</span>
          </article>

          <article class="education-complementary">
            <span class="panel-label">Cursos y estudio aplicado</span>
            <h3>Formación complementaria</h3>
            <ul>
              <li><strong>Scrum Fundamentals</strong><span>SCRUMstudy, 2026</span></li>
              <li><strong>Introducción a la gestión de proyectos</strong><span>Project Management Institute, 2026</span></li>
              <li><strong>PMBOK y SBOK</strong><span>Estudio y aplicación en proyectos</span></li>
              <li><strong>Programación básica con Python</strong><span>MOOC, 2026</span></li>
            </ul>
            <p class="education-note">Formación complementaria; no se presenta como certificación profesional.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section leadership-section" aria-labelledby="liderazgo-title">
      <div class="container leadership-card">
        <div>
          <span class="eyebrow">Liderazgo y comunicación</span>
          <h2 id="liderazgo-title">Instructor y organizador de ajedrez</h2>
        </div>
        <ul>
          <li>Impartición de sesiones y apoyo en organización de actividades y torneos para grupos de 10 a 30 participantes.</li>
          <li>Nivel competitivo aproximado de 1800–2000 Elo en plataformas en línea.</li>
          <li>Experiencia en comunicación, planificación, análisis y enseñanza.</li>
        </ul>
      </div>
    </section>

    <section class="section contact-section" id="contacto" data-nav-section>
      <div class="container contact-container">
        <div class="contact-copy">
          <span class="eyebrow">Contacto profesional</span>
          <h2>Conversemos sobre el próximo proyecto.</h2>
          <p>
            Disponible para residencias profesionales, proyectos y colaboración
            relacionados con gestión, ingeniería, automatización y tecnología.
          </p>
          <div class="contact-location">
            <span>Ubicación</span>
            <strong>Cuautitlán Izcalli, Estado de México</strong>
          </div>
        </div>

        <div class="contact-links">
          ${renderContactItem('Teléfono', professionalContact.phone, 'tel')}
          ${renderContactItem('Correo profesional', professionalContact.email, 'email')}
          ${renderContactItem('LinkedIn', professionalContact.linkedin)}

          ${cvAvailable ? `
            <div class="contact-item contact-item-cv">
              <div>
                <span>Currículum</span>
                <strong id="contact-cv-status">Archivo disponible</strong>
              </div>
              ${renderCvAction('button button-compact', 'Descargar CV', 'contact-cv-status')}
            </div>
          ` : ''}
          <span class="visually-hidden" id="hero-cv-status">El archivo del currículum está pendiente de agregar.</span>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <div class="logo" aria-label="Angel Uriel Montero Cruz">
        <span class="logo-mark" aria-hidden="true">AU</span>
        <span>Angel Uriel</span>
      </div>
      <p>© <span id="current-year"></span> Angel Uriel Montero Cruz.</p>
    </div>
  </footer>
`

const menuToggle = document.querySelector('#menu-toggle')
const navMenu = document.querySelector('#nav-menu')
const navLinks = [...document.querySelectorAll('.nav-link')]
const scrollButtons = [...document.querySelectorAll('[data-scroll-target]')]
const sections = [...document.querySelectorAll('[data-nav-section]')]

function setMenuState(isOpen, { restoreFocus = false } = {}) {
  navMenu.classList.toggle('nav-menu-open', isOpen)
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación',
  )
  menuToggle.innerHTML = isOpen ? closeIcon : menuIcon

  if (isOpen) {
    window.requestAnimationFrame(() => navLinks[0].focus())
  } else if (restoreFocus) {
    menuToggle.focus()
  }
}

function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId)

  if (!targetSection) return

  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

menuToggle.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') === 'false'
  setMenuState(willOpen, { restoreFocus: !willOpen })
})

scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(button.dataset.scrollTarget)
    setMenuState(false, { restoreFocus: window.innerWidth <= 760 })
  })
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false, { restoreFocus: window.innerWidth <= 760 })
  })
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuState(false, { restoreFocus: true })
  }
})

document.addEventListener('click', (event) => {
  const clickedOutside = !navMenu.contains(event.target) && !menuToggle.contains(event.target)

  if (clickedOutside && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuState(false)
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 760 && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuState(false)
  }
})

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (!visibleEntry) return

      navLinks.forEach((link) => {
        const isCurrent = link.dataset.scrollTarget === visibleEntry.target.id
        link.classList.toggle('active', isCurrent)

        if (isCurrent) {
          link.setAttribute('aria-current', 'location')
        } else {
          link.removeAttribute('aria-current')
        }
      })
    },
    {
      rootMargin: '-30% 0px -60% 0px',
      threshold: [0, 0.1, 0.5],
    },
  )

  sections.forEach((section) => observer.observe(section))
}

document.querySelector('#current-year').textContent = new Date().getFullYear()
