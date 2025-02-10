class Fire_Truck extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture, frame){
        super(scene,x,y,texture,frame)
        
        this.scene.add.existing(this)
        
        this.moveSpeed = 10
        this.isFiring = false
        this.water = 100
        this.mouseActive = true
        this.sfxSiren = scene.sound.add('sfx-siren')
        this.sfxSiren.setLoop(true)
        this.sfxSiren.setVolume(.3)
        this.sfxDrive = scene.sound.add('sfx-drive')
        this.sfxDrive.setLoop(true)
        this.sfxDrive.setVolume(1.2)
        this.sfxSpray = scene.sound.add('sfx-spray')
        this.sfxSpray.setVolume(.3)
        this.sfxError = scene.sound.add('sfx-error')
        this.sfxError.setVolume(.3)
        this.sfxError.setLoop(true)
        game.input.mouse.capture = true
        this.anims.play('fire_truck_animation')

        this.sfxSiren.play()
        this.sfxDrive.play()
        this.sfxError.setMute(true)
        this.sfxError.play()
        
        

        
    }
    update(){
        
        if(this.water > 0)
        {
            this.sfxError.setMute(true)
        }
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
            if(!this.isFiring)
            {
                this.sfxSpray.play()
            }
            this.isFiring = true
            this.water -= .4
            //console.log(`Water: ${this.water}`)
            
           // console.log(`mouse left active at x: ${game.input.mousePointer.x}, y: ${game.input.mousePointer.y}`)
        }
        else if(game.input.activePointer.leftButtonReleased() && this.isFiring){
            this.isFiring = false
            this.sfxSpray.stop()
            console.log('stopped firing')
        }
        else if(game.input.activePointer.leftButtonDown() && this.water <0 ){
            this.sfxError.setMute(false)
        }
        if(keyWATER.isDown){
           
            this.water = 100
           // console.log(`Water: ${this.water}`)
        }
        
        
    }
        
}
