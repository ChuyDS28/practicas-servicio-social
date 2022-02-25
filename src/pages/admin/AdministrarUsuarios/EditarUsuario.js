import React, { useEffect, useRef, useState } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import { registrarUsuario } from "../../../api/services/registro";
import { useNavigate, useParams } from "react-router-dom";

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
      correoInstitucional: "",
      correoPersonal: props.user.correoPersonal,
      confirmarCorreo: "",
      username: props.user.username,
      password: "",
      Cpassword: "",
      numeroDeEmpleado: props.user.id,
      idUnidadAcademica: "",
      cargo: props.user.rol,
      extension: props.user.Extencion,
      telefono: props.user.Telefono,
    });
    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };
    return (
        
      <div className="modal-content">
          <div className="teal white-text section center">
            <h5 className="center ">Agregar nuevo Usuario</h5>
          </div>
            <div id="director" class="col s12 ">
              <div class="row">
                <form  class="col s12">
                  <div class="row">
                  <div className="col  s12 m6 xl4">
                    <label>
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apellido paterno"
                      name="segundoApellido"
                      value={formValues.nombre}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div className="col  s12 m6 xl4">
                    <label>
                      Apellido paterno
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre"
                      name="segundoApellido"
                      value={formValues.primerApellido}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div className="col  s12 m6 xl4">
                    <label>
                      Apellido materno
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apellido paterno"
                      name="primerApellido"
                      value={formValues.segundoApellido}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div className="col  s12 m6 xl4">
                    <label>
                      Correo Personal
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apellido materno"
                      name="segundoApellido"
                      value={formValues.correoPersonal}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div className="col  s12 m6 xl4">
                    <label>
                      Nombre Usuario
                    </label>
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
                    <label>
                      Número de Empleado
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Número de Empleado"
                      name="Nombre Usuario"
                      value={formValues.id}
                      onChange={handleChange}
                      
                    />
                    </div>
                    <div className="col  s12 m6 xl4">
                    <label>
                      Tipo de usuario
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tipo de usuario"
                      name="Tipo de usuario"
                      value={formValues.rol}
                      onChange={handleChange}
                      
                    />
                    </div>
                    <div className="col  s12 m6 xl4">
                    <label>
                      Extensión
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Extensión"
                      name="Extensión"
                      value={formValues.Extencion}
                      onChange={handleChange}
                      
                    />
                    </div>
                    <div className="col  s12 m6 xl4">
                    <label>
                    Teléfono
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Teléfono"
                      name="Teléfono"
                      value={formValues.Telefono}
                      onChange={handleChange}
                      
                    />
                    </div>
                    
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder=""
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    
                    <div className="col s12 l6">
                          <label  >
                            Unidad Academica
                          </label>
                          <select
                            className="browser-default"
                            required
                            name="idUnidadAcademica"

                          
                          >
                            <option value="" disabled>
                              Selecciona una opción
                            </option>
                          </select>
                        </div>
                    
                    <button
                      type="submit"
                      className="waves-effect waves-light btn right  "
                    >
                      Realizar Cambios
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