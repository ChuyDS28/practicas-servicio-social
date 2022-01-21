import React from "react";
import Header from "./Header";
import Table from "./Table";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import Table5 from "./Table5";
import Table6 from "./Table6";
import Firmas from "./Firmas";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Firmas2 from "./Firmas2";

const styles = StyleSheet.create({
  body: {
    padding: "15px",
    paddingBottom: 65,
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
const RegistrosAcademicos = (props) => {
  return (
    <Document>
      {/* <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table data={[]} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table6 data={[]} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>

      <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table2 data={[]} />

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page> */}
       <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table3 data={[]} />

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table4 data={[]} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table5 data={[]} />
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

export default RegistrosAcademicos;
