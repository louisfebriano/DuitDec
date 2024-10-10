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


const editModal = document.getElementById('editModal');
const closeEditModal = document.getElementById('closeEditModal');
let currentEditElement = null;

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-btn')) {
        editModal.style.display = 'block';

        currentEditElement = event.target.closest('.category');

        const category = currentEditElement.querySelector('.category-title').textContent.toLowerCase();
        const value = currentEditElement.querySelector('.amount').textContent.match(/\$([\d\.]+)/g)[1].replace('$', '');
        const account = currentEditElement.closest('.budget-card').textContent.includes('MONTHLY') ? 'wallet' : 'bank';

        document.getElementById('editValue').value = value;
        document.getElementById('editCategory').value = category;
        document.getElementById('editAccount').value = account;
    }
});

closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none';
});

document.getElementById('editForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const newValue = parseFloat(document.getElementById('editValue').value);
    const newCategory = document.getElementById('editCategory').value;
    const newAccount = document.getElementById('editAccount').value;

    const usedValue = parseFloat(currentEditElement.querySelector('.amount').textContent.match(/\$([\d\.]+)/)[0].replace('$', ''));

    const newPercentage = ((usedValue / newValue) * 100).toFixed(0);

    currentEditElement.querySelector('.category-title').textContent = newCategory.charAt(0).toUpperCase() + newCategory.slice(1);
    currentEditElement.querySelector('.amount').innerHTML = `$${usedValue.toFixed(2)} / $${newValue.toFixed(2)} <span class="percentage">(${newPercentage}%)</span>`;
    currentEditElement.querySelector('.residual').textContent = `Residual amount: $${(newValue - usedValue).toFixed(2)}`;

    currentEditElement.querySelector('.progress-bar').style.width = `${newPercentage}%`;

    if (newAccount === 'wallet' && !currentEditElement.closest('.budget-card').textContent.includes('MONTHLY')) {
        document.querySelector('.budget-card:contains("MONTHLY BUDGETS")').append(currentEditElement);
    } else if (newAccount === 'bank' && !currentEditElement.closest('.budget-card').textContent.includes('WEEKLY')) {
        document.querySelector('.budget-card:contains("WEEKLY BUDGETS")').append(currentEditElement);
    }

    editModal.style.display = 'none';
});

document.getElementById('deleteBudget').addEventListener('click', function () {
    currentEditElement.remove();
    
    editModal.style.display = 'none';
});


$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
