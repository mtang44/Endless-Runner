class Fire_Truck extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture, frame){
        super(scene,x,y,texture,frame)
        
        scene.add.existing(this)
        this.isFiring = false
        this.water = 100
        this.mouseActive = true
        game.input.mouse.capture = true
        this.anims.play('fire_truck_animation')
    }
    update(){

    }

}