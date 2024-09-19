// Esperar a que la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function() {
    // Capturar el formulario
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        // Crear un objeto FormData para enviar los datos del formulario
        const formData = new FormData(form);

        // Enviar los datos a Formspree usando fetch
        try {
            const response = await fetch('https://formspree.io/f/mldrkyvw', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Mensaje enviado con éxito');
                form.reset(); 
            } else {
                alert('Hubo un problema al enviar el formulario, por favor intenta de nuevo.');
            }
        } catch (error) {
            alert('Error al enviar el formulario, revisa tu conexión.');
        }
    });
});
