class Fire_Truck extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture, frame){
        super(scene,x,y,texture,frame)
        
        scene.add.existing(this)
        this.moveSpeed = 20
        this.isFiring = false
        this.water = 100
        this.mouseActive = true
        game.input.mouse.capture = true
        this.anims.play('fire_truck_animation')
        
    }
    update(){
        if(keyLEFT.isDown && keyRIGHT.isDown){
            // do nothing
        }
        else if(keyLEFT.isDown && this.x > 255){
            this.x -= this.moveSpeed
        }
        else if(keyRIGHT.isDown && this.x < 655){
            this.x += this.moveSpeed
           
        }
        if(game.input.activePointer.leftButtonDown() && this.water > 0){
            this.water -= 1
            console.log(`Water: ${this.water}`)
           // console.log(`mouse left active at x: ${game.input.mousePointer.x}, y: ${game.input.mousePointer.y}`)
        }
        if(keyWATER.isDown){
            this.water = 100
            console.log(`Water: ${this.water}`)
        }
        
    }
        
}
