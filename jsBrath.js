var menu = ['','','']
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
})
    /*pagination: {
        el: '.swiper-pagination',
        clickable: true,
           renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
           }
    },

navigation: {
    nextE1: '.swiper-button-right',
    prevE1: '.swiper-button-left',
},
})*/