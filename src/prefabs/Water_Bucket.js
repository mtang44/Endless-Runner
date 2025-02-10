class Water_Bucket extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame)
        
        scene.add.existing(this)
        this.moveSpeed = 7
        this.validX = [w/4 + 50,w/2 -50, w/2 + 130 ]
       
}
update(){
    this.y += this.moveSpeed * gameSpeed
    if(this.y >  h + 100)
        {
            this.x = Phaser.Math.RND.pick(this.validX)
            this.y = Phaser.Math.Between(-100,-600)
        }
}
}