$(document).ready(function () {
    const addButton = $('#addButton');
    const minButton = $('#subtractButton');
    const cancelButton = $('#cancelButton');
    const modal = $('#modal');
    const modalTitle = $('#modal-title');
    const saveButton = $('#saveButton');
    const budgetsContainer = $('.budgets-container');

    addButton.on('click', function () {
        modalTitle.text('Add New Credit'); // Change title for Credit
        modal.show();
    });

    minButton.on('click', function () {
        modalTitle.text('Add New Debt'); // Change title for Debt
        modal.show();
    });

    cancelButton.on('click', function () {
        modal.hide();
    });

    // Handle form submission
    $('#debtCreditForm').on('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way
        
        const person = $('#person').val();
        const amount = $('#amount').val();
        const dateStart = $('#dateStart').val();
        const dateEnd = $('#dateEnd').val();
        const notes = $('#notes').val();
        const transactionType = modalTitle.text() === 'Add New Credit' ? 'credit' : 'debt';
        
        // Create the new card based on transaction type
        const newCard = `
            <div class="budget-card">
                <div class="budget-header">
                    <span class="material-symbols-outlined budget-icon">${transactionType === 'credit' ? 'credit_card' : 'account_balance'}</span>
                    ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}: ${person} ➔ You
                    <span class="date-range">${dateStart} - ${dateEnd}</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: 0%;"></div>
                </div>
                <div class="amount-edit-row">
                    <div class="amount">$${amount} / $${amount}</div>
                    <div class="actions">
                        <button class="edit-btn">
                            <span class="material-symbols-outlined">edit</span> Edit
                        </button>
                    </div>
                </div>
                <div class="residual">Residual amount: $${amount}</div>
            </div>
        `;

        budgetsContainer.append(newCard); // Add the new card to the container
        modal.hide(); // Hide the modal after saving
        $('#debtCreditForm')[0].reset(); // Reset the form fields
    });
});



$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
