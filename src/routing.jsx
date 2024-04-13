import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Index } from "./components/index";
import { Plantilla } from "./components/trabajadores/plantilla";

// import { ControlAsistencia } from "./components/trabajadores/personal/controlAsistencia";
// import { FichaPersonal } from "./components/trabajadores/personal/fichaPersonal";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>

      <Route path="/login" element={<Login></Login>}></Route>

      <Route
        path="/trabajadores/:contenido/:pagina"
        element={<Plantilla></Plantilla>}
      ></Route>

      {/* <Route
        path="/adelanto"
        element={<ControlAsistencia></ControlAsistencia>}
      ></Route>
      <Route path="/ficha" element={<FichaPersonal></FichaPersonal>}></Route> */}
    </Routes>
  );
};
