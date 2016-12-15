$(function () {
    var $weatherdata = $('#weatherdata');

    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=bangalore&units=metric&cnt=5&appid=c11f28be057ef1c94c9c1b7ad8836c56',
        success: function(data, textStatus, jqXHR) {
            $weatherdata.append('<h3>City: '+ data.city.name +'</h3>');
            $weatherdata.append('<p>Temperature: '+ data.list[0].main.temp +'</p>');
            $weatherdata.append('<p>Min. Temperature: '+ data.list[0].main.temp_min +'</p>');
            $weatherdata.append('<p>Max. Temperature: '+ data.list[0].main.temp_max +'</p>');
            drawTable(data);
        }
    });
});

function drawTable(data) {
    var rows = [];

    for (var i = 0; i < data.list.length; i++) {
        console.log(data.list.length);
        rows.push(drawRow(data.list[i]));
    }

    $("#weatherDataTable").append(rows);
}

function drawRow(rowData) {
    var row = $("<tr />")
    row.append($("<td>" + rowData.list[i].dt_txt + "</td>"));
    row.append($("<td>" + rowData.list[i].main.temp_min + "</td>"));
    row.append($("<td>" + rowData.list[i].main.temp_max + "</td>"));

    return row;
}
