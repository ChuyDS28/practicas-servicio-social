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
          <Text style={[styles.td, { flexBasis: "64px", textAlign: "center" }]}>
            {props.Nivel}
          </Text>
          <Text style={[styles.td, { flexBasis: "22px", textAlign: "center" }]}>
            {props.Mes1}
          </Text>
          <Text style={[styles.td, { flexBasis: "37px", textAlign: "center" }]}>
            {props.Mes2}
          </Text>
          <Text style={[styles.td, { flexBasis: "31px", textAlign: "center" }]}>
            {props.Mes3}
          </Text>
          <Text style={[styles.td, { flexBasis: "47px", textAlign: "center" }]}>
            {props.Mes4}
          </Text>
          <Text style={[styles.td, { flexBasis: "57px", textAlign: "center" }]}>
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
const Table5 = ({ data }) => {
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
            <Text></Text>
          </View>
          <View style={styles.tableHeadCell2}>
            <Text>2020</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>2021</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text> VARIACIÓN&nbsp;&nbsp; PORCENTUAL</Text>
          </View>
          <View style={styles.tableHeadCell5}>
            <Text>JUSTIFICACIÓN</Text>
          </View>
        </View>
        <View style={styles.tableHead2}>
          <View style={styles.tableHeadCell6}>
            <Text> ENERO&nbsp; -&nbsp; &nbsp;SEPTIEMBRE</Text>
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
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <View style={styles.barra}>
            <Row
              Nivel="TOTAL"
              Mes1="11"
              Mes2="0"
              Mes3="0"
              Mes4="1"
              Mes5=""
              Acumulado="0"
              Variacion="-100.00%"
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
          <View style={styles.tableHead5}>
            <View style={styles.tableHeadCell12}>
              <Text>REGISTROS ACADÉMICOS</Text>
            </View>
          </View>
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
           <View style={styles.barra}>
            <Row
              Nivel="TOTAL"
              Mes1="11"
              Mes2="0"
              Mes3="0"
              Mes4="1"
              Mes5=""
              Acumulado="0"
              Variacion="-100.00%"
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
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <Row
            Nivel="CENTROS DE INVESTIGACIÓN"
            Mes1="11"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
          />
          <View style={styles.barra}>
            <Row
              Nivel="TOTAL"
              Mes1="11"
              Mes2="0"
              Mes3="0"
              Mes4="1"
              Mes5=""
              Acumulado="0"
              Variacion="-100.00%"
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
                Se programó para el último trimestre del año 2021 la
                capacitación para preparar la evaluación de competencias
                laborales para 25 candidatos.
              </Text>
            </View>
          </View>
          <View style={styles.tableHead6}>
            <View style={styles.tableHeadCell13}>
              <Text>
                Derivado de la capacitación para alinear el proceso de
                evaluación de 25 candidatos, la evaluación y su consecuente
                certificación, se realizará también en este cuarto trimestre.
              </Text>
            </View>
          </View>
          <View style={styles.tableHead7}>
            <View style={styles.tableHeadCell13}>
              <Text>
                Derivado de la capacitación para alinear el proceso de
                evaluación de 25 candidatos, la evaluación y su consecuente
                certificación, se realizará también en este cuarto trimestre.
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
    marginBottom: "50px",
    /* border: "1px solid #d3d3d3", */
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    width: "593px",
    top: "0px",
    height: "18px",
  },
  td: {
    fontSize: "6px",
    flexGrow: "1",
    padding: "3px",
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
    height: "18px",
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
    height: "50px",
    flexDirection: "row",
    borderLeft:"1px solid black",
    borderRight:"1px solid black",
    borderTop:"1px solid black"
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "18px",
    flexDirection: "row",
    marginTop: "-34px",
    marginLeft: "99px",
    width: "431px",
  },
  tableHead3: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottom: "1px solid black",
    height: "17px",
    flexDirection: "row",
    marginTop: "0px",
  },
  tableHead4: {
    display: "flex",
    height: "74px",
    flexDirection: "row",
    width: "219px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "8px",
    marginTop:"-235px",
    marginBottom:"15px",
    textAlign:"center",
  },

  tableHead5: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "17px",
    border: "1px solid black",
    top:"-1px",
    borderTop: "hidden",
    backgroundColor: "#f59733",
    flexDirection: "row",
  },
  tableHead6: {
    display: "flex",
    marginTop:"0px",
    top:"18px",
    height: "53px",
    flexDirection: "row",
    width: "219px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "7px",
    textAlign: "center",
  },
  tableHead7: {
    display: "flex",
    top:"36px",
    height: "40px",
    flexDirection: "row",
    width: "219px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "7px",
    textAlign: "center",
  },

  tableHeadCell1: {
    flexBasis: "100px",
    padding: "15px 0px 0px 0px",
    height: "33px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    /* ,
     textAlign:"center",
     lineHeight:"15px",
    
     border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderRight: "1px solid black",
    height:"15px",
    borderBottom: "1px solid black",
    flexBasis: "56px",
    textAlign: "center",
    fontSize: "7px",
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "380px",
    textAlign: "center",
    fontSize: "7px",
    lineHeight: "2px",
  },
  tableHeadCell13: {
    marginTop: "20px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  tableHeadCell4: {
    flexBasis: "65px",
    height: "33px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "7px",
    justifyContent: "center",
    textAlign: "center",
  },
  tableHeadCell5: {
    flexBasis: "220px",
    height: "33px",
    padding: "15px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "56px",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell7: {
    flexBasis: "70px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell8: {
    flexBasis: "65px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell9: {
    flexBasis: "85px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    textAlign: "center",
    fontSize: "7px",
  },
});
export default Table5;
