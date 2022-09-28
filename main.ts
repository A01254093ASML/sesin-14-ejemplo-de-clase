let Luz = 0
let Temperatura = 0
basic.forever(function () {
    Luz = input.lightLevel()
    Temperatura = input.temperature()
    if (Luz >= 130 && Temperatura >= 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
