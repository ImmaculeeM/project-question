const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.logo img');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
