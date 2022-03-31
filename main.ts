input.onButtonPressed(Button.A, function () {
    serial.writeLine("Testing!")
})
radio.onReceivedString(function (receivedString) {
    // Is this the dateTime message? If so then don't send "Enter"
    if (receivedString.charAt(receivedString.length - 1) == ",") {
        serial.writeString(receivedString)
    } else {
        serial.writeLine(receivedString)
    }
    serial.writeString("")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("start")
    basic.showString("start")
})
serial.writeLine("1")
radio.setGroup(1)
radio.setTransmitPower(7)
