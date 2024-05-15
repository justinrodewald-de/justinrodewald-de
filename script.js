document.addEventListener('DOMContentLoaded', () => {
    const light = document.createElement('div');
    light.classList.add('light');
    document.body.appendChild(light);

    document.addEventListener('mousemove', (e) => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Ensure the light effect is not applied over the navbar or outside the hero section
        if (e.pageY > navbarHeight && e.pageY < window.innerHeight) {
            requestAnimationFrame(() => {
                light.style.left = `${e.pageX - 125}px`; // Adjusted to center the light
                light.style.top = `${e.pageY - 125}px`; // Adjusted to center the light

                document.querySelectorAll('.hero-text').forEach((text) => {
                    const rect = text.getBoundingClientRect();
                    const textX = rect.left + rect.width / 2;
                    const textY = rect.top + rect.height / 2;
                    const distance = Math.sqrt(Math.pow(e.pageX - textX, 2) + Math.pow(e.pageY - textY, 2));

                    if (distance < 125) { // Adjusted to match the new light radius
                        text.style.color = '#ab0be0'; // Dark blue color
                    } else {
                        text.style.color = '#ffffff'; // White color
                    }
                });
            });
        }
    });
});
