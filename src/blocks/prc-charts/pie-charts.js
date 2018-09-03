import Chart from 'chart.js';

Chart.defaults.global.legend.display = false;

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Grey", "Red", "Green", "Light_grey"],
    datasets: [{
      data: [5, 12, 12, 15],
      backgroundColor: [
        '#747474',
        '#e75735',
        '#4eb7a8',
        '#e5e5e5'
      ],
      borderColor: [
        '#747474',
        '#e75735',
        '#4eb7a8',
        '#e5e5e5'
      ],
      borderWidth: 1
    }]
  },
  options: {
    cutoutPercentage: 60,
    responsive: true,
    responsiveAnimationDuration: 1000
  }
});

export { myChart };
