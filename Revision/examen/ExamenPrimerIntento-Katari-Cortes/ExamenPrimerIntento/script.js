document.addEventListener("DOMContentLoaded", function (){
    
    document.getElementById("button2").addEventListener("click", function(){
        alert("¡Gracias por donar a AdoptaTuÁrbol!");
    });

    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) =>{
        button.addEventListener("click", function (){
            this.classList.toggle("cambio");
            if (this.classList.contains("cambio")) {
                this.innerText = "Adoptado";
            } else {
                this.innerText = "Adoptar";
            }
        });
    });

    document.getElementById('TiposArboles').addEventListener('change', function() {
        const selectedValue = this.options[this.selectedIndex].text;
        document.getElementById('Cambiotext').textContent = selectedValue;
    });
    
});