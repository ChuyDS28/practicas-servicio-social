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
          <Text style={[styles.td, { flexBasis: "10%"}]}>
            {props.CentroUnidadAcademica}
          </Text>
          <Text style={[styles.td, { flexBasis: "16.1%" }]}>
            {props.Registro}
          </Text>
          <Text style={[styles.td, { flexBasis: "5.82%", textAlign:"center" }]}>{props.dvdr}</Text>
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
const Table = ({ data }) => {
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
            No="1"
            style={styles.fila1}
            NombrePrograma="Ms Excel-Básico"
            CentroUnidadAcademica="CBG"
            Registro="DVDR/CBG/C/0064/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="2"
            NombrePrograma="Ms Excel-Intermedio"
            CentroUnidadAcademica="CBG"
            Registro="DVDR/CBG/C/0065/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="3"
            NombrePrograma="Ms Excel-Avanzado"
            CentroUnidadAcademica="CBG"
            Registro="DVDR/CBG/C/0066/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="4"
            NombrePrograma="Diseño 3d orientado a impresión 3d"
            CentroUnidadAcademica="C-Dur"
            Registro="DVDR/C-Dur/C/0067/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="5"
            NombrePrograma="Desarrollo de páginas web con wordpress"
            CentroUnidadAcademica="C-Dur"
            Registro="DVDR/C-Dur/C/0068/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="6"
            NombrePrograma="Impresión 3d"
            CentroUnidadAcademica="C-Dur"
            Registro="DVDR/C-Dur/C/0069/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="7"
            NombrePrograma="Electrónica y robótica con arduino"
            CentroUnidadAcademica="C-Dur"
            Registro="DVDR/C-Dur/C/0070/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="8"
            NombrePrograma="Introducción a la programación con python"
            CentroUnidadAcademica="C-Dur"
            Registro="DVDR/C-Dur/C/0071/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="9"
            NombrePrograma="Sinergia en equipo:Una estrategia para trabajar el cambio, desde mi persona al cambio institucional"
            CentroUnidadAcademica="C-Mor"
            Registro="DVDR/C-Mor/C/0072/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="10"
            NombrePrograma="Imagen y relaciones públicas: la estrategia del nombre marca"
            CentroUnidadAcademica="C-Oax"
            Registro="DVDR/C-Oax/C/0073/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="11"
            NombrePrograma="Inteligencia emocional"
            CentroUnidadAcademica="C-Oax"
            Registro="DVDR/C-Oax/C/0075/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="12"
            NombrePrograma="Etica e Integridad"
            CentroUnidadAcademica="C-Mor"
            Registro="DVDR/C-Mor/C/0076/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="13"
            NombrePrograma="Negociación, Toma de Deciciones y Manejo de Conflictos"
            CentroUnidadAcademica="C-Mor"
            Registro="DVDR/C-Mor/C/0077/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="14"
            NombrePrograma="Innovación, propiedad intelectual, y transferencia de tecnología"
            CentroUnidadAcademica="CIIDIR-Mor"
            Registro="DVDR/CIIDIR-Mor/C/0078/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="15"
            NombrePrograma="Inducción a la Administración Pública Municipal"
            CentroUnidadAcademica="C-Oax"
            Registro="DVDR/C-Oax/C/0079-01/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="16"
            NombrePrograma="Impacto de las tecnologías postcosecha tradicionales y emergentes en el sector agrícola"
            CentroUnidadAcademica="CEPROBI"
            Registro="DVDR/CEPROBI/C/0080-01/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="17"
            NombrePrograma="Coaching como herramienta para dirigir de manera efectiva una organizacion fase I"
            CentroUnidadAcademica="C-Oax"
            Registro="DVDR/C-Oax/C/0081/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="18"
            NombrePrograma="Coaching como herramienta para dirigir de manera efectiva una organizacion fase II"
            CentroUnidadAcademica="C-Oax"
            Registro="DVDR/C-Oax/C/0082/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="19"
            NombrePrograma="Electrocardiografía clínica"
            CentroUnidadAcademica="ESM"
            Registro="DVDR/ESM/C/0083/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          <Row
            No="20"
            NombrePrograma="Ventas en la era Digital"
            CentroUnidadAcademica="C-Dur"
            Registro="DVDR/C-Dur/C/0084/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
           <Row
            No="21"
            NombrePrograma="Tópicos selectos de pediatría en el primer nivel de atención"
            CentroUnidadAcademica="ESM"
            Registro="DVDR/ESM/C/0085/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
           <Row
            No="22"
            NombrePrograma="Tópicos selectos de ginecología y obstetricia en el primer nivel de atención"
            CentroUnidadAcademica="ESM"
            Registro="DVDR/ESM/C/0086/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
           <Row
            No="23"
            NombrePrograma="Capacitación en Aritmética"
            CentroUnidadAcademica="CECyT 5"
            Registro="DVDR/CECYT 5 /C/0087/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
           <Row
            No="24"
            NombrePrograma="Capacitacion en Geometría"
            CentroUnidadAcademica="CECyT 5"
            Registro="DVDR/CECYT 5 /C/0088/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
           <Row
            No="25"
            NombrePrograma="Capacitación en habilidad del pensamiento abstracto"
            CentroUnidadAcademica="CECyT 5"
            Registro="DVDR/CECYT 5 /C/0089/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
           <Row
            No="26"
            NombrePrograma="Capacitación en complementación de oraciones"
            CentroUnidadAcademica="CECyT 5"
            Registro="DVDR/CECYT 5 /C/0090/2021-2023"
            dvdr="&nbsp;&nbsp;X"
            Posgrado=""
            Des=""
            Defle=""
            Dems=""
          />
          
          {data &&
            data.map((item, index) => {
              return <Row key={index} row={item} />;
            })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Table;
