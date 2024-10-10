document.getElementById("dropdown-button").addEventListener("click", function () {
    var chartContainer = document.getElementById("chart-container");

    if (chartContainer.style.display === "none") {
        chartContainer.style.display = "block";
        drawChart();
    } else {
        chartContainer.style.display = "none";
    }
});

document.getElementById("add-wallet").addEventListener("click", function () {
    $("#wallet-modal").show();
});

document.querySelector(".close-button").addEventListener("click", function () {
    $("#wallet-modal").hide();
});

document.getElementById("wallet-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var walletName = document.getElementById("wallet-name").value;
    var walletAmount = parseFloat(document.getElementById("wallet-amount").value).toFixed(2);

    var randomColor = getRandomColor();


    var cardHtml = `
        <div class="card-acc" data-amount="${walletAmount}" data-color="${randomColor}">
            <div class="acc-title">
                <p>${walletName}</p>
                <p class="amount" style="color: #3dbd2e;">$${walletAmount}</p>
            </div>
            <div class="acc-content">
                <div class="account-options">
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-account" checked>
                        <span class="slider"></span>
                    </label>
                    <span class="material-symbols-outlined" style="cursor: pointer;" 
                          onclick="toggleVisibility('wallet-amount', this)">
                        visibility
                    </span>
                    <span class="material-symbols-outlined" style="cursor: pointer; color: red;" 
                          onclick="deleteCard(this)">
                        delete
                    </span>
                </div>
            </div>
        </div>`;

    // Append the new card to account cards section
    $(".account-cards").append(cardHtml);

    // Hide the modal and reset the form
    $("#wallet-modal").hide();
    document.getElementById("wallet-form").reset();

    // Update total amount and redraw the chart
    updateTotalAmount();
    drawChart();
});

function drawChart() {
    var ctx = document.getElementById("chart").getContext("2d");

    if (ctx.chartInstance) {
        ctx.chartInstance.destroy();
    }

    var chartData = [];
    var chartLabels = [];
    var chartColors = [];

    $(".card-acc").each(function () {
        var amount = parseFloat($(this).attr("data-amount"));
        var label = $(this).find('.acc-title p').first().text();
        var toggle = $(this).find(".toggle-account").prop("checked");
        chartColors.push("red")
        chartColors.push("green")
        chartColors.push("yellow");
        chartColors.push("blue");
        chartColors.push("Brown");
        chartColors.push("Pink");
        chartColors.push("Orange");
        chartColors.push("purple");
        if (toggle) {
            chartData.push(amount);
            chartLabels.push(label);
            // chartColors.push($(this).data("color"));
        }
    });

    ctx.chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                label: "This Month",
                data: chartData,
                backgroundColor: chartColors,
            }],
            labels: chartLabels
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

function getRandomColor() {
    const colors = [
        "#0000FF", 
        "#FFFF00", 
        "#FFA500", 
        "#800080", 
        "#FFC0CB", 
        "#A52A2A", 
        "#808080", 
        "#FFD700",
        "#00FFFF",
        "#000000" 
    ];

    return colors[Math.floor(Math.random() * colors.length)];
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

function deleteCard(icon) {
    $(icon).closest(".card-acc").remove();
    updateTotalAmount(); 
    drawChart(); 
}

$(document).ready(function () {
    $("#sidebarContainer").load("/pages/sidebar.html");

    updateTotalAmount();

    $(".toggle-account").on("change", function () {
        updateTotalAmount();
        drawChart(); 
    });
});

function updateTotalAmount() {
    var total = 0;

    $(".card-acc").each(function () {
        var amount = parseFloat($(this).attr("data-amount"));
        var toggle = $(this).find(".toggle-account").prop("checked");

        if (toggle) {
            total += amount;
        }
    });

    $("#total-amount").text("$" + total.toFixed(2));
}
