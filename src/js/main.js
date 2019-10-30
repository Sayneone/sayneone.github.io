
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
var star = $('.rating__star')
var inputValue = $('.rating__input')

jQuery(document).ready(function($) {
    star.hover(function() {
        $(this).addClass('active');
        $(this).parent().find('.rating__star:lt(' + $(this).index() + ')').addClass('active');
    }).mouseout(function() {
            $(this).parent().find('.rating__star').removeClass('active');
    }).click(function(){
        $(this).parent().find('.rating__star').removeClass('rated');
        $(this).parent().find('.rating__star:lt(' + ($(this).index() + 1) + ')').addClass('rated');
        inputValue.attr('value',   + ($(this).index() + 1)  )
    })
});
// VALIDATION 
var  a = $('.form__review-textarea').val().length != 0
var  b = $('.form__review-input-name').val().length != 0


$('.form').on('keyup',function(){
    if( $('.form__review-textarea').val().length != 0 &&  
    $('.form__review-input-email').val().length != 0 &&
    $('.form__review-input-name').val().length != 0 )
    {
        $('.form__btn button').removeClass('dissable')
    } else {
        $('.form__btn button').addClass('dissable')
    }
})

// TERMS

$('.terms__item').on('click', function(e){
    e.preventDefault()
    $(this).find('.block').toggleClass('active')
});