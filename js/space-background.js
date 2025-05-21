const body = document.getElementById('bodybg');
const modal = document.getElementById('messageModal');
const modalMessage = document.getElementById('modalMessage');

body.addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(body.action, {
        method: 'POST',
        body: new bodyData(body),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            showModal("Mensagem enviada com sucesso!");
            body.reset();
        } else {
            showModal("Ocorreu um erro. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        showModal("Ocorreu um erro. Por favor, tente novamente.");
    });
});

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "block";
    
    // Oculta o modal após 3 segundos (3000 milissegundos)
    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
}
function createStars() {
    const stars = document.getElementById('stars');
    const count = 200;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() + 's';
        
        stars.appendChild(star);
    }
}

createStars();