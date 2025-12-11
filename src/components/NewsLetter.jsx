import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate("/offers"); 
  };

  return (
    <div className="newsletter-container">
      <h2>Suscríbete a nuestro Newsletter</h2>
      <p>
        Recibe novedades, actualizaciones y noticias sobre nuestros proyectos directamente en tu correo.
      </p>

      <form className="newsletter-form" onSubmit={handleSubmit}>
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
