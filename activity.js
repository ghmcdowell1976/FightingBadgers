"use strict";

function displayActivityInfo(feel){
  var actArray = [];

  switch(feel){
           	case "anger":
            actArray = ["outdoor adventure"]
            returnActivity();
            break;

            case "disgust":
            actArray = ["classes"]
            returnActivity();
            break;

            case "fear":
            actArray = ["outdoor adventure"]
            returnActivity();
            break;

            case "happiness":
            actArray = ["parks and recreation", "fitness,classes"]
            returnActivity();
            break;

            case "neutral":
            actArray = ["fitness", "endurance"]
            returnActivity();
            break;

            case "sadness":
            actArray = ["endurance", "team sports", "tennis leagues", "parks and recreation", "fitness", "classes", "outdoor adventure"]
            returnActivity();
            break;

            case "surprise":
            actArray = ["team sports", "outdoor adventure", "parks and recreation"]
            returnActivity();
            break;
  
}  
    // var happiness = "Endurance"
  function returnActivity(){
  var x = moment().format('YYYY-MM-DD');
    console.log(x);
  // var mood = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"];
  // for (var h = 0; h < mood.length; h++) {
  //   mood === imgSrc.emotions;
  // }
	var queryURL = "http://api.amp.active.com/v2/search/?state=GA&start_date=" + x + "..&country=United+States&current_page=1&per_page=15&query=" + happiness + "&sort=distance&api_key=9nxjy2bc2u6wpctkmgk8v44g";
	$.ajax({
      url: queryURL,
      method: "GET",
    }).done(function(response){
    	for (var i = 0; i < response.results.length; i++) {
        var desc = response.results[i].assetName;
        var start = response.results[i].activityStartDate; 
        var end = response.results[i].activityEndDate;

//         var tableData = '<table>'
//         $.each(data, function(key, value){
//         tableData += '<tr>';
//         tableData += '<td>' + category + '</td>';
//         tableData += '<td>' + desc + '</td>';
//         tableData += '<td>' + start + '</td>';
//         tableData += '<td>' + end + '</td>';
//         tableData += '</tr>';
// });

// tableData += '</table>';

// $('#table').html(tableData);

        var category = response.results[i].assetCategories[0].category["categoryName"];
        
        
        console.log(response.results[i]);
        console.log(response.results[i].assetCategories[0].category["categoryName"]);
        // console.log("Description", desc);
        // console.log("Start:", start);
        // console.log("End:", end);
               var html = "";        
        
        html += '<tr><td>' + category + '</td>';
        html += '<td>' + desc +'</td>';
        html += '<td>' + start + '</td>';
        html += '<td>' + end + '</td>';
        
        $("tbody").append(html);

        }
        


        })

  }

  // displayActivityInfo(); 
 
   };


      

               
        

           
// });

    		// response.results: JSON.stringify({
      //      	assetDescriptions : "value";
      //     	activityStartDate: "value";
      //     	activityEndDate: "value";
      //     })

    		// var activities = JSON.stringify(response.results[i].asset.assetDescriptions);
        // for (var i = 0; i < activities.length; i++) {
          // $(".activities").html(activities);
          // console.log(response.results[i].assets);
        // }
    		
    		// response.forEach(function(data) {
        

      //   })  
    		// console.log(response.results[i].assetDescriptions);

    		// for (var j = 0; j < response.results[i].assetTopics; j++) {
    		// 	var description = JSON.stringify(response.results[i].assetTopics);
    		// 	$(".activities").html(description);
    		// }
    		// var firstRowTds = $("table")
      //      .children()
      //      .eq(1)
      //   .children("tr")
      //   .eq(0)
      //   .children("td");
    	






