$(document).ready(function () {

    $(".name").hide();

    $("#search").keyup(function () {

        $(".name").hide();

        var val = $(this).val().toLowerCase();

        $(".name").each(function () {

            var text = $(this).text().toLowerCase();


            if(val.length !== 0) { 

                if (text.indexOf(val) !== -1 && val.charAt(val.length - 1) === text.charAt(val.length - 1)) {

                    $(this).show();
            }  }
        });
    });
});
