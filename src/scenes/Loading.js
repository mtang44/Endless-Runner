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
        loadingBar.destroy()
    })

    // load audio
    this.load.audio('sfx-siren','./assets/siren.mp3')
    this.load.audio('sfx-drive','./assets/drive.mp3')
    this.load.audio('sfx-spray','./assets/spray.mp3')
    this.load.audio('sfx-background','./assets/background.mp3')
    this.load.audio('sfx-fire','./assets/fire_sound.mp3')
    this.load.audio('sfx-error','./assets/error.wav')

    // load menu
    this.load.image('fire_background','./assets/fire_background.png')
    this.load.image('menu','./assets/menu.png')
    this.load.image('grass','./assets/grass.png')
    this.load.image('road','./assets/road.png')
    this.load.image('water_bucket','./assets/water_bucket.png')
    this.load.image('water','./assets/water.png')
    this.load.image('water_bucket','./assets/water_bucket.png')
    this.load.image('house','./assets/house.png')
    this.load.image('road_block','./assets/road_block.png')
    this.load.spritesheet('fire_truck','./assets/fire_truck.png',{
        frameWidth: 45,
        frameHeight: 75,
        startFrame: 0,
        endFrame:4 
    })
    this.load.spritesheet('fire_house','./assets/fire_house.png',{
        frameWidth: 24,
        frameHeight: 32,
        startFrame: 0,

        endFrame: 2
    })

    // load audio
}
create(){
    console.log('Scene: load')
    this.scene.start('menuScene')
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


}