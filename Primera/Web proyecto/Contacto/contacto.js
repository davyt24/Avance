// JavaScript para manejar el envío del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Realizar aquí la lógica de envío del formulario (por ejemplo, una petición AJAX)
    // ...
    
    // Limpiar los campos del formulario después del envío
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    // Mostrar un mensaje de confirmación o redirigir a otra página
    alert('¡Mensaje enviado con éxito!');
  });
  