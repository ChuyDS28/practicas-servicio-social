import React, { useEffect, useRef} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AgregarUsuario = () => {

  const tabsRef = useRef(null);


  useEffect(() => {
    
    let elems = document.querySelectorAll(".tabs", ".select");
    M.Tabs.init(elems, {duration: 30} );
   
  });

  return (
    <div className="modal-content">
      <div className="teal white-text section center">
        <h5 className="center ">Agregar nuevo Usuario</h5>
      </div>
      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s6">
              <a href="#director">Director</a>
            </li>
            <li class="tab col s6">
              <a class="active" href="#subdirector">
                Subdirector
              </a>
            </li>
          </ul>
        </div>
        
        <div id="director" class="col s12 ">
      
            <div class="row">
              <form class="col s12">
                <div class="row">

                <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu nombre" id="nombre"/>
                  <label for="nombre">Nombre:</label> 
               </div>
               <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu apelldio paterno" id="apellido1"/>
                  <label for="apellido1">Apellido Paterno:</label> 
               </div>
               <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu apelldio materno" id="apellido2"/>
                  <label for="apellido2">Apellido Materno:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu correo electronico" id="correo"/>
                  <label for="correo">Correo:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu nombre de usuario" id="usuario"/>
                  <label for="usuario">Usuario:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Crea una contraseña" id="contraseña"/>
                  <label for="contraseña">Contraseña:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu No. de empleado" id="numemp"/>
                  <label for="numemp">Numero de Empleado:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Opcion" id="unidad"/>
                  <label for="unidad">Unidad academica:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Cargo" id="Cargo"/>
                  <label for="Cargo">Cargo:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Extencion" id="Extencion"/>
                  <label for="Extencion">Extencion:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Telefono" id="Telefono"/>
                  <label for="Telefono">Telefono:</label> 
               </div>

               <button type="submit" className="waves-effect waves-light btn   ">
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
                 <input type="text" placeholder="Ingresa tu nombre" id="nombre"/>
                  <label for="nombre">Nombre:</label> 
               </div>
               <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu apelldio paterno" id="apellido1"/>
                  <label for="apellido1">Apellido Paterno:</label> 
               </div>
               <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu apelldio materno" id="apellido2"/>
                  <label for="apellido2">Apellido Materno:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu correo electronico" id="correo"/>
                  <label for="correo">Correo:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu nombre de usuario" id="usuario"/>
                  <label for="usuario">Usuario:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Crea una contraseña" id="contraseña"/>
                  <label for="contraseña">Contraseña:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu No. de empleado" id="numemp"/>
                  <label for="numemp">Numero de Empleado:</label> 
               </div>
               
               
               
               
               
               <div class="input-field col s6">
                 <selec>
                 <option value="" disabled selected>Choose your option</option>
                 <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                 </selec>
                  <label for="unidad">Unidad academica:</label> 
               </div>







               <div class="input-field col s6">
                 <input type="text" placeholder="Cargo" id="Cargo"/>
                  <label for="Cargo">Cargo:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Extencion" id="Extencion"/>
                  <label for="Extencion">Extencion:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Telefono" id="Telefono"/>
                  <label for="Telefono">Telefono:</label> 
               </div>

               <button type="submit" className="waves-effect waves-light btn   ">
        Registrar Subdirector
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


export default AgregarUsuario;