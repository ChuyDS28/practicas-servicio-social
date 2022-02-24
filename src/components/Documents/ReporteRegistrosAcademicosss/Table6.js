import React from "react";
import Firmas from "./Firmas";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

const Row = (props) => {
  return (
    <View style={styles.tr}>
      {props && (
        <>
          <Text style={[styles.td4, { flexBasis: "4.55%" }]}>{props.No}</Text>
          <Text style={[styles.td, { flexBasis: "37.5%" }]}>
            {props.NombrePrograma}
          </Text>
          <Text style={[styles.td, { flexBasis: "10%" }]}>
            {props.CentroUnidadAcademica}
          </Text>
          <Text style={[styles.td, { flexBasis: "16.1%" }]}>
            {props.Registro}
          </Text>
          <Text style={[styles.td, { flexBasis: "5.82%",textAlign:"center" }]}>{props.dvdr}</Text>
          <Text style={[styles.td, { flexBasis: "8.7%" }]}>
            {props.Posgrado}
          </Text>
          <Text style={[styles.td, { flexBasis: "5.15%" }]}>{props.Des}</Text>
          <Text style={[styles.td, { flexBasis: "5.9%" }]}>{props.Dems}</Text>
          <Text style={[styles.td2, { flexBasis: "6.15%" }]}>
            {props.Defle}
          </Text>
        </>
      )}
    </View>
  );
};
const Table6 = ({ data }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "5px",
        }}
      >
        SERVICIOS EXTRACURRICULARES REGISTRADOS
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "9px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "9px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <Text style={[styles.tableHeadCell, { flexBasis: "1%" }]}>NO.</Text>
          <Text style={[styles.tableHeadCell, { flexBasis: "50%" }]}>
            NOMBRE DEL PROGRAMA
          </Text>
          <Text style={[styles.tableHeadCell, { flexBasis: "10%" }]}>
            CENTRO O UNIDAD
          </Text>
          <Text style={[styles.tableHeadCell, { flexBasis: "20%" }]}>
            NÚMERO DE REGISTRO
          </Text>
        </View>
        <View style={styles.tableHead2}>
          <Text style={styles.tableHeadCell2}>
            {" "}
            ÁREA DE COORDINACIÓN QUE OTORGA EL REGISTRO
          </Text>
        </View>

        <View style={styles.tableHead3}>
          <Text style={styles.tableHeadCell4}> DVDR</Text>
          <Text style={styles.tableHeadCell3}> POSGRADO</Text>
          <Text style={styles.tableHeadCell3}> DES</Text>
          <Text style={styles.tableHeadCell3}> DEMS</Text>
          <Text style={styles.tableHeadCell3}> DEFLE</Text>
        </View>

        <View style={styles.tableBody}>
          <Row
            No="27"
            style={styles.fila1}
            NombrePrograma="Capacitación en Comprensión lectora"
            CentroUnidadAcademica="CECyT 5"
            Registro="DVDR/CECYT 5 /C/0091/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="28"
            NombrePrograma="Comunicación Asertiva"
            CentroUnidadAcademica="CVDR Durango"
            Registro="DVDR/C-Dur/C/0092/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="29"
            NombrePrograma="Autocad nivel básico"
            CentroUnidadAcademica="CBG"
            Registro="DVDR/CBG/C/0093/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="30"
            NombrePrograma="Autocad  nivel intermedio"
            CentroUnidadAcademica="CBG"
            Registro="DVDR/CBG/C/0094/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="31"
            NombrePrograma="Autocad  nivel avanzado"
            CentroUnidadAcademica="CBG"
            Registro="DVDR/CBG/C/0095/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="32"
            NombrePrograma="Lectura e Interpretación de Planos"
            CentroUnidadAcademica="CIITA-Ch"
            Registro="DVDR/CIITA-Ch/C/0096/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="33"
            NombrePrograma="Interpretación de la Norma ISO 286"
            CentroUnidadAcademica="CIITA-Ch"
            Registro="DVDR/CIITA-Ch/C/0097/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="34"
            NombrePrograma="CPCA - parámetros de corte"
            CentroUnidadAcademica="CIITA-Ch"
            Registro="DVDR/CITA-Ch/C/0098/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="35"
            NombrePrograma="Responsabilidades del SET UP"
            CentroUnidadAcademica="CIITA-Ch"
            Registro="DVDR/CIITA-Ch/C/0099/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="36"
            NombrePrograma="CPCMB - parámetros de corte"
            CentroUnidadAcademica="CIITA-Ch"
            Registro="DVDR/CIITA-Ch/C/00100/2021-2023"
            dvdr="X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
        
          <View style={[styles.tr,{backgroundColor:"#9b9b9b"}]}>
          <Text style={[styles.td4, { flexBasis: "68.25%" }]}>TOTALES</Text>
          <Text style={[styles.td, { flexBasis: "5.82%" }]}>19</Text>
          <Text style={[styles.td, { flexBasis: "8.7%" }]}>0</Text>
          <Text style={[styles.td, { flexBasis: "5.15%" }]}>0</Text>
          <Text style={[styles.td, { flexBasis: "5.9%" }]}>1</Text>
          <Text style={[styles.td2, { flexBasis: "6.15%" }]}>0</Text>
          </View>
          
          {data &&
            data.map((item, index) => {
              return <Row key={index} row={item} />;
            })}
        </View>
      </View>
      <View style={styles.firmas}> 
      <Firmas
        nombre="Lic. María Mercedes Pérez Guillén"
        cargo="Encargada de acuerdos"
        extension="51655"
        email="mperezgui@ipn.mx"
        nombre1="M. en C. Rodolfo Alejandro Romo Mexía Gutiérrez"
        cargo1="Director"
        extension1="51601"
        email1="rromo@ipn.mx"
      />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
firmas:{
marginTop:"-70px"



},
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  tableBody: {
    position: "absolute",
    top: "51px",
    marginTop: "1px",
  },
  table: {
    marginBottom: "260px",
    /* border: "1px solid #d3d3d3", */
  },
  tableHead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    border: "1px solid black",
    backgroundColor: "#f59733",
    width: "69%",

    /*  border: "1px solid gray", */
  },
  tableHead2: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    left: "68%",
    flexWrap: "nowrap",
    width: "32%",
    border: "1px solid black",
    backgroundColor: "#f59733",
    /*  border: "1px solid gray", */
  },
  tableHead3: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "46%",
    left: "68%",
    flexWrap: "nowrap",
    border: "1px solid black",
    width: "32%",
    backgroundColor: "#f59733",
    /*  border: "1px solid gray", */
  },

  tableHeadCell: {
    fontSize: "8px",
    fontWeight: "1100",
    flexGrow: "1",
    textAlign: "center",
    borderRight: "1px solid black",
    height: "50px",
    padding: "20px 6px 0px 4px",
  },
  tableHeadCell2: {
    fontSize: "8px",
    fontWeight: "1100",
    flexGrow: "1",
    textAlign: "center",
    height: "25px",
    padding: "5px",
  },
  tableHeadCell3: {
    fontSize: "8px",
    fontWeight: "1100",
    flexGrow: "1",
    borderLeft: "1px solid black",
    textAlign: "center",
    height: "26px",
    padding: "5px",
  },
  tableHeadCell4: {
    fontSize: "8px",
    fontWeight: "1100",
    flexGrow: "1",
    textAlign: "center",
    height: "26px",
    padding: "5px",
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    borderBottom: "1px solid black",
    width: "100%",
  },
  td: {
    fontSize: "7px",
    fontWeight: "1100",
    flexGrow: "1",
    textAlign: "left",
    borderRight: "1px solid black",
    height: "12px",
    padding: "2px",
  },
  td2: {
    fontSize: "7px",
    fontWeight: "1100",
    flexGrow: "1",
    textAlign: "center",
    borderRight: "1px solid black",
    height: "12px",
    padding: "2px",
  },
  td4: {
    fontSize: "7px",
    fontWeight: "1100",
    flexGrow: "1",
    textAlign: "center",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    height: "12px",
    padding: "2px",
  },
  /* tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    borderBottom: "1px solid #d3d3d3",
  },
  td: {
    fontSize: "8pt",
   
    flexGrow: "1",
    padding: "5px",
  }, */
});
export default Table6;
