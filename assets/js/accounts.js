document.getElementById("dropdown-button").addEventListener("click", function () {
    var chartContainer = document.getElementById("chart-container");
    
    if (chartContainer.style.display === "none") {
        chartContainer.style.display = "block";
        drawChart();
    } else {
        chartContainer.style.display = "none";
    }
});

function drawChart() {
    var ctx = document.getElementById("chart").getContext("2d");
    
    if (ctx.chartInstance) {
        ctx.chartInstance.destroy(); 
    }
    
    ctx.chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [
                {
                    label: "This Month",
                    data: [13537.47, 90.24], 
                    backgroundColor: ["green", "red"],
                },
            ],
            labels: ["Wallet", "Back Account"]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                tooltip: {
                    enabled: true,
                },
            },
        },
    });
}

function toggleVisibility(amountId, icon) {
    var amountElement = document.getElementById(amountId);
    if (amountElement.style.visibility === "hidden") {
        amountElement.style.visibility = "visible";
        icon.textContent = "visibility";
    } else {
        amountElement.style.visibility = "hidden";
        icon.textContent = "visibility_off";
    }
}

$(document).ready(function () {
    $("#sidebarContainer").load("/pages/sidebar.html");
    $("#floating-buttons").load("/pages/floating.html");
});
