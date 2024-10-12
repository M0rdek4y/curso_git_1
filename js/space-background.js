const starsContainer = document.querySelector('.stars');
const starCount = 200;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    const duration = Math.random() * 3 + 2;
    star.style.animation = `twinkle ${duration}s infinite`;
    
    const hue = Math.random() * 60 + 200; // Variação de azul para branco
    star.style.setProperty('--star-color-base', `hsl(${hue}, 80%, 80%)`);
    
    starsContainer.appendChild(star);
}