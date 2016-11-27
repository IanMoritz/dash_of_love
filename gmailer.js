var Gmailer = require("gmail-sender");
var five = require("johnny-five");
var Particle = require("particle-io");

Gmailer.options({
	smtp: {
		service: "Gmail",
		user: "moritz.ian@gmail.com",
	  pass: "cvgdtovddsivyovz",
	}
});

Gmailer.send({
	subject: "Demo Mail",
	from: "Ian Moritz",
	to: {
			email: "9082274582@vtext.com"
	},
})
