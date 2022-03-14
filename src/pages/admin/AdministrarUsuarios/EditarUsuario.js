import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import { registrarUsuario } from "../../../api/services/registro";
import { useNavigate, useParams } from "react-router-dom";
import { editarUsuario } from "../../../api/services/usuarios";

import DatosUsuario from "./DatosUsuario";
import AdministrarUsuarios from "./AdministrarUsuarios";

const EditarUsuario = (props) => {
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
    numeroDeEmpleado: props.user.id,
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
      console.log(response); setUnidades(response.data) 
    } catch (error) {}
  };
  useEffect(() => {
    getUnidades();
  }, []);
  const submit = async (e) => {
    const data = {
    nombre: props.user.nombre,
    primerApellido: props.user.primerApellido,
    segundoApellido: props.user.segundoApellido,
    correoInstitucional: props.user.correoInstitucional,
    correoPersonal: props.user.correoPersonal,
    confirmarCorreo: "",
    username: props.user.username,

    numeroDeEmpleado: props.user.id,
    idUnidadAcademica: props.user.idUnidadAcademica,
    cargo: props.user.rol,
    extension: props.user.Extencion,
    telefono: props.user.Telefono,
    Cargo: props.user.cargo,
    }
    e.preventDefault();
    console.log(formValues)
    console.log("Estamos en la Funcion Submit")
    try {
      const response = await editarUsuario(data);
      console.log(response); 
    } catch (error) {}
  };

  return (
    <div className="modal-content">
      <div className="teal white-text section center">
        <h5 className="center ">Agregar nuevo Usuario</h5>
      </div>
      <div className="center ">
          <p>
            <strong >Tipo de usuario:&nbsp;&nbsp;</strong>
            {props.user.rol}
          </p>         
      </div>
      <div id="director" class="col s12 ">
        <div class="row">
          <form class="col s12" onSubmit={submit}>
            <div class="row">
             
              <div className="col  s12 m6 xl4">
                <label>Nombre no1</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre1"
                  name="Nombre1"
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
              <div className="col  s12 m6 xl4">
                <label>Correo Personal</label>
                <input
                  type="text"
                  required
                  placeholder="Correo Personal"
                  name="Correo Personal"
                  value={formValues.correoPersonal}
                  onChange={handleChange}
                />
              </div>
              <div className="col  s12 m6 xl4">
                <label>Correo Institucional</label>
                <input
                  type="text"
                  required
                  placeholder="Correo Institucional"
                  name="Correo Institucional"
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
                  name="Nombre Usuario"
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
                  name="Número de Empleado"
                  value={formValues.numeroDeEmpleado}
                  onChange={handleChange}
                />
              </div>
              { props.user.rol!=="DIRECTOR" && 
              <div className="col  s12 m6 xl4">
                <label>Extensión</label>
                <input
                  type="text"
                  required
                  placeholder="Extensión"
                  name="Extensión"
                  value={formValues.extension}
                  onChange={handleChange}
                />
              </div>
}
            { props.user.rol!=="DIRECTOR" &&
              <div className="col  s12 m6 xl4">
                <label>Teléfono</label>
                <input
                  type="text"
                  required
                  placeholder="Teléfono"
                  name="Teléfono"
                  value={formValues.telefono}
                  onChange={handleChange}
                />
              </div>
}
            { props.user.rol!=="REVISOR"  && 
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
}
              <div className="col s12 l6">
                <label>Unidad Academica</label>
                <select
                  className="browser-default"
                  required
                  name="idUnidadAcademica"
                  value={formValues.idUnidadAcademica}
                  onChange={handleChange}
                >
                  <option value="">
                  Seleccionar Unidad Académica
                  </option>
                  {
                    unidades.map((centro)=>(
                      <option value= {centro.id}>
                      {
                        centro.nombre
                      }
                      -
                      {
                        centro.clave
                      }
                      </option>
                    ))
                  }
                </select>
              </div>
              <br />
              <br />
              <button
                type="submit"
                className="waves-effect waves-light btn right  "
              >
                Actualizar usuario.
                <i className="material-icons right">save</i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <button className=" modal-close waves-effect waves-green btn-flat right">
          Cerrar
          <i className="material-icons right">close</i>
        </button>
      </div>
    </div>
  );
};

export default EditarUsuario;
