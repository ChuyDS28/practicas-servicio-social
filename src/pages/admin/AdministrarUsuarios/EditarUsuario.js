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
      
      nombre: "",
      primerApellido: "",
      segundoApellido: props.user.segundoApellido,
      correoInstitucional: "",
      confirmarCorreo: "",
      username: "",
      password: "",
      Cpassword: "",
      numeroDeEmpleado: "",
      idUnidadAcademica: "",
      cargo: "",
      extension: "",
      telefono: "",
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
                      Apellido materno
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apellido materno"
                      name="segundoApellido"
                      value={formValues.segundoApellido}
                      onChange={handleChange}
                      
                    />
                  </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder=""
                        id="nombre"
                      />
                      <label for="nombre">{props.user.nombre}</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder=""
                        id="apellido1"
                      />
                      <label for="apellido1">Ingresa el apellido paterno</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder=""
                        id="apellido2"
                      />
                      <label for="apellido2">Ingresa el apellido materno</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder=""
                        id="correo"
                      />
                      <label for="correo">{props.user.correoPersonal}</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder=""
                        id="usuario"
                      />
                      <label for="usuario">{props.user.username}</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder=""
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder=""
                        id="numemp"
                      />
                      <label for="numemp">{props.user.id}</label>
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
                    <div class="input-field col s6">
                      <input type="text" placeholder="Cargo" id="Cargo" />
                      <label for="Cargo"></label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Extencion" id="Extencion" />
                      <label for="Extencion">{props.user.Extencion}</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="" id="Tipo de Usuario" />
                      <label for="Tipo de Usuario">{props.user.rol}</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Telefono" id="Telefono" />
                      <label for="Telefono">{props.user.Telefono}</label>
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