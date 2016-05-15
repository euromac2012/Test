$(document).ready(function(){
    $('.eng').keypress(function(e) {
        e = e || event;
        var char = e.which || e.keyCode;
        if (char < 97 || char > 122) {
            return false;
        }
    });

    $('.field').click(function() {
         $(".message").slideToggle('fast');
         $("ul").show();
    });

    $('li').click(function() {
        var text = $(this).text();
        $(".message").hide();
        var textId = $(this).attr('data');
        $('input[type=radio]').prop('checked', false);
        $('#'+textId).prop('checked', true);
        $('.field').text(text);
    });

    $('input[type=range]').on('input', function() {
        this.setAttribute('value', this.value);
        $('.mark').val(this.value);
    });

    $('button').click(function(){
        $('.popup').show();
        $(".error-message").hide();
    });

    $('.thanks').click(function(){
        $('.popup').hide();
        $('input[type=range]').attr('value', '1');
        $('.mark').val('1');
        document.querySelector('.steps').stepDown(10);
    });


    $('.popup').on('keyup', function(e){
        var key = e.which || e.keyCode;
        if (key === 13) {
            var oldValue = $('input[type=range]').val();
            var value = $('.mark').val();
            if (value > 0 && value < 11) {
                var step = oldValue - value;
                $(".error-message").hide();
                if (step >= 0 ) {
                    document.querySelector('.steps').stepDown(step);
                } else {
                    document.querySelector('.steps').stepUp(-step);
                }
                $('input[type=range]').attr('value', value);
            } else {
                $(".error-message").show();
            }
        }
    });
});
