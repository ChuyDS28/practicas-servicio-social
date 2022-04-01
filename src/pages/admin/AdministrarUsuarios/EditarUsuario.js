import React, { useEffect, useState } from "react";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import { editarUsuario } from "../../../api/services/usuarios";


const EditarUsuario = (props) => {
  //let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [unidades, setUnidades] = useState([]);
  const [error, setError] = useState({ error: false, message: "" });
  const [formValues, setFormValues] = useState({
    nombre: props.user.nombre,
    primerApellido: props.user.primerApellido,
    segundoApellido: props.user.segundoApellido,
    correoInstitucional: props.user.correoInstitucional,
    correoPersonal: props.user.correoPersonal,
    confirmarCorreo: "",
    username: props.user.username,
    password: "",
    Cpassword: "",
    numeroDeEmpleado: props.user.numeroDeEmpleado,
    Id: props.user.id,
    idUnidadAcademica: props.user.idUnidadAcademica,
    cargo: props.user.rol,
    extension: props.user.Extencion,
    telefono: props.user.Telefono,
    Cargo: props.user.cargo,
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const getUnidades = async () => {
    try {
      const response = await obtenerUnidades(0);
      console.log(response);
      setUnidades(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getUnidades();
  }, []);
  const submit = (e) => {
            
    e.preventDefault();
    console.log(formValues);
    console.log("Estamos en la Funcion Submit");
          if(props.user.rol === "DIRECTOR"){Caso1()}
          if(props.user.rol === "SUBDIRECTOR"){Caso2()}
          if(props.user.rol === "REVISOR"){Caso3()} 
                 
  };
          const Caso1 = async () => {
            console.log("Estamos en la función Director");
            const dir = {
              nombre: formValues.nombre,
              primerApellido: formValues.primerApellido,
              segundoApellido: formValues.segundoApellido,
              correoInstitucional: formValues.correoInstitucional,
              username: formValues.username,
              idUnidadAcademica: formValues.idUnidadAcademica,
              numeroDeEmpleado: formValues.numeroDeEmpleado,
              Cargo: formValues.Cargo,
              Id: formValues.Id,
            };
                try {
                  const response = await editarUsuario(dir.Id, dir );
                  console.log(response);
                  //navigate("/admin/usuarios");
                  window.location.reload(true);
                } catch (error) {
                  console.log("Error en funcion Director")
                  console.log(error)
                }};

          const Caso2 = async () => {
            console.log("Estamos en la función Subdirector");
            const sub = {
              nombre: formValues.nombre,
              primerApellido: formValues.primerApellido,
              segundoApellido: formValues.segundoApellido,
              correoInstitucional: formValues.correoInstitucional,
              username: formValues.username,
              idUnidadAcademica: formValues.idUnidadAcademica,
              numeroDeEmpleado: formValues.numeroDeEmpleado,
              extension: formValues.extension,
              telefono: formValues.telefono,
              cargo: formValues.cargo,
              Cargo: formValues.Cargo,
              Id: formValues.Id,
            };
        try {
          const response = await editarUsuario(sub.Id, sub);
          console.log(response);
          window.location.reload(true);
        } catch (error) {
          console.log("Error en funcion Subdirector")
          console.log(error)
        }};
        
        const Caso3 = async () => {
          console.log("Estamos en la función Revisor");
          const rev = {
            nombre: formValues.nombre,
            primerApellido: formValues.primerApellido,
            segundoApellido: formValues.segundoApellido,
            correoInstitucional: formValues.correoInstitucional,
            correoPersonal: formValues.correoPersonal,
            username: formValues.username,
            idUnidadAcademica: formValues.idUnidadAcademica,
            numeroDeEmpleado: formValues.numeroDeEmpleado,
            cargo: formValues.cargo,
            Id: formValues.Id,
          };
              try {
                const response = await editarUsuario(rev.Id, rev );
                console.log(response);
                window.location.reload(true);
              } catch (error) {
                console.log("Error en funcion Revisor")
                console.log(error)
              }}; 

  return (
    <div className="modal-content">
      <div className="teal white-text section center">
        <h5 className="center ">Editar Usuario</h5>
      </div>
      <div className="center ">
        <p>
          <strong>Tipo de usuario:&nbsp;&nbsp;</strong>
          {props.user.rol}
        </p>
      </div>
      <div id="director" class="col s12 ">
        <div class="row">
          <form class="col s12" onSubmit={submit}>
            <div class="row">
              <div className="col  s12 m6 xl4">
                <label>Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s12 m6 xl4">
                <label>Apellido paterno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido paterno"
                  name="primerApellido"
                  value={formValues.primerApellido}
                  onChange={handleChange}
                />
              </div>
              <div className="col  s12 m6 xl4">
                <label>Apellido materno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido materno"
                  name="segundoApellido"
                  value={formValues.segundoApellido}
                  onChange={handleChange}
                />
              </div>
              {props.user.rol === "REVISOR" && (
              <div className="col  s12 m6 xl4">
                <label>Correo Personal</label>
                <input
                  type="text"
                  required
                  placeholder="Correo Personal"
                  name="correoPersonal"
                  value={formValues.correoPersonal}
                  onChange={handleChange}
                />
              </div>)}
              <div className="col  s12 m6 xl4">
                <label>Correo Institucional</label>
                <input
                  type="text"
                  required
                  placeholder="Correo Institucional"
                  name="correoInstitucional"
                  value={formValues.correoInstitucional}
                  onChange={handleChange}
                />
              </div>
              <div className="col  s12 m6 xl4">
                <label>Nombre Usuario</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre Usuario"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <div className="col  s12 m6 xl4">
                <label>Número de Empleado</label>
                <input
                  type="text"
                  required
                  placeholder="Número de Empleado"
                  name="numeroDeEmpleado"
                  value={formValues.numeroDeEmpleado}
                  onChange={handleChange}
                />
              </div>
              {props.user.rol !== "DIRECTOR" && (
                <div className="col  s12 m6 xl4">
                  <label>Extensión</label>
                  <input
                    type="text"
                    required
                    placeholder="Extensión"
                    name="extension"
                    value={formValues.extension}
                    onChange={handleChange}
                  />
                </div>
              )}
              {props.user.rol !== "DIRECTOR" && (
                <div className="col  s12 m6 xl4">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    required
                    placeholder="Teléfono"
                    name="telefono"
                    value={formValues.telefono}
                    onChange={handleChange}
                  />
                </div>
              )}
              {props.user.rol !== "REVISOR" && (
                <div className="col  s12 m6 xl4">
                  <label>Cargo</label>
                  <input
                    type="text"
                    required
                    placeholder="Cargo"
                    name="Cargo"
                    value={formValues.Cargo}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="col s12 l6">
                <label>Unidad Academica</label>
                <select
                  className="browser-default"
                  required
                  name="idUnidadAcademica"
                  value={formValues.idUnidadAcademica}
                  onChange={handleChange}
                > 
                  {unidades.map((centro) => (
                  <option  value={centro.id} key={centro.id }>
                    {centro.nombre.props}
                  </option>
                  ))}
                  {unidades.map((centro) => (
                    <option value={centro.id}key={centro.id }>
                      {centro.nombre}-{centro.clave}
                    </option>
                  ))}
                  
                </select>
              </div>

              <div className="col s12">
              <br />
              <button
                type="submit"
                //onClick={submit}
                className="waves-effect waves-light btn left"
              >
                Actualizar usuario.
                <i className="material-icons right">save</i>
              </button>
              <button className=" modal-close waves-effect waves-green btn-flat right">
          Cerrar
          <i className="material-icons right">close</i>
        </button>
        </div>
            </div>
          </form>
        </div>
      </div>
    

    
    </div>
  );
};

export default EditarUsuario;
