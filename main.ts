radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(0, 0)
    let bufr = pins.createBuffer(1);
bufr.setUint8(0, receivedNumber);
serial.writeBuffer(bufr)
})
radio.onReceivedString(function (receivedString) {
    led.toggle(4, 0)
    serial.writeString(receivedString)
})
radio.setTransmitPower(7)
radio.setFrequencyBand(7)
radio.setGroup(7)
radio.sendString("")
serial.redirect(
SerialPin.P2,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
	
})
