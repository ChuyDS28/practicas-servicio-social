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
                flexBasis: "63.9px",
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
                flexBasis: "49.5px",
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
                flexBasis: "49.5px",
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
                flexBasis: "49.4px",
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
                flexBasis: "49.5px",
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
                flexBasis: "49.6px",
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
                flexBasis: "49.5px",
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
                flexBasis: "49.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Presencial3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "49.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Distancia3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "49.6px",
                textAlign: "center",
              },
            ]}
          >
            {props.Total3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "49px",
                textAlign: "center",
              },
            ]}
          >
            {props.Presencial4}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "49.6px",
                textAlign: "center",
              },
            ]}
          >
            {props.Distancia4}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "49.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Total4}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "56.1px",
                textAlign: "center",
              },
            ]}
          >
            {props.Presencial5}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "55.7px",
                textAlign: "center",
              },
            ]}
          >
            {props.Distancia5}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "57.2px",
                textAlign: "center",
                borderRight:"1px black solid"
              },
            ]}
          >
            {props.Total5}
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
          marginVertical: "1px"}}>A C U M U L A D O</Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "7px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "7px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <View style={styles.tableHeadCell1}>
            <Text>TIPO DE</Text>
            <Text>EVENTO</Text>
          </View>
          <View style={styles.tableHead2}>
              <View style={styles.tableHead4}>
          <View style={styles.tableHeadCell2}>
            <Text>2021</Text>
          </View>
          </View>
        <View style={styles.tableHead3}>
            <View style={styles.tableHeadCell4}><Text>ENE-MAR</Text></View>
            <View style={styles.tableHeadCell4}><Text>ABR-JUN</Text></View>
            <View style={styles.tableHeadCell4}><Text>JUL-SEP</Text></View>
            <View style={[styles.tableHeadCell4,{borderRight:"hidden"}]} ><Text>OCT-DIC</Text></View>
        </View>
        <View style={styles.tableHead5}>
        <View style={styles.tableHeadCell5}><Text>PRESENCIAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>A DISTANCIA</Text></View>
        <View style={styles.tableHeadCell5}><Text>TOTAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>PRESENCIAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>A DISTANCIA</Text></View>
        <View style={styles.tableHeadCell5}><Text>TOTAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>PRESENCIAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>A DISTANCIA</Text></View>
        <View style={styles.tableHeadCell5}><Text>TOTAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>PRESENCIAL</Text></View>
        <View style={styles.tableHeadCell5}><Text>A DISTANCIA</Text></View>
        <View style={[styles.tableHeadCell5,{borderRight:"hidden"}]}><Text>TOTAL</Text></View>
        </View>



          </View>
        <View style={styles.tableHead6}>
            <View style={styles.tableHead8}>
          <View style={styles.tableHeadCell3}>
            <Text>ACUMULADO AL PERIODO</Text>
          </View>
          </View>
          <View style={styles.tableHead7}>
          <View style={styles.tableHeadCell6}><Text>PRESENCIAL</Text></View>
        <View style={styles.tableHeadCell6}><Text>A DISTANCIA</Text></View>
        <View style={[styles.tableHeadCell6,{borderRight:"hidden"}]}><Text>TOTAL</Text></View>
          </View>
          </View>
        </View>
   
 
      
       

        <View style={styles.tableBody}>
          <View style={styles.barra}>
          <Row
            Tipo="TOTAL DE EVENTOS"
            Presencial="37"
            Distancia="607"
            Total="644"
            Presencial2="39"
            Distancia2="718"
            Total2="757"
            Presencial3="28"
            Distancia3="580"
            Total3="608"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="105"
            Distancia5="1,905"
            Total5="2,009"
          />
           <Row
            Tipo="TOTAL DE PARTICIPANTES"
            Presencial="1,425"
            Distancia="52,666"
            Total="54,091"
            Presencial2="3,099"
            Distancia2="56,520"
            Total2="56,519"
            Presencial3="1,519"
            Distancia3="54,777"
            Total3="56,296"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="6,043"
            Distancia5="163,963"
            Total5="170,006"
          />
          </View>
          <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
          />
            <Row
            Tipo="Hombres"
            Presencial="766"
            Distancia="22,297"
            Total="23,063"
            Presencial2="1,793"
            Distancia2="23,705"
            Total2="25,498"
            Presencial3="784"
            Distancia3="25,839"
            Total3="26,623"
            Presencial4="0"
            Distancia4="0"
            Total4="0"
            Presencial5="3,343"
            Distancia5="71,841"
            Total5="75,184"
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
   
      <Firmas style={styles.firmas} />
    </View>
  );
};

const styles = StyleSheet.create({
  barra:{
  backgroundColor:"#cdcdcd"
  
  },

  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
  /*   top: "-1px", */
  },
  td: {
    fontSize: "5px",
    flexGrow: "1",
    padding: "1px 0px 0px 0px", 
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "8px",
    flexGrow: "1",
    
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft:"1px solid black",
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
    alignItems: "flex-start",
    height: "33px",
    flexDirection: "row",
    borderLeft: "1px solid black",
    borderRight:"1px solid black" ,
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "33px",
    border:"1px black solid",
    flexDirection: "column",
    width: "712px",
  
  
  },
  tableHead3:{
    flexBasis:"600px",
    height:"11px",
    flexDirection:"row",
    display:"flex",
  },
  tableHead4:{
    flexBasis:"600px",
    height:"11px",
    flexDirection:"row",
    display:"flex",
  },
  tableHead5:{
    flexBasis:"600px",
    height:"16px",
    flexDirection:"row",
    display:"flex",
  },
  tableHead6:{
    flexBasis:"200px",
    height:"42px",
    flexDirection:"column",
    display:"flex",
  },
  tableHead7:{
    flexBasis:"200px",
    height:"22px",
    flexDirection:"row",
    display:"flex",
  },
  tableHead8:{
    flexDirection:"row",
    display:"flex",
  },
  tableHeadCell1: {
    flexBasis: "75px",
    height: "33px",
    textAlign: "center",
    borderTop:"1px black solid",
    borderBottom:"1px black solid",
    padding: "10px 2px 0px 2px",
    fontSize: "6px",
   
  },

  tableHeadCell2: {
    borderBottom:"1px black solid",
    flexBasis: "582px",
    textAlign: "center",
    fontSize: "6px",
    height:"11px"
  },
  tableHeadCell3: {
    border: "1px solid black",
    borderLeft:"hidden",
    borderRight:"hidden",
    flexBasis: "170px",
    padding: "3px 2px 0px 2px",
    textAlign: "center",
    fontSize: "6px",
    height:"22.5px"
  },
  tableHeadCell4: {
  top:"0px", 
    flexBasis: "145.8px",
    borderRight:"1px solid black",
    borderBottom: "1px solid black",
    fontSize: "6px",
    height: "11px",
    textAlign: "center",
  padding: "1px 2px 0px 2px", 
  },
  tableHeadCell5:{
    top:"0px", 
    flexBasis: "48.6px",
    borderRight:"1px solid black",
    fontSize: "6px",
    height: "11px",
    textAlign: "center",
    padding: "1px 0px 0px 0px",  
  },
  tableHeadCell6:{ 
    top:"17px",
    flexBasis: "65px",
    borderBottom:"1px solid black",
    borderRight:"1px solid black",
    fontSize: "6px",
    height: "12px",
    textAlign: "center",
    padding: "2px 0px 0px 0px",  
  },
 
});

export default Table;
