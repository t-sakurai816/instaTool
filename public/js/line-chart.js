const ctx = document.getElementById("myChart").getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
    datasets: [
      {
        label: 'フォロワー数',
        data: [3500, 3400, 3400, 3500, 3600, 3887, 3879, 4002],
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});