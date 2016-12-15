$(function () {
    var $weatherdata = $('#weatherdata');

    $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=bangalore,india&appid=c11f28be057ef1c94c9c1b7ad8836c56',
        success: function(data) {
            console.log('success', data);
            //$.each(weatherdata, function (i, wdata) {
                $weatherdata.append('<p>'+ data.coord.lon +'</p>');
            //});
        }
    });
});
