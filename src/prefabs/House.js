class House extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame)

        scene.add.existing(this)
        this.burning = true
        this.moveSpeed = 3
        this.anims.play('fireHouse')
        this.validX = [50,800]
    }
    update(){
        this.y += this.moveSpeed
        if(this.y > w + 100)
        {
            this.x = Phaser.Math.RND.pick(this.validX)
            this.y = -100
        }
    }
}