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
                flexBasis: "79px",
                textAlign: "center",
              },
            ]}
          >
            {props.No}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "106px",
                textAlign: "center",
              },
            ]}
          >
            {props.Unidad}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "269px",
                textAlign: "center",
              },
            ]}
          >
            {props.Nombre}
          </Text>
          {/* <Text
            style={[
              styles.td,
              {
                flexBasis: "123.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Tipo}
          </Text> */}
          <Text
            style={[
              styles.td,
              {
                flexBasis: "202px",
                textAlign: "center",
              },
            ]}
          >
            {props.NoR}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "89px",
                textAlign: "center",
              },
            ]}
          >
            {props.Hom}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "88.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Muj}
          </Text>
          <Text
            style={[
              styles.td3,
              {
                flexBasis: "85.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Total}
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
         /*  marginVertical: "-2px", */
          marginTop:"-2px",
        }}
      >
        PROGRAMAS EN LA MODALIDAD PRESENCIAL OFERTADOS Y NÚMERO DE USUARIOS
      </Text>
      <Text
        style={{
          fontSize: "8px",
          fontWeight: "bold",
          textAlign: "center",
         /*  marginVertical: "-2px", */
          marginTop:"1x",
        }}
      >
        NIVEL SUPERIOR
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "7px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "7px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <View style={styles.tableHeadCell1}>
            <Text>NO.</Text>
          </View>
         
          <View style={styles.tableHeadCell5}>
            <Text>UNIDAD</Text>
            <Text>ACADÉMICA</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>NOMBRE DEL PROGRAMA ACADÉMICO</Text>
          </View>
         {/*  <View style={styles.tableHeadCell4}>
            <Text>TIPO</Text>
          </View> */}
          <View style={styles.tableHeadCell2}>
            <Text>TIPO</Text>
          </View>
          <View style={styles.tableHeadCell6}>
            <Text>NO. DE USUARIOS </Text>
          </View>
          
        </View>
       <View
          style={[styles.tableHead2, { width: "232px", marginLeft: "580px" }]}
        >
          <View style={styles.tableHeadCell8}>
            <Text>HOMBRES</Text>
          </View>
          <View style={styles.tableHeadCell8}>
            <Text>MUJERES</Text>
          </View>
          <View style={styles.tableHeadCell9}>
            <Text>TOTAL</Text>
          </View>
        </View>
 
      
       
      
        {/*   <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
         <Text >REGISTROS ACADÉMICOS</Text>
         </View>
         </View>  */}

        <View style={styles.tableBody}>
          <Row
            No="1"
            Unidad="CECyT 2"
            Nombre="Ingles"
            NoR="Básico (Presencial)"
            Hom="422"
            Muj="377"
            Total="799"
          />
         
            <Row
               No="2"
               Unidad="CECyT 2"
               Nombre="Frances"
               NoR="Básico (Presencial)"
               Hom="14"
               Muj="18"
               Total="32"
            />
            <Row
               No="3"
               Unidad="CECyT 13"
               Nombre="Ingles"
               NoR="Avanzado (Presencial)"
               Hom="22"
               Muj="54"
               Total="76"
            />
            <Row
               No="4"
               Unidad="CECyT 7"
               Nombre="Ingles"
               NoR="Básico (A Distancia)"
               Hom="458"
               Muj="421"
               Total="879"
            />
            <Row
               No="5"
               Unidad="CECyT 7"
               Nombre="Ingles"
               NoR="Intermedio (Presencial)"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="6"
               Unidad="CECyT 7"
               Nombre="Ingles"
               NoR="Avanzado (A Distancia)"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="7"
               Unidad="CECyT 10"
               Nombre="Ingles"
               Tipo="Básico (A Distancia)"
               NoR="Seminario"
               Hom="167"
               Muj="221"
               Total="388"
            />
            <Row
               No="8"
               Unidad="CECyT 13"
               Nombre="Ingles"
               NoR="Básico (Presencial)"
               Hom="14"
               Muj="14"
               Total="32"
            />
               <Row
               No="9"
               Unidad="CET 1"
               Nombre="Ingles"
               NoR="Básico (Presencial)"
               Hom="14"
               Muj="14"
               Total="32"
            />
             <Row
               No="10"
               Unidad="CET 1"
               Nombre="Ingles"
               NoR="Avanzado (Presencial)"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <View style={styles.barra2}>
            <Row
          
               No="TOTAL"
               Unidad=""
               Nombre=""
               Tipo=""
               NoR=""
               Hom="0"
               Muj="1"
               Total="2"
            />
      
      </View>
         
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
      <br/>
      <Firmas/>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  barra2:{
    backgroundColor:"#9c9c9c",
  },
  texto:{
    display: "flex",
    fontSize:"8px",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    height:"15px"
  /*   top: "-1px", */
   
  },
  td: {
    fontSize: "8px",
    padding:"5px 2px 0px 2px",
    flexGrow: "1",
   /*  padding: "3px", */
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "7px",
    flexGrow: "1",
    backgroundColor:"#cdcdcd",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft:"1px solid black",
  },
  td2: {
    fontSize: "7px",
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
    height: "24px",
    flexDirection: "row",
    borderLeft: "1px solid black", 
   borderTop: "1px solid black", 
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    borderRight:"1px black solid",
    height: "12px",
    flexDirection: "row",
    marginTop: "-11px",
   
 
  
  },

  tableHead4: {
    display: "flex",
    height: "120px",
    flexDirection: "row",
    width: "220px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "8px",
    marginTop: "-123px",
    textAlign: "center",
  },
  /*  tableHeadCell13: {
    marginTop: "30px",
    marginLeft: "5px",
    marginRight: "5px",
    border:"1px solid black"
  }, */

  tableHeadCell1: {
    flexBasis: "70px",
    height: "24px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
    fontSize: "7px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    flexBasis: "180px",
    textAlign: "center",
    fontSize: "7px",
    padding: "10px 2px 0px 2px",
    height:"24px"
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "240px",
    padding: "5px 5px 0px 5px",
    textAlign: "center",
    fontSize: "7px",
    height:"24px"
  },
  tableHeadCell4: {
    flexBasis: "110px",
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    fontSize: "7px",
    height: "24px",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
  },
  tableHeadCell5: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "7px",
    height: "24px",
    textAlign: "center",
    padding: "5px 2px 0px 2px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",

    borderBottom: "1px solid black",
    flexBasis: "234px",
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell7: {
    flexBasis: "146px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell8: {
    flexBasis: "91px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell9: {
    flexBasis: "85.5px",
    borderBottom: "1px solid black",
    
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
  },
});

export default Table;
