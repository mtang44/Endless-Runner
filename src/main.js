// Michael Tang 
// Endless Runner
// time taken 7 hrs

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
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

let keyLEFT, keyRIGHT
let w = game.config.width
let h = game.config.height
let centerY = game.config.height / 2
let centerX = game.config.width / 2
//let borderUISize = game.config.height / 15
// let borderPadding = borderUISize / 3