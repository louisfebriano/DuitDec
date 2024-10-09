


function updateProgressBar(percent) {
    var progressBar = $("#myProgressBar");
    progressBar.css("width", percent + "%");
    progressBar.text(percent + "%");
}
updateProgressBar(19);

$(document).ready(function() {
    $('#sidebarContainer').load('/pages/sidebar.html');
    $('#floating-buttons').load('/pages/floating.html');
});
