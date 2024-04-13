import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div
        className="w-100 vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "rgb(175, 172, 172)" }}
      >
        <div style={{ width: "450px", height: "330px", background: "white" }}>
          <div className="text-center py-2" style={{ background: "#5c1260" }}>
            <img src={logo} alt="" />
          </div>

          <form className="pt-4">
            <div className="row justify-content-center mb-3">
              <label className="col-2 col-form-label">Empresa:</label>
              <div className="col-6">
                <select className="form-select">
                  <option value="1">MECATRONIC</option>
                  <option value="2">D&H MECATRONIC</option>
                  <option value="3">SOLUCIONES</option>
                  <option value="4">D&H DIESE PARTS</option>
                  <option value="5">IMPORTACIONES SELECTOS</option>
                  <option value="6">RECTIFICACIONES DHIGZA</option>
                  <option value="7">ALFONSO DURAN TOLENTINO</option>
                  <option value="8">COMMON RAIL</option>
                </select>
              </div>
            </div>

            <div className="row justify-content-center mb-3">
              <label className="col-2 col-form-label">Usuario:</label>
              <div className="col-6">
                <input type="text" className="form-control" id="usuario" />
              </div>
            </div>

            <div className="row justify-content-center mb-4">
              <label className="col-2 col-form-label">Password:</label>
              <div className="col-6">
                <input type="text" className="form-control" id="password" />
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn text-white rounded-0 px-4 me-4"
                style={{ background: "#5c1260" }}
              >
                {/* <a
                  href="index.html"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Ingresar
                </a> */}
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Ingresar
                </Link>
              </button>
              <button
                className="btn text-white rounded-0 px-4"
                style={{ background: "#5c1260" }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
