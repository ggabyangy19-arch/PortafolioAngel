import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header" id="inicio">
    <nav class="navbar container">
      <a href="#inicio" class="logo" aria-label="Ir al inicio">
        <span class="logo-mark">G</span>
        <span>Galaxy</span>
      </a>

      <button
        class="menu-toggle"
        id="menu-toggle"
        aria-label="Abrir menú de navegación"
        aria-expanded="false"
      >
        ☰
      </button>

      <div class="nav-menu" id="nav-menu">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#formacion">Formación</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero section">
      <div class="hero-glow hero-glow-one"></div>
      <div class="hero-glow hero-glow-two"></div>

      <div class="hero-content container">
        <div class="hero-text">
          <span class="eyebrow">Ingeniería · Industria · Tecnología</span>

          <h1>
            Hola, soy
            <span class="gradient-text">Tu Nombre</span>
          </h1>

          <p class="hero-description">
            Ingeniero Mecatrónico enfocado en automatización industrial,
            desarrollo de software, bases de datos, inteligencia artificial
            y gestión de proyectos.
          </p>

          <div class="hero-actions">
            <a href="#proyectos" class="button button-primary">
              Ver proyectos
            </a>

            <a href="#contacto" class="button button-secondary">
              Contactarme
            </a>

            <a
              href="/documents/cv.pdf"
              class="button button-text"
              download
            >
              Descargar CV
            </a>
          </div>

          <div class="hero-stats">
            <article>
              <strong>6+</strong>
              <span>Proyectos técnicos</span>
            </article>

            <article>
              <strong>4</strong>
              <span>Áreas de especialización</span>
            </article>

            <article>
              <strong>100%</strong>
              <span>Enfoque práctico</span>
            </article>
          </div>
        </div>

        <div class="hero-visual">
          <div class="profile-card">
            <div class="profile-placeholder">
              <span>TN</span>
            </div>

            <div class="profile-card-content">
              <span class="status">
                <span class="status-dot"></span>
                Disponible para colaborar
              </span>

              <h2>Ingeniero Mecatrónico</h2>

              <p>
                Automatización, software, IoT, datos e inteligencia artificial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-secondary" id="sobre-mi">
      <div class="container">
        <div class="section-heading">
          <span class="section-number">01</span>

          <div>
            <span class="eyebrow">Perfil profesional</span>
            <h2>Sobre mí</h2>
          </div>
        </div>

        <div class="about-grid">
          <div class="about-text">
            <p>
              Soy estudiante de Ingeniería Mecatrónica con interés en crear
              soluciones que conecten maquinaria, datos y software.
            </p>

            <p>
              He trabajado en proyectos relacionados con sistemas industriales,
              microcontroladores ESP32, bases de datos, aplicaciones web,
              visión artificial y gestión de proyectos mediante PMI y Scrum.
            </p>

            <p>
              Mi objetivo es aplicar tecnología para mejorar procesos,
              automatizar actividades y convertir información operativa
              en decisiones útiles.
            </p>
          </div>

          <div class="about-details">
            <article>
              <span>Especialidad</span>
              <strong>Mecatrónica y software industrial</strong>
            </article>

            <article>
              <span>Ubicación</span>
              <strong>Estado de México, México</strong>
            </article>

            <article>
              <span>Intereses</span>
              <strong>Automatización, IA, IoT y datos</strong>
            </article>

            <article>
              <span>Modalidad</span>
              <strong>Presencial, híbrida y remota</strong>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="habilidades">
      <div class="container">
        <div class="section-heading">
          <span class="section-number">02</span>

          <div>
            <span class="eyebrow">Conocimientos técnicos</span>
            <h2>Habilidades</h2>
          </div>
        </div>

        <div class="skills-grid">
          <article class="skill-card">
            <span class="skill-icon">01</span>
            <h3>Desarrollo web</h3>
            <p>
              Creación de sistemas e interfaces web orientadas a resolver
              necesidades operativas y administrativas.
            </p>

            <div class="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
            </div>
          </article>

          <article class="skill-card">
            <span class="skill-icon">02</span>
            <h3>Industria y automatización</h3>
            <p>
              Integración de sensores, controladores y sistemas para capturar
              y analizar información industrial.
            </p>

            <div class="tags">
              <span>ESP32</span>
              <span>PLC</span>
              <span>SCADA</span>
              <span>OEE</span>
              <span>IoT</span>
              <span>Sensores</span>
            </div>
          </article>

          <article class="skill-card">
            <span class="skill-icon">03</span>
            <h3>Datos e inteligencia artificial</h3>
            <p>
              Uso de datos, modelos y herramientas de visualización para
              desarrollar soluciones inteligentes.
            </p>

            <div class="tags">
              <span>Python</span>
              <span>YOLO</span>
              <span>Power BI</span>
              <span>Ollama</span>
              <span>SQL</span>
              <span>IA</span>
            </div>
          </article>

          <article class="skill-card">
            <span class="skill-icon">04</span>
            <h3>Gestión de proyectos</h3>
            <p>
              Planeación, documentación y seguimiento de proyectos mediante
              metodologías tradicionales y ágiles.
            </p>

            <div class="tags">
              <span>PMI</span>
              <span>PMBOK</span>
              <span>Scrum</span>
              <span>WBS</span>
              <span>RACI</span>
              <span>ProjectLibre</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-secondary" id="proyectos">
      <div class="container">
        <div class="section-heading section-heading-projects">
          <div class="section-heading-left">
            <span class="section-number">03</span>

            <div>
              <span class="eyebrow">Trabajo realizado</span>
              <h2>Proyectos destacados</h2>
            </div>
          </div>

          <p>
            Soluciones desarrolladas para integrar ingeniería, programación,
            automatización y gestión.
          </p>
        </div>

        <div class="projects-grid">
          <article class="project-card project-featured">
            <div class="project-image project-image-sgi">
              <span>SGI</span>
            </div>

            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Sistema industrial</span>
                <span class="project-year">2026</span>
              </div>

              <h3>Sistema de Gestión Industrial</h3>

              <p>
                Plataforma web para administrar producción, maquinaria,
                operadores, inventario, sensores, órdenes e indicadores OEE.
              </p>

              <div class="tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>Bootstrap</span>
                <span>Power BI</span>
                <span>ESP32</span>
              </div>

              <a href="#" class="project-link">
                Ver detalles
                <span>→</span>
              </a>
            </div>
          </article>

          <article class="project-card">
            <div class="project-image project-image-sos">
              <span>SOS</span>
            </div>

            <div class="project-content">
              <div class="project-header">
                <span class="project-type">IoT y seguridad</span>
                <span class="project-year">2025</span>
              </div>

              <h3>Pulsera SOS con ESP32 y GPS</h3>

              <p>
                Dispositivo capaz de enviar alertas y coordenadas GPS a una
                base de datos y mostrarlas en un dashboard web.
              </p>

              <div class="tags">
                <span>ESP32</span>
                <span>GPS</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>

              <a href="#" class="project-link">
                Ver detalles
                <span>→</span>
              </a>
            </div>
          </article>

          <article class="project-card">
            <div class="project-image project-image-robot">
              <span>AI</span>
            </div>

            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Robótica</span>
                <span class="project-year">2026</span>
              </div>

              <h3>Brazo robótico por gestos</h3>

              <p>
                Propuesta de control de un brazo robótico mediante sensores,
                reconocimiento de gestos e inteligencia artificial.
              </p>

              <div class="tags">
                <span>Robótica</span>
                <span>IA</span>
                <span>Sensores</span>
                <span>PMI</span>
              </div>

              <a href="#" class="project-link">
                Ver detalles
                <span>→</span>
              </a>
            </div>
          </article>

          <article class="project-card">
            <div class="project-image project-image-pm">
              <span>PM</span>
            </div>

            <div class="project-content">
              <div class="project-header">
                <span class="project-type">Gestión de proyectos</span>
                <span class="project-year">2026</span>
              </div>

              <h3>Plataforma PMI y Scrum</h3>

              <p>
                Sistema para administrar proyectos tradicionales, ágiles
                e híbridos mediante roles, artefactos, documentos y sprints.
              </p>

              <div class="tags">
                <span>PMI</span>
                <span>Scrum</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>

              <a href="#" class="project-link">
                Ver detalles
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="formacion">
      <div class="container">
        <div class="section-heading">
          <span class="section-number">04</span>

          <div>
            <span class="eyebrow">Preparación profesional</span>
            <h2>Formación</h2>
          </div>
        </div>

        <div class="timeline">
          <article class="timeline-item">
            <div class="timeline-marker"></div>

            <div>
              <span class="timeline-date">En curso</span>
              <h3>Ingeniería Mecatrónica</h3>
              <p>
                Formación en automatización, electrónica, programación,
                control, diseño mecánico e integración de sistemas.
              </p>
            </div>
          </article>

          <article class="timeline-item">
            <div class="timeline-marker"></div>

            <div>
              <span class="timeline-date">Formación complementaria</span>
              <h3>PMI, PMBOK y Scrum</h3>
              <p>
                Planeación, gestión de alcance, cronogramas, riesgos,
                interesados, equipos ágiles y entrega de valor.
              </p>
            </div>
          </article>

          <article class="timeline-item">
            <div class="timeline-marker"></div>

            <div>
              <span class="timeline-date">Aprendizaje continuo</span>
              <h3>Programación, datos e inteligencia artificial</h3>
              <p>
                Desarrollo web, bases de datos, Python, herramientas de IA,
                visión artificial y análisis de información.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section contact-section" id="contacto">
      <div class="container contact-container">
        <div class="contact-copy">
          <span class="eyebrow">Contacto profesional</span>

          <h2>
            Construyamos una solución
            <span class="gradient-text">juntos.</span>
          </h2>

          <p>
            Estoy disponible para proyectos, colaboraciones, residencias
            profesionales y oportunidades relacionadas con ingeniería,
            automatización y desarrollo de software.
          </p>
        </div>

        <div class="contact-links">
          <a href="mailto:correo@ejemplo.com">
            <span>Correo electrónico</span>
            <strong>correo@ejemplo.com</strong>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <strong>Visitar perfil</strong>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <strong>Ver repositorios</strong>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <div class="logo">
        <span class="logo-mark">G</span>
        <span>Galaxy</span>
      </div>

      <p>
        © <span id="current-year"></span> Tu Nombre. Todos los derechos reservados.
      </p>
    </div>
  </footer>
`

const menuToggle = document.querySelector('#menu-toggle')
const navMenu = document.querySelector('#nav-menu')
const navLinks = document.querySelectorAll('.nav-menu a')

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('nav-menu-open')

  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.textContent = isOpen ? '✕' : '☰'
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.textContent = '☰'
  })
})

document.querySelector('#current-year').textContent =
  new Date().getFullYear()