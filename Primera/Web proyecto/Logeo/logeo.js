// Función para manejar el envío del formulario de inicio de sesión
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Evitar envío por defecto del formulario
  
    // Obtener los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Aquí puedes realizar las acciones necesarias, como enviar los datos al servidor para autenticación
  
    // Ejemplo: Mostrar mensaje de bienvenida en la consola del navegador
    console.log(`¡Bienvenido, ${username}!`);
  }
  
  // Escuchar el evento 'submit' del formulario de inicio de sesión
  document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmit);
  