
// Tabs section
$('.tabs-sec__controls a').on('click', function(e){
    e.preventDefault();
    $.each($('.tabs-sec__controls a'), function(index, value) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        };
    });
    $(this).addClass('active');
    $('.tabs-sec__list').find('ul').removeClass('active').eq($(this).index()).addClass('active');
})

// Select

$(function(){
    var selectList = $('.select')
    var selectListList = $('.select__list')
    var selectListItem = $('.select__list-item')

    selectList.on('click', function(){
        if(selectListList.hasClass('open')){
            $(document).mouseup(function (e){ 
                if (!selectList.is(e.target) 
                    && selectList.has(e.target).length === 0) { 
                    selectListList.removeClass('active'); 
                }
            });
            selectListItem.on('click', function(){
                var content = $(this).text();
                $(this).css('color', '#3B4858').siblings().removeAttr('style');
                $('.select__header ').text(content).css('color', '#3B4858');
            });
            selectListList.removeClass('open'); 
        } else {
        selectListList.addClass('open')
        }
    })
});

// RATING STARS
var star = $('.last-sec .rating__stars .star')
var inputValue = $('.last-sec .form__rating #formRating')

jQuery(document).ready(function($) {
    star.hover(function() {
        $(this).addClass('active');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('active');
    }).mouseout(function() {
            $(this).parent().find('.star').removeClass('active');
    }).click(function(){
        $(this).parent().find('.star').removeClass('rated');
        $(this).parent().find('.star:lt(' + ($(this).index() + 1) + ')').addClass('rated');
        inputValue.attr('value',   + ($(this).index() + 1)  )
    })
});
// VALIDATION 
$('.last-sec__form').on('keyup',function(){
    if( $('.last-sec__form .label__textarea textarea').val().length != 0 &&  
    $('.last-sec__form .label__name input').val().length != 0 &&
    $('.last-sec__form .label__email input').val().length != 0 )
    {
        $('.last-sec__form .form__buttons .btn').removeAttr('disabled');
    } else {
        $('.last-sec__form .form__buttons .btn').attr('disabled');
    }
});

// TERMS

$(' .terms .terms__item').on('click', function(e){
    e.preventDefault();
    $(this).find('.block').toggleClass('active')
    
});

// LIST VIEW SWITCHER
$('.view-switch__item--linear').on('click', function(){
    console.log('тык')
    if ($(this).not('active')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.showcase__list').addClass('linear').removeClass('grid');
    }
});
$('.view-switch__item--grid').on('click', function(){
    console.log('тык')
    if ($(this).not('active')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.showcase__list').addClass('grid').removeClass('linear');
    }
});


// LIST CRITERIA SELECTS 
var firstText
$('#criteriaSort').on('click', function(){
    console.log('as');
    firstText = $(this).children('.select__header').html();
    $(this).find('.select__list').toggle();
    $(this).find('.select__item a').on('click', function(){
        var text = $(this).html();
        $(this).text(firstText);
        $(this).closest('.select').children('.select__header').html(text);
        $(this).find('.select__list').hide();
    });
});


$('#criteriaSort').on('click', function(){
    console.log('as');
    
    var firstText = $(this).children('.select__header').html();
    $(this).find('.select__list').toggle();
    $(this).find('.select__item a').on('click', function(){
        var text = $(this).html();
        $(this).text(firstText);
        $(this).closest('.select').children('.select__header').html(text);
        $(this).find('.select__list').hide();
    });
});

$('#criteriaDisplay').on('click', function(){
    console.log('as');
    
    var firstText = $(this).children('.select__header').html();
    $(this).find('.select__list').toggle();
    $(this).find('.select__item a').on('click', function(){
        var text = $(this).html();
        $(this).text(firstText);
        $(this).closest('.select').children('.select__header').html(text);
        $(this).find('.select__list').hide();
    });
});

//  MODAL
$('.contacts-support .btn').click(function(){
    $('.overlay').show();
    $('#modal').show(200);
    $('body').css('overflow', 'hidden');
});
    
$('.overlay, .modal__exit').click(function(){
$('#modal, .overlay').hide();
$('body').css('overflow', '');
});