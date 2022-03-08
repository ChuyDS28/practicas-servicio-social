import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Table from "./Table"
import Table2 from "./Table2"
import Header from "../Header";
const styles = StyleSheet.create({
    body: {
      padding: "15px",
      paddingBottom: 64,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
    firma: {},
  });
  const Container = (props) => {
    return (
      <Document>
        <Page size="A4" style={styles.body} orientation="landscape" >
          <Header />
          <Table data={[]} />
          <Table2 data={[]} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
     
      </Document>
    );
  };
  
  export default Container;
  