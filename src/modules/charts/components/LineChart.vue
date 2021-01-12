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
import { options } from "@/configs/lineChart";

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
          yaxis: {
            min: 0,
            title: {
              text: "price"
            }
          },
          ...options
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
