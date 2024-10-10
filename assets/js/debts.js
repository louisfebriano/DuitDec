$(document).ready(function () {
    const addButton = $('#addButton');
    const minButton = $('#subtractButton');
    const cancelButton = $('#cancelButton');
    const modal = $('#modal');
    const modalTitle = $('#modal-title');
    const saveButton = $('#saveButton');
    const budgetsContainer = $('.budgets-container');

    addButton.on('click', function () {
        modalTitle.text('Add New Credit'); 
        modal.show();
    });

    minButton.on('click', function () {
        modalTitle.text('Add New Debt'); 
        modal.show();
    });

    cancelButton.on('click', function () {
        modal.hide();
    });

    $('#debtCreditForm').on('submit', function (e) {
        e.preventDefault(); 
        
        const person = $('#person').val();
        const amount = $('#amount').val();
        const dateStart = $('#dateStart').val();
        const dateEnd = $('#dateEnd').val();
        const notes = $('#notes').val();
        const transactionType = modalTitle.text() === 'Add New Credit' ? 'credit' : 'debt';
        
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

        budgetsContainer.append(newCard); 
        modal.hide(); 
        $('#debtCreditForm')[0].reset(); 
    });
});



$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
