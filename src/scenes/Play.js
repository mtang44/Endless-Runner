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



    }
    update(){
        this.road.tilePositionY -= 1
        this.grass.tilePositionY-= .5
    }



}