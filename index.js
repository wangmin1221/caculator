$(function() {
    $('#calculate').click(function() {
        var totalScore = 0;
        $('input[type="checkbox"]').map(function() {
            var me = $(this);
            // Note works for jQuery 1.6+
            // Prior verions use me.attr('checked')
            if (me.prop('checked') == true) {
                totalScore = +totalScore + +me.data('score');
            }
        });
        $('#result').val(totalScore);
    })
})