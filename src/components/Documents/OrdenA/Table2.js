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
          <Text style={[styles.td, { flexBasis: "99px", textAlign: "center" }]}>
            {props.Concepto}
          </Text>
          <Text style={[styles.td, { flexBasis: "55.5px", textAlign: "center" }]}>
            {props.Mes1}
          </Text>
          <Text style={[styles.td, { flexBasis: "70px", textAlign: "center" }]}>
            {props.Mes2}
          </Text>
          <Text style={[styles.td, { flexBasis: "65px", textAlign: "center" }]}>
            {props.Mes3}
          </Text>
          <Text style={[styles.td, { flexBasis: "85px", textAlign: "center" }]}>
            {props.Mes4}
          </Text>
          <Text style={[styles.td, { flexBasis: "95px", textAlign: "center" }]}>
            {props.Mes5}
          </Text>
          <Text style={[styles.td, { flexBasis: "61px", textAlign: "center" }]}>
            {props.Acumulado}
          </Text>
          <Text style={[styles.td, { flexBasis: "64px", textAlign: "center" }]}>
            {props.Variacion}
          </Text>
          <Text style={[styles.td, { borderRight:"1px solid black", flexBasis: "220px", textAlign: "center" }]}>
            {props.Justificacion}
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
        CONVENIOS, CARTAS FINIQUITO O DE SATISFACCIÓN Y ACUERDOS DE COLABORACIÓN DE EDUCACIÓN CONTINUA
      </Text>
      <Text
        style={{
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2px",
        }}
      >
        A C U M U L A D O
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
            <Text>CONCEPTO</Text>
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
        {/* <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
            <Text>PERSONAS CAPACITADAS</Text>
          </View>
        </View>
 */}
        <View style={styles.tableBody}>
      <View style={styles.barra}> 
          <Row
            Concepto="TOTAL"
            Mes1="25"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5="0"
            Acumulado="1"
            Variacion="-96.00%"
            Justificacion=""
          />
         </View> 
          <Row
            Concepto="Convenio"
            Mes1="9"
            Mes2="0"
            Mes3="0"
            Mes4="1"
            Mes5=""
            Acumulado="1"
            Variacion="-88.89%"
            Justificacion="Debido a la extinción del Fondo de Investigación Científica y
            Tecnológica del Instituto, el proceso de la formalización de
            Convenios se ha retrasado, siendo que en el último mes del
            trimestre ha comenzado el proceso a operar y se busca la
            formalización de los convenios con el sector público, mismos
            que se reportarán en el siguiente trimestre."
          />
          <Row
            Concepto="Órden de Servicio"
            Mes1="16"
            Mes2="0"
            Mes3="0"
            Mes4="0"
            Mes5=""
            Acumulado="0"
            Variacion="-100.00%"
            Justificacion="Este procedimiento será sustituido por un catálogo de
            servicios de enseñanza y externos, mismo que autoriza la
            Secretaría de Hacienda y Crédito Público . En este momento
            se esta comenzando a operar esta nueva metodología."
          />
         
            <Row
              Concepto="Base de colaboración"
              Mes1="0"
              Mes2="0"
              Mes3="0"
              Mes4="0"
              Mes5=""
              Acumulado="0"
              Variacion="0.00%"
              Justificacion="Al no haber actividad por carecer de convenios, este proceso
              no se ha llevado a cabo, siendo hasta el tercer trimestre que
              se reportarán estos instrumentos. Se espera que la
              autorización del catálogo y la apertura de cuentas se
              empiece a tener mayor actividad. "
            />
           
        
      

          {data &&
            data.map((item, index) => {
              return <Row key={index} row={item} />;
            })}
         {/*  <View style={styles.tableHead4}>
            <View style={styles.tableHeadCell14}>
              <Text>
                Se programó para el último trimestre del año 2021 la
                capacitación para preparar la evaluación de competencias
                laborales para 25 candidatos.
              </Text>
            </View>
          </View>
          <View style={styles.tableHead6}>
            <View style={styles.tableHeadCell14}>
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
          </View> */}
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
    marginBottom: "5px",
    /* border: "1px solid #d3d3d3", */
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    top: "0px",

    /* height: "70px", */
    
  },
  td: {
    fontSize: "8px",
    flexGrow: "1",
/*     padding: "3px", */
    padding: "8px 4.5px 8px 4.5px", 
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
   textAlign:"center"
  },
  
 
  barra: {
    /* display: "flex",
    flexDirection: "row",

    alignItems: "stretch",
    flexWrap: "nowrap",
 
     top: "0px",  */
/*     height: "18px", */
   /*  borderBottom: "1px solid #d3d3d3", */
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
    height: "33px",
    flexDirection: "row",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    borderTop: "1px solid black",
    
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "18px",
    flexDirection: "row",
    marginTop: "-17px",
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
    padding:"3px 2px 0px 2px",
  },
  tableHead4: {
    display: "flex",
    height: "55px",
    flexDirection: "row",
    width: "219px",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    marginLeft: "593px",
    fontSize: "7px",
    marginTop: "-216px",
    marginBottom: "15px",
    textAlign: "center",
  },

  tableHead5: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    borderLeft:"1px black solid",
    borderRight:"1px black solid",
    borderBottom:"1px black solid",
    height: "17px",
    flexDirection: "row",
    backgroundColor:"#f59733"
  },
  tableHead6: {
    display: "flex",
    marginTop: "0px",
    top: "20px",
    height: "54px",
    flexDirection: "row",
    width: "219px",
    marginLeft: "593px",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "7px",
    textAlign: "center",
  },
  tableHead7: {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    display: "flex",
    top: "37px",
    height: "37px",
    flexDirection: "row",
    width: "219px",
    marginLeft: "593px",
    fontSize: "7px",
    textAlign: "center",
  },

  tableHeadCell1: {
    flexBasis: "100px",
    padding: "14px 2px 0px 2px",
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
    height: "15px",
    borderBottom: "1px solid black",
    flexBasis: "56px",
    padding:"3px 0px 0px 1px",
    textAlign: "center",
    fontSize: "7px",
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "380px",
    padding:"3px 0px 0px 1px",
    textAlign: "center",
    fontSize: "7px",
    height: "15px",
  },
  tableHeadCell13: {
    marginTop: "5px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  tableHeadCell14: {
    marginTop: "10px",
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
    padding: "14px 2px 0px 2px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    
  },
  tableHeadCell6: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"1px 0px 0px 0px",
    flexBasis: "56px",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell7: {
    flexBasis: "70px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding:"3px 2px 0px 2px",
    textAlign: "center",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell8: {
    flexBasis: "65px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    padding:"3px 2px 0px 2px",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell9: {
    flexBasis: "85px",
    borderRight: "1px solid black",
    padding:"3px 0px 0px 6px",
    borderBottom: "1px solid black",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    padding:"3px 2px 0px 2px",
    fontSize: "7px",
    height: "18px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    padding:"1px 0px 0px 0px",
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
export default Table2;
