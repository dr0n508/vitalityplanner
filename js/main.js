$(document).ready(function () {

    maintainSameHeight($('[data-same-height="testimonial"]'));

    function maintainSameHeight($list) {
        var height = 0;

        $list.each(function () {
            var $this = $(this);
            if ($this.outerHeight() > height) {
                height = $this.outerHeight();
            }
        });

        $list.css("height", height);
    }

    $('#btn-up').click(function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    })


});