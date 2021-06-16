radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(0, 0)
    let bufr = pins.createBuffer(1);
bufr.setUint8(0, receivedNumber);
serial.writeBuffer(bufr)
})
radio.onReceivedString(function (receivedString) {
    led.toggle(4, 4)
    serial.writeString(receivedString)
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
	
})
