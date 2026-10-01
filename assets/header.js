document.addEventListener("DOMContentLoaded",(function() {
    const burger = document.getElementById('burger');
    const modal = document.getElementById('modal');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        modal.classList.toggle('active');
        document.documentElement.classList.toggle('no-scroll');
    });

    document.querySelectorAll('.menu-dropdown__toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const parent = this.closest('.menu-dropdown');
            parent.classList.toggle('is-open');
        });
    });

    const yearElement = document.getElementById('footer-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}));