scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level13`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f e e e f . . . . . 
    . . . . . f 1 f f e f . . . . . 
    . . . . . f 9 1 1 9 f . . . . . 
    . . . f f f 1 1 1 1 f f f . . . 
    . . . f . f 1 1 1 1 f . f . . . 
    . . . f . f 1 1 1 1 f . f . . . 
    . . . . . f 1 1 1 1 f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . f f f f . . . . f f f f . . 
    . . f 1 1 f . . . . f 1 1 f . . 
    . . f f f f . . . . f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setLife(1)
forever(function () {
    music.playMelody("E G F A E G A F ", 120)
})
