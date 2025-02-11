// Michael Tang 
// Game Name: Ember Control
// time taken 34 hrs

//...do something technically interesting? Are you particularly proud of a programming technique you implemented? Did you look beyond the class examples and learn how to do something new? (1)

// One technical aspect that I particually proud of programming was the implementation 
// of the Water Cannon using a particle emitter. Since the particle emitter can not be updated using the normal 
// create() method in the play scene, I had to figure out how to get the emitter to update to constantly track the 
// player character, but also aim to the mouse pointer position. To solve this I implemented Phaser's On Emit and 
// onUpdate functions in the particle emitter to update to the correct positions. 

//...have a great visual style? Does it use music or art that you're particularly proud of? Are you trying something new or clever with the endless runner form? (1)

// I am really proud of the game's cover scene art for the menu, gameover, and credits scene. I am not use to drawing 
// title screens in pixil art form , so I am really proud of how I was able to draw the titles to have the fire 
// leaping from the top of the text. I really love the way it brings the theme of the game to life. 



// specific credits: 
//background music: allworldmusic from Pixably
// ding sound: robinhood76 from freesound.org 
// error sound: distillerystudio from freesound.org 
// crash sound: HoBoTrails (Freesound) from Pixaby
// siren sound: From Pixabay
// truck sound : ibirdfilm (Freesound)from pixabay
// fire sound: MaxHammarback from pixabay
'use strict'
let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 875,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default: 'arcade',
        arcade:{
            debug: false
        }
       
    },
    scene: [Loading, Menu, Play, GameOver, Credits]

}

let game = new Phaser.Game(config)

let keyLEFT, keyRIGHT,keyWATER,keyEnter, keyReset, keyMenu, keyCredit
let w = game.config.width
let h = game.config.height
let centerY = game.config.height / 2
let centerX = game.config.width / 2
let gameSpeed = 1
let gameOver = false
//let borderUISize = game.config.height / 15
// let borderPadding = borderUISize / 3