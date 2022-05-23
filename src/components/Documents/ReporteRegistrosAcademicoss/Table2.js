import React from "react";
import Firmas from "../Firmas";
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
          <Text style={[styles.td, { flexBasis: "65px", textAlign: "center" }]}>
            {props.Nivel}
          </Text>
          <Text style={[styles.td, { flexBasis: "23px", textAlign: "center" }]}>
            {props.Mes1}
          </Text>
          <Text style={[styles.td, { flexBasis: "37px", textAlign: "center" }]}>
            {props.Mes2}
          </Text>
          <Text style={[styles.td, { flexBasis: "32px", textAlign: "center" }]}>
            {props.Mes3}
          </Text>
          <Text style={[styles.td, { flexBasis: "52px", textAlign: "center" }]}>
            {props.Mes4}
          </Text>
          <Text style={[styles.td, { flexBasis: "61px", textAlign: "center" }]}>
            {props.Mes5}
          </Text>
          <Text style={[styles.td, { flexBasis: "30px", textAlign: "center" }]}>
            {props.Acumulado}
          </Text>
          <Text style={[styles.td, { flexBasis: "30px", textAlign: "center" }]}>
            {props.Variacion}
          </Text>
        </>
      )}
    </View>
  );
};
const Table2 = ({ data }) => {
  return (
    <View break>
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
      <Text
        style={{
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2px",
        }}
      >
        COMPARATIVO
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "9px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "9px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <View style={styles.tableHeadCell1}>
            <Text>NIVEL ACADÉMICO</Text>
          </View>
          <View style={styles.tableHeadCell2}>
            <Text>2020</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>2021</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text>VARIACIÓN PORCENTUAL</Text>
          </View>
          <View style={styles.tableHeadCell5}>
            <Text>JUSTIFICACIÓN</Text>
          </View>
        </View>
        <View style={styles.tableHead2}>
          <View style={styles.tableHeadCell6}>
            <Text>ENERO - SEPTIEMBRE</Text>
          </View>
          <View style={styles.tableHeadCell7}>
            <Text>ENERO - MARZO</Text>
          </View>
          <View style={styles.tableHeadCell8}>
            <Text>ABRIL - JUNIO</Text>
          </View>
          <View style={styles.tableHeadCell9}>
            <Text>JULIO - SEPTIEMBRE</Text>
          </View>
          <View style={styles.tableHeadCell10}>
            <Text>OCTUBRE - DICIEMBRE</Text>
          </View>
          <View style={styles.tableHeadCell11}>
            <Text>ACUMULADO AL PERIODO</Text>
          </View>
        </View>
        <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
            <Text>REGISTROS ACADÉMICOS</Text>
          </View>
        </View>

        <View style={styles.tableBody}>
          <Row
            Nivel="MEDIA SUPERIOR"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="SUPERIOR"
            Mes1="3"
            Mes2="0"
            Mes3="1"
            Mes4="0"
            Mes5=""
            Acumulado="1"
            Variacion="-66.67%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="4"
            Mes2="1"
            Mes3="1"
            Mes4="0"
            Mes5=""
            Acumulado="2"
            Variacion="-50.00%"
          />
          <Row
            Nivel="ÁREA CENTRAL"
            Mes1="76"
            Mes2="28"
            Mes3="9"
            Mes4="19"
            Mes5=""
            Acumulado="37"
            Variacion="-51.32%"
          />
          <View style={styles.barra}>
            <Row
              Nivel="TOTAL"
              Mes1="94"
              Mes2="29"
              Mes3="11"
              Mes4="20"
              Mes5="0"
              Acumulado="40"
              Variacion="-57.45%"
            />
            <Text
              style={[
                styles.td,
                {
                  backgroundColor: "#cdcdcd",
                  textAlign: "center",
                  border: "1px solid black ",
                  borderTop: "hidden",
                },
              ]}
            ></Text>
          </View>

          {data &&
            data.map((item, index) => {
              return <Row key={index} row={item} />;
            })}
          <View style={styles.tableHead4}>
            <View style={styles.tableHeadCell13}>
              <Text>
                La impartición de eventos formativos se ha comenzado a activar
                después de haber atravesado un período de escasa actividad por
                situaciones de pandemia por lo que en el último trimestre de
                este año se llegará a la meta esperada de acuerdo con las
                solicitudes de registros académicos que se han recibido.
              </Text>
            </View>
          </View>
        </View>
      </View>
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
  );
};

const styles = StyleSheet.create({
  table: {
    marginBottom: "30px",
    /* border: "1px solid #d3d3d3", */
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    width: "593px",
    top: "-1px",
    height: "20px",
  },
  td: {
    fontSize: "6px",
    flexGrow: "1",
    padding: "6px 2px 0px 2px",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  barra: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    width: "812px",
    top: "-1px",
    height: "20px",
    borderBottom: "1px solid #d3d3d3",
    backgroundColor: "#cdcdcd",
  },

  tableHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  tableHead: {
    display: "flex",
    backgroundColor: "#f59733",
    alignItems: "flex-start",
    height: "60px",
    flexDirection: "row",
    border: "1px solid black",
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "30px",
    flexDirection: "row",
    marginTop: "-42px",
    marginLeft: "99px",
    width: "431px",
  },
  tableHead3: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "17px",
    flexDirection: "row",
    marginTop: "-4px",
    marginLeft: "2px",
    marginRight: "2px",
  },
  tableHead4: {
    display: "flex",
    height: "81px",
    flexDirection: "row",
    width: "219px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "8px",
    marginTop: "-102px",
    textAlign: "center",
  },
  tableHeadCell13: {
    marginTop: "15px",
    marginLeft: "5px",
    marginRight: "5px",
  },

  tableHeadCell1: {
    flexBasis: "100px",
    padding: "15px 0px 0px 0px",
    height: "42px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "56px",
    textAlign: "center",
    fontSize: "8px",
    lineHeight: "2px",
    paddingTop:"1px"
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "380px",
    textAlign: "center",
    fontSize: "8px",
    lineHeight: "2px",
    paddingTop:"1px"
   
  },
  tableHeadCell4: {
    flexBasis: "65px",
    height: "42px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "8px",
    justifyContent: "center",
    textAlign: "center",
  },
  tableHeadCell5: {
    flexBasis: "220px",
    height: "42px",
    padding: "15px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"3px 0px 0px 1px",
    flexBasis: "56px",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell7: {
    flexBasis: "70px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"6px 0px 0px 0px",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell8: {
    flexBasis: "65px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"6px 0px 0px 0px",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell9: {
    flexBasis: "85px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"6px 0px 0px 1px",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"6px 0px 0px 0px",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"3px 0px 0px 1px",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    
    textAlign: "center",
    fontSize: "8px",
  },
});
export default Table2;
