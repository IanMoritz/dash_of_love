var five = require("johnny-five");
var Particle = require("particle-io");
var keypress = require("keypress");

keypress(process.stdin);

var board = new five.Board({
  io: new Particle({
    token: "54ee8a5229567665cffdbaef55be047a322188ab", //Ian's Particle Photon's token
    deviceId: "43002c000b51353335323535" //Ian's Particle Photon's deviceId
  })
});

board.on("ready", function() {

  console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");

  var servo = new five.Servo.Continuous("D0");

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {
      console.log("Quitting");
      process.exit();
    } else if (key.name === "up") {
      console.log("CW");
      servo.cw();
    } else if (key.name === "down") {
      console.log("CCW");
      servo.ccw();
    } else if (key.name === "space") {
      console.log("Stopping");
      servo.stop();
    }
  });
});
