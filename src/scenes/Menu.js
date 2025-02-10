class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }
    create(){
        console.log('Scene: menu')
        
        this.background = this.add.tileSprite(0,0,960,875,'fire_background').setOrigin(0,0)
        this.background.setScale(3)
        this.menu = this.add.sprite(75,0,'menu').setOrigin(0,0)
        this.menu.setScale(2)
        this.sfxFire = this.sound.add('sfx-fire')
        this.sfxFire.setLoop(true)
        this.sfxFire.setVolume(.2)
        this.sfxFire.play()
        
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }
    update(){
        this.background.tilePositionX += .5
        if(Phaser.Input.Keyboard.JustDown(keyEnter)){
            this.sfxFire.stop()
            this.scene.start('playScene')
        }
    }




}