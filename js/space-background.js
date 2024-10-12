const form = document.getElementById('contactForm');
const modal = document.getElementById('messageModal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = document.getElementsByClassName('close')[0];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            showModal("Mensagem enviada com sucesso!");
            form.reset();
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
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}