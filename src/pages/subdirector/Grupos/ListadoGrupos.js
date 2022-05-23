import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "../../../components/Modal";

const ListadoGrupos = () => {
  const [modalEperturaGrupo, setModalEperturaGrupo] = useState(false);

  const AperturarGrupo = () => {
    return (
      <div>
        AperturarGrupo <br />
        oficio de apertura de grupo?
        <br />
        Cronograma?
        <br />
      </div>
    );
  };
  return (
    <div className="row container section">
      <Modal
        open={modalEperturaGrupo}
        fnCloseModal={() => setModalEperturaGrupo(false)}
      >
        <AperturarGrupo />
      </Modal>
      <div className="col s12 " style={{ margin: "15px 0" }}>
        Grupos del programa de informatica
        <Link
          to="/subdirector/programas/3"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
      </div>
      <div className="col s12 ">
        <button
          className="waves-effect waves-light  btn"
          onClick={() => setModalEperturaGrupo(true)}
        >
          Apertura de grupo
        </button>
        <br />
        <br />
        <br />
        Tabla...
      </div>
    </div>
  );
};

export default ListadoGrupos;
