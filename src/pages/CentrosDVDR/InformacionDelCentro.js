import React from "react";

const InformacionDelCentro = (props) => {
  const style = {
    modalImg: {
      width: "160px",
      objectFit: "cover",
      height: "110px",
    },
  };

  return (
    <div className="modal-content center" style={{ minWidth: "100%" }}>
      <table>
        <tr>
          <td>
            <img
              src="https://www.encb.ipn.mx/assets/files/encb/img/escudos/logo-ipn.png"
              style={style.modalImg}
            />
          </td>
          <td>
            <p align="center" style={{ minWidth: "100%" }}>
              <h6>
                <b>
                  <i>
                    Instituto Politécnico Nacional <br />
                    Secretaría de Innovación e Integración Social
                    <br />
                    Dirección de Vinculación y Desarrollo Regional
                  </i>
                </b>
              </h6>
            </p>
          </td>
          <td>
            <img
              src="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/logo-DVDR.jpg"
              style={style.modalImg}
            />
          </td>
        </tr>
      </table>
      <br />
      <div>
        <p align="center">
          <h5>
            <b> {props.data.titulo} </b>
          </h5>
          <br />
        </p>
      </div>
      <br />
      <div className="center">
        <iframe
          width="423"
          height="238"
          src={props.data.link}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <p align="center">
          <h5>
            <br />
            <b>Más Información en:</b>{" "}
          </h5>
        </p>
      </div>

      <div>
        <img src={props.data.imagenurl} />
      </div>
      <button
        href="#!"
        className="modal-close waves-effect waves-green btn-flat right"
      >
        Cerrar
      </button>
    </div>
  );
};

export default InformacionDelCentro;
