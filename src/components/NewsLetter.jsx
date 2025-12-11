export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2>Suscríbete a nuestro Newsletter</h2>
      <p>
        Recibe novedades, actualizaciones y noticias sobre nuestros proyectos directamente en tu correo.
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          name="email"
          placeholder="Introduce tu correo electrónico"
          required
        />
        <button type="submit" className="newsletter-btn">Suscribirme</button>
      </form>
    </div>
  );
}