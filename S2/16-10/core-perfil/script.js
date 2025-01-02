document.addEventListener("DOMContentLoaded", function() { 
    // Elementos del DOM
    const editarProfile = document.querySelectorAll(".edit-profile");// elementos del DOM para editar perfil
    const namePerfil = document.getElementById("namePerfil");//elemento del DOM para nombre de perfil
    const acceptButtons = document.querySelectorAll('.accept-btn'); //elementos del DOM para botones de aceptar
    let totalSoli = document.querySelectorAll('.connection-item').length; //conteo total de elementos de solicitudes
    let soliConnect = document.getElementById('soli-connect'); //texto para modificar total de solicitudes
    let conex = document.getElementById('total-connect'); //texto para modificar total de conexiones
    let totalConex = 500;

    // Imprimir total inicial de conexiones
    console.log('Total conexiones inicial:', totalSoli);
    soliConnect.innerText = totalSoli;

    // Event listener para editar perfil
    editarProfile.forEach(function(editButton) {
        editButton.addEventListener("click", function() {
            namePerfil.innerHTML = 'Anglo American <i class="fa-solid fa-user-tie"></i>';
        });
    });

    // Event listener para botones de aceptar
    acceptButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const connectionItem = this.closest('.connection-item'); //obtener el elemento padre más cercano con la clase connection-item
            
            if (connectionItem) { //si existe el elemento
                connectionItem.remove(); //remover el elemento
                totalSoli--; //disminuir el total de solicitudes
                totalConex++; //aumentar el total de conexiones
                soliConnect.innerText = totalSoli; //actualizar el elemento de texto de total de solicitudes
                conex.innerText = totalConex; //actualizar el elemento de texto de total de conexiones
                console.log('Conexiones restantes:', totalSoli);
            }
        });
    });
});