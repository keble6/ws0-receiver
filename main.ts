// Simple test
input.onButtonPressed(Button.A, function () {
    serial.writeLine("Testing!")
})
radio.onReceivedString(function (receivedString) {
    // Is this the first (dateTime) message? If so then DON'T send "Enter" after the message
    // The first message has a comma at the end
    if (receivedString.charAt(receivedString.length - 1) == ",") {
        serial.writeString(receivedString)
    } else {
        // It's the second message, so DO send "Enter" after the message
        serial.writeLine(receivedString)
    }
    serial.writeString("")
})
// Send a radio message to start upload
input.onButtonPressed(Button.B, function () {
    radio.sendString("start")
    basic.showString("start")
})
// Set our team number!
let team = 1
serial.writeLine("" + (team))
radio.setGroup(team)
radio.setTransmitPower(7)
