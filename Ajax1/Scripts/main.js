$(document).ready(function() {
    $("Select[name=Model]").change(function () {
        var marka = $(this).val();
        var Url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + marka + "/modelyear/2015?format=json";
        $.ajax({
            url: Url,
            type: "get",
            dataType: "json",
            success: function (response) {
                //console.log(response)
                var timing = response.Results;
                for (var i = 0; i < timing.length; i++)
                {
                    $(".timing td").eq(i).text("test")
                }
            }
        })


    })
})