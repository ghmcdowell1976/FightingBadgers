"use strict"
$(document).ready(function(){

	var imgSrc = function(){
<<<<<<< HEAD
=======

		/* initialize global variables */
		/* --------------------------- */
		var prettyPic;
		var dataPic;

		/* will be a string defined by random face generator */
		var facePic;

		/* collection(object) of emotions */
		var feelThat;
		var exp; 

		/* stuff IDK about */
		var video = document.querySelector('video');
		var canvas = document.querySelector('canvas');
		var ctx = canvas.getContext('2d');
		var localMediaStream = null;
		/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
		/* striaght took this stuff from another page */

>>>>>>> de67abae5405ca4c3d724090b55397e952ecfac5

		/* these control the internal camera's functionality */
		/* ------------------------------------------------- */
		function on(){
			/* turns on the camera */
			console.log("camera is on");
		};

		function capture(){
			/* takes the photo */
			console.log("say cheese!");


			if (localMediaStream) {
				/*
		    	ctx.drawImage(video, 0, 0);
		    	   "image/webp" works in Chrome.
		    	   // Other browsers will fall back to image/png

		    	   document.querySelector('img').src = canvas.toDataURL('image/webp');
		    	// document.querySelector('img').src = canvas.toDataURL('image/png');
		    	dataPic = canvas.toDataURL('image/png');
		    	*/
		    }

			/* returns image to be analyzed */
			// prettyPic = $("#snapshot").attr("src");
			whosThere();

			// console.log(prettyPic);

			/* with the image defined, pass it to AJAX */
			/* we'll evaluate the image based on successful call */
			// evaluateImg();
		};

		function off(){
			/* turns camera off */
			console.log("camera is off");
		};


<<<<<<< HEAD
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

=======
		function errorCallback(e) {
    		console.log(e);
  		}




/*
  			// video.addEventListener('click', snapshot, false);
  			video.addEventListener('click', capture, false);
			// Not showing vendor prefixes or code that works cross-browser.
			navigator.getUserMedia({video: true}, function(stream) {
    			video.src = window.URL.createObjectURL(stream);
    			localMediaStream = stream;
  			}, errorCallback);

*/




		/* once the image is captured, it gets analyzed here */
		/* sends images to Face++ */
		/* ------------------------------------------------- */

		function evaluateImg(){

			/* calls to Face++ */
			/* here are the URLs to request information from F++ */
			/* ------------------------------------------------- */
			// var request_url = "https://api-us.faceplusplus.com/facepp/v3/face/analyze";
			var detects_url = "https://api-us.faceplusplus.com/facepp/v3/detect";

			/* necessary keys */
			var myKey = "M-I560kGVe7hslv83g_CTxfVNU1qtO3u";		/* api key */
			var mySec = "LZ7qc7rfLRPKuS1DxYrEeoi1jBQUcWD2";		/* api secret */


			/* sample images from the web */
			/* -------------------------- */

			/* smiling man to be used in the trial */			
			//var hMan = "http://cdn.acidcow.com/pics/20110408/smiles_24.jpg";

			/* frowning prez */
			//var sMan = "http://drvidyahattangadi.com/wp-content/uploads/2014/07/A110.jpg";

			/* image with no face */
			//var trees = "https://winecountryinn.com/wp-content/uploads/2015/06/ThinkstockPhotos-473353782.jpg"

			/* return attributes string */
			/* this is the information we want Face++ to return about the faces it sees */
			/* ------------------------------------------------------------------------ */
			var faceAtts = "gender,age,smiling,headpose,facequality,blur,eyestatus,ethnicity,emotion";

				$.ajax({

					url: detects_url + "?api_key="+ myKey + "&api_secret="+ mySec + "&image_url="+ facePic + "&return_landmark=1" + "&return_attributes=" + faceAtts,	/* image URL */
					method: "POST"			/* is the information coming/going? */

				}).done(function(response){

					/* console log out the response */
					// console.log(response);
					// console.log(response.faces);
					// console.log(response.faces[0].attributes);

					feelThat = response.faces[0].attributes['emotion'];
					console.log(feelThat);

					// console.log(response.faces[0].attributes['emotion']);

					// $("#selfie-camera").html("<img src=" + prettyPic + ">");
					$("#selfie-camera").html("<img src=" + facePic + ">");

					feelings(feelThat);
				});

			};

		/*

		* this function generates random people to send to Face++ 
		* https://randomuser.me/

		*/

		function whosThere(){
		/* sets the image variable to be analyzed */

			$.ajax({
	  			url: 'https://randomuser.me/api/',
	  			dataType: 'json'
			}).done(function(data){
	    		// console.log(data);

	    		/* drill down into the object until we get to the image source */
	    		// console.log(data.results[0]);
	    		// console.log(data.results[0].picture);
	    		// console.log(data.results[0].picture["large"]);

	    		console.log("It's me, " + data.results[0].name["first"]);
	    		// console.log(data.results[0].name["first" + "last"]);

	    		/* set the picture to someone who needs to use the app */
	    		facePic = data.results[0].picture["large"];

	    		/* posts the picture to the site */
	    		$("#selfie-camera").html("<img src=" + facePic + ">");	    		

	    		/* because the call was successful, scan it with Face++ */
	    		evaluateImg();
	  		});

		}


		/* 

		 *	this function loops through the object keys of emotion
		 *	and returns the emotion with the highest value;

		 *	it is called after an image is successfully analyzed
		 *	Face++ .done()

		 *	inputs: [none]
		 *	return: string

		 */

		function feelings(Obje){

			/* create  variables that capture  values */
			/* -------------------------------------- */
			var emo = 0;

				/* loop through the returned keys */
				/* ------------------------------ */
				for (var key in Obje){

					/* compare emotional values */
					/* ------------------------ */
					switch( emo < Obje[key] ){

						case (true):

							/* make emo = key value */
							/* -------------------- */
							emo = Obje[key];

							/* set expression = key */
							/* -------------------- */
							exp = key
							break;

						case (false):

							/* make emo stay = emo */
							/* ------------------- */
							emo = emo;
							break;
						
						default:
							console.log("default");

					} /* switch */
				
				} /* for loop */

			/* return the facial expression */
			/* ---------------------------- */

			console.log(exp);

			displayActivityInfo(exp);
			return exp;

		} /* function */
>>>>>>> de67abae5405ca4c3d724090b55397e952ecfac5

		return {
		/* everything to be made public */
			wakeCamera: on,
			useCamera: capture,
			knockknock: whosThere,
		}

	}(); /* end IIFE */

/* imgSrc.wakeCamera(); */
/* imgSrc.useCamera(); */

$("#capture-btn").on("click", imgSrc.useCamera);
// $("#capture-btn").on("click", imgSrc.knockknock);

<<<<<<< HEAD
imgSrc.wakeCamera();
imgSrc.useCamera();

});
=======
}); /* ends the document ready */
>>>>>>> de67abae5405ca4c3d724090b55397e952ecfac5
