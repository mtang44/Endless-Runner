 class GameOver extends Phaser.Scene{
    constructor(){
        super('gameOver')

    }
    create(){
        
        this.background = this.add.tileSprite(0,0,960,875,'fire_background').setOrigin(0,0)
        this.background.setScale(3)
        keyReset = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyMenu = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyCredit = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
        
        this.sfxFire = this.sound.add('sfx-fire')
        this.sfxFire.setLoop(true)
        this.sfxFire.setVolume(.3)
        this.sfxFire.play()
        this.gameoverscreen = this.add.sprite(75,0,'gameover').setOrigin(0,0)
        this.gameoverscreen.setScale(2)
    }
    update(){
        this.background.tilePositionX -= .5
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
        if(keyCredit.isDown)
            {
                this.gameoverscreen.setAlpha(0)
                this.scene.start('creditsScene')
                this.sfxFire.stop()
                gameOver = false
                gameSpeed = 1
    
            }
    }
}
