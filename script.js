function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todos los contenidos de las pestañas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Quitar la clase "active" de todos los botones
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la pestaña actual y añadir la clase "active" al botón
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}