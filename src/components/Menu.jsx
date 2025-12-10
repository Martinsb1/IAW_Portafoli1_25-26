import { useState } from "react";
import {Link} from "react-router-dom";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

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
              <Link to="Sobre mí">Sobre mí</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
