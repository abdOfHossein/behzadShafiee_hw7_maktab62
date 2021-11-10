
$('#btnProgressBar').click(function () {


  let bar = $('#bar');
  let lastWidth = (bar.width() / 10) + bar.width();
  bar.css({
    'width': `${lastWidth}`,
    'height': '100px',
    'background-color': 'orange',
  })
});


