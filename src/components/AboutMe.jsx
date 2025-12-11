export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="side-info">
        <ul>
          <li>💻 React & JavaScript</li>
          <li>🎨 Diseño UI/UX</li>
          <li>🌍 Palmanyola, Baleares</li>
        </ul>
      </div>

      <div className="card">
        <img
          src="/soyyo.jpg"
          alt="Foto mía"
          className="card-image"
        />
        <div className="card-text">
          <h2>Martín Salas Barragán</h2>
          <p>
            Tengo 24 años. Soy un apasionado por la tecnología, con experiencia en
            desarrollo web y React. Me gusta crear interfaces limpias y
            funcionales que mejoren la experiencia del usuario.
          </p>
        </div>
      </div>

      <div className="side-info">
        <ul>
          <li>📱 Responsive Design</li>
          <li>⚡ Performance</li>
          <li>🤝 Trabajo en equipo</li>
        </ul>
      </div>
    </div>
  );
}
