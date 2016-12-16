$(function () {
    var $weatherdata = $('#weatherdata');

    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=bangalore&units=metric&cnt=5&appid=c11f28be057ef1c94c9c1b7ad8836c56',
        error: function() {
           $('#weatherdata').html('<p>An error has occurred</p>');
        },
        dataType: 'jsonp',
        success: function(data) {
            $.each(data.list, function() {
            var temp = "<tr><td>"+this.dt_txt+"</td><td>"+this.main.temp_min+"</td><td>"+this.main.temp_max+"</td></tr>";
                $("#weatherDataTable").append(temp);
                });
        },
    });
});
