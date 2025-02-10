class House extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame)

        scene.add.existing(this)
        this.playerScore = 0
        this.burning = true
        this.alreadyScored = false
        this.fire = 100
        this.moveSpeed = 4
        this.anims.play('fireHouse')
        this.validX = [50,800]
        this.sfxFire = scene.sound.add('sfx-fire')
        this.sfxFire.setLoop(true)
        this.sfxFire.setVolume(.3)
        

        this.sfxFire.play()

    }
    update(){
        this.playerScore += .01
        //console.log(Math.round(this.playerScore))
        this.y += this.moveSpeed 
            if(this.y > h)
            {
            if(!this.alreadyScored)
            {
                this.playerScore -= 5
            }   
            gameSpeed += .05
            this.sfxFire.stop()
                this.fire = 100
                this.alreadyScored = false
                this.burning = true
                this.x = Phaser.Math.RND.pick(this.validX)
                this.y = Phaser.Math.Between(-100,-600)
                this.anims.play('fireHouse')
                this.sfxFire.play()
                console.log(this.playerScore)
            }
        if(this.fire < 0)
        {
           this.sfxFire.stop()
           this.burning = false
           this.setTexture('house')
        }
        if(!this.burning && !this.alreadyScored)
            {
                this.playerScore+= 10
                this.alreadyScored = true
            }
    }
}