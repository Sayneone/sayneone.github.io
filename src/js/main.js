
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

// Select-list 

$(function(){
    var selectList = $('.select-list')
    var selectListList = $('.select-list__list')
    var selectListItem = $('.select-list__list-item')

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
                $('.select-list__header ').text(content).css('color', '#3B4858');
            });
            selectListList.removeClass('open'); 
        } else {
        selectListList.addClass('open')
        }
    })
});

// RATING STARS
var star = $('.rating__stars .star')
var inputValue = $('.form__rating #formRating')

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
$('.form').on('keyup',function(){
    if( $('.last-sec label__textarea textarea').val().length != 0 &&  
    $('.last-sec label__name input').val().length != 0 &&
    $('.last-sec label__email input').val().length != 0 )
    {
        $('.form__btn button').removeAttr('disabled')
    } else {
        $('.form__buttons button').attr('disabled')
    }
})

// TERMS

$('.terms__item').on('click', function(e){
    e.preventDefault()
    $(this).find('.block').toggleClass('active')
});

// LIST VIEW SWITCHER
$('.view-switch__item_linear').on('click', function(){
    console.log('тык')
    if ($(this).not('active')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.showcase__list').addClass('showcase__list_linear').removeClass('showcase__list_grid');
    }
});
$('.view-switch__item_grid').on('click', function(){
    console.log('тык')
    if ($(this).not('active')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.showcase__list').addClass('showcase__list_grid').removeClass('showcase__list_linear');
    }
});


// LIST CRITERIA SELECTS 

$('.criteria__item_display').on('click', function(){
    console.log('тык')
    $(this).find('.select__list').toggle();
    $(this).find('.select__item').on('click', function(){
        var text =  $(this).text()
        $(this).find('.select__list').hide();
        $(this).closest('.select__header').text(text);
    })
});
$('.criteria__item_sort').on('click', function(){
    console.log('тык')
    $(this).find('.select__list').toggle();
    $(this).find('.select__item').on('click', function(){
        var text = $(this).text();
        $(this).closest('.select__header').text(text);
        $(this).find('.select__list').hide();
    });
});

