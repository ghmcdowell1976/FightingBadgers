"use strict"
$(document).ready(function(){

	var imgSrc = function(){

		/* initialize global variables */
		/* --------------------------- */
		var prettyPic;
		var dataPic;

		/* a string defined by random face API */
		var facePic;

		/* collection(object) of emotions */
		var feelThat;
		var exp; 

		/* variables used by the internal camera */
		var video = document.querySelector('video');
		var canvas = document.querySelector('canvas');
		var ctx = canvas.getContext('2d');
		var localMediaStream = null;


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

		    	canvas.height=	300;
		    	canvas.width=	400;
		    	ctx.drawImage(video, 0, 0, 700, 400, 0, 0, 500, 300);

		    	/*
				...
				demonstration of how to size the canvas that hosts the phootgraph:
		  		ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
				...
		  		 */

				/* 
				...
				Chrome supports "image/webp"
				other browsers will fall back to image/png
				...
		  		 */
		     
		    	document.querySelector('video').src = canvas.toDataURL('image/webp');
		    }

		    /*
		    ...
		    under normal circumstance, the captured image from above would be sent
		    in this case, we will call a random face generator to use for Face ++
		    ...

		     */


			/*
			...
			this calls a random face generator that produces an image to be analyzed
			...
			 */
			whosThere();

		};

		function off(){
			/* turns camera off */
			console.log("camera is off");
		};


		function errorCallback(e) {
    		console.log(e);
  		}


		/* not showing vendor prefixes or code that works cross-browser */
		/* ------------------------------------------------------------ */
		navigator.getUserMedia({video: true}, function(stream) {
    		video.src = window.URL.createObjectURL(stream);
    		localMediaStream = stream;
  		}, errorCallback);



		/* once the image is captured, it gets analyzed here */
		/* ------------------------------------------------- */

		function evaluateImg(){

			/* calls to Face++ */
			/* here is the URLs to request information from Face++ */
			/* --------------------------------------------------- */
			var detects_url = "https://api-us.faceplusplus.com/facepp/v3/detect";

			/* necessary keys */
			var myKey = "M-I560kGVe7hslv83g_CTxfVNU1qtO3u";		/* api key */
			var mySec = "LZ7qc7rfLRPKuS1DxYrEeoi1jBQUcWD2";		/* api secret */

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
					// $("#selfie-camera").html("<img src=" + facePic + ">");

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
	    		/* ----------------------------------------------------------- */
	    		// console.log(data.results[0]);
	    		// console.log(data.results[0].picture);
	    		// console.log(data.results[0].picture["large"]);

	    		console.log("It's me, " + data.results[0].name["first"]);

	    		/* set the picture to someone who needs to use the app */
	    		facePic = data.results[0].picture["large"];

	    		/* posts the picture to the site */
	    		// $("#selfie-camera").html("<img src=" + facePic + ">");	    		

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
$("#results-btn").on("click", returnActivity);

}); /* ends the document ready */