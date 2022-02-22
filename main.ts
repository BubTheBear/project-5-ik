namespace SpriteKind {
    export const Chaser = SpriteKind.create()
    export const Runner = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Obstacle1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Obstacle)
    Obstacle1.setPosition(Runner1.x, Runner1.y)
    music2 = true
    while (true) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 120)
    }
    pause(30000)
    Obstacle1.destroy()
    music2 = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . b b b b b 9 9 9 9 9 9 9 b . . 
        . b d 5 b 9 9 9 9 9 9 9 9 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    Enemy1.follow(Chaser1, 105)
    Enemy1.setPosition(Runner1.x, Runner1.y)
    music2 = true
    while (true) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 120)
    }
    pause(5000)
    Enemy1.destroy()
    music2 = false
})
sprites.onOverlap(SpriteKind.Chaser, SpriteKind.Obstacle, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Chaser1, sprites.dungeon.stairNorth)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    scaling.scaleByPercent(Runner1, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Chaser, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Chaser1, sprites.dungeon.stairNorth)
    info.changeLifeBy(-1)
})
info.player2.onLifeZero(function () {
    scaling.scaleByPercent(Chaser1, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Runner, SpriteKind.Chaser, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Runner1, sprites.dungeon.stairEast)
    info.player2.changeLifeBy(-1)
})
let Enemy1: Sprite = null
let music2 = false
let Obstacle1: Sprite = null
let Runner1: Sprite = null
let Chaser1: Sprite = null
let list: number[] = []
let numofletters = game.askForNumber("Number of letters in your name Chaser?", 2)
if (10 <= numofletters) {
    game.splash("My, my, what a long name you have.")
} else if (3 >= numofletters) {
    game.splash("My, my what a short name that is.")
}
let Name = game.askForString("What is your name Chaser?", numofletters)
let numoflettersinrunnername = game.askForNumber("Number of letters in your name Runner?", 2)
if (10 <= numoflettersinrunnername) {
    game.splash("My, my, what a long name you have.")
} else if (3 >= numoflettersinrunnername) {
    game.splash("My, my what a short name that is.")
}
let Name_of_Runner = game.askForString("What is your name Runner?", numoflettersinrunnername)
game.splash("Hello Runner " + Name_of_Runner + ", and Chaser " + Name + ".")
game.splash("Runner instructions: You are to run from the slightly faster chaser and avoid getting caught, you can summon obstacles and allies to help you.")
game.splash("Chaser instructions: You are to chase the slightly slower runner, you will also have to avoid the obstacles and allies if you want to survive.")
let text_list = [
"Yay, one of you is going to win.",
"Who will lose?",
"Who will win?",
"Aww, one of you is going to lose."
]
game.splash(list[randint(0, 3)])
tiles.setCurrentTilemap(tilemap`level1`)
Chaser1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Chaser)
Runner1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Runner)
tiles.placeOnRandomTile(Runner1, sprites.dungeon.stairEast)
controller.player2.moveSprite(Chaser1, 100, 100)
info.player2.setLife(3)
scene.cameraFollowSprite(Chaser1)
controller.moveSprite(Runner1, 90, 90)
scene.cameraFollowSprite(Chaser1)
tiles.placeOnRandomTile(Chaser1, sprites.dungeon.stairNorth)
info.setLife(3)
