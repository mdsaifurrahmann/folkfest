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


    // Set the target date to July 26, 2025 at 00:00:00
    const targetDate = new Date(2025, 2, 29);
    const countdownElement = document.querySelector('.count-down p');

    function updateCountdown() {
        const now = new Date();
        
        // Check if event has already started
        if (now >= targetDate) {
            countdownElement.textContent = 'Event has started!';
            return;
        }

        let tempDate = new Date(now);
        let months = 0;

        // Calculate full months remaining
        while (true) {
            const nextDate = new Date(tempDate);
            nextDate.setMonth(tempDate.getMonth() + 1);

            if (nextDate > targetDate) break;
            
            months++;
            tempDate.setMonth(tempDate.getMonth() + 1);
        }

        // Calculate remaining days
        const days = Math.floor((targetDate - tempDate) / (1000 * 60 * 60 * 24));

        // Calculate remaining time after months and days
        const remainingTime = targetDate - tempDate - (days * 1000 * 60 * 60 * 24);
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update countdown display
        countdownElement.textContent = 
            `${months} Month${months !== 1 ? 's' : ''} | ` +
            `${days} DAYS | ` +
            `${hours} HOURS | ` +
            `${minutes} MIN | ` +
            `${seconds} SEC`;
    }

    // Initial call and set up interval
    updateCountdown();
    setInterval(updateCountdown, 1000);



    feather.replace();


});