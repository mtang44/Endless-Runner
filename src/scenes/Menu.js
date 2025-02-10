class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }
    create(){
        console.log('Scene: menu')

    }
    update(){
        this.scene.start('playScene')
    }




}