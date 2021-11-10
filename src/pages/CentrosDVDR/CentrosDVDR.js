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
          user="DURANGO"
          description="Centro de Vinculación y Desarrollo Regional Unidad Durango"
          link="/signup/revisor"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/252866806_1077869659683298_1591745710431888313_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEEGf2ovwaVR9OHXwLiDCab-W8CGHhGkGL5bwIYeEaQYmg0pjpW2FgXtG1e-CTzC-mb8Q31dFSDr1GaZqAbJ87P&_nc_ohc=N-_o6jfiVCkAX8yIiaL&tn=EIDa2B9o5JO_u01p&_nc_ht=scontent.fmex11-1.fna&oh=f49080c188be53e717efa37491e58f1a&oe=61AECC19"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="MAZATALN"
          description="Centro de Vinculación y Desarrollo Regional Unidad Mazatlan"
          link="/signup/Subdirector"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/255518577_1126086887927604_2951646438475947061_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFp0svaVGt9ynJawFXp5JVtefoeSLxamSp5-h5IvFqZKl5qftLScpTegWsoSLynebMFhFeoJYajr_bH5az9lN8m&_nc_ohc=l1v4Sbe6i_EAX-zakRZ&tn=EIDa2B9o5JO_u01p&_nc_ht=scontent.fmex11-1.fna&oh=dffeb9c1c28b57392cccfa8ffd4d7f5d&oe=61B2662D"
          texto= "VER UNIDAD"
        />
       
        <TargetaRegistro
          user="LOS MOCHIS"
          description="Centro de Vinculación y Desarrollo Regional Unidad los Mochis"
          link="/signup/Director%20Academico"
          pic="https://scontent.fmex11-3.fna.fbcdn.net/v/t1.15752-9/252329450_638046324030077_3354219800331989708_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHXZKBnBxXOME0nFJeW2v9G6LbJDR4IPXTotskNHgg9dJhXfkRLWDUrYBKwwTQbaV40EoD_y0G_oAskgWNSaHvp&_nc_ohc=qawC0fWNBFAAX8yV9TO&_nc_ht=scontent.fmex11-3.fna&oh=a7a5e8ab2b6218bae180998c851789f7&oe=61AFCA82"
          texto= "VER UNIDAD"
        />
     <TargetaRegistro
          user="MORELIA"
          description="Centro de Vinculación y Desarrollo Regional Unidad Morelia"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-3.fna.fbcdn.net/v/t1.15752-9/250970013_197360505908096_1972029679516167945_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF31U6HPtLbQ7Bgsxqyx3xCpyS7rsWmVIOnJLuuxaZUg0MZtSf_T7cc1DLZwh1mA3jqZgbp0KVRecxmGEqPD6qS&_nc_ohc=SuFux173_EkAX8A5kzC&_nc_ht=scontent.fmex11-3.fna&oh=9efd8c5c634790339b8e63aaf47d6197&oe=61AF4E99"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="OAXACA"
          description="Centro de Vinculación y Desarrollo Regional Unidad Oaxaca"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-3.fna.fbcdn.net/v/t1.15752-9/254147168_213317690814681_5408200585745367846_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGu_ND3s1ddVakARHUgM-UKMWMethVuxw0xYx62FW7HDSZFoOhW_auUvXa-mMB0cE09TveYLIenL2nJwU2wCI1Q&_nc_ohc=ox9eKoiYvHIAX97A-BB&_nc_ht=scontent.fmex11-3.fna&oh=efe0f8ecb1c9dbada688ddeedd2e1c8c&oe=61AF3852"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="TAMPICO"
          description="Centro de Vinculación y Desarrollo Regional Unidad Tampico"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/252524686_1067166210702148_6931462737384002915_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEdzMpDAj0LPdfOabKECLNc5Z4Ea7bLS6PlngRrtstLo4wI27QJ6V0sKvvKeS98JA65WW8wjXramNSOXc7smlWl&_nc_ohc=dGE22H_VJwsAX_gMZfy&_nc_oc=AQmqNkkFS3BKAqnbBUOKkvRZ2yp9AUvAZwc1_x8h0d3gMQFIl_r-0cx_WoE_lghkghTv6V05b0P88BEFvErgpF6i&_nc_ht=scontent.fmex11-1.fna&oh=e4b7021f1766d88c639d94acbf975834&oe=61B03A78"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="TIJUANA"
          description="Centro de Vinculación y Desarrollo Regional Unidad Tijuana"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/251801316_625281805499006_6263943038982878897_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeE04CyX6Zb4CvjAaOjhDcq5DbZyJkpN2IoNtnImSk3YijWKe5yfyyg5jEX46uhMMlVX10SJApN15AJEhfZylPnb&_nc_ohc=RUeQjAnm5vYAX-TrtbA&_nc_ht=scontent.fmex11-1.fna&oh=0df1f7a986234d2a1a8e23b4a290245c&oe=61B132C8"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CHIHUAHUA"
          description="Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Chihuahua"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/250975614_2707614859544629_4506948264192688835_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGC1V-5LG2taVYBzoH4xduEJCBGQ8q4CUIkIEZDyrgJQihNdoJWNPZbdSx8aBfsrMRSQrChHH3mr7YVVoueS1Zi&_nc_ohc=_1Z25lKhQtoAX_DM20E&_nc_ht=scontent.fmex11-1.fna&oh=cb0605da52d9a81b379513ec9c53ae40&oe=61B08C93"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="VERACRUZ"
          description="Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Veracruz"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/253821460_1530207407365824_5588670694122679156_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeE7U92FTo92pQL7bDG1PVjESXcGc36cbOFJdwZzfpxs4eWkL3p5PAXrIuqkNl6AQbIq5asZey4mpkijkroqCzNs&_nc_ohc=sgxHla_s3M0AX8vio8O&_nc_ht=scontent.fmex11-1.fna&oh=54505804a4540a504db733d5a5f93090&oe=61AF55FB"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CAJEME"
          description="Centro de Vinculación y Desarrollo Regional Unidad Cajeme"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-3.fna.fbcdn.net/v/t1.15752-9/254407644_252533173602875_2777631827006794703_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFALemhzbJ7bLXF3Bh50RKFGuIMbBfVnO4a4gxsF9Wc7hTs0GsGfpv948eL8Z4wvyF9B-PAAjWaPxbOSxMEOwny&_nc_ohc=yzKJDCbqGbwAX9iXq9e&_nc_ht=scontent.fmex11-3.fna&oh=ffeebaeb13d01e597013035299d93fc8&oe=61B19B28"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CAMPECHE"
          description="Centro de Vinculación y Desarrollo Regional Unidad Campeche"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-3.fna.fbcdn.net/v/t1.15752-9/251017883_441000204214376_2434965080972592498_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGVE0ESqpGJV1u378oM7BTtls_ch3x0jGKWz9yHfHSMYps2AHwGfXUtbqlxgLj5ZN_TzenIWsThA9CwP7WbJNXi&_nc_ohc=Lse_gB2QSh4AX9UrSr8&_nc_ht=scontent.fmex11-3.fna&oh=a19ab74226a13374c0075e293b3df2f3&oe=61AEDB2E"
          texto= "VER UNIDAD"
        />
        <TargetaRegistro
          user="CANCUN"
          description="Centro de Vinculación y Desarrollo Regional Unidad Cancun"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-3.fna.fbcdn.net/v/t1.15752-9/253850016_1494685680888118_2530720706004500373_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGIPUg-ZDmSOZstkHQyYO2Amu0FiXRmADGa7QWJdGYAMQ0oCNxhGKlozkUASaoOu4MauXblYSijAw3-JUHZY40l&_nc_ohc=7nDWfJV6kdcAX-dXYuP&_nc_ht=scontent.fmex11-3.fna&oh=bc2aeee214f23133ab4da91e6d25669a&oe=61B1942E"
          texto= "VER UNIDAD"
        />
        
          <TargetaRegistro
          
          user="CULIACAN"
          description="Centro de Vinculación y Desarrollo Regional Unidad Culiacan"
          link="/signup/Administrador"
          pic="https://scontent.fmex11-1.fna.fbcdn.net/v/t1.15752-9/253611565_3027053437561075_648268235919184644_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEUXb8AGj2-G2VaVL3CiysJvWVIWfFS4D29ZUhZ8VLgPXVGtlWFAoSkRYatSUv9u0n7lk8pWuKAzgUc_8zxQXd2&_nc_ohc=vqimCqRi3CYAX-uLtT9&_nc_ht=scontent.fmex11-1.fna&oh=d32398b679eec9ed9af0baf4f667c22d&oe=61AF0773"
          texto= "VER UNIDAD"

        />
        
      </main>
      <Footer />
  </div>;
};

export default CentrosDVDR;
