

function toggleVisibility(amountId, icon) {
    var amountElement = document.getElementById(amountId);
    if (amountElement.style.visibility === "hidden") {
        amountElement.style.visibility = "visible";
        icon.textContent = 'visibility'; 
    } else {
        amountElement.style.visibility = "hidden";
        icon.textContent = 'visibility_off'; 
    }
}

$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});