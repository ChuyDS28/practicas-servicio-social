import moment from "moment";
import "moment/locale/es";

const DatosUsuario = (props) => {
  moment.locale();
  return (
    <div className="modal-content  ">
      <div className="light-blue lighten-2 white-text section center">
        <h5 className="center ">Datos</h5>
      </div>
      <br />
      <div className="row">
        <div className="col s12 m12 l12 xl12">
          <p>
            <strong>Nombre:&nbsp;&nbsp;</strong>
            {props.user.nombre}
            <strong>&nbsp;&nbsp;</strong>
            {props.user.primerApellido}
            <strong>&nbsp;&nbsp;</strong>
            {props.user.segundoApellido}
          </p>
        </div>
        <br />
        <div className="col s12 m12 l12 xl12">
          <p>
            <strong>Tipo de usuario:&nbsp;&nbsp;</strong>
            {props.user.rol}
          </p>
        </div>
        <br />
        {props.user.unidadAcademica && (
          <div className="col s12 l12">
            <p>
              <strong>Escuela, unidad o centro:&nbsp;&nbsp;</strong>
              {props.user.unidadAcademica.nombre}
            </p>
          </div>
        )}

        <div className="col s12 l12">
          <p>
            <strong>Usermane:&nbsp;&nbsp;</strong>
            {props.user.username}
          </p>
        </div>

        <div className="col s12 m4 l12">
          <p>
            <strong>id:&nbsp;&nbsp;</strong>
            {props.user.id}
          </p>
        </div>
        <div className="col s12 m7 xl12">
          <p>
            <strong>Fecha de registro:&nbsp;&nbsp;</strong>
            {moment(props.user.creado).format("LL h:mm a")}
          </p>
        </div>
        <br />
        <div className="col s12 m5 xl12">
          <p>
            <strong>Fecha de inactividad:&nbsp;&nbsp;</strong>
            {moment(props.user.fechaUltimaConexion).format("LL h:mm a")}
          </p>
        </div>

        {props.user.rol === "REVISOR" && (
          <div className="col s12 m4 l12">
            <p>
              <strong>Correo personal:&nbsp;&nbsp;</strong>
              {props.user.correoPersonal}
            </p>
          </div>
        )}

        {props.user.rol === "SUBDIRECTOR" && (
          <div>
            <div className="col s12 m4 l12">
              <p>
                <strong>Cargo:&nbsp;&nbsp;</strong>
                {props.user?.coordinadorAcademico?.cargo}
              </p>
            </div>
            <div className="col s12 m5 xl12">
              <p>
                <strong>Extensión:&nbsp;&nbsp;</strong>
                {props.user?.coordinadorAcademico?.extension}
              </p>
            </div>
            <div className="col s12 m7 xl12">
              <p>
                <strong>Número de telefono:&nbsp;&nbsp;</strong>
                {props.user?.coordinadorAcademico?.telefono}
              </p>
            </div>
          </div>
        )}
        <div className="col s12 m4 l12">
          <p>
            <strong>Correo institucional:&nbsp;&nbsp;</strong>
            {props.user.correoInstitucional}
          </p>
        </div>
      </div>
      <button className="light-blue lighten-2 white-text modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
      <br />
    </div>
  );
};

export default DatosUsuario;
