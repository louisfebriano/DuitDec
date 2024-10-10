
function updateProgressBar(percent) {
    var progressBar = $("#myProgressBar");
    progressBar.css("width", percent + "%");
    progressBar.text(percent + "%");
}
updateProgressBar(19);
// Get the canvas element
const chartThisMonthCanvas = document.getElementById('chart-this-month');

// Create a new Chart instance
const chartThisMonth = new Chart(chartThisMonthCanvas, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'This Month',
      data: [1500, 396.76],
      backgroundColor: [
        'green',
        'red'
      ],
    }]
  },
  options: {
    title: {
      display: true,
      text: 'This Month'
    },    
  }
});

const chartLastMonthCanvas = document.getElementById('chart-last-month');

const chartLastMonth = new Chart(chartLastMonthCanvas, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Last Month',
      data: [1500, 396.76],
      backgroundColor: [
        'green',
        'red'
    ],
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Last Month'
    }
  }
});
$(document).ready(function() {
    
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
