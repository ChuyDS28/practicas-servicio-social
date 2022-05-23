import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";
//api
import {
  obtenerProgramas,
  obtenerMisProgramas,
  crearPrograma,
} from "../api/services/subdirector/programas";

const ListadoProgramas = () => {
  let navigate = useNavigate();
  moment.locale();
  const [programas, setProgramas] = useState([]);

  useEffect(() => {
    getProgramas();
  }, []);

  async function getProgramas() {
    try {
      const dataU = await obtenerProgramas(0);
      console.log(dataU);
      setProgramas(dataU.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <div className="bigContainer section">
      <h5
        className="header   blue-grey-text text-darken-3"
        style={{ fontSize: "2rem", fontWeight: "500", marginBottom: "50px" }}
      >
        Listado general de Programas
      </h5>
      <div className="row ">
        <div className="  col s12 l6 m12 xl6 ">
          <button
            type="submit"
            className="waves-effect waves-light btn outlined left"
          >
            Buscar
            <i className="material-icons right">search</i>
          </button>
        </div>
        <div className="col s12 l6 m12 xl6">
          <Link
            to="programas2021"
            className="  waves-effect waves-light btn right"
          >
            Listado de programas vigentes hasta 2021
            <i className="material-icons right">school</i>
          </Link>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #d3d3d3",
          overflow: "auto",
          margin: "25px 0",
        }}
      >
        <table
        /* className="striped  responsive-table " */
        >
          <thead className="grey lighten-3   grey-text text-darken-3">
            <tr>
              <th className=" " style={{ minWidth: "500px" }}>
                Programa
              </th>
              <th className="">Status</th>
              <th className="">Vigencia Fin</th>
            </tr>
          </thead>

          <tbody>
            {programas.map((programa) => (
              <tr
                key={programa.id}
                onClick={() => navigate(programa.id.toString())}
                style={{ cursor: "pointer" }}
              >
                <td>
                  <i className="material-icons left teal-text text-darken-3">
                    assignment
                  </i>
                  {programa.programa.nombre}
                </td>
                <td>
                  <span
                    className="new badge amber darken-4"
                    data-badge-caption=""
                  >
                    {programa.estatus}
                  </span>
                </td>
                <td>{moment(programa.creado).format("LL h:mm a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoProgramas;
