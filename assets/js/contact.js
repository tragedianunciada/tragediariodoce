$(document).ready(function () {

  $(".contato-form").submit(function (event) {
    event.preventDefault();

    var templateURI = 'mailto:mab@mabnacional.org.br?subject=Contato%20-%20Tragedia%20Rio%20Doce&body='
    var name = $("#name").val() ,  email = $("#email").val(), message = $("#message").val();

    var body = "["+name+"]  /  ["+email+"]  / " + message
    window.location.href= templateURI + body

  });

});
