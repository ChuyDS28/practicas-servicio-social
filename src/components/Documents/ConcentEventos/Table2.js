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
          <Text
            style={[
              styles.td,
              {
                flexBasis: "85px",
                textAlign: "center",
              },
            ]}
          >
            {props.Tipo}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.6px",
                textAlign: "center",
              },
            ]}
          >
            {props.Presencial}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.3px",
                textAlign: "center",
              },
            ]}
          >
            {props.Distancia}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.3x",
                textAlign: "center",
              },
            ]}
          >
            {props.Total}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.7px",
                textAlign: "center",
              },
            ]}
          >
            {props.Presencial2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.6px",
                textAlign: "center",
              },
            ]}
          >
            {props.Distancia2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.9px",
                textAlign: "center",
              },
            ]}
          >
            {props.Total2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "85px",
                textAlign: "center",
              },
            ]}
          >
            {props.Variación}
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
          fontSize: "8px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "0px",
        }}
      >
       ACTIVIDADES DE EDUCACIÓN CONTINUA Y A DISTANCIA
      </Text>
      <Text    style={{
          fontSize: "8px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "1px"}}>C O M P A R A T I V O</Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "7px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "7px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <View style={[styles.tableHeadCell1, { borderLeft: "hidden" }]}>
            <Text>TIPO DE</Text>
            <Text>EVENTO</Text>
          </View>
          <View style={styles.tableHead2}>
            <View style={styles.tableHead3}>
              <View style={styles.tableHeadCell2}>
                <Text>ENE - SEP 2020</Text>
              </View>
              <View style={[styles.tableHeadCell2, { borderRight: "hidden" }]}>
                <Text>ENE - SEP 2021</Text>
              </View>
            </View>
            <View style={styles.tableHead3}>
              <View style={styles.tableHeadCell3}>
                <Text>PRESENCIAL</Text>
              </View>
              <View style={styles.tableHeadCell3}>
                <Text>A DISTANCIA</Text>
              </View>
              <View style={styles.tableHeadCell3}>
                <Text>TOTAL</Text>
              </View>
              <View style={styles.tableHeadCell3}>
                <Text>PRESENCIAL</Text>
              </View>
              <View style={styles.tableHeadCell3}>
                <Text>A DISTANCIA</Text>
              </View>
              <View style={[styles.tableHeadCell3, { borderRight: "hidden" }]}>
                <Text>TOTAL</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.tableHeadCell1,{borderRight:"hidden"}]}
          >
            <Text>VARIACIÓN</Text>
            <Text>PORCENTUAL</Text>
          </View>
          <View style={styles.tableHead4}>
              <View style={styles.tableHead5}>
          <View style={styles.tableHeadCell4}>
            <Text>JUSTIFICACIÓN</Text>
          </View>
          </View>
          <View style={styles.tableHead5}>
          <View style={styles.tableHeadCell5}>
            <Text>
              Derivado de la pandemia que se suscitó a nivel mundial relacionada
              con el COVID-19, desde marzo del 2020, los servicios de formación
              disminuyeron en gran medida, sin embargo, las Unidades Académicas
              y dependencias politécnicas que imparten estos programas, han
              hecho esfuerzos por adecuarlos para ofertarlos en modalidad a
              distancia. Cabe destacar que el periodo que se compara con el año
              2020, hay un número importante de eventos presenciales debido a
              que aún se puedieron impartir antes de la declaratoria sanitaria.
            </Text>
          </View>
          </View> 
          </View>
        </View>


        <View style={styles.tableBody}>
          <Row
            Tipo="TOTAL DE EVENTOS"
            Presencial="1,286"
            Distancia="785"
            Total="2,071"
            Presencial2="104"
            Distancia2="1,905"
            Total2="2,009"
            Variación="-2.99%"
          />
          <Row
            Tipo="TOTAL DE PARTICIPANTES"
            Presencial="1,286"
            Distancia="785"
            Total="2,071"
            Presencial2="104"
            Distancia2="1,905"
            Total2="2,009"
            Variación="-2.99%"
          />
           <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />
          <Row
            Tipo="Hombres"
            Presencial="37,699"
            Distancia="17,804"
            Total="55,503"
            Presencial2="3,343"
            Distancia2="71,841"
            Total2="75,184"
            Variación=""
          />


          {/*
      <View style={styles.barra}>
         <Row Nivel="TOTAL" Mes1="11" Mes2="0" Mes3="0" Mes4="1" Mes5="" Acumulado="0" Variacion="-100.00%"/>
         </View>  
         
          {data &&
            data.map((item, index) => {
              return <Row key={index} row={item} />;
            })} 
         <View style={styles.tableHead4}>
          <View style={styles.tableHeadCell13}>
            <Text>La impartición de eventos formativos se ha comenzado a activar después de haber atravesado un período de escasa actividad por situaciones de pandemia por lo que en el último trimestre de este año se llegará a la meta esperada de acuerdo con las solicitudes de registros académicos que se han recibido.</Text>
           </View>
          </View>   */}
        </View>
      </View>
      {/* <Text style={styles.texto}>Nota: Se solicita especificar claramente el nombre del programa académico.</Text> */}
      <Firmas />
    </View>
  );
};

const styles = StyleSheet.create({
  tr: {
    display: "flex",
    width: "560px",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    /*   top: "-1px", */
  },
  td: {
    fontSize: "5px",
    flexGrow: "1",
    /*  padding: "3px", */
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "8px",
    flexGrow: "1",

    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
  },
  td2: {
    fontSize: "8px",
    flexGrow: "1",
    padding: "3px",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
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
    /* borderRight:"hidden", */
    alignItems: "flex-start",
    height: "24px",
    flexDirection: "row",
    border: "1px solid black", 
    borderRight:"hidden"
  },
  tableHead2: {
    flexDirection: "column",
    display: "flex",
    flexBasis: "400px",
    border: "1px black solid",
    borderTop: "hidden",
    borderBottom: "1px black solid",
    height: "23px",
    /*     backgroundColor:"red" */
  },
  tableHead3: {
    flexDirection: "row",
    display: "flex",
    flexBasis: "400px",
    height: "10px",
  },
  tableHead5: {
    flexDirection: "row",
    display: "flex",
  },
  tableHead4: {
    flexDirection: "column",
    display: "flex",
    border:"1px black solid",
    borderTop:"hidden",
    height: "257px",
    
  },

  tableHeadCell1: {
    flexBasis: "80px",
    height: "24px",
    textAlign: "center",
    padding: "3px 2px 0px 2px",
    fontSize: "6px",
  },

  tableHeadCell2: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "200px",
    textAlign: "center",
    padding: "2px 0px 0px 0px",
    fontSize: "6px",
    height: "12px",
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    flexBasis: "70px",
    padding: "3px 2px 0px 2px",
    textAlign: "center",
    fontSize: "6px",
    height: "12px",
  },
  tableHeadCell4: {
    flexBasis: "250px",
    fontSize: "6px",
    borderBottom:"1px black solid", 
    height: "23px",
    textAlign: "center",
    padding: "7px 2px 0px 2px",
  },
  tableHeadCell5: {
    flexBasis: "250.8px",
    fontSize: "6px",
    height: "234px",
    textAlign: "center",
    padding: "100px 2px 0px 2px",
  },
  tableHeadCell6: {
    top: "19px",
    flexBasis: "65px",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    fontSize: "6px",
    height: "24px",
    textAlign: "center",
    padding: "5px 0px 0px 0px",
  },
});

export default Table2;
