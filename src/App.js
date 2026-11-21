import Home from "./components/Home";
import "./App.css";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Marquina.dev, inicio">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>marquina<span className="brand-dot">.</span>dev</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a className="nav-contact" href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="contenido">
        <Home />
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#inicio">marquina<span className="brand-dot">.</span>dev</a>
        <span>Portafolio personal · Actualizado en 2026</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </div>
  );
}
