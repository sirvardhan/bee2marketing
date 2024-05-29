document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Example: Form submission handling logic
        alert('Form submitted successfully!');
        form.reset();
    });
});
