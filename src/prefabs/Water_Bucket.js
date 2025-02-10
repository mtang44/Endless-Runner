class Water_Bucket extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame)
        
      
        scene.add.existing(this)
        //scene.physics.add.existing(this) 
        
        //this.body.setSize(this.width/2,this.height/2)
        //this.setImmovable()
        this.moveSpeed = 3
        this.validX = [w/4 + 50,w/2 -50, w/2 + 130 ]
       
}
update(){
    this.y += this.moveSpeed * gameSpeed
    if(this.y >  h + 100)
        {
            this.x = Phaser.Math.RND.pick(this.validX)
            this.y = Phaser.Math.Between(-500,-700)
        }
}
}