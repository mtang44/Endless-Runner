class Loading extends Phaser.Scene{
    constructor(){
        super('loadingScene')

    }
preload(){
    //load images
    let loadingBar = this.add.graphics()
    this.load.on('progress', (value)=>{
        loadingBar.clear();
        loadingBar.fillStyle(0xFFFFFF,1)
        loadingBar.fillRect(0,centerY,w * value, 5)
    })
    this.load.on('complete',()=>{
        loadingBar.destroy();
    })
    this.load.image('grass','./assets/grass.png')
    this.load.image('road','./assets/road.png')
    this.load.image('water','./assets/water_bucket.png')
    this.load.spritesheet('fire_truck','./assets/fire_truck.png',{
        frameWidth: 15,
        frameHeight: 24,
        startFrame: 0,
        endFrame: 2
    })
    this.load.spritesheet('fire_house','./assets/fire_house.png',{
        frameWidth: 24,
        frameHeight: 32,
        startFrame: 0,

        endFrame: 2
    })
    // load audop
}
create(){
    console.log('Scene: load')
    this.scene.start('menuScene')
}


}