var five = require("johnny-five");
var Particle = require("particle-io");
var prompt = require("prompt");

var board = new five.Board({
  io: new Particle({
    token: "54ee8a5229567665cffdbaef55be047a322188ab", //Ian's Particle Photon's token
    deviceId: "43002c000b51353335323535" //Ian's Particle Photon's deviceId
  })
});

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: ["D7", "A5", "A4", "D5", "D2", "D3"],
    backlight: 6,
    rows: 2,
    cols: 16
  });

lcd.useChar("heart");

//counter

lcd.cursor(0, 0).print(line1);
lcd.cursor(1, 0).print(line2);


  // this.repl.inject({
  //   lcd: lcd
  // });
});
