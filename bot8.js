var Gmailer = require("gmail-sender");
var five = require("johnny-five");
var Particle = require("particle-io");
var dash_button = require('node-dash-button');
var dash = dash_button("ec:0e:c4:73:db:76"); //Ian's Amazon Dash button MAC address
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

Gmailer.send({
		subject: "Demo Mail",
		from: "'Gmail Sender'",
		to: {
				email: "9082274582@vtext.com"
		},
	})
};
