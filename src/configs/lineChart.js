export const options = {
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
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
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
  }
};
