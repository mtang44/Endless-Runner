// Michael Tang 
// Endless Runner
// time taken 27 hrs
// background music: allworldmusic from Pixably
// ding sound: robinhood76 from freesound.org 
let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 875,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        defualt: 'arcade',
        debug: true
    },
    scene: [Loading, Menu, Play]

}

let game = new Phaser.Game(config)

let keyLEFT, keyRIGHT,keyWATER
let w = game.config.width
let h = game.config.height
let centerY = game.config.height / 2
let centerX = game.config.width / 2
let gameSpeed = 1
//let borderUISize = game.config.height / 15
// let borderPadding = borderUISize / 3