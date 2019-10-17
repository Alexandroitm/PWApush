Push.create("Notificacionesssss!!!!", {
    body: "Prueba de notificacion",
    icon: 'img/WPA5.png',
    timeout: 12000,
    onClick: function () {
        window.location="https://www.youtube.com/watch?v=Qva036J_evc";
        window.focus();
        this.close();
    }
});