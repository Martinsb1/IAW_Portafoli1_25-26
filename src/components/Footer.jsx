import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer-structured">
      <div className="footer-columns">


        <div className="footer-column">
          <h4>Ayuda</h4>
          <ul>
            <li><Link to="/Contact">Centro de contacto</Link></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Soporte técnico</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="https://www.meta.com/es/legal/privacy-policy/">Política de privacidad</a></li>
            <li><a href="https://www.minecraft.net/es-es/terms/r2">Términos de uso</a></li>
            <li><a href="https://orteil.dashnet.org/cookieclicker/">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Martín Salas Barragán | Todos los derechos reservados</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/ies_emili_darder_palma/" target="_blank">Instagram</a>
          <a href="https://x.com/emilidarder" target="_blank">X</a>
          <a href="https://www.facebook.com/IES-Emili-Darder-214370851916192/" target="_blank">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
