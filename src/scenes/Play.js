class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
    }
    create(){
        console.log('Scene:play')
        // create assets
        this.grass = this.add.tileSprite(0,0,960,640,'grass').setOrigin(0,0)
        this.grass.setScale(10)
        this.road = this.add.tileSprite(w/4,0,51,640,'road').setOrigin(0,0)
        this.road.setScale(10)
        
        //create player prefabs
        this.roadBlock = new Road_Block(this, w/4 + 15, 0,'road_block',0).setOrigin(0,0)
        this.roadBlock.setScale(2.5)
        this.roadBlock2 = new Road_Block(this,w/2 + 130,0,'road_block',0).setOrigin(0,0)
        this.roadBlock2.setScale(2.5)
        this.barrierGroup = this.add.group({
            runChildUpdate: true    // make sure update runs on group children
        });
        this.barrierGroup.add(this.roadBlock)
        this.barrierGroup.add(this.roadBlock2)
        this.water_bucket = new Water_Bucket(this,w/4 + 50 ,-300,'water_bucket',0).setOrigin(0,0)
        this.water_bucket.setScale(3)
        

        this.player = new Fire_Truck(this,w/2 - 25,h - 175,'fire_truck',0).setOrigin(0,0)
        this.player.setScale(2)

        this.house = new House(this, 100, -100, 'fire_house',0).setOrigin(0,0)
        this.house.setScale(5)
        this.house.setInteractive({
            draggable: true
        })
        // create background music
        this.sfxBackground = this.sound.add('sfx-background')
        this.sfxBackground.setLoop(true)
        this.sfxBackground.setVolume(.4)

        //create score UI
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 200
            }
            this.scoreDisplay = this.add.text(w - 205, 10, this.player.playerScore,scoreConfig)
            scoreConfig.fixedWidth = 0

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
        this.house.on('drag',(pointer,dragX, dragY)=>{
            if(this.player.water > 0){
            console.log("water detected")
            this.house.fire -= 2
            console.log(`fire level: ${this.house.fire}`)
            }
            else{
                console.log("no water")
            }
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
        this.sfxBackground.play()
    }
    update(){

        this.road.tilePositionY -= .8 * gameSpeed
        this.grass.tilePositionY-= .5 * gameSpeed
        this.house.update()
        this.water_bucket.update()
        this.roadBlock.update()
        this.roadBlock2.update()
        this.player.update()
        
        this.scoreDisplay.text = ("Score: " + Math.round(this.house.playerScore))
        

    }
    
}   