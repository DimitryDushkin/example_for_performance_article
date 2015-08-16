"use strict";
$(function() {

    $.ajaxSetup({ cache: false });

    function loadCategory(category) {
        $.getJSON('data/' + category + '.json', renderItems);
    }

    function loadMoreData(category) {

    }

    function renderItems(data) {

        var html = '<ul class="items">';

        for (let item of data) {
            console.log(item.img)
            html += '<li class="item">'
                + '<img class="item__image" src="' + item.img + '">'
                + '<p class="item__title">' + item.name + '</p>'
                + '<p class="item__price">' + item.price + '</p>'
                + '</li>';
        }

        html += '</ul>';

        $('.content').html(html);

    }

    function highlightCategory(category) {

    }


    loadCategory('clothes');

});
