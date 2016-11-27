var Gmailer = require("gmail-sender");
var five = require("johnny-five");
var Particle = require("particle-io");

var board = new five.Board({
  io: new Particle({
    token: "54ee8a5229567665cffdbaef55be047a322188ab", //Ian's Particle Photon's token
    deviceId: "43002c000b51353335323535" //Ian's Particle Photon's deviceId
  })
});

Gmailer.options({
	smtp: {
		service: "Gmail",
		user: "moritz.ian@gmail.com",
	  pass: "cvgdtovddsivyovz",
	}
});

/*
BEGIN
*/
board.on("ready", function(){

var servo = new five.Servo.Continuous("D0");

var lcd = new five.LCD({
    pins: ["D7", "A5", "A4", "D5", "D2", "D3"],
    backlight: 6,
    rows: 2,
    cols: 16
  });

	// function open(){
	//   servo.cw(1);
	//   console.log ("Flower OPENING");
	// 	}

	function close(){
	  servo.ccw(1); //Slow it down
	  console.log ("Flower CLOSING");
		}

	function stop(){
		servo.stop(); //Slow it down
		console.log ("Complete");
		}


	bloom();
	// {
	// 	console.log("The flowering is blooming!");
	// }; //Amazon dash button
 // quotes about love
 function message(){

 }

	function bloom(){
		servo.cw(1);
		console.log ("Flower OPENING");
		console.log(new Date().toString());
		lcd.cursor(0, 0).print("Ian was thinking of you!");
		lcd.cursor(1, 0).print("Love delivered @ 10:00");
		setTimeout(stop, 1000);

		// Gmailer.send({
		// 	subject: "Demo Mail",
		// 	from: "Ian Moritz",
		// 	to: {
		// 			email: "9082274582@vtext.com"
		// 	},
		// })
	}

	function reset(){
		lcd.clear().off();
		var now = new Date();
			var millisTill1150 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
				if (millisTill10 < 0) {
     			millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
				}
		setTimeout(function(close){alert("It's 10am!")}, millisTill10);
	}
});
