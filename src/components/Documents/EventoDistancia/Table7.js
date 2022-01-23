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
                   padding: "2px 0px 0px 2px",
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
   const Table7 = ({ data }) => {
     return (
       <View break>
      <Text
        style={{
          fontSize: "7px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "-1px",
        }}
      >
       EVENTOS A DISTANCIA
      </Text>
      <Text
        style={{
          fontSize: "7px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "1px",
        }}
      >
       NIVEL POSGRADO
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
               <Text>UNIDAD</Text>
               <Text>ACADÉMICA</Text>
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
                     <View
                       style={[
                         styles.tableHeadCell14,
                         {
                           borderRight: "1px black solid",
                         },
                       ]}
                     >
                       <Text>H</Text>
                     </View>
                     <View style={styles.tableHeadCell14}>
                       <Text>H</Text>
                     </View>
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
                     <View
                       style={[
                         styles.tableHeadCell14,
                         {
                           borderRight: "1px black solid",
                         },
                       ]}
                     >
                       <Text>H</Text>
                     </View>
                     <View style={styles.tableHeadCell14}>
                       <Text>H</Text>
                     </View>
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
                     <View
                       style={[
                         styles.tableHeadCell14,
                         {
                           borderRight: "1px black solid",
                         },
                       ]}
                     >
                       <Text>H</Text>
                     </View>
                     <View style={styles.tableHeadCell14}>
                       <Text>H</Text>
                     </View>
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
                     <View
                       style={[
                         styles.tableHeadCell14,
                         {
                           borderRight: "1px black solid",
                         },
                       ]}
                     >
                       <Text>H</Text>
                     </View>
                     <View style={styles.tableHeadCell14}>
                       <Text>H</Text>
                     </View>
                   </View>
                 </View>
                 <View style={styles.tableHeadCell13}>
                   <Text>TOTAL</Text>
                 </View>
               </View>
             </View>
           </View>
   
           <View style={styles.tableBody}>
           <View style={styles.barra2}>
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
          <View style={styles.barra}>
            <Row
            Ipn="RAMA ICFM"
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
            Ipn="ESIME ZAC"
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
            Ipn="ESIME CUL"
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
            Ipn="ESIME AZC"
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
            Ipn="ESIME TIC"
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
            Ipn="ESIME ZAT"
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
            Ipn="ESIME TEC"
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
            Ipn="ESIA TIC"
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
            Ipn="ESIT"
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
            Ipn="ESIQIE"
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
            Ipn="ESFM"
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
            Ipn="ESCOM"
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
          
          <View style={styles.barra}>
         <Row
            Ipn="RAMA CMB"
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
            Ipn="ENMH"
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
            Ipn="ENCB"
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
            Ipn="ESM"
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
            Ipn="ESEO"
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
            Ipn="CICS MA"
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
            Ipn="CICS ST"
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
         <View style={styles.barra}>
         <Row
            Ipn="RAMA CSA"
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
            Ipn="ESCA ST"
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
            Ipn="ESCA TEP"
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
            Ipn="ESE"
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
            Ipn="EST"
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
            Ipn="ENBA"
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
 
<View style={styles.barra}>
 <Row
            Ipn="RAMA INTER"
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
            Ipn="UPIICSA"
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
            Ipn="UPIBI"
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
            Ipn="UPIITA"
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
            Ipn="UPIIG"
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
            Ipn="UPIIZ"
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
            Ipn="UPIIH"
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
            Ipn="UPIIC"
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
            Ipn="UPIIP"
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
            Ipn="UPIEM"
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




 <Text style={styles.texto}>
            Nota: Especificar OTROS
                    </Text>
             <Text style={[
                 styles.texto,
                 {
                   marginLeft: "20px",
                 },
               ]}>
               *Reportar los eventos concluidos durante el período 
             </Text>
             <Text style={[
                 styles.texto,
                 {
                   marginLeft: "20px",
                 },
               ]}>**Reportar los participantes que concluyeron y que son acreedores a
               constancia o diploma</Text>
           </View>
         </View>
         <View style={styles.firmas}>
         <Firmas/>
         </View>
       </View>
     );
   };
   
   const styles = StyleSheet.create({
     table:{
      marginBottom:"10px"
    },
    firmas:{
      top:"-25px"
    },
   
     texto: {
       display: "flex",
       top:"2px",
       fontSize: "6px",
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
     },
     td: {
       fontSize: "5px",
       flexGrow: "1",
       padding: "2px 3px 0px 0px",
       borderBottom: "1px solid black",
       borderLeft: "1px solid black",
     },
     td3: {
       fontSize: "5px",
       flexGrow: "1",
       padding: "2px 3px 0px 0px",
       borderBottom: "1px solid black",
       borderRight: "1px solid black",
       borderLeft: "1px solid black",
     },
     td2: {
       fontSize: "5px",
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
       height: "27px",
       flexDirection: "row",
       borderLeft: "1px solid black",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
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

     tableHeadCell1: {
       flexBasis: "150px",
       height: "27px",
       textAlign: "center",
       padding: "10px 2px 0px 2px",
       fontSize: "6px",
     },
     barra: {
       backgroundColor: "#cdcdcd",
     },
     tableHead4: {
       flexBasis: "200px",
       flexDirection: "column",
       display: "flex",
       height: "26px",
       borderLeft: "1px black solid",
       borderRight: "hidden",
       borderTop: "hidden",
     },
     tableHeadCell2: {
       borderBottom: "1px solid black",
   
       flexBasis: "200px",
       textAlign: "center",
       fontSize: "6px",
       padding: "1px 2px 0px 2px",
       height: "9px",
     },
     tableHeadCell3: {
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       flexBasis: "200px",
       padding: "3px 2px 0px 2px",
       textAlign: "center",
       fontSize: "6px",
       height: "15px",
     },
     tableHeadCell4: {
       flexBasis: "200px",
       borderBottom: "1px solid black",
       borderRight: "1px solid black",
       fontSize: "6px",
       height: "15px",
       textAlign: "center",
       padding: "3px 2px 0px 2px",
     },
     tableHeadCell5: {
       flexBasis: "200px",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       fontSize: "6px",
       height: "15px",
       textAlign: "center",
       padding: "3px 2px 0px 2px",
     },
     tableHeadCell6: {
       borderRight: "1px solid black",
   
       borderBottom: "1px solid black",
       flexBasis: "234px",
       textAlign: "center",
       fontSize: "6px",
       height: "9px",
       padding: "3px 2px 0px 2px",
     },
     tableHeadCell7: {
       flexBasis: "146px",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       textAlign: "center",
       fontSize: "6px",
       height: "9px",
       padding: "3px 2px 0px 2px",
     },
     tableHeadCell8: {
       flexBasis: "50.5px",
       borderLeft: "1px solid black",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       textAlign: "center",
       fontSize: "6px",
       height: "25px",
       padding: "3px 2px 0px 2px",
     },
     tableHeadCell9: {
       flexBasis: "70px",
       borderBottom: "1px solid black",
   
       textAlign: "center",
       fontSize: "6px",
       height: "12px",
     },
     tableHeadCell10: {
       width: "35px",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       textAlign: "center",
       fontSize: "6px",
       height: "14px",
     },
     tableHeadCell11: {
       flexBasis: "40px",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       textAlign: "center",
       fontSize: "6px",
       height: "14px",
     },
     tableHeadCell12: {
       flexBasis: "200px",
       margin: "1px",
       borderRight: "1px solid black",
       borderBottom: "1px solid black",
       textAlign: "center",
       fontSize: "6px",
     },
     tableHeadCell13: {
       flexBasis: "60px",
       textAlign: "center",
       fontSize: "6px",
       height: "18px",
       padding: "6px 0px 0px 0px",
     },
     tableHeadCell14: {
       flexBasis: "40px",
       textAlign: "center",
       fontSize: "6px",
       height: "9px",
     },
     tableHeadCell16: {
       flexBasis: "80px",
       borderBottom: "1px solid black",
       textAlign: "center",
       fontSize: "6px",
       height: "9px",
       padding: "1px 0px 0px 0px",
     },
     tableHead5: {
       flexBasis: "80px",
       top:"3px", 
       flexDirection: "column",
       display: "flex",
       height: "18px",
       borderRight: "1px black solid",
       borderLeft: "1px black solid",
     },
     tableHead6: {
       flexBasis: "80px",
       flexDirection: "row",
       display: "flex",
       /*   border:"1px black solid" */
     },
   
     tableHead7: {
       flexDirection: "row",
       top: "-8px",
       display: "flex",
       flexBasis: "200px",
     },
     tableHead8: {
       flexDirection: "row",
       display: "flex",
       flexBasis: "200px",
   
       /* backgroundColor:"red", */
     },
   });
   
   export default Table7;
   