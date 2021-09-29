$("#formLogin").validate({
    rules: {
        email: {
            required: true, 
            email: true
        }, 
        password: {
            required: true, 
            minlength: 8
        }, 
        repassword: {
            required: true,
            equalTo: "#password"
        }, 
        bases: "required"
    },
    messages: {
        email: {
            required: "Campo obligatorio", 
            email: "Por favor, introduzca una dirección de correo válida"
        },
        password: {
            required: "Campo obligatorio",
            minlength: "La contraseña debe contener al menos 8 caracteres"
        }, 
        repassword: {
            required: "Campo obligatorio", 
            equalTo: "Las contraseñas deben coincidir"
        }, 
        bases: "Por favor, acepte las condiciones"
    }

    
});

$("#enviar").click(function() {
    if($("#formLogin").valid() == false) {
        return;
    }
    let email = $("#email").val()
    let password = $("#password").val()
    let repassword = $("#repassword").val()
    let bases = $("#bases").val()

});