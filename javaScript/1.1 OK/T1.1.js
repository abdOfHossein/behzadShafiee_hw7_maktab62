
$('div').click(function () {
    let content = 'Lorem ipsum dolor sit amet consectetur';
    let lastContent = $('#div').text();
    $(this).html(lastContent += content)
    return;

});


