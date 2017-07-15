"use strict";

function displayActivityInfo(feel){
  var actArray = [];
  console.log(feel);
  $("#mood").html(feel);
  switch(feel){
           	case "anger":
            actArray = ["outdoor adventure"]
            returnActivity()
            break;

            case "disgust":
            actArray = ["classes"]
            returnActivity()
            break;

            case "fear":
            actArray = ["outdoor adventure"]
            returnActivity()
            break;

            case "happiness":
            actArray = ["parks and recreation", "fitness" ,"classes"]
            returnActivity()
            break;

            case "neutral":
            actArray = ["fitness", "endurance"]
            returnActivity()
            break;

            case "sadness":
            actArray = ["endurance", "team sports", "tennis leagues", "parks and recreation", "fitness", "classes", "outdoor adventure"]
            returnActivity()
            break;

            case "surprise":
            actArray = ["team sports", "outdoor adventure", "parks and recreation"]
            returnActivity()
            break;

        } // switch 
   
  
 //sw

//     // var happiness = "Endurance"
  function returnActivity(){  
  var x = moment().format('YYYY-MM-DD');
    // console.log(x);
  // var mood = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"];
  // for (var h = 0; h < mood.length; h++) {
  //   mood === imgSrc.emotions;
  // }
	var queryURL = "http://api.amp.active.com/v2/search/?state=GA&start_date=" + x + "..&country=United+States&current_page=1&per_page=15&query=" + actArray + "&sort=distance&api_key=9nxjy2bc2u6wpctkmgk8v44g";
	$.ajax({
      url: queryURL,
      method: "GET",
    }).done(function(response){

        // console.log(response.results[i].activityStartDate);
    	for (var i = 0; i < response.results.length; i++) 
      {

                var start = response.results[i].activityStartDate;
                var end = response.results[i].activityEndDate;
                var desc = response.results[i].assetName;
                var cat = response.results[i].assetCategories[0].category["categoryName"];

                console.log("Category", cat);
               console.log("Description", desc);
              console.log("Start", start);
             console.log("End", end);

        // $(".cd-schedule loading").html(desc);
// //         // html += '<tr><td>' + category + '</td>';
// //         // html += '<td>' + desc +'</td>';
// //         // html += '<td>' + start + '</td>';
// //         // html += '<td>' + end + '</td>';
        
// //         $("tbody").append(html);
// //         // console.log(feel);
// //         console.log(desc);
        
                var tableData = "<table>"
                $.each(response, function(key, value){
                //   $(this).css("border", 'border-left', '1px solid red');
                tableData += "<tr>";
                tableData += "<td>" + cat + "</td>";
                tableData += '<td>' + desc + '</td>';
                tableData += '<td>' + start + '</td>';
                tableData += '<td>' + end + '</td>';
                tableData += '</tr>';
    }) //end table function

                tableData += '</table>';

                $('#table').html(tableData);
                $(".activities").html(tableData);

// response = $.parseJSON(response);

// $(function() {
//     $.each(response, function(i, item) {
//         var $tr = $('<tr>').append(
//             $('<td>').text(cat),
//             $('<td>').text(desc),
//             $('<td>').text(start),
//             $('<td>').text(end)
//         ); //.appendTo('#records_table');
//         console.log($tr.wrap('<p>').html());
//     });
// });
// //         // 
        
        
     
// //         var html = "";        
        
// //         html += '<tr><td>' + category + '</td>';
// //         html += '<td>' + desc +'</td>';
// //         html += '<td>' + start + '</td>';
// //         html += '<td>' + end + '</td>';
        
// //         $("tbody").append(html);

        } // end of for loop
        



// //       }); //do

// //   }; //end of returnActivity function

// //   // displayActivityInfo(); 
 
   }); //done function

    } //second function
      
 } // top function
              
           
// // // });


    	






