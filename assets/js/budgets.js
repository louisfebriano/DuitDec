const modal = document.getElementById('modal');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');


addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
    modal.style.display = 'none';
});



$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
