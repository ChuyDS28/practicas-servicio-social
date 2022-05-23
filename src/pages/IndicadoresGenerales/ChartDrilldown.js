import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
import HC_exporting from "highcharts/modules/exporting";
const ChartDrilldown = (props) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: props.title,
    },
    subtitle: {
      text: props.subtitle,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Totales",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "Total: {point.y}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name} </span><br>',
      pointFormat: `<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> ${props.title}<br/>`,
    },

    series: [
      {
        name: "Año",
        colorByPoint: true,
        data: props.data,
      },
    ],
    drilldown: {
      series: props.series,
    },
    credits: {
      enabled: false,
    },
  };
  drilldown(Highcharts);
  HC_exporting(Highcharts);
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartDrilldown;
