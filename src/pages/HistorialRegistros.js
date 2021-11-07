import React, { useState } from "react";
import data from "../data/registros.json";
const HistorialRegistros = () => {
  const [SearchList, setSearchList] = useState(data);
  const [recordsList, setRecordsList] = useState(data);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const list = [];
      recordsList.forEach((x) => {
        const name = x.NombreDePrograma.toLowerCase();
        if (name.indexOf(e.target.value.toLowerCase()) >= 0) {
          list.push(x);
        }
      });
      setSearchList(list);
    } else {
      console.log("vacio");
      setSearchList(recordsList);
    }
  };
  return (
    <>
      <div className="container  ">
        <blockquote>
          <h5 className="light teal-text">Listado de registros</h5>
          <p>Aqui puedes consultar el historial total de registros</p>
        </blockquote>
        <div className="row">
          <div class="input-field col s4 right">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" onChange={handleChange} />
            <label for="icon_prefix">Buscar</label>
          </div>
        </div>
        <div
          style={{
            overflow: "auto",
          }}
        >
          <table className=" ">
            <thead className="grey lighten-3   grey-text text-darken-3">
              <tr>
                <th>Nombre Programa</th>
                <th>Clave de Registro{/*o programa?*/}</th>
                <th>Centro</th>
                <th>Termino de vigencia</th>
                <th style={{ minWidth: "100px" }}>Duracion Total en Hrs</th>
                {/*  <th>Status</th> */}
                <th>Info</th>
              </tr>
            </thead>

            <tbody style={{ marginTop: "150px" }}>
              {SearchList.map((row, index) => (
                <tr key={row.Consecutivo}>
                  <td>{row.NombreDePrograma}</td>
                  <td>{row.ClaveDeRegistro}</td>
                  <td>{row.Centro}</td>
                  <td>{row.Fin}</td>
                  <td>{row.DuracionTotalnHrs}</td>

                  {/* <td>
                    <span className="new badge green  " data-badge-caption="">
                      Impartiendo
                    </span>
                  </td> */}
                  <td>
                    <a
                      className=" modal-trigger waves-effect waves-light btn outlined   "
                      href="#modal1"
                    >
                      Ver Contenido
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul class="pagination" style={{ padding: "15px", textAlign: "center" }}>
          <li class="disabled">
            <a href="#!">
              <i class="material-icons">chevron_left</i>
            </a>
          </li>
          <li class="active">
            <a role="button">1</a>
          </li>
          <li class="waves-effect">
            <a href="#!">2</a>
          </li>
          <li class="waves-effect">
            <a href="#!">3</a>
          </li>
          <li class="waves-effect">
            <a href="#!">4</a>
          </li>
          <li class="waves-effect">
            <a href="#!">5</a>
          </li>
          <li class="waves-effect">
            <a href="#!">
              <i class="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HistorialRegistros;
