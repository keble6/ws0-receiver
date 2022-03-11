input.onButtonPressed(Button.A, function () {
    serial.writeLine("Testing!")
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    serial.writeString("")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("start")
    basic.showString("start")
})
serial.writeLine("1")
radio.setGroup(1)
radio.setTransmitPower(7)
