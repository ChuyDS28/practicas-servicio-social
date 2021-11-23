import React from "react";
import cvdrcajeme from "..//..//assets/images/CodigosQR/cvdrcajeme.png";

const InformacionDelCentro = (props) => {
  const style = {
    modalImg: {
      width: "180px",
      objectFit: "cover",
      height: "130px",
    },
  };

  return (
    <div id="" className="" style={{ minWidth: "80%" }}>
      <div className="row container section" style={{ minWidth: "100%" }}>
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
                  <h5>
                    <b>
                      <i>
                        Instituto Politécnico Nacional <br />
                        Secretaría de Innovación e Integración Social
                        <br />
                        Dirección de Vinculación y Desarrollo Regional
                      </i>
                    </b>
                  </h5>
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
                <b>Centro de Vinculación y Desarrollo Regional Unidad Cajeme  {props.unidad}  </b>{" "}
              </h5>
              <br />
            </p>
          </div>
          <br />
          <div className="center">
            <iframe
              width="424"
              height="238"
              src="https://www.youtube.com/embed/TOKmS6e_2FY"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <p align="center">
              <h5>
                <b>Más Información en:</b>{" "}
              </h5>
              <br />
            </p>
          </div>

          <div>
            <img src={cvdrcajeme} style={style.modalImg} />
          </div>
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformacionDelCentro;
