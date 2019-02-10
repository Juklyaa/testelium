let $addPrice = $('#price-btn-moreTariffs'),
    $faqs = $('#faqs'),
    $glyphiconMenuDown = $('.glyphicon-menu-down')
    $menuNormal = $('.menu-normal'),
    $headerNavigation = $('#header-navigation'),
    $cardPrice = $('#card-price')


$addPrice.on('click',function (event) {
    event.preventDefault();
    $addPrice.css('display','none');
    $('#table-prices')
        .find('.price-hidden')
        .slideDown(1500)
        .css('display','flex');
});

function openAnswerHandler(event){
    $(this)
        .attr('data-open', true)
        .toggleClass('transform');//поворот иконки на 180гр
    let $faqQuestion = $(this).parent();
    $faqQuestion
        .find('.faq-answer')
        .slideDown(500);
}
$faqs.on('click','.glyphicon-menu-down',function (event){
    $(this)
        .attr('data-open', true)
        .toggleClass('transform');//поворот иконки на 180гр
    let $faqQuestion = $(this).parent();
    $faqQuestion
        .find('.faq-answer')
        .slideDown(500);

})

$faqs.on('click', '[data-open=true]', function (event) {//если кликаем повторно, то ответ прячется
    $(this).removeAttr('data-open');
        $(this).parent()
            .find('.faq-answer')
            .slideUp(500);
});


$menuNormal.on('click',function (event) {
    event.preventDefault();

    $(this).css('display', 'none');
    $('.background').addClass('filter');
    $('.header-content').addClass('nav-header-content');

    $headerNavigation
        .parent()
        .addClass('nav-menu-wrapper') //стилим menu-wrpper

    $('.icon-close').css('display','block');

    $headerNavigation.addClass('nav-nav');
    $headerNavigation
        .children()
        .addClass('nav-link');

    $('.header-btn')
        .parent()
        .addClass('nav-btn');
});

$('body').on('click','.icon-close',function (event) {
    event.preventDefault();
    $menuNormal.css('display','inline-block');
    $('.background').removeClass('filter');
    $('.header-content').removeClass('nav-header-content');

    $headerNavigation
        .parent()
        .removeClass('nav-menu-wrapper') //стилим menu-wrpper

    $('.icon-close').css('display','none');

    $headerNavigation.removeClass('nav-nav');
    $headerNavigation
        .children()
        .removeClass('nav-link');

    $('.header-btn')
        .parent()
        .removeClass('nav-btn');

});
if($('#price').width() < 900){

   $('#table-prices').addClass('hidden');
   $('.price-btn-moreTariffs').addClass('hidden');
    $('#contentCarousel').removeClass('hidden');

    let $children = $('#table-prices')
        .find('.rate');


        $children.each( function (n, card) {
            let $corouselCard = $(card)
                .clone()
                .addClass('myCard')
                .removeClass('rate price-hidden');

            $corouselCard
                .children()
                .addClass('myCard-string')
                .removeClass('rate-td');
            if($('#price').width() > 480){
                 if (!(n% 2)){
                    let $li = $('<li>')// добавляем индикатор
                         .attr('data-target', "#myCarousel");
                    $li.attr('data-slide-to',`${n/2}`);
                    $('.carousel-indicators').append($li);


                    let $myItem = $('<div>')
                        .addClass('myItem')
                        .attr('data-empty', true)
                        .append($corouselCard)

                    let $item = $('<div>')
                        .addClass('item')
                        .append($myItem)

                    $('.carousel-inner').append($item);
                }
                else{
                    let a = $(`[data-empty = true]`);
                    a.append($corouselCard);

                    a.removeAttr('data-empty');
                }
            } else{
                console.log(1);
                let $li = $('<li>')// добавляем индикатор
                    .attr('data-target', "#myCarousel");
                $li.attr('data-slide-to',`${n}`);
                $('.carousel-indicators').append($li);


                let $myItem = $('<div>')
                    .addClass('myItem')
                    .append($corouselCard)

                let $item = $('<div>')
                    .addClass('item')
                    .append($myItem)

                $('.carousel-inner').append($item);
                $corouselCard.css('width','80%')
            }
    });


    $('carousel-indicators li')
        .first()
        .addClass('active');

    $('.carousel-inner .item')
        .first()
        .addClass('active');


}

/*-----------ccылки----------------*/


function FollowingLinkHandler (event){
    event.preventDefault();

    var sc = $(this).attr("href"), //информацию о том, к какому блоку надо перейти
        dn = $(sc).offset().top; //определяем положение блока на странице

    $('html, body').animate({scrollTop: dn}, 2000);
};

$('a[href^="#"]').on('click', FollowingLinkHandler);

$('.registration-next-step').on('click', function () {
    let $visible = $(this)
        .parent()
        .find('.form-group')
        .slice(0,6);

    let required = $visible
        .children()
        .filter('[required]');

    required = Array.from(required);
    for(let i=0; i<required.length; i++){
        console.log($(required[i]).val())
        if (!($(required[i]).val()))
        {
            return;
        }
    }

    $(this).addClass('hidden');


    $visible
        .addClass('hidden');
    $(this)
        .parent()
        .find('.form-group')
        .slice(6,12)
        .removeClass('hidden');
    $('.checkbox').removeClass('hidden');

    $('.step1')
        .text('')
        .addClass('step1-next')
    $('.registration-label')
        .children()
        .first()
        .addClass('label-step-nonchoice');
    $('.registration-label')
        .children()
        .last()
        .removeClass('label-step-nonchoice');
    $('[name="YourName"]').focus();

})