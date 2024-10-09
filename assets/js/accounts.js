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