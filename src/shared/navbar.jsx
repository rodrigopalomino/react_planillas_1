import logo from "../assets/img/logo.png";

import configuracion from "../assets/img/configuracion.svg";
import questionCircle from "../assets/img/question-circle.svg";
import square from "../assets/img/square.svg";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#5c1260" }}
      >
        <img src={logo} className="mx-3" />

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item bg-white">
              <a href="#" className="nav-link text-danger-emphasis">
                TRABAJADORES
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                PLANILLAS
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                INFORMES
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                CONFIGURACION
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                UTILITARIOS
              </a>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <img src={configuracion} width="30px" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <img src={questionCircle} width="30px" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <img src={square} width="30px" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
