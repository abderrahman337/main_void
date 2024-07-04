document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.main-nav ul').classList.toggle('active');
    document.querySelector('.extra-nav ul').classList.toggle('active');
});
