/* ==========================================================================
   ESTE SIRVE PARA: Gestionar las funciones de audio, microinteracciones 
   y asegurar la accesibilidad técnica del MED de forma offline.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    /* ** este sirve para: buscar todos los botones de la pantalla y asignarles el sonido de navegación nativo al hacer clic ** */
    const botones = document.querySelectorAll('.btn-accion-coral, .btn-navegacion-petroleo, .btn-retroceso-sutil');
    
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            /* ** nota para el equipo: aquí se inicializa el audio de navegación de forma limpia ** */
            const audioClic = new Audio('assets/clic.mp3');
            audioClic.volume = 0.4;
            audioClic.play().catch(err => console.log('El audio requiere interacción previa del usuario.'));
        });
    });
});