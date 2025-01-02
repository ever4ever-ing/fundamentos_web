document.addEventListener("DOMContentLoaded", function () {
    var modoBtn = document.getElementById("modoBtn");
    modoBtn.addEventListener("click", toggleModo);
});

function toggleModo() {
    var body = document.body;

    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modoBtn.innerText = "Modo Claro";
    } else {
        modoBtn.innerText = "Modo Oscuro";
    }
}