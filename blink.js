var five = require("johnny-five");
var Particle = require("particle-io");
var board = new five.Board({
  io: new Particle({
    token: "54ee8a5229567665cffdbaef55be047a322188ab", //Ian's Particle Photon's token
    deviceId: "43002c000b51353335323535" //Ian's Particle Photon's deviceId
  })
});

board.on("ready", function() {
  console.log("Device Ready..");
  this.pinMode("D0", this.MODES.OUTPUT);

  var byte = 0;

  // This will "blink" the on board led
  setInterval(function() {
    this.digitalWrite("D7", (byte ^= 1));
  }.bind(this), 500);
});
