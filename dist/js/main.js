$(".tabs-sec__controls a").on("click",function(t){t.preventDefault(),$.each($(".tabs-sec__controls a"),function(t,s){$(this).hasClass("active")&&$(this).removeClass("active")}),$(this).addClass("active"),$(".tabs-sec__list").find("ul").removeClass("active").eq($(this).index()).addClass("active")}),$(function(){var s=$(".select-list"),e=$(".select-list__list"),t=$(".select-list__list-item");s.on("click",function(){e.hasClass("open")?($(document).mouseup(function(t){s.is(t.target)||0!==s.has(t.target).length||e.removeClass("active")}),t.on("click",function(){var t=$(this).text();$(this).css("color","#3B4858").siblings().removeAttr("style"),$(".select-list__header ").text(t).css("color","#3B4858")}),e.removeClass("open")):e.addClass("open")})});var star=$(".rating__stars .star"),inputValue=$(".form__rating #formRating");jQuery(document).ready(function(t){star.hover(function(){t(this).addClass("active"),t(this).parent().find(".star:lt("+t(this).index()+")").addClass("active")}).mouseout(function(){t(this).parent().find(".star").removeClass("active")}).click(function(){t(this).parent().find(".star").removeClass("rated"),t(this).parent().find(".star:lt("+(t(this).index()+1)+")").addClass("rated"),inputValue.attr("value",+(t(this).index()+1))})}),$(".form").on("keyup",function(){0!=$(".last-sec label__textarea textarea").val().length&&0!=$(".last-sec label__name input").val().length&&0!=$(".last-sec label__email input").val().length?$(".form__btn button").removeAttr("disabled"):$(".form__buttons button").attr("disabled")}),$(".terms__item").on("click",function(t){t.preventDefault(),$(this).find(".block").toggleClass("active")}),$(".view-switch__item_linear").on("click",function(){console.log("тык"),$(this).not("active")&&($(this).addClass("active").siblings().removeClass("active"),$(".showcase__list").addClass("showcase__list_linear").removeClass("showcase__list_grid"))}),$(".view-switch__item_grid").on("click",function(){console.log("тык"),$(this).not("active")&&($(this).addClass("active").siblings().removeClass("active"),$(".showcase__list").addClass("showcase__list_grid").removeClass("showcase__list_linear"))}),$(".criteria__item_display").on("click",function(){console.log("тык"),$(this).find(".select__list").toggle(),$(this).find(".select__item").on("click",function(){var t=$(this).text();$(this).find(".select__list").hide(),$(this).closest(".select__header").text(t)})}),$(".criteria__item_sort").on("click",function(){console.log("тык"),$(this).find(".select__list").toggle(),$(this).find(".select__item").on("click",function(){var t=$(this).text();$(this).closest(".select__header").text(t),$(this).find(".select__list").hide()})});