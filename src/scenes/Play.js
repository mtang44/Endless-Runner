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
        this.house = new House(this, 100, 50, 'fire_house',0).setOrigin(0,0)
        this.house.setScale(5
        )
        this.player = new Fire_Truck(this,w/2 - 25,h - 175,'fire_truck',0).setOrigin(0,0)
        this.player.setScale(2)
        
        // create particle emitter

        const emitters = this.add.particles(0,0,'water',{
            emitting: false,
            speed: { min: 50, max: 200 },
            advance: 2000,
            lifespan: 500,
            scale: { start: .7, end: 1.3},
            sortOrderAsc: true,
            blendMode:'ADD',
            
            color: [ 0x2d1fab, 0x296cd9, 0x4474c2, 0x296cd9 ],
            x:{
                onEmit:()=>{
                    return this.player.x +45
                }
            },
            y:{
                onEmit:()=>{
                    return this.player.y + 20
                }
            },
            moveToX:{
                onEmit:() =>{
                    return game.input.mousePointer.x 
                },
                onUpdate: () => {
                    return game.input.mousePointer.x + Phaser.Math.Between(-25, 30)
                }
            },
            moveToY:{
                onEmit:() =>{
                    return game.input.mousePointer.y
                },
                onUpdate: () => {
                    return game.input.mousePointer.y + Phaser.Math.Between(-25, 40)
                }
            },

        })
        this.input.on('pointerdown', pointer => {

            if(this.player.water > 0){
            emitters.emitting = true
            }
            else{
            emitters.emitting = false
            }


        })
        this.input.on('pointerup', pointer => {

            emitters.emitting = false

        })
        
        //emitters.setPosition(this.player.x + 40,this.player.y + 30)
        // end of particle emitter
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keyWATER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

    }
    update(){

        this.road.tilePositionY -= .8
        this.grass.tilePositionY-= .5
        this.house.update()
        this.player.update()


    }
}