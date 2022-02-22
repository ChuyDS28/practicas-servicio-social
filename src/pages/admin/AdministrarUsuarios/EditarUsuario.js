import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import { registrarUsuario } from "../../../api/services/registro";
import { useNavigate, useParams } from "react-router-dom";

const EditarUsuario = (props) => {
    return (
        <div className="modal-content">
          <div className="teal white-text section center">
            <h5 className="center ">Agregar nuevo Usuario</h5>
          </div>
          <div class="row">
            <div class="col s12">
              <ul class="tabs">
                <li class="tab col s4">
                  <a href="#director">Director</a>
                </li>
                <li class="tab col s4">
                  <a class="active" href="#subdirector">
                    Subdirector
                  </a>
                </li>
                <li class="tab col s4">
                  <a class="active" href="#revisor">
                    Revisor
                  </a>
                </li>
              </ul>
            </div>



            <div id="director" class="col s12 ">
              <div class="row">
                <form  class="col s12">
                  <div class="row">
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        id="nombre"
                      />
                      <label for="nombre">Nombre:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio paterno"
                        id="apellido1"
                      />
                      <label for="apellido1">Apellido Paterno:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio materno"
                        id="apellido2"
                      />
                      <label for="apellido2">Apellido Materno:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        id="correo"
                      />
                      <label for="correo">Correo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="usuario"
                      />
                      <label for="usuario">Usuario:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Crea una contraseña"
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu No. de empleado"
                        id="numemp"
                      />
                      <label for="numemp">Numero de Empleado:</label>
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
                      <label for="Cargo">Cargo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Extencion" id="Extencion" />
                      <label for="Extencion">Extencion:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Telefono" id="Telefono" />
                      <label for="Telefono">Telefono:</label>
                    </div>

                    <button
                      type="submit"
                      className="waves-effect waves-light btn   "
                    >
                      Registrar Director
                      <i className="material-icons right">done</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div id="subdirector" class="col s12 ">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        id="nombre"
                      />
                      <label for="nombre">Nombre:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio paterno"
                        id="apellido1"
                      />
                      <label for="apellido1">Apellido Paterno:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio materno"
                        id="apellido2"
                      />
                      <label for="apellido2">Apellido Materno:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        id="correo"
                      />
                      <label for="correo">Correo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="usuario"
                      />
                      <label for="usuario">Usuario:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Crea una contraseña"
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu No. de empleado"
                        id="numemp"
                      />
                      <label for="numemp">Numero de Empleado:</label>
                    </div>
                    <div className="col s12 l6">
            <label  >
              Unidad Academica
            </label>
          </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Cargo" id="Cargo" />
                      <label for="Cargo">Cargo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Extencion" id="Extencion" />
                      <label for="Extencion">Extencion:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Telefono" id="Telefono" />
                      <label for="Telefono">Telefono:</label>
                    </div>

                    <button
                      type="submit"
                      className="waves-effect waves-light btn   "
                    >
                      Registrar Subdirector
                      <i className="material-icons right">done</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div id="revisor" class="col s12 ">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        id="nombre"
                      />
                      <label for="nombre">Nombre:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio paterno"
                        id="apellido1"
                      />
                      <label for="apellido1">Apellido Paterno:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio materno"
                        id="apellido2"
                      />
                      <label for="apellido2">Apellido Materno:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        id="correo"
                      />
                      <label for="correo">Correo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="usuario"
                      />
                      <label for="usuario">Usuario:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Crea una contraseña"
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu No. de empleado"
                        id="numemp"
                      />
                      <label for="numemp">Numero de Empleado:</label>
                    </div>
                    <div className="col s12 l12">
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
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn   "
                    >
                      Registrar Revisor
                      <i className="material-icons right">done</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button className=" modal-close waves-effect waves-green btn-flat right">
            Cerrar
          </button>
          <br />
        </div>
   );
  };
  
  export default EditarUsuario;