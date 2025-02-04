class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
    }
    create(){
        console.log('Scene:play')
        this.grass = this.add.tileSprite(0,0,960,640,'grass').setOrigin(0,0)
        this.grass.setScale(10)
        this.road = this.add.tileSprite(w/4,0,51,640,'road').setOrigin(0,0)
        this.road.setScale(10)
       
        this.player = new Fire_Truck(this,w/2 - 25,h - 175,'fire_truck',0).setOrigin(0,0)
        this.player.setScale(5)
        
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    }
    update(){
        this.road.tilePositionY -= .8
        this.grass.tilePositionY-= .5
        this.player.update()
    }



}