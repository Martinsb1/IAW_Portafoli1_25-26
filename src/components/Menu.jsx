import { useState,useEffect } from "react";
import {Link, useLocation} from "react-router-dom";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false); // cierra el menú automáticamente
  }, [location]);
  return (
    <div className="dropdown">
      <button
        className="dropdown-btn"
        onClick={() => setOpen(!open)}
        
      >
        Menú ▾
      </button>

      {open && (
        <nav>
          <ul className="dropdown-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li>
              <Link to="/AboutMe">Sobre mí</Link>
            </li>
            <li>
              <Link to="/Contact">Contáctanos</Link>
            </li>
            <li>
              <Link to="/NewsLetter">NewsLetter</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
