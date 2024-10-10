const modal = document.getElementById('modal');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');
const form = document.getElementById('Form');

addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const value = document.getElementById('value').value;
    const category = document.getElementById('category').value;
    const period = document.getElementById('period').value;
    const date = document.getElementById('date').value;

    const progressPercentage = 0; 
    const residual = value; 

    const newBudget = `
        <div class="category">
            <span class="material-symbols-outlined icon">category</span>
            <div class="details">
                <div class="category-title">${category}</div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${progressPercentage}%;"></div>
                </div>
                <div class="amount-edit">
                    <div class="amount">$0.00 / $${value} <span class="percentage">(${progressPercentage}%)</span></div>
                    <button class="edit-btn">Edit</button>
                </div>
                <div class="residual">Residual amount: $${residual}</div>
            </div>
        </div>
    `;

    if (period === 'wallet') {
        $('.budget-card:contains("MONTHLY BUDGETS")').append(newBudget);
    } else { 
        $('.budget-card:contains("WEEKLY BUDGETS")').append(newBudget);
    }

    modal.style.display = 'none';

    form.reset();
});


$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
