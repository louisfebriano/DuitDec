$(document).ready(function () {
    let transactions = [];
    let totalAmount = 0;

    const categoryMap = {
        "💼 Salary": "Salary",
        "🎁 Bonus": "Bonus",
        "💰 Interest": "Interest",
        "🎉 Gifts": "Gifts",
        "📈 Investments": "Investments",
        "🍽️ Food": "Food",
        "🎬 Entertainment": "Entertainment",
        "🛍️ Shopping": "Shopping",
        "⛽ Fuel": "Fuel",
        "🔧 Others": "Others"
    };

    const incomeCategories = Object.keys(categoryMap).filter(key => ["Salary", "Bonus", "Interest", "Gifts", "Investments"].includes(categoryMap[key]));
    const expenseCategories = Object.keys(categoryMap).filter(key => ["Food", "Entertainment", "Shopping", "Fuel", "Others"].includes(categoryMap[key]));

    function populateCategoryOptions(categories, selectElement) {
        selectElement.empty();
        selectElement.append('<option value="">Select Category</option>');
        categories.forEach((category) => {
            selectElement.append(`<option value="${category}">${category}</option>`);
        });
    }

    populateCategoryOptions([...incomeCategories, ...expenseCategories], $("#category-filter"));

    $("#add-income-button").click(function () {
        $("#modal-title").text("Add Income");
        populateCategoryOptions(incomeCategories, $("#transaction-category"));
        $("#add-transaction-modal").show();
        setupTransactionForm(true);
    });

    $("#add-expense-button").click(function () {
        $("#modal-title").text("Add Expense");
        populateCategoryOptions(expenseCategories, $("#transaction-category"));
        $("#add-transaction-modal").show();
        setupTransactionForm(false);
    });

    $(".close").click(function () {
        $("#add-transaction-modal").hide();
    });

    function setupTransactionForm(isIncome) {
        $("#add-transaction-form").off('submit').on('submit', function (event) {
            event.preventDefault();
            addTransaction(isIncome);
        });
    }

    function addTransaction(isIncome) {
        const category = $("#transaction-category").val();
        const amount = parseFloat($("#transaction-amount").val());
        const date = $("#transaction-date").val();
        const notes = $("#transaction-notes").val();

        if (!category || isNaN(amount) || !date) {
            alert("Please fill all required fields.");
            return;
        }

        const standardizedCategory = categoryMap[category] || category;

        const newTransaction = {
            category: standardizedCategory,
            amount,
            date,
            notes,
            type: isIncome ? "income" : "expense"
        };

        transactions.push(newTransaction);
        totalAmount += isIncome ? amount : -amount;

        updateTransactionList();
        $("#add-transaction-form").trigger("reset");
        $("#add-transaction-modal").hide();
    }

    function applyFilters() {
        const categoryFilter = $("#category-filter").val();
        const fromDate = $("#from-date").val();
        const toDate = $("#to-date").val();

        const filteredTransactions = transactions.filter((transaction) => {
            const categoryMatch = !categoryFilter || categoryMap[categoryFilter] === transaction.category;
            const dateMatch = (!fromDate || new Date(transaction.date) >= new Date(fromDate)) &&
                              (!toDate || new Date(transaction.date) <= new Date(toDate));

            return categoryMatch && dateMatch;
        });

        updateTransactionList(filteredTransactions);
    }

    $("#apply-filter-button").click(applyFilters);

    function updateTransactionList(transactionsToShow = transactions) {
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
                        <p>${Object.keys(categoryMap).find(key => categoryMap[key] === transaction.category) || transaction.category}</p>
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
        
        $("#total-amount")
            .text(`${totalAmountToShow < 0 ? '-' : ''} $${Math.abs(totalAmountToShow).toFixed(2)}`)
            .removeClass("positive negative")
            .addClass(totalAmountToShow >= 0 ? "positive" : "negative");
    }
});