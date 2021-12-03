import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import Header from "./Header";
import Table from "./Table";

const ServiciosExtracurricularesRegistrados = (props) => {
  return (
    <Document>
      {props.data && (
        <Page style={styles.body} orientation="landscape">
          <Header />
          <Table data={props.data} />

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
    </Document>
  );
};

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
});
export default ServiciosExtracurricularesRegistrados;
