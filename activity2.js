
function returnActivity(){
  var x = moment().format('YYYY-MM-DD');
    console.log(x);
  // var mood = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"];
  // for (var h = 0; h < mood.length; h++) {
  //   mood === imgSrc.emotions;
  // }
  var happiness = "running";
	var queryURL = "http://api.amp.active.com/v2/search/?state=GA&start_date=" + x + "..&country=United+States&current_page=1&per_page=15&query=" + happiness + "&sort=distance&api_key=9nxjy2bc2u6wpctkmgk8v44g";
	$.ajax({
      url: queryURL,
      method: "GET",
    }).done(function(response){
    	for (var i = 0; i < response.results.length; i++) {
        var desc = response.results[i].assetName;
        var start = response.results[i].activityStartDate; 
        var end = response.results[i].activityEndDate;

        var tableData = '<table>'
        $.each(data, function(key, value){
        tableData += '<tr>';
        tableData += '<td>' + category + '</td>';
        tableData += '<td>' + desc + '</td>';
        tableData += '<td>' + start + '</td>';
        tableData += '<td>' + end + '</td>';
        tableData += '</tr>';
});

tableData += '</table>';

$('#table').html(tableData);
}

})
returnActivity();
  };