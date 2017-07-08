"use strict"
$(document).ready(function(){

	var imgSrc = function(){

		/* these control the internal camera's functionality */
		/* ------------------------------------------------- */
		function on(){
			/* turns on the camera */
			console.log("camera is on");
		};

		function capture(){
			/* takes the photo */
			console.log("say cheese!");

			/* cuts the camera off */
			off();

			/* returns image to be analyzed */
		};

		function off(){
			/* turns camera off */
			console.log("camera is off");
		};


		/* once the image is captured, it gets analyzed here */
		/* ------------------------------------------------- */

		/* calls to Face++ */
		/* here are the URLs to request information from F++ */
		/* ------------------------------------------------- */
		var request_url = "https://api-us.faceplusplus.com/facepp/v3/face/analyze";
		var detects_url = "https://api-us.faceplusplus.com/facepp/v3/detect";

		/* necessary keys */
		var myKey = "M-I560kGVe7hslv83g_CTxfVNU1qtO3u";		/* api key */
		var mySec = "LZ7qc7rfLRPKuS1DxYrEeoi1jBQUcWD2";		/* api secret */


		/* sample images from the web */
		/* -------------------------- */

		/* smiling man to be used in the trial */
		/* ----------------------------------- */
		var hMan = "http://cdn.acidcow.com/pics/20110408/smiles_24.jpg";

		/* frowning prez */
		var sMan = "http://drvidyahattangadi.com/wp-content/uploads/2014/07/A110.jpg";

		/* return attributes string */
		/* this is the information we want Face++ will return about the faces it sees */
		/* -------------------------------------------------------------------------- */
		var faceAtts = "gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity,emotion";

		$.ajax({

url: detects_url + "?api_key="+ myKey + "&api_secret="+ mySec + "&image_url="+ hMan + "&return_landmark=1" + "&return_attributes=" + faceAtts,	/* image URL */
method: "POST"			/* is the information coming/going? */

		}).done(function(response){

			/* console log out the response */
			console.log(response);
			console.log(response.faces);
			console.log(response.faces[0].attributes);
			console.log(response.faces[0].attributes['emotion']);

			// $("#selfie-camera").html("<img src=" + hMan + ">");
		});


		return {
			/* everything public */
			wakeCamera: on,

			useCamera: capture,
		}

	}();

imgSrc.wakeCamera();
imgSrc.useCamera();

});