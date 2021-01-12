<template>
  <VueApexCharts
    type="line"
    height="350"
    :options="resource.chartOptions"
    :series="resource.series"
  ></VueApexCharts>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "LineChart",
  components: {
    VueApexCharts
  },
  computed: {
    resource() {
      const datasets = [];
      const labelsX = [];
      const data = this.sortExpenses();
      data.forEach(item => {
        datasets.push(Number(item.price));
        labelsX.push(item.date);
      });

      return {
        series: [
          {
            name: "Price",
            data: datasets
          }
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight"
          },
          xaxis: {
            type: "datetime",
            categories: labelsX,
            tickAmount: 10,
            labels: {
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), "dd MMM");
              }
            }
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["#FDD835"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            }
          },
          markers: {
            size: 4,
            colors: ["#FFA41B"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
              size: 7
            }
          },
          yaxis: {
            min: 0,
            title: {
              text: "price"
            }
          }
        }
      };
    }
  },
  methods: {
    sortExpenses() {
      const expenses = this.$store.getters.getExpenses;
      return expenses.sort((a, b) => (a.date > b.date ? 1 : -1));
    }
  }
};
</script>
