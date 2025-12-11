export default function OffersPage() {
  return (
    <div className="offers-container">
      <h1>🎉 Bienvenido a nuestro Newsletter</h1>
      <p>Gracias por suscribirte. Aquí tienes nuestras últimas ofertas y novedades:</p>

      <section className="offers-list">
        <div className="offer-card">
          <h2>Descuento 50% en Hosting</h2>
          <p>Aprovecha nuestra promoción especial en planes de hosting.</p>
          <button>Ver más</button>
        </div>

        <div className="offer-card">
          <h2>Curso gratuito de React</h2>
          <p>Aprende a crear aplicaciones modernas con React paso a paso.</p>
          <button>Inscribirme</button>
        </div>

        <div className="offer-card">
          <h2>Plantillas UI/UX exclusivas</h2>
          <p>Descarga nuestras plantillas premium para tus proyectos.</p>
          <button>Descargar</button>
        </div>
      </section>
    </div>
  );
}
