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
                flexBasis: "149.3px",
                textAlign: "left",
                padding:"2px 0px 0px 2px"
              },
            ]}
          >
            {props.Ipn}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "60px",
                textAlign: "right",
              },
            ]}
          >
            {props.No}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "38.2px",
                textAlign: "right",
              },
            ]}
          >
            {props.Hom1}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "39.40px",
                textAlign: "right",
              },
            ]}
          >
            {props.Muj1}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "60px",
                textAlign: "right",
              },
            ]}
          >
            {props.Total1}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "60px",
                textAlign: "right",
              },
            ]}
          >
            {props.No2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "38.3px",
                textAlign: "right",
              },
            ]}
          >
            {props.Hom2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "39.2px",
                textAlign: "right",
              },
            ]}
          >
            {props.Muj2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "59.9px",
                textAlign: "right",
              },
            ]}
          >
            {props.Total2}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "60.1px",
                textAlign: "right",
              },
            ]}
          >
            {props.No3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "38.3px",
                textAlign: "right",
              },
            ]}
          >
            {props.Hom3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "39.2px",
                textAlign: "right",
              },
            ]}
          >
            {props.Muj3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "60px",
                textAlign: "right",
              },
            ]}
          >
            {props.Total3}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "60px",
                textAlign: "right",
              },
            ]}
          >
            {props.No4}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "38.3px",
                textAlign: "right",
              },
            ]}
          >
            {props.Hom4}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "39.2px",
                textAlign: "right",
              },
            ]}
          >
            {props.Muj4}
          </Text>
          <Text
            style={[
              styles.td3,
              {
                flexBasis: "61px",
                textAlign: "right",
              },
            ]}
          >
            {props.Total4}
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
       EVENTOS A DISTANCIA
      </Text>
      <Text
        style={{
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "1px",
        }}
      >
       CONCENTRADO
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
            <Text>IPN</Text>
          </View>
        <View style={styles.tableHead4}>
          <View style={styles.tableHead8}>
          <View style={styles.tableHeadCell2}>
            <Text>CURSOS</Text>
          </View>
          </View>
          <View style={styles.tableHead7}>
          <View style={styles.tableHeadCell13}> 
            <Text>NO.</Text>
          </View>
          <View style={styles.tableHead5}>
            <View style={styles.tableHead6}>
          <View style={styles.tableHeadCell16}>
            <Text>PART.**</Text>
            </View>
          </View>
          <View style={styles.tableHead6}>
              <View style={[
              styles.tableHeadCell14,
              {
                borderRight:"1px black solid"
              },
            ]}><Text>H</Text></View>
              <View style={styles.tableHeadCell14}><Text>H</Text></View>
          </View>
          </View>
          <View style={styles.tableHeadCell13}>
            <Text>TOTAL</Text>
          </View> 
        </View> 
        </View>
        <View style={styles.tableHead4}>
          <View style={styles.tableHead8}>
          <View style={styles.tableHeadCell2}>
            <Text>CURSOS (IDIOMAS)</Text>
          </View>
          </View>
          <View style={styles.tableHead7}>
          <View style={styles.tableHeadCell13}> 
            <Text>NO.</Text>
          </View>
          <View style={styles.tableHead5}>
            <View style={styles.tableHead6}>
          <View style={styles.tableHeadCell16}>
            <Text>PART.**</Text>
            </View>
          </View>
          <View style={styles.tableHead6}>
              <View style={[
              styles.tableHeadCell14,
              {
                borderRight:"1px black solid"
              },
            ]}><Text>H</Text></View>
              <View style={styles.tableHeadCell14}><Text>H</Text></View>
          </View>
          </View>
          <View style={styles.tableHeadCell13}>
            <Text>TOTAL</Text>
          </View> 
        </View> 
        </View>
        <View style={styles.tableHead4}>
          <View style={styles.tableHead8}>
          <View style={styles.tableHeadCell2}>
            <Text>CONFERENCIAS</Text>
          </View>
          </View>
          <View style={styles.tableHead7}>
          <View style={styles.tableHeadCell13}> 
            <Text>NO.</Text>
          </View>
          <View style={styles.tableHead5}>
            <View style={styles.tableHead6}>
          <View style={styles.tableHeadCell16}>
            <Text>PART.**</Text>
            </View>
          </View>
          <View style={styles.tableHead6}>
              <View style={[
              styles.tableHeadCell14,
              {
                borderRight:"1px black solid"
              },
            ]}><Text>H</Text></View>
              <View style={styles.tableHeadCell14}><Text>H</Text></View>
          </View>
          </View>
          <View style={styles.tableHeadCell13}>
            <Text>TOTAL</Text>
          </View> 
        </View> 
        </View>
        <View style={styles.tableHead4}>
          <View style={styles.tableHead8}>
          <View style={styles.tableHeadCell2}>
            <Text>DIPLOMADOS</Text>
          </View>
          </View>
          <View style={styles.tableHead7}>
          <View style={styles.tableHeadCell13}> 
            <Text>NO.</Text>
          </View>
          <View style={styles.tableHead5}>
            <View style={styles.tableHead6}>
          <View style={styles.tableHeadCell16}>
            <Text>PART.**</Text>
            </View>
          </View>
          <View style={styles.tableHead6}>
              <View style={[
              styles.tableHeadCell14,
              {
                borderRight:"1px black solid"
              },
            ]}><Text>H</Text></View>
              <View style={styles.tableHeadCell14}><Text>H</Text></View>
          </View>
          </View>
          <View style={styles.tableHeadCell13}>
            <Text>TOTAL</Text>
          </View> 
        </View> 
        </View>

         {/*  <View style={styles.tableHeadCell3}>
            <Text>CURSOS (IDIOMAS)</Text>
          </View> */}
         {/*  <View style={styles.tableHeadCell4}>
            <Text>CONFERENCIAS</Text>
          </View> */}
        {/*   <View style={styles.tableHeadCell5}>
            <Text>DIPLOMADOS</Text>
          </View> */}
          {/* <View style={styles.tableHeadCell6}>
            <Text>NO. DE USUARIOS </Text>
          </View> */}
        </View>
    {/*  <View
          style={[styles.tableHead2, { marginLeft:"129px",marginTop:"-24px"}]}
        >
          <View style={styles.tableHeadCell8}>
            <Text>NO.*</Text>
          </View>
          <View style={styles.tableHeadCell9}>
              
            <Text>PART.**</Text>
            <View style={styles.tableHead3}>
            <View style={styles.tableHeadCell10}>
            <Text>H</Text>
          </View>
          <View style={styles.tableHeadCell10}>
            <Text>H</Text>
          </View>
            </View>
          </View>
          <View style={styles.tableHeadCell8}>
            <Text>TOTAL</Text>
          </View>

        </View>  */}
 
      
       
      
        {/*   <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
         <Text >REGISTROS ACADÉMICOS</Text>
         </View>
         </View>  */}

        <View style={styles.tableBody}>
          <View style={styles.barra}>
          <Row
            Ipn="TOTAL"
            No="77"
            Hom1="996"
            Muj1="1,026"
            Total1="2,022"
            No2="203"
            Hom2="8,082"
            Muj2="11,564"
            Total2="19,646"
            No3="174"
            Hom3="13,634"
            Muj3="14,482"
            Total3="28,116"
            No4="6"
            Hom4="87"
            Muj4="55"
            Total4="142"
          />
          </View>
            <Row
            Ipn="Nivel Medio Superior"
            No="77"
            Hom1="996"
            Muj1="1,026"
            Total1="2,022"
            No2="203"
            Hom2="8,082"
            Muj2="11,564"
            Total2="19,646"
            No3="174"
            Hom3="13,634"
            Muj3="14,482"
            Total3="28,116"
            No4="6"
            Hom4="87"
            Muj4="55"
            Total4="142"
          />
         <Row
            Ipn="Nivel Medio Superior"
            No="77"
            Hom1="996"
            Muj1="1,026"
            Total1="2,022"
            No2="203"
            Hom2="8,082"
            Muj2="11,564"
            Total2="19,646"
            No3="174"
            Hom3="13,634"
            Muj3="14,482"
            Total3="28,116"
            No4="6"
            Hom4="87"
            Muj4="55"
            Total4="142"
          />
         
         <Row
            Ipn="Nivel Medio Superior"
            No="77"
            Hom1="996"
            Muj1="1,026"
            Total1="2,022"
            No2="203"
            Hom2="8,082"
            Muj2="11,564"
            Total2="19,646"
            No3="174"
            Hom3="13,634"
            Muj3="14,482"
            Total3="28,116"
            No4="6"
            Hom4="87"
            Muj4="55"
            Total4="142"
          />
         
         <Row
            Ipn="Nivel Medio Superior"
            No="77"
            Hom1="996"
            Muj1="1,026"
            Total1="2,022"
            No2="203"
            Hom2="8,082"
            Muj2="11,564"
            Total2="19,646"
            No3="174"
            Hom3="13,634"
            Muj3="14,482"
            Total3="28,116"
            No4="6"
            Hom4="87"
            Muj4="55"
            Total4="142"
          />
         
         <Row
            Ipn="Nivel Medio Superior"
            No="77"
            Hom1="996"
            Muj1="1,026"
            Total1="2,022"
            No2="203"
            Hom2="8,082"
            Muj2="11,564"
            Total2="19,646"
            No3="174"
            Hom3="13,634"
            Muj3="14,482"
            Total3="28,116"
            No4="6"
            Hom4="87"
            Muj4="55"
            Total4="142"
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
    height: "13px",
  },
  td: {
    fontSize: "8px",
    flexGrow: "1",
   padding: "2px 3px 0px 0px", 
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "8px",
    flexGrow: "1",
    padding: "2px 3px 0px 0px", 
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
    height: "40px",
    flexDirection: "row",
    borderLeft: "1px solid black",
    borderRight:"1px solid black" ,
    borderBottom:"1px solid black",
   borderTop: "1px solid black", 
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "25px",
    flexDirection: "row",
   /*  marginTop: "-14px", */
    width: "170.5px",
  
  },
/*   tableHead3: {
    display: "flex",
    alignItems: "flex-start",
    marginTop:"11px",
    flexDirection: "row",
   /*  marginTop: "-14px", 
    width: "70px",
  backgroundColor:"red"
  }, */

/*   tableHead4: {
    display: "flex",
    height: "120px",
    flexDirection: "row",
    width: "220px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "8px",
    marginTop: "-123px",
    textAlign: "center",
  }, */
  /*  tableHeadCell13: {
    marginTop: "30px",
    marginLeft: "5px",
    marginRight: "5px",
    border:"1px solid black"
  }, */

  tableHeadCell1: {
    flexBasis: "150px",
    height: "38px",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
    fontSize: "8px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  barra:{
    backgroundColor:"#cdcdcd"
  },
  tableHead4:{
    flexBasis:"200px",
    flexDirection:"column",
    display:"flex",
    height:"38px",
   borderLeft:"1px black solid",
   borderRight:"hidden",
   borderTop:"hidden",
  },
  tableHeadCell2: {
    borderBottom: "1px solid black",
   
    flexBasis: "200px",
    textAlign: "center",
    fontSize: "8px",
    padding: "3px 2px 0px 2px",
    height:"15px"
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "200px",
    padding: "3px 2px 0px 2px",
    textAlign: "center",
    fontSize: "8px",
    height:"15px"
  },
  tableHeadCell4: {
    flexBasis: "200px",
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    fontSize: "8px",
    height: "15px",
    textAlign: "center",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell5: {
    flexBasis: "200px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "8px",
    height: "15px",
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
    flexBasis: "50.5px",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell9: {
    flexBasis: "70px",
    borderBottom: "1px solid black",
    
    textAlign: "center",
    fontSize: "8px",
    height: "12px",
  },
  tableHeadCell10: {
   width:"35px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "14px",
  },
  tableHeadCell11: {
    flexBasis: "40px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "14px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
  tableHeadCell13: {
    flexBasis: "60px",
    textAlign: "center",
    fontSize: "8px",
    height:"25px",
    padding:"6px 0px 0px 0px"
  },
  tableHeadCell14: {
    flexBasis: "40px",
    textAlign: "center",
    fontSize: "8px",
    height:"12.5px",
  },
  tableHeadCell16: {
    flexBasis: "80px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height:"12.5px",
    padding:"2px 0px 0px 0px"
  },
  tableHead5:{
    flexBasis:"80px",
    flexDirection:"column",
    display:"flex",
    height:"25px",
    borderRight:"1px black solid",
    borderLeft:"1px black solid"

  },
  tableHead6:{
    flexBasis:"80px",
    flexDirection:"row",
    display:"flex",
  /*   border:"1px black solid" */

  },

  
  tableHead7:{
    flexDirection:"row",
    top:"-5px",
    display:"flex",
    flexBasis:"200px",
 
  
  },
  tableHead8:{
    flexDirection:"row",
    display:"flex",
    flexBasis:"200px",
   
     /* backgroundColor:"red", */
  }
});

export default Table;
