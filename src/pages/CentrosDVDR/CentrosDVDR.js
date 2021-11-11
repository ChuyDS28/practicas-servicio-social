import React from "react";
import Footer from "..//Footer"
import TargetaRegistro from "../../components/TargetaRegistro";



const style = {
  headerImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
    filter: "brightness(0.8)",
  },
  headerFilter: {
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    top: "0",
    height: "100%",
    filter: "brightness(0.5)",
    backgroundImage:
      "linear-gradient(180deg, rgba(57, 191, 183, 0.8) 4.74%, transparent 100%)",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50% , -50%)",
    color: "#fff",
  },

};



const CentrosDVDR = () => {
  return <div>
       <header style={{ position: "relative", height: "50vh" }}>
        <img
          style={style.headerImg}
          src="http://4.bp.blogspot.com/-HUqCuNLD1-M/T8GBtFawSzI/AAAAAAAAAIg/OR3FtRABczE/s1600/Mapa_Mexico_Con_Bandera.png"
          alt=""
        />
        <div style={style.headerFilter}></div>
        <div className=" " style={style.headerTitle}>
          <h3 style={{ fontSize: "5rem" }}>UNIDADES</h3>
        
        </div>
      </header>
      <main className="row container section" style={{minWidth:"100%"}} >
    
        <TargetaRegistro
        user="CIITA-CHIHUAHUA"
        description="Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Chihuahua"
        link="/signup/Administrador"
        pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Chihuahua.png"
        texto= "VER UNIDAD" />

          <TargetaRegistro
          user="CVDR-CAJEME"
          description="Centro de Vinculación y Desarrollo Regional Unidad Cajeme"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Cajeme.png"
          texto= "VER UNIDAD"
        />
         <TargetaRegistro
          user="CVDR-CAMPECHE"
          description="Centro de Vinculación y Desarrollo Regional Unidad Campeche"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Campeche.png"
          texto= "VER UNIDAD"
        />
          <TargetaRegistro
          user="CVDR-CANCUN"
          description="Centro de Vinculación y Desarrollo Regional Unidad Cancun"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Cancun.png"
          texto= "VER UNIDAD"
        />
          <TargetaRegistro
          user="CVDR-CULIACAN"
          description="Centro de Vinculación y Desarrollo Regional Unidad Culiacan"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Culiacan.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CVDR-DURANGO"
          description="Centro de Vinculación y Desarrollo Regional Unidad Durango"
          link="/signup/revisor"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Durango.png"
          texto= "VER UNIDAD"
        />
         <TargetaRegistro
          user="CVDR-LOS-MOCHIS"
          description="Centro de Vinculación y Desarrollo Regional Unidad los Mochis"
          link="/signup/Director%20Academico"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Los%20Mochis.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CVDR-MAZATALN"
          description="Centro de Vinculación y Desarrollo Regional Unidad Mazatlan"
          link="/signup/Subdirector"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Mazatlan.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CVDR-MORELIA"
          description="Centro de Vinculación y Desarrollo Regional Unidad Morelia"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Morelia.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CVDR-OAXACA"
          description="Centro de Vinculación y Desarrollo Regional Unidad Oaxaca"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Oaxaca.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CVDR-TAMPICO"
          description="Centro de Vinculación y Desarrollo Regional Unidad Tampico"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Tampico.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CVDR-TIJUANA"
          description="Centro de Vinculación y Desarrollo Regional Unidad Tijuana"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/Tijuana.png"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CIITA-VERACRUZ"
          description="Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Veracruz"
          link="/signup/Administrador"
          pic="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/cobertura/Ico_centros_2/veracruz-1.png"
          texto= "VER UNIDAD"
        />
      </main>
      <Footer />
  </div>;
};




export default CentrosDVDR;
