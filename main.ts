radio.onReceivedNumber(function (receivedNumber) {
    o_missile = game.createSprite(receivedNumber, 0)
    while (o_missile.get(LedSpriteProperty.Y) < 4) {
        o_missile.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        if (sprite.isTouching(o_missile)) {
            radio.sendValue("hit", 1)
            game.gameOver()
            control.reset()
        }
    }
    o_missile.delete()
})
input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    missile = game.createSprite(sprite.get(LedSpriteProperty.X), 3)
    while (missile.get(LedSpriteProperty.Y) > 0) {
        missile.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    missile.delete()
    radio.sendNumber(4 - missile.get(LedSpriteProperty.X))
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "hit") {
        if (value == 1) {
            basic.showString("WIN")
            control.reset()
        }
    }
})
let missile: game.LedSprite = null
let o_missile: game.LedSprite = null
let sprite: game.LedSprite = null
radio.setGroup(2)
sprite = game.createSprite(2, 4)
