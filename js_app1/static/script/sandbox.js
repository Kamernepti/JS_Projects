$(document).ready(function() {
    $('#show_datetime').click(function() {
        $('#demo').toggle();
    });

    $('#image_on').hide();

    $('#on').click(function() {
        $('#image_off').hide();
        $('#image_on').show();
    })

    $('#off').click(function() {
        $('#image_on').hide();
        $('#image_off').show();
    })

    // this isn't working
    $('#done').click(function () {
        $('#<int:task_id>').decoration(underline);
    })
}) 