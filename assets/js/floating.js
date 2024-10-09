
const modal = document.getElementById('modal');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const cancelButton = document.getElementById('cancelButton');


addButton.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById('modal-title').textContent = "NEW INCOME";
});

subtractButton.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById('modal-title').textContent = "NEW EXPENSE";
});

cancelButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
