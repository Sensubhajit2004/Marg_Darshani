// js/ui.js
const modal = document.getElementById('detail-modal');
const modalContent = document.getElementById('modal-content');

export function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.toggle('hidden', section.id !== sectionId);
    });
    window.scrollTo(0, 0);
    document.getElementById('mobile-menu').classList.add('hidden');
}

export function showDetailModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = 'flex';
}

export function initModal() {
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') {
            modal.style.display = 'none';
        }
    });
}