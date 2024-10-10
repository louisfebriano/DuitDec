$(document).ready(function () {
    let transactions = [];
    let totalAmount = 0;

    const incomeCategories = ["💼 Salary", "🎁 Bonus", "💰 Interest", "🎉 Gifts", "📈 Investments"];
    const expenseCategories = ["🍽️ Food", "🎬 Entertainment", "🛍️ Shopping", "⛽ Fuel", "🔧 Others"];


    function populateCategoryOptions(categories) {
        const $categorySelect = $("#transaction-category");
        $categorySelect.empty();
        $categorySelect.append('<option value="">Select Category</option>');
        categories.forEach((category) => {
            $categorySelect.append(`<option value="${category}">${category}</option>`);
        });
    }

    $("#add-income-button").click(function () {
        $("#modal-title").text("Add Income");
        populateCategoryOptions(incomeCategories);
        $("#add-transaction-modal").show();
        $("#add-transaction-form").off('submit').on('submit', function (event) {
            event.preventDefault();
            addTransaction(true);
        });
    });

    $("#add-expense-button").click(function () {
        $("#modal-title").text("Add Expense");
        populateCategoryOptions(expenseCategories);
        $("#add-transaction-modal").show();
        $("#add-transaction-form").off('submit').on('submit', function (event) {
            event.preventDefault();
            addTransaction(false); 
        });
    });

    $(".close").click(function () {
        $("#add-transaction-modal").hide();
    });

    function addTransaction(isIncome) {
        const category = $("#transaction-category").val();
        const amount = parseFloat($("#transaction-amount").val());
        const date = $("#transaction-date").val();
        const notes = $("#transaction-notes").val();

        if (!category || isNaN(amount) || !date) {
            alert("Please fill all required fields.");
            return;
        }

        if (isIncome) {
            transactions.push({ category, amount, date, notes, type: "income" });
            totalAmount += amount;
        } else {
            transactions.push({ category, amount, date, notes, type: "expense" });
            totalAmount -= amount;
        }

        updateTransactionList(transactions);
        $("#add-transaction-form").trigger("reset");
        $("#add-transaction-modal").hide();
    }

    function applyFilters() {
        const categoryFilter = $("#category-filter").val();
        const fromDate = $("#from-date").val();
        const toDate = $("#to-date").val();

        const filteredTransactions = transactions.filter((transaction) => {
            let matchesCategory = !categoryFilter || transaction.category === categoryFilter;
            let matchesDate =
                (!fromDate || new Date(transaction.date) >= new Date(fromDate)) &&
                (!toDate || new Date(transaction.date) <= new Date(toDate));

            return matchesCategory && matchesDate;
        });

        updateTransactionList(filteredTransactions);
    }


    $("#apply-filter-button").click(function () {
        applyFilters();
    });

    function updateTransactionList(transactionsToShow) {
        const $list = $("#transactions-list");
        $list.empty();

        transactionsToShow.forEach((transaction) => {
            const icon = transaction.type === "income" ? "+" : "-";
            const amountClass = transaction.type === "income" ? "positive" : "negative";
            const iconClass = transaction.type === "income" ? "icon-positive" : "icon-negative"; 
            
            const $item = $(`
                <div class="transaction-item ${amountClass}">
                    <div class="transaction-icon ${iconClass}">${icon}</div>
                    <div class="transaction-details">
                        <p>${transaction.category}</p>
                        <p>${transaction.notes}</p>
                    </div>
                    <div class="transaction-right">
                        <div class="amount ${amountClass}">
                            ${transaction.type === "income" ? `$${transaction.amount.toFixed(2)}` : `-$${transaction.amount.toFixed(2)}`}
                        </div>
                        <div class="date">${transaction.date}</div>
                    </div>
                </div>
            `);
            $list.append($item);
        });

        const totalAmountToShow = transactionsToShow.reduce((acc, transaction) => {
            return transaction.type === "income" ? acc + transaction.amount : acc - transaction.amount;
        }, 0);
        $("#total-amount").text(`${totalAmountToShow < 0 ? '-' : ''} $${Math.abs(totalAmountToShow).toFixed(2)}`);
    }
});
