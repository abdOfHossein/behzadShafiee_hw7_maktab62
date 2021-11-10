$('div').mouseover(function () {
    $(this).css({
        'background-color': 'blue'
    });
});

$('div').mouseout(function () {
    $(this).css({
        'background-color': 'red'
    });
});