document.addEventListener('DOMContentLoaded', function () {

    let menu = document.querySelector('.menu');
    let menuItems = document.querySelectorAll('.nav-item');

    menu.addEventListener('click', function () {
        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'));

        menuItems.forEach(function (item) {
            if (menu.classList.contains('!opened')) {
                item.classList.toggle('opacity-100');
                item.setAttribute('tabindex', '0');
            } else {
                item.classList.toggle('opacity-100');
                item.setAttribute('tabindex', '-1');
            }
        });

    });

});