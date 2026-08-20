import './style.css'
import { projects } from './data/projects.js'

// Replace each empty value with the verified professional contact detail.
const professionalContact = {
  phone: '(55) 8358-1780',
  email: 'angelmonterocruz19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/angel-uriel-montero-cruz-394355422/',
  github: 'https://github.com/angelmon19',
}

// Public CV path shared by the hero and contact download actions.
const cvPath = '/documents/cv-angel-uriel-montero-cruz.pdf'
const cvAvailable = true

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

const repositoryIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-3.9c0-1.1.1-1.6-.5-2.3 3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.8 4a5.4 5.4 0 0 0-.2-4S18.4-.4 15.5 1.5a14 14 0 0 0-7 0C5.6-.4 4.4 0 4.4 0a5.4 5.4 0 0 0-.2 4 5.8 5.8 0 0 0-1.5 4.4c0 5.8 3.5 7 6.8 7.4-.5.6-.6 1.3-.5 2.3V22" />
  </svg>
`

const previousIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="m15 18-6-6 6-6" />
  </svg>
`

const nextIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="m9 18 6-6-6-6" />
  </svg>
`

const expandIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 3H3v5m13-5h5v5M8 21H3v-5m18 0v5h-5" />
  </svg>
`

function renderGalleryMedia(item, projectCode) {
  if (item.available) {
    return `
      <img
        class="gallery-image"
        src="${item.src}"
        alt="${item.alt}"
        width="1200"
        height="750"
        loading="lazy"
      />
    `
  }

  const fileName = item.src.split('/').pop()

  return `
    <span class="project-preview-placeholder" aria-hidden="true">
      <span class="preview-grid"></span>
      <span class="preview-code">${projectCode}</span>
      <span class="preview-message">
        <span>${item.phase}</span>
        <strong>Captura pendiente</strong>
        <small>${fileName}</small>
      </span>
    </span>
  `
}

function renderProjectGallery(project) {
  return `
    <section class="project-gallery" data-gallery data-project-id="${project.id}" aria-label="Galería de ${project.name}">
      <div class="gallery-stage">
        <div class="gallery-slides">
          ${project.gallery.map((item, index) => `
            <figure
              class="gallery-slide${index === 0 ? ' gallery-slide-active' : ''}"
              data-gallery-slide
              aria-hidden="${index === 0 ? 'false' : 'true'}"
              ${index === 0 ? '' : 'inert'}
            >
              <button
                class="gallery-open"
                type="button"
                data-gallery-open
                data-gallery-index="${index}"
                aria-label="${item.available ? 'Ampliar' : 'Ver detalle de la captura pendiente para'} ${item.phase.toLowerCase()} de ${project.name}"
              >
                <span class="gallery-media">
                  ${renderGalleryMedia(item, project.code)}
                </span>
                <span class="gallery-expand" aria-hidden="true">${expandIcon}</span>
              </button>
              <figcaption class="gallery-caption">
                <span>${item.phase}</span>
                <strong>${item.title}</strong>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </div>

      <div class="gallery-toolbar">
        <button class="gallery-arrow" type="button" data-gallery-previous aria-label="Imagen anterior">
          ${previousIcon}
        </button>
        <span class="gallery-count" data-gallery-count aria-hidden="true">01 / 04</span>
        <button class="gallery-arrow" type="button" data-gallery-next aria-label="Imagen siguiente">
          ${nextIcon}
        </button>
      </div>

      <div class="gallery-thumbnails" role="group" aria-label="Seleccionar fase del proyecto">
        ${project.gallery.map((item, index) => `
          <button
            class="gallery-thumbnail${index === 0 ? ' gallery-thumbnail-active' : ''}"
            type="button"
            data-gallery-thumbnail
            data-gallery-index="${index}"
            ${index === 0 ? 'aria-current="true"' : ''}
          >
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${item.phase}</strong>
          </button>
        `).join('')}
      </div>
      <span class="visually-hidden" data-gallery-announcement aria-live="polite"></span>
    </section>
  `
}

function renderRepositoryAction(repository) {
  if (repository.state === 'available') {
    return `
      <a class="project-repository" href="${repository.url}" target="_blank" rel="noopener noreferrer">
        ${repositoryIcon}
        <span>Ver repositorio</span>
      </a>
    `
  }

  return `
    <span class="project-repository project-repository-pending" aria-disabled="true">
      ${repositoryIcon}
      <span>${repository.message}</span>
    </span>
  `
}

function renderProject(project, index) {
  const isOpen = index === 0
  const number = String(index + 1).padStart(2, '0')

  return `
    <article class="project-file${isOpen ? ' project-file-open' : ''}" data-project-file>
      <h3 class="project-file-heading">
        <button
          class="project-trigger"
          type="button"
          id="project-trigger-${project.id}"
          aria-expanded="${isOpen}"
          aria-controls="project-panel-${project.id}"
        >
          <span class="project-number">${number}</span>
          <span class="project-identity">
            <span class="project-code">${project.code}</span>
            <span class="project-name">${project.name}</span>
          </span>
          <span class="project-discipline">${project.category}</span>
          <span class="project-status project-status-${project.statusTone}">${project.status}</span>
          <span class="project-toggle-mark" aria-hidden="true"></span>
        </button>
      </h3>

      <div
        class="project-panel"
        id="project-panel-${project.id}"
        role="region"
        aria-labelledby="project-trigger-${project.id}"
        ${isOpen ? '' : 'hidden'}
      >
        <div class="project-panel-inner">
          ${renderProjectGallery(project)}

          <div class="project-information">
            <p class="project-summary">${project.summary}</p>

            <dl class="project-details">
              ${project.details.map((detail) => `
                <div>
                  <dt>${detail.label}</dt>
                  <dd>${detail.value}</dd>
                </div>
              `).join('')}
            </dl>

            <div class="project-footer">
              <ul class="tags" aria-label="Tecnologías de ${project.name}">
                ${project.technologies.map((technology) => `<li>${technology}</li>`).join('')}
              </ul>
              ${renderRepositoryAction(project.repository)}
            </div>
          </div>
        </div>
      </div>
    </article>
  `
}

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#contenido-principal">Saltar al contenido</a>

  <header class="header">
    <nav class="navbar container" aria-label="Navegación principal">
      <a class="logo logo-button" href="#inicio" aria-label="Ir al inicio">
        <span class="logo-mark" aria-hidden="true">AU</span>
        <span>Angel Uriel</span>
      </a>

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
        <a class="nav-link active" href="#inicio" aria-current="location">Inicio</a>
        <a class="nav-link" href="#perfil">Perfil</a>
        <a class="nav-link" href="#proyectos">Proyectos</a>
        <a class="nav-link" href="#competencias">Competencias</a>
        <a class="nav-link" href="#formacion">Formación</a>
        <a class="nav-link" href="#contacto">Contacto</a>
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
            <a class="button button-primary" href="#proyectos">
              Ver casos de proyecto
            </a>

            ${renderCvAction('button button-secondary', 'Descargar CV', 'hero-cv-status')}

            <a class="button button-text" href="#contacto">Contactar</a>
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

        <div class="projects-list">
          ${projects.map(renderProject).join('')}
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
          ${renderContactItem('GitHub', professionalContact.github)}

          ${cvAvailable ? `
            <div class="contact-item contact-item-cv">
              <div>
                <span>Currículum</span>
                <strong id="contact-cv-status">Archivo disponible</strong>
              </div>
              ${renderCvAction('button button-compact', 'Descargar CV', 'contact-cv-status')}
            </div>
          ` : ''}
          <span class="visually-hidden" id="hero-cv-status">
            ${cvAvailable
              ? 'El archivo del currículum está disponible para descarga.'
              : 'El archivo del currículum está pendiente de agregar.'}
          </span>
        </div>
      </div>
    </section>
  </main>

  <dialog
    class="gallery-dialog"
    id="gallery-dialog"
    aria-labelledby="gallery-dialog-title"
    aria-describedby="gallery-dialog-description gallery-dialog-count"
  >
    <div class="gallery-dialog-shell">
      <header class="gallery-dialog-header">
        <div>
          <span class="gallery-dialog-kicker" id="gallery-dialog-project"></span>
          <h2 id="gallery-dialog-title"></h2>
        </div>
        <button class="gallery-dialog-close" type="button" data-gallery-dialog-close aria-label="Cerrar vista ampliada">
          ${closeIcon}
        </button>
      </header>

      <div class="gallery-dialog-stage">
        <button class="gallery-dialog-arrow gallery-dialog-previous" type="button" data-gallery-dialog-previous aria-label="Imagen anterior">
          ${previousIcon}
        </button>
        <div class="gallery-dialog-media" id="gallery-dialog-media"></div>
        <button class="gallery-dialog-arrow gallery-dialog-next" type="button" data-gallery-dialog-next aria-label="Imagen siguiente">
          ${nextIcon}
        </button>
      </div>

      <footer class="gallery-dialog-footer">
        <p id="gallery-dialog-description"></p>
        <span id="gallery-dialog-count"></span>
      </footer>
    </div>
  </dialog>

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
const sections = [...document.querySelectorAll('[data-nav-section]')]
const projectFiles = [...document.querySelectorAll('[data-project-file]')]
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const galleryDialog = document.querySelector('#gallery-dialog')
const galleryDialogProject = document.querySelector('#gallery-dialog-project')
const galleryDialogTitle = document.querySelector('#gallery-dialog-title')
const galleryDialogMedia = document.querySelector('#gallery-dialog-media')
const galleryDialogDescription = document.querySelector('#gallery-dialog-description')
const galleryDialogCount = document.querySelector('#gallery-dialog-count')
const projectsById = new Map(projects.map((project) => [project.id, project]))
let dialogState = { controller: null, opener: null }

function updateGalleryDialog() {
  const { controller } = dialogState
  if (!controller) return

  const { project, activeIndex } = controller
  const item = project.gallery[activeIndex]

  galleryDialogProject.textContent = `${project.code} · ${item.phase}`
  galleryDialogTitle.textContent = item.title
  galleryDialogDescription.textContent = item.description
  galleryDialogCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(project.gallery.length).padStart(2, '0')}`
  galleryDialogMedia.innerHTML = renderGalleryMedia(item, project.code)
  galleryDialogMedia.setAttribute(
    'aria-label',
    item.available ? item.alt : `${item.phase} de ${project.name}: captura pendiente`,
  )
  galleryDialogMedia.setAttribute('role', 'img')
}

function createGalleryController(element) {
  const project = projectsById.get(element.dataset.projectId)
  const slides = [...element.querySelectorAll('[data-gallery-slide]')]
  const thumbnails = [...element.querySelectorAll('[data-gallery-thumbnail]')]
  const count = element.querySelector('[data-gallery-count]')
  const announcement = element.querySelector('[data-gallery-announcement]')
  let intervalId = null

  const controller = {
    element,
    project,
    activeIndex: 0,
    stop() {
      window.clearInterval(intervalId)
      intervalId = null
    },
    start() {
      controller.stop()

      const projectIsOpen = element.closest('[data-project-file]').classList.contains('project-file-open')
      const canRotate = !prefersReducedMotion.matches
        && !galleryDialog.open
        && document.visibilityState === 'visible'
        && projectIsOpen
        && !element.matches(':hover')
        && !element.contains(document.activeElement)

      if (!canRotate) return

      intervalId = window.setInterval(() => {
        controller.select(controller.activeIndex + 1)
      }, 5000)
    },
    select(index, { announce = false } = {}) {
      const total = project.gallery.length
      controller.activeIndex = (index + total) % total

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === controller.activeIndex
        slide.classList.toggle('gallery-slide-active', isActive)
        slide.setAttribute('aria-hidden', String(!isActive))
        slide.toggleAttribute('inert', !isActive)
      })

      thumbnails.forEach((thumbnail, thumbnailIndex) => {
        const isActive = thumbnailIndex === controller.activeIndex
        thumbnail.classList.toggle('gallery-thumbnail-active', isActive)
        thumbnail.toggleAttribute('aria-current', isActive)
      })

      const item = project.gallery[controller.activeIndex]
      count.textContent = `${String(controller.activeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

      if (announce) {
        announcement.textContent = `${item.phase}: ${item.title}`
      }

      if (dialogState.controller === controller) {
        updateGalleryDialog()
      }
    },
  }

  element.querySelector('[data-gallery-previous]').addEventListener('click', () => {
    controller.stop()
    controller.select(controller.activeIndex - 1, { announce: true })
  })

  element.querySelector('[data-gallery-next]').addEventListener('click', () => {
    controller.stop()
    controller.select(controller.activeIndex + 1, { announce: true })
  })

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      controller.stop()
      controller.select(Number(thumbnail.dataset.galleryIndex), { announce: true })
    })
  })

  element.querySelectorAll('[data-gallery-open]').forEach((openButton) => {
    openButton.addEventListener('click', () => {
      controller.select(Number(openButton.dataset.galleryIndex))
      controller.stop()
      dialogState = { controller, opener: openButton }
      updateGalleryDialog()
      galleryDialog.showModal()
      document.body.classList.add('dialog-open')
    })
  })

  element.addEventListener('mouseenter', () => controller.stop())
  element.addEventListener('mouseleave', () => controller.start())
  element.addEventListener('focusin', () => controller.stop())
  element.addEventListener('focusout', (event) => {
    if (!element.contains(event.relatedTarget)) controller.start()
  })
  element.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

    event.preventDefault()
    controller.stop()
    const direction = event.key === 'ArrowLeft' ? -1 : 1
    controller.select(controller.activeIndex + direction, { announce: true })

    const focusedThumbnail = event.target.closest('[data-gallery-thumbnail]')
    const focusedMedia = event.target.closest('[data-gallery-open]')

    if (focusedThumbnail) thumbnails[controller.activeIndex].focus()
    if (focusedMedia) {
      element.querySelector('.gallery-slide-active [data-gallery-open]').focus()
    }
  })

  return controller
}

const galleryControllers = [...document.querySelectorAll('[data-gallery]')].map(createGalleryController)

function closeGalleryDialog() {
  if (galleryDialog.open) galleryDialog.close()
}

document.querySelector('[data-gallery-dialog-close]').addEventListener('click', closeGalleryDialog)
document.querySelector('[data-gallery-dialog-previous]').addEventListener('click', () => {
  dialogState.controller?.select(dialogState.controller.activeIndex - 1, {
    announce: true,
  })
})
document.querySelector('[data-gallery-dialog-next]').addEventListener('click', () => {
  dialogState.controller?.select(dialogState.controller.activeIndex + 1, {
    announce: true,
  })
})

galleryDialog.addEventListener('click', (event) => {
  if (event.target === galleryDialog) closeGalleryDialog()
})

galleryDialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    dialogState.controller?.select(dialogState.controller.activeIndex - 1)
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    dialogState.controller?.select(dialogState.controller.activeIndex + 1)
  }
})

galleryDialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open')
  const { controller, opener } = dialogState
  dialogState = { controller: null, opener: null }

  const activeMediaButton = controller?.element.querySelector(
    '.gallery-slide-active [data-gallery-open]',
  )
  activeMediaButton?.focus()
  if (!activeMediaButton) opener?.focus()
  controller?.start()
})

document.addEventListener('visibilitychange', () => {
  galleryControllers.forEach((controller) => {
    if (document.visibilityState === 'visible') controller.start()
    else controller.stop()
  })
})

prefersReducedMotion.addEventListener('change', () => {
  galleryControllers.forEach((controller) => {
    if (prefersReducedMotion.matches) controller.stop()
    else controller.start()
  })
})

function setMenuState(isOpen, { restoreFocus = false } = {}) {
  navMenu.classList.toggle('nav-menu-open', isOpen)
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación',
  )
  menuToggle.innerHTML = isOpen ? closeIcon : menuIcon

  if (isOpen) {
    window.requestAnimationFrame(() => {
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        navLinks[0].focus()
      }
    })
  } else if (restoreFocus) {
    menuToggle.focus()
  }
}

menuToggle.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') === 'false'
  setMenuState(willOpen, { restoreFocus: !willOpen })
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false, { restoreFocus: window.innerWidth <= 760 })
  })
})

function setOpenProject(selectedFile) {
  projectFiles.forEach((projectFile) => {
    const trigger = projectFile.querySelector('.project-trigger')
    const panel = projectFile.querySelector('.project-panel')
    const isSelected = projectFile === selectedFile

    projectFile.classList.toggle('project-file-open', isSelected)
    trigger.setAttribute('aria-expanded', String(isSelected))
    panel.hidden = !isSelected

    if (isSelected && !prefersReducedMotion.matches) {
      panel.animate(
        [
          { opacity: 0, transform: 'translateY(-8px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 260, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' },
      )
    }
  })

  galleryControllers.forEach((controller) => {
    if (controller.element.closest('[data-project-file]') === selectedFile) controller.start()
    else controller.stop()
  })
}

projectFiles.forEach((projectFile) => {
  const trigger = projectFile.querySelector('.project-trigger')

  trigger.addEventListener('click', () => {
    if (trigger.getAttribute('aria-expanded') === 'true') return
    setOpenProject(projectFile)
  })
})

galleryControllers.forEach((controller) => controller.start())

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuState(false, { restoreFocus: true })
  }
})

document.addEventListener('click', (event) => {
  const eventPath = event.composedPath()
  const clickedOutside = !eventPath.includes(navMenu) && !eventPath.includes(menuToggle)

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
        const isCurrent = link.hash === `#${visibleEntry.target.id}`
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
