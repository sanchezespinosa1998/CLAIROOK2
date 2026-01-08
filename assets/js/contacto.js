// JavaScript para el formulario de contacto

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contacto-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validación básica
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }

      // Validar email básico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, introduce un email válido.');
        return;
      }

      // Aquí normalmente enviarías los datos a un servidor
      // Por ahora mostramos un mensaje de confirmación
      const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
      if (mensajeConfirmacion) {
        mensajeConfirmacion.classList.remove('hidden');
        mensajeConfirmacion.textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
        form.reset();

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          mensajeConfirmacion.classList.add('hidden');
        }, 5000);
      } else {
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        form.reset();
      }
    });
  }
});

