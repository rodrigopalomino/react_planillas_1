export const Sidebar = () => {
  return (
    <>
      <div
        className="col-2 p-0 overflow-y-auto overflow-x-hidden"
        style={{
          background: "#212120",
          height: "100%",
          border: "2px solid red",
        }}
      >
        <img src="../../img/logoPanel.png" style={{ width: "100%" }} />
        {/* <!-- Acordion Personal --> */}
        <div className="accordion mt-2">
          <div
            className="accordion-item rounded-0 border-0"
            style={{ background: "transparent" }}
          >
            <h2 className="accordion-header">
              <button
                className="text-white w-100 px-3 border-0 d-flex align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acordionPersonal"
                aria-expanded="true"
                aria-controls="acordionPersonal"
                style={{ background: "transparent" }}
              >
                <img src="../../img/person.svg" width="25px" />
                <span className="fs-5 ms-2">PERSONAL</span>
                <img src="../../img/arriba.png" className="ms-auto" />
              </button>
            </h2>
            <div
              id="acordionPersonal"
              className="accordion-collapse collapse text-white p-4 row g-4"
            >
              <a
                href="../personal/fichaPersonal.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Ficha de Personal
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Contratos
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Derechos de Ambiente
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Contro de Permisos
              </a>
              <a
                href="../personal/controlAsistencia.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Control de Asistencia
              </a>
              <a
                href="../personal/adelentoAsistencia.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Adelando y/o Asistencia
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Prestamos
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Pre/Pos Natal / Bonificaciones
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Acordion Asignacion de Conceptos --> */}
        <div className="accordion mt-2">
          <div
            className="accordion-item rounded-0 border-0"
            style={{ background: "transparent" }}
          >
            <h2 className="accordion-header">
              <button
                className="text-white w-100 px-3 border-0 d-flex align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acordionAsignacionConceptos"
                aria-expanded="true"
                aria-controls="acordionAsignacionConceptos"
                style={{ background: "transparent" }}
              >
                <img src="../../img/person.svg" width="25px" />
                <span className="fs-5">Asignacion de Conceptos</span>
                <img src="../../img/arriba.png" className="ms-auto" />
              </button>
            </h2>
            <div
              id="acordionAsignacionConceptos"
              className="accordion-collapse collapse text-white p-4 row g-4"
            >
              <a
                href="../asignacionConceptos/conceptosTrabajador.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Conceptos por trabajador
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Conceptos por sede
              </a>
              <a
                href="#"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Aplicar a todos
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Acordion Tablas --> */}
        <div className="accordion mt-2">
          <div
            className="accordion-item rounded-0 border-0"
            style={{ background: "transparent" }}
          >
            <h2 className="accordion-header">
              <button
                className="text-white w-100 px-3 border-0 d-flex align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acordionTablas"
                aria-expanded="true"
                aria-controls="acordionTablas"
                style={{ background: "transparent" }}
              >
                <img src="../../img/configuracion.svg" width="23px" />
                <span className="fs-5 ms-2">Tablas</span>
                <img src="../../img/arriba.png" className="ms-auto" />
              </button>
            </h2>
            <div
              id="acordionTablas"
              className="accordion-collapse collapse show text-white p-4 row g-4"
            >
              <a
                href="IniciarPeriodo.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Iniciar Periodo
              </a>
              <a
                href="declarantes.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Declarante
              </a>
              <a
                href="sede.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Sede
              </a>
              <a
                href="centroCostos.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Centro de costos
              </a>
              <a
                href="cargo.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Cargo
              </a>
              <a
                href="departamento.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Departamento
              </a>
              <a
                href="moneda.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Moneda
              </a>
              <a
                href="conceptos.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Conceptos
              </a>
              <a
                href="comisionAFPs.html"
                className="d-block link-underline link-underline-opacity-0"
              >
                Comision AFPs
              </a>
              <a
                href="regimenPensionario.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Regimen pensionario
              </a>
              <a
                href="turno.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Turno
              </a>
              <a
                href="montoxHora.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Monto por hora
              </a>
              <a
                href="bancos.html"
                className="d-block link-underline link-underline-opacity-0 text-white"
              >
                Bancos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
