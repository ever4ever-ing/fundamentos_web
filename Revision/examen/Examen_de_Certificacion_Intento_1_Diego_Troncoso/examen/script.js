const mainbtns = (element) => {
    if (element.innerText === "Adoptado") {
        element.style.backgroundColor = "#a3c993";
        element.innerText = "Adoptar";
    } else {
        element.style.backgroundColor = "#254512";
        element.innerText = "Adoptado";
}};



document.getElementById("donarbtn").addEventListener("click", function() {
alert("¡Gracias por donar a AdoptaTuÁrbol");
});

document.getElementById("adoptarbtn1").addEventListener("click", function() {
    mainbtns(this);
});

document.getElementById("adoptarbtn2").addEventListener("click", function() {
    mainbtns(this);
});

document.getElementById("adoptarbtn3").addEventListener("click", function() {
    mainbtns(this);
});

document.getElementById("adoptarbtn4").addEventListener("click", function() {
    mainbtns(this);
});
