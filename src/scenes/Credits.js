class Credits extends Phaser.Scene{
    constructor(){
        super('creditsScene')
    }
    create(){
        this.background = this.add.tileSprite(0,0,960,875,'fire_background').setOrigin(0,0)
        this.background.setScale(3)
        this.credits = this.add.tileSprite(0,0,960,875,'credits').setOrigin(0,0)
        this.credits.setScale(2.3)
        keyReset = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyMenu = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        
        this.sfxFire = this.sound.add('sfx-fire')
        this.sfxFire.setLoop(true)
        this.sfxFire.setVolume(.3)
        this.sfxFire.play()

    }
    update(){
        this.credits.tilePositionY += .2
        if(keyReset.isDown){
            this.sfxFire.stop()
            gameOver = false
            gameSpeed = 1
        
        this.scene.start('playScene')
        }
        if(keyMenu.isDown)
        {
            this.scene.start('menuScene')
            this.sfxFire.stop()
            gameOver = false
            gameSpeed = 1

        }
    }
}