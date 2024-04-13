import { Navbar } from "../shared/navbar";
import fondo from "../assets/img/fondoApp.png";

export const Index = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-2 ps-5" style={{ background: "#dddee2" }}>
        <p className="m-0">
          Hola CHERNARDEZ, Bienvenido al Sistema de Planilla X6
        </p>
      </div>

      <div className="fondo" style={{ height: "88.9vh" }}>
        <img src={fondo} style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  );
};
