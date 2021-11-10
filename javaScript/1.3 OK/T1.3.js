
$('#btnParent').click(function () {
    let contentParent = $('#parent-p').text();
    let contentTarget = $('#target-p').text();
    let contentChild = $('#child-p').text();
    $('#target-p').html(contentParent + contentTarget + contentChild);
    setTimeout(function () {
        $('#target-p').html(contentTarget);
    }, 1500)
    return;
});


$('#btnChild').click(function () {
    let contentTarget = $('#target-p').text();
    let contentChild = $('#child-p').text();
    $('#target-p').html(contentChild + contentTarget);
    setTimeout(function () {
        $('#target-p').html(contentTarget);
    }, 1500)
    return;
});
