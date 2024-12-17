function openModal() {
    const modal = document.getElementById('modal')
    const modalImg = document.getElementById('modalImage')
    const img = document.querySelector('.gallery img')
    const caption = document.getElementById('caption')

    modal.style.display = 'block'
    modalImg.src = img.src
    caption.innerHTML = img.alt
}

function closeModal() {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
}