const projects = [
  {
    number: "01",
    category: "Desarrollo web",
    title: "Sistema web de votación electrónica",
    description:
      "Plataforma académica para gestionar procesos electorales. Incluye verificación de identidad, panel administrativo, gestión de candidatos y seguimiento de la votación.",
    details: ["Verificación con DNI", "Votos y tendencias", "Gestión de candidatos"],
    stack: ["React", "TypeScript", "Firebase", "Supabase"],
    mark: "V",
    style: "project-voting",
    links: [
      { label: "Repositorio vote-online", href: "https://github.com/seblas28/vote-online" },
    ],
  },
  {
    number: "02",
    category: "Visión por computadora",
    title: "Prototipo de acceso con detección facial",
    description:
      "Práctica académica que explora el reconocimiento facial básico con Python y su integración con una interfaz web para validar a un usuario.",
    details: ["Reconocimiento básico", "Interfaz web", "Prototipo académico"],
    stack: ["Python", "Visión por computadora"],
    mark: "ID",
    style: "project-face",
  },
  {
    number: "03",
    category: "Tecnología accesible",
    title: "Reconocimiento de señas con detección de manos",
    description:
      "Modelo básico para reconocer gestos de manos relacionados con el lenguaje de señas, desarrollado como ejercicio de visión por computadora.",
    details: ["Detección de manos", "Reconocimiento de gestos", "Exploración de accesibilidad"],
    stack: ["Python", "Visión por computadora"],
    mark: "↗",
    style: "project-sign",
  },
  {
    number: "04",
    category: "Datos e inteligencia artificial",
    title: "Preparación de datos para modelos ML y DL",
    description:
      "Flujo de trabajo académico para limpiar y preparar datos antes de utilizarlos en modelos de Machine Learning y Deep Learning.",
    details: ["Limpieza de datos", "Preparación de variables", "Python"],
    stack: ["Python", "Machine Learning", "Deep Learning"],
    mark: "01",
    style: "project-data",
  },
  {
    number: "05",
    category: "Inteligencia artificial y accesibilidad",
    title: "KaiSeñas · reconocimiento de vocales en lenguaje de señas",
    description:
      "Aplicación académica que explora el reconocimiento de vocales mediante la posición y el movimiento de las manos. Integra una interfaz web con detección de puntos de referencia de las manos.",
    details: ["Detección de manos con MediaPipe", "Interfaz React y TypeScript", "Proyecto académico"],
    stack: ["React", "TypeScript", "MediaPipe"],
    mark: "KS",
    style: "project-kai",
    status: "Frontend y backend tienen versiones en desarrollo con mayor avance en sus respectivas ramas.",
    links: [
      { label: "Frontend · rama actualizacion", href: "https://github.com/seblas28/Kai-senas-app/tree/actualizacion" },
      { label: "Backend · rama actualizacion-ia", href: "https://github.com/seblas28/lenguaje-senas-ia/tree/actualizacion-ia" },
    ],
  },
];

const skillGroups = [
  {
    title: "Desarrollo",
    skills: ["Java · POO", "React", "TypeScript", "Python", "HTML y CSS"],
  },
  {
    title: "Datos e integración",
    skills: ["SQL", "Firebase", "Supabase", "Preparación de datos", "Fundamentos de ML y DL"],
  },
  {
    title: "Forma de trabajar",
    skills: ["Pensamiento analítico", "Resolución de problemas", "Trabajo en equipo", "Adaptabilidad", "Aprendizaje continuo"],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.style}`} aria-hidden="true">
        <div className="art-grid" />
        <span className="art-mark">{project.mark}</span>
        <span className="art-number">{project.number} / {String(projects.length).padStart(2, "0")}</span>
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
      </div>
      <div className="project-content">
        <div className="project-category"><span />{project.category}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-details">
          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <div className="tag-list" aria-label="Tecnologías">
          {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        {project.links && (
          <div className="project-links" aria-label={`Enlaces de ${project.title}`}>
            {project.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
        {project.status && <p className="project-status"><span className="status-dot" />{project.status}</p>}
        <span className="project-type">Proyecto académico</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero page-width" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ESTUDIANTE · SOFTWARE E IA</div>
          <p className="hero-intro">Hola, soy</p>
          <h1 id="hero-title">Sebastian<br /><span className="gradient-text">Marquina.</span></h1>
          <p className="hero-description">
            Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI. Me interesa crear y mejorar soluciones tecnológicas que ayuden a resolver problemas reales.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="mailto:seblas38@hotmail.com">Escríbeme <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta" aria-label="Formación y áreas de interés">
            <span>SENATI <i>·</i> 2024–actualidad</span>
            <span>Desarrollo web</span>
            <span>Inteligencia artificial</span>
          </div>
        </div>

        <aside className="profile-card" aria-label="Resumen del perfil">
          <div className="profile-card-top"><span>PERFIL PROFESIONAL</span><span className="card-index">01—04</span></div>
          <div className="profile-monogram" aria-hidden="true">SM<span>.</span></div>
          <p className="profile-caption">Software · Inteligencia artificial · Aprendizaje</p>
          <div className="profile-divider" />
          <div className="profile-stat"><span>Enfoque</span><strong>Crear soluciones útiles</strong></div>
          <div className="profile-stat"><span>Fortalezas</span><strong>Responsabilidad y análisis</strong></div>
          <div className="profile-card-bottom"><span className="status-dot" /> Construyendo mi camino profesional</div>
        </aside>
      </section>

      <section className="about-section section-wrap" id="sobre-mi" aria-labelledby="about-title">
        <div className="page-width about-layout">
          <div className="section-label"><span>01</span><span>SOBRE MÍ</span></div>
          <figure className="about-avatar">
            <img src={`${process.env.PUBLIC_URL}/avatar-sebastian.png`} alt="Avatar 3D de Sebastian, con cabello rizado y lentes" />
            <figcaption>Una versión ilustrada de mí</figcaption>
          </figure>
          <div className="about-copy">
            <h2 id="about-title">Aprender, analizar<br />y <span className="gradient-text">construir.</span></h2>
            <p>
              Estoy formándome en Ingeniería de Software con Inteligencia Artificial. En mis proyectos académicos he explorado aplicaciones web, visión por computadora y preparación de datos. Me considero creativo, analítico y responsable; disfruto investigar, aprender herramientas nuevas y buscar soluciones cuando aparece un problema.
            </p>
            <p>
              Quiero seguir fortaleciendo mis habilidades técnicas y colaborar en equipos donde pueda convertir ideas en productos claros, accesibles y bien pensados.
            </p>
            <div className="about-note"><span className="note-mark">✳</span><span>Mi objetivo es crecer creando tecnología que tenga un propósito práctico.</span></div>
          </div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="proyectos" aria-labelledby="projects-title">
        <div className="page-width">
          <div className="section-label"><span>02</span><span>PROYECTOS SELECCIONADOS</span></div>
          <div className="section-heading-row">
            <div><h2 id="projects-title">Trabajo en <span className="gradient-text">progreso.</span></h2><p>Una muestra de lo que he aprendido y sigo desarrollando.</p></div>
            <a className="text-link" href="https://github.com/seblas28" target="_blank" rel="noreferrer">Mi GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <p className="project-footnote">Los proyectos se presentan como trabajos académicos o prototipos; sus descripciones reflejan el alcance indicado en mi CV y portafolio inicial.</p>
        </div>
      </section>

      <section className="skills-section section-wrap" id="habilidades" aria-labelledby="skills-title">
        <div className="page-width">
          <div className="section-label"><span>03</span><span>HABILIDADES</span></div>
          <div className="section-heading-row skills-heading">
            <div><h2 id="skills-title">Herramientas para<br /><span className="gradient-text">seguir creciendo.</span></h2><p>Conocimientos que estoy aplicando y fortaleciendo en mi formación.</p></div>
            <div className="skills-note"><span>FORMACIÓN ACTUAL</span><strong>Ingeniería de Software<br />con Inteligencia Artificial</strong><small>SENATI · 2024–actualidad</small></div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="skills-footnote">La mención de una herramienta indica experiencia formativa; el nivel puede variar según la tecnología y el proyecto.</p>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contacto" aria-labelledby="contact-title">
        <div className="page-width contact-panel">
          <div className="contact-orb" aria-hidden="true">↗</div>
          <div className="section-label"><span>04</span><span>CONTACTO</span></div>
          <h2 id="contact-title">¿Conversamos sobre<br /><span className="gradient-text">tecnología?</span></h2>
          <p>Estoy abierto a conversar sobre proyectos, prácticas y oportunidades para seguir aprendiendo.</p>
          <div className="contact-links">
            <a className="button button-primary" href="mailto:seblas38@hotmail.com">seblas38@hotmail.com <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/sebastian-marquina-rueda-784953364" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="tel:+51982184811">+51 982 184 811</a>
          </div>
        </div>
      </section>
    </>
  );
}
