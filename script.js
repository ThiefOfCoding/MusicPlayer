const musicPlayer = document.getElementById('musicPlayer');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');

musicPlayer.onclick = function() {
    videoModal.style.display = 'flex';
}

closeModal.onclick = function() {
    videoModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
    }
}
