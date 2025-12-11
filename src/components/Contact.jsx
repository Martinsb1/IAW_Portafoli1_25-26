

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <p className="contact-intro">
        ¿Tienes dudas o quieres hablar sobre un proyecto? Aquí te explico cómo hacerlo.
      </p>

      <div className="contact-options">
        <div className="contact-box">
          <h3>Necesito ayuda con un proyecto</h3>
          <p>
            Si quieres que colabore contigo o necesitas soporte técnico, puedes escribirme directamente.
          </p>
          {/* Con Outlook me ha funcionado, pero para gmail y otros he tenido que configurar cosas del correo */}
          <a href="mailto:msb00@iesemilidarder.com" className="contact-btn">Escríbeme</a>
        </div>

        <div className="contact-box">
          <h3>Consulta general</h3>
          <p>
            Para cualquier otra duda, sugerencia o propuesta, puedes usar el formulario de contacto.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSct6RKNS7iyqidJ6vkfq2IXoQ5_ikk1QGAHTTwQZT8Wif7Mxg/viewform?usp=header" className="contact-btn">Ir al formulario</a>
        </div>
      </div>


      <div className="map-container">
        <h3>Ubicación de nuestro negocio</h3>
        <iframe
          title="Ubicación negocio"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.9069601555566!2d2.630067077249515!3d39.58424720588408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129792897cb4adfd%3A0x2ae3087f5b4b21a2!2sIES%20Emili%20Darder!5e0!3m2!1ses!2ses!4v1765391827250!5m2!1ses!2ses"
          width="70%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
