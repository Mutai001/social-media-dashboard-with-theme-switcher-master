function darkMode() {
    let checkbox = document.getElementById('check');
    let darkmode = document.getElementById('darkmode');
    if (checkbox.checked) {
        darkmode.style.display = "flex";
    } else {
        darkmode.style.display = "none";
    }
}