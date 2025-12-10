import ImageSlider from "./Slider";

export default function Proyectos() {
  return (
    <section>
      <h2>Proyectos</h2>
      <p>
        Aquí encontrarás una selección de los proyectos más destacados que he
        realizado en los últimos años. Cada uno refleja mi pasión por el
        desarrollo web y el diseño funcional.
      </p>

      <div className="projects">
        <ImageSlider />
      </div>

      <div className="extra-content">
        <h3>Tecnologías utilizadas</h3>
        <ul>
          <li>React & Next.js</li>
          <li>Node.js & Express</li>
          <li>MongoDB & PostgreSQL</li>
          <li>Figma & Adobe XD</li>
        </ul>

        <h3>¿Quieres saber más?</h3>
        <p>
          Puedes ver el código completo de mis proyectos en{" "}
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            mi GitHub
          </a>{" "}
          o contactarme directamente para colaborar.
        </p>
      </div>
    </section>
  );
}
