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
          <Text
            style={[
              styles.td,
              {
                flexBasis: "34px",
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
                flexBasis: "64px",
                textAlign: "center",
              },
            ]}
          >
            {props.Codigo}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "154px",
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
                flexBasis: "52.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Hom1}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "51.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Muj1}
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
            {props.Total}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "50.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Hom2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "51px",
                textAlign: "center",
              },
            ]}
          >
            {props.Muj2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "51px",
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
                flexBasis: "50.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Hom3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "51.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Muj3}
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
            {props.Total3}
          </Text>
          <Text
            style={[
              styles.td2,
              {
                flexBasis: "145px", 
                textAlign: "center",
              },
            ]}
          >
            {props.Unidad}
          </Text>
        </>
      )}
    </View>
  );
};
const Table4 = ({ data }) => {
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
        PERSONAS EVALUADAS Y CERTIFICADAS EN ESTÁNDARES O PROGRAMAS DE
        COMPETENCIAS LABORALES
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
            <Text>ESTÁNDAR DE COMPETENCIA</Text>
          </View>
          <View style={styles.tableHeadCell5}>
            <Text>PERSONAS CAPACITADAS</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>PERSONAS EVALUADAS</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>PERSONAS CERTIFICADAS</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text>UNIDAD RESPONSABLE</Text>
          </View>
        </View>
        <View style={styles.tableHead2}>
          <View style={styles.tableHeadCell6}>
            <Text>CÓDIGO</Text>
          </View>
          <View style={styles.tableHeadCell7}>
            <Text>NOMBRE</Text>
          </View>
        </View>

        <View
          style={[styles.tableHead2, { width: "145px", marginLeft: "241px" }]}
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
        <View
          style={[styles.tableHead2, { width: "145px", marginLeft: "386px" }]}
        >
          <View style={styles.tableHeadCell8}>
            <Text>HOMBRES</Text>
          </View>
          <View style={styles.tableHeadCell8}>
            <Text>MUJERES</Text>
          </View>
          <View style={styles.tableHeadCell8}>
            <Text>TOTAL</Text>
          </View>
        </View>
        <View
          style={[styles.tableHead2, { width: "145px", marginLeft: "530px" }]}
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
            No=""
            Codigo=""
            Nombre=""
            Hom1="0"
            Muj1="0"
            Total="0"
            Hom2="0"
            Muj2="0"
            Total2="0"
            Hom3="0"
            Muj3="0"
            Total3="0"
            Unidad=""
          />
          <View style={styles.barra}>
            <Row
              No=""
              Codigo=""
              Nombre="TOTAL"
              Hom1="0"
              Muj1="0"
              Total="0"
              Hom2="0"
              Muj2="0"
              Total2="0"
              Hom3="0"
              Muj3="0"
              Total3="0"
              Unidad=""
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
  barra: {
      display: "flex",
      flexDirection: "row",
      alignItems:"stretch",
      flexWrap: "nowrap",
      width:"812px",
      top:"-1px",
      height:"25px",
      borderBottom: "1px solid #d3d3d3",
      backgroundColor:"#cdcdcd"
    },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    top: "-1px",
    height: "25px",
  },
  td: {
    fontSize: "6px",
    flexGrow: "1",
    padding: "3px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
  },
  td2: {
    fontSize: "6px",
    flexGrow: "1",
    padding: "3px",
    borderBottom:"1px solid black",
    borderRight:"1px solid black",
    borderLeft:"1px solid black",
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
    height: "36px",
    flexDirection: "row",
    border:"1px solid black"
 
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "18px",
    flexDirection: "row",
    marginTop: "-18px",
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
    flexBasis: "40px",
    height: "35px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderBottom:"1px solid black",
    flexBasis: "258.5px",
    textAlign: "center",
    fontSize: "8px",
    lineHeight: "2px",
  },
  tableHeadCell3: {
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    flexBasis: "180px",
    height: "17px",
    textAlign: "center",
    fontSize: "8px",
  },
  tableHeadCell4: {
    flexBasis: "170px",
    borderBottom:"1px solid black",
    fontSize: "8px",
    height: "35px",
    textAlign: "center",
    lineHeight: "2px",
  },
  tableHeadCell5: {
    flexBasis: "184px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    fontSize: "8px",
    height: "17px",
    textAlign: "center",
  },
  tableHeadCell6: {
    borderRight:"1px solid black",
    borderLeft:"1px solid black",
    borderBottom:"1px solid black",
    flexBasis: "62px",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
  },
  tableHeadCell7: {
    flexBasis: "147px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
    lineHeight: "2px",
  },
  tableHeadCell8: {
    flexBasis: "90px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
  },
  tableHeadCell9: {
    flexBasis: "85px",
    borderBottom:"1px solid black",
    borderRight:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
});

export default Table4;
