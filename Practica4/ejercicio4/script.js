function recordar() {
    const dia = document.getElementById("dia").value.trim().toLowerCase();
    const mensaje = document.getElementById("mensaje").value.trim();
    let actividad = "";

    switch (dia) {
        case "lunes":
            actividad = "Debes atender a un cliente especifico.";
            break;
        case "martes":
            actividad = "Tienes que visitar una agencia fuera de la ciudad.";
            break;
        case "miercoles":
            actividad = "Debes llevar a tu hija al ballet.";
            break;
        case "jueves":
            actividad = "Tienes que priorizar entregas de desarrollo.";
            break;
        case "viernes":
            actividad = "Debes atender problemas de manera remota.";
            break;
        case "sabado":
            actividad = "Tienes que hacer lo que tu esposa quiera.";
            break;
        case "domingo":
            actividad = "Hoy es domingo, descansa.";
            break;
        default:
            actividad = "Ese no es un dia valido. Intenta de nuevo.";
    }

    document.getElementById("resultado").innerText =
        actividad + (mensaje ? " Mensaje: " + mensaje : "");
}
