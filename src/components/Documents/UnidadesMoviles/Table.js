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
                flexBasis: "59px",
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
                flexBasis: "132px",
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
                flexBasis: "88px",
                textAlign: "center",
              },
            ]}
          >
            {props.UnidadA}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "215px",
                textAlign: "center",
              },
            ]}
          >
            {props.Nombre}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "204px",
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
                flexBasis: "94px",
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
                flexBasis: "94px",
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
                flexBasis: "91px",
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
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "5px",
        }}
      >
        PROGRAMAS EN LA MODALIDAD PRESENCIAL OFERTADOS Y NÚMERO DE USUARIOS UNIDADES MÓVILES DE APRENDIZAJE
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
            <Text>NO.</Text>
          </View>
          <View style={styles.tableHeadCell2}>
            <Text>No. UNIDAD MÓVIL DE APRENDIZAJE</Text>
          </View>
          <View style={styles.tableHeadCell5}>
            <Text>UNIDAD ACADÉMICA</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>NOMBRE DEL PROGRAMA ACADÉMICO</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text>TIPO</Text>
          </View>
          <View style={styles.tableHeadCell6}>
            <Text>NO. DE USUARIOS </Text>
          </View>
        </View>
       <View
          style={[styles.tableHead2, { width: "231px", marginLeft: "581px" }]}
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
            Unidad="5"
            UnidadA="CVDR Durango"
            Nombre="MANEJO DE ESTRES LABORAL"
            Tipo="Conferencia"
            Hom="20"
            Muj="14"
            Total="34"
          />
         
            <Row
               No="2"
               Unidad="5"
               UnidadA="CVDR Durango"
               Nombre="TRABAJO EN EQUIPO"
               Tipo="Conferencia"
               Hom="20"
               Muj="14"
               Total="38"
            />
            
            <Row
          
               No="TOTAL"
               Unidad=""
               UnidadA=""
               Nombre=""
               Tipo=""
               Hom="40"
               Muj="32"
               Total="72"
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
      <Text style={styles.texto}>Nota: Se solicita especificar claramente el nombre del programa académico.</Text>
      <br />
      <Firmas />
    </View>
  );
};

const styles = StyleSheet.create({
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
  /*   top: "-1px", */
    height: "10px",
  },
  td: {
    fontSize: "8px",
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
    height: "30px",
    flexDirection: "row",
    borderLeft: "1px solid black", 
   borderTop: "1px solid black", 
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    borderRight:"1px black solid",
    height: "15px",
    flexDirection: "row",
    marginTop: "-14px",
    marginLeft: "32px",
    width: "210px",
  
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
    flexBasis: "50px",
    height: "30px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
    fontSize: "8px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderBottom: "1px solid black",
    flexBasis: "110px",
    textAlign: "center",
    fontSize: "8px",
    padding: "3px 2px 0px 2px",
    height:"30px"
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "182px",
    padding: "3px 18px 0px 18px",
    textAlign: "center",
    fontSize: "8px",
    height:"30px"
  },
  tableHeadCell4: {
    flexBasis: "172px",
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    fontSize: "8px",
    height: "30px",
    textAlign: "center",
    padding: "12px 2px 0px 2px",
  },
  tableHeadCell5: {
    flexBasis: "75px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    fontSize: "8px",
    height: "30px",
    textAlign: "center",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",

    borderBottom: "1px solid black",
    flexBasis: "234px",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell7: {
    flexBasis: "146px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell8: {
    flexBasis: "91px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell9: {
    flexBasis: "85.5px",
    borderBottom: "1px solid black",
    
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
});

export default Table;
