import { useParams } from "react-router-dom";
import { Navbar } from "../../shared/navbar";
import { Sidebar } from "../../shared/sidebar";
import { FichaPersonal } from "./personal/fichaPersonal";
import { ControlAsistencia } from "./personal/controlAsistencia";
import { AdelantoAsistencia } from "./personal/adelantoAsistencia";

export const Plantilla = () => {
  const { contenido, pagina } = useParams();

  let Componente;

  switch (contenido) {
    case "personal":
      switch (pagina) {
        case "fichaPersonal":
          Componente = <FichaPersonal></FichaPersonal>;
          break;
        case "controlAsistencia":
          Componente = <ControlAsistencia></ControlAsistencia>;
          break;
        case "adelantoAsistencia":
          Componente = <AdelantoAsistencia></AdelantoAsistencia>;
          break;
      }
      break;
    case "asignacionConceptos":
      break;
    case "tablas":
      break;
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="row m-0" style={{ height: "calc(100vh - 62px)" }}>
        <Sidebar></Sidebar>
        <div className="col-10" style={{ border: "2px solid blue" }}>
          {Componente}
        </div>
      </div>
    </>
  );
};
