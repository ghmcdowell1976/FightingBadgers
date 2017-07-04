"use strict"
$(document).ready(function(){

	/* hard code some of the variables to be used in the call */

	/* calls to Face++ */
	var request_url = "https://api-us.faceplusplus.com/facepp/v3/face/analyze";
	var detects_url = "https://api-us.faceplusplus.com/facepp/v3/detect";

	/* necessary keys */
	var myKey = "M-I560kGVe7hslv83g_CTxfVNU1qtO3u";
	var mySec = "LZ7qc7rfLRPKuS1DxYrEeoi1jBQUcWD2";


	/* sample images from the web */
	/* -------------------------- */

	/* smiling man to be used in the trial */
	var happyMan = "http://cdn.acidcow.com/pics/20110408/smiles_24.jpg";

	/* frowning prez */
	var frownMan = "http://drvidyahattangadi.com/wp-content/uploads/2014/07/A110.jpg";

	/* return attributes string */
	var faceAtts = "gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity,emotion";


	/* test the Face++ API key */
	$.ajax({

url: detects_url + "?api_key="+ myKey + "&api_secret="+ mySec + "&image_url="+ happyMan + "&return_landmark=1" + "&return_attributes=" + faceAtts,	/* image URL */
method: "POST"			/* is the information coming/going? */

	}).done(function(response){

		/* console log out the response */
		console.log(response);
	});



});