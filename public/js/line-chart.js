const lineChart = (labelsDate) => {
  var ctx = document.getElementById("myChart").getContext('2d');
  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labelsDate,
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
}