$(document).ready(function() {

  //Aparece modal para ingresar contactos.
  $('.btn1').click(function() {
    $("#modal1").show();
  });
  //Cerrar modal.
  $('.close').click(function() {
    $("#modal1").hide();
  });
  //Agregar contacto.
  $('.save').click(function() {
    //Escondiendo modal.
    $("#modal1").hide();
    //Guardando todos los valores en una variable y vaciando los  input.
    var name = $('#name').val();
    $("#name").val('');
    var number = $('#num').val();
    $("#num").val('');
    var mail = $('#e-mail').val();
    $("#e-mail").val('');
    var contenedor = $('.contacts');
    //Ingresando todos los datos en una tarjeta de contacto.
    contenedor.append('<div id=contactbox> <h5 class=namebox> <i class="fas fa-user"></i>' + name + '</h5> <button class=delete> <i class="fas fa-user-times"></i></button> <h6> <i class="fas fa-phone" data-fa-transform="flip-h"></i> ' + number + '</h6><p><i class="fas fa-at"></i>' + mail + '</p></div>');
    //Eliminar contacto.
    $('.delete').click(function() {
      $(this).parent().remove();
    });
  });







});
