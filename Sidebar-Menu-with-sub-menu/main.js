window.addEventListener('DOMContentLoaded', (event) => {
    const btnSidebar = document.querySelector('.sidebar-btn');
    const wrapper = document.querySelector('.wrapper');
    const items = document.querySelectorAll('.item');
    btnSidebar.addEventListener('click', (event) => {
        wrapper.classList.toggle('collapse');
    });
    items.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
