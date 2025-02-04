class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }
    create(){
        console.log('Scene: menu')
        this.anims.create({
        key:'fire_truck_animation',
        frames: this.anims.generateFrameNumbers('fire_truck', {start: 0, end:2, first: 0}),
         repeat: -1,
        frameRate: 15
        })
        this.anims.create({
            key: 'fireHouse',
            frames: this.anims.generateFrameNumbers('fire_house',{start:0,end:2,first:0}),
            repeat: -1,
            frameRage: 30

        })

    }
    update(){
        this.scene.start('playScene')
    }




}