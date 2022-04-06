const ModalDetalles = (props) =>{
    return (
          <div className="modal-content row ">
            <h5>
              {/* <b> CIC - Centro de Investigación en Computación </b> */}
              <b>{props.clave} - {props.nombre}</b>
              <br />
              <br />
            </h5>
            <h6>
              <i className="tiny material-icons white-text text-darken-2  left circle  teal ">
                school
              </i>
              Coordinador Académico
            </h6>
            <p>
              <strong>Nombre:</strong> Antonio Ayola
              <span className="right">
                <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
              </span>
              <br />
              <strong>Número telefónico:</strong> 7711825959
              <span className="right">
                <strong>&nbsp;&nbsp;Extensión:</strong> 7711825959
              </span>
            </p>
            <div className="divider teal"></div>
            <h6>
              <i className="tiny material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Director
            </h6>
            <p>
              <strong>Nombre:</strong> Antonio Ayola
              <span className="right">
                <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
              </span>
              <br />
              <strong>Número telefónico:</strong> 7711825959
              <span className="right">
                <strong>&nbsp;&nbsp;Extensión:</strong> 7711825959
              </span>
            </p>
            <div className="divider teal"></div>{" "}
            <h6>
              <i className="tiny material-icons white-text text-darken-2  left circle  ipn ">
                school
              </i>
              Subdirector
            </h6>
            <p>
              <strong>Nombre:</strong> Antonio Ayola
              <span className="right">
                <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
              </span>
              <br />
              <strong>Número telefónico:</strong> 7711825959
              <span className="right">
                <strong>&nbsp;&nbsp;Extensión:</strong> 7711825959
              </span>
            </p>
            <br />
            <button
              href="#!"
              className="modal-close waves-effect waves-green btn-flat right"
            >
              Cerrar
            </button>
          </div>
      );
};
export default ModalDetalles;