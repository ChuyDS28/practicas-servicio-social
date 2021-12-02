import React, { useEffect } from "react";
import { Link } from "react-router-dom";
 import M from "materialize-css/dist/js/materialize.min.js";

const ListadoCatalogos = () => {
  return (
    <div className="container section">
      <blockquote>
        <h5 className="light teal-text">Listado de catalogos</h5>
        <p>Selecciona un catalogo</p>
      </blockquote>
      <div className="collection">
        <p className="collection-item active  ">Listado de catalogos</p>
        <Link to="/admin/crudInstructores" className="collection-item">
          Instructores
        </Link>
        <Link to="/admin/crudEscuelas" className="collection-item">
          Escuelas
        </Link>
      </div>
    </div>
  );
};

export default ListadoCatalogos;
