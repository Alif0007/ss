
const dropHero = document.getElementById('menuBar')
const cross = document.getElementById('crossBar')
const menu = document.getElementById('menu')
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: ' WPPOOL   ',
            data: [12, 19, 51, 5, 2, 39],
            borderWidth: 1
        },
        {
            label: 'Google',
            data: [12, 40, 3, 5, 32, 3],
            borderWidth: 1
        },
        {
            label: 'Microsoft',
            data: [12, 40, 3, 73, 32, 3],
            borderWidth: 1
        },
        {
            label: 'Twitters',
            data: [62, 40, 3, 5, 32, 3],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },


        }
    }
});

// slider section 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },
    }
});

dropHero.addEventListener('click', function () {
    menu.classList.remove("hidden");
});
cross.addEventListener('click', function () {
    menu.classList.add("hidden");


});

