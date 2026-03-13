const modal = document.getElementById('thrModal');

function bukaTHR() {
    modal.classList.add('active');
}

function tutupTHR(e) {
    if (e) {
        e.preventDefault();
    }
    modal.classList.remove('active');
}