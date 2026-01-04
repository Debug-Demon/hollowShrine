/*
  VERSION - 1
  DATE - 4/1/2026
  
  
  BUGS: 
    NONE
  
  ---------------------------------FUTURE UPGRADES:--------------------------------
  -MAKE THE GAME BEATABLE:
      -I WANT TO ADD ANOTHER PHASE TO THE GAME, AFTER SOME TIME OF CLICKING, I WANT THE GAME TO TRANSITION       INTO A STORY BASED GAME THAT REVEALS THE LORE BEHIND THE GAME. ESPECIALLY THE THING TRAPPED IN THE         BLACKHOLE 
    
  -MORE SUMMONS
    -POSSIBLY A NEW RARITY
    -DEFINITELY THE TITAN SPRITE
  -POWER UPS.
    -DOUBLE CLICKS
    -DOUBLE LUCK
    -AUTOCLICKER
  -POSSIBLY ADD A MULTIPLAYER FEATURE
  -MAKE THE CODE MORE SMALL. USE MORE FOR LOOPS
  
  DESCRIPTION - THIS IS A CLICKING GAME SIMILAR TO COOKIE CLICKER BUT WITH MORE LORE AND DIFFERENT FEATURES. YOU HAVE TO CLICK THE SHRINE TO EARN ESSENCE. THEN YOU HAVE TO USE THE ESSENCE FOR UPGRADES OR SUMMONS
  
  ______________________________________________REFERENCES______________________________________
https://editor.p5js.org/mrbombmusic/sketches/eYWdNsYFC => isPlaying
 SPRITE SHEETS:
                https://www.youtube.com/watch?v=T-HGdc8L-7w&pp=ygUSY29kaW5nIHRyYWluIGNhbHNz0gcJCTwKAYcqIYzv
                https://www.youtube.com/watch?v=eE65ody9MdI&pp=ygUSc3ByaXRlIHNoZWV0cyBwNWpz

SPREAD OPERATOR:
  https://www.youtube.com/watch?v=RuDdltsfaVc

CUSTOM LOADING SCREEN:
  https://stackoverflow.com/questions/77782145/how-to-customize-p5-js-default-loading-animation-in-preload

styles;
  https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
----------------------------------------------SELF ASSESMENT----------------------------------------------
 I BELIEVE THAT IS SOULD GET A FOUR PLUS BECAUSE:
   -I HAVE A VERY GOOD TUTORIAL THAT IS ENGAGING
   -I USED A LOT OF LVL 4+ THINGS LIKE:
     -ARRAYS
     -CLASSES
     -IS PLAYING
     -ADVANCED HTML ELEMENTS MANIPULATION
     -P5JS MATH (FLOOR)
     -VARIETY OF SCOPE (LOCAL AND GLOBAL VARIABLES)
     -CURSORS
     -2D ARRAYS (I USED SPREAD, ..., INSTEAD OF THE METHOD ON BRIGHTSPACE BECAUSE I FIND THIS EASIER)
     -LIBRARIES
     -CUSTOM LOADING SCREEN
     -LOCAL STORAGE
  -I ALSO BELIEVE THAT MY CODE IS, MOSTLY, EASY TO READ HOWEVER THERE ARE SOME REPETITIVE PARTS I DIDN'T KNOW WHAT TO DO WITH.
  - MY GAME IS FUN
  - THERE IS LORE
  - THERE IS A LUCK BASED ELEMENT WHICH MAKES IT MORE FUN
  - IT ISN'T A DIRECT COPY OF COOKIE CLICKER
  - IT IS AN ORIGINAL COMBINATION
  - I USED A WIDE VARIETY OF DIFFERENT CODING ELEMENTS LIKE LOOPS, CONDITIONAL STATEMENTS, LOCAL STORAGE, BUILT IN P5JS FUNCTIONS.
  -MUSIC IS THERE
  -THERE ARE ANIMATED COMPONENTS
     
      
*/

// ______________________________________VARIABLES_________________________


let shrine
let gamestate
let score
let shopBg
let essenceFont
let shopWidget
let shopToMain
let bgMusicShrine
let bgMusicShop
let bgMusicMenu

// Cursor
let bestCursor 
let cursorArray

// upgrade Price Storing Variables
let ritualPrice
let offerPrice
let cultistPrice
let greedPrice

let ritualBase
let offerMultiplier


// Shop Stuff
let ritualPrices
let ritualValue
let offerPrices
let offerValue
let cultistPrices
let cultistValues
let greedPrices
let greedValues
let cursorT0, cursorT1, cursorT2, cursorT3, cursorT4, cursorT5, cursorT6, cursorT7, cursorT8, cursorT9, cursorT10
let ritualShow
let offerShow
let cultistShow
let greedShow

// TIERS
let tierRitual, tierOffer, tierCultist, tierGreed

// Different Click Multiplier Variables
let base
let offerMultipliers
let cultistModifiers
let greedMultipliers
let cultistModifier
let greedMultiplier


// ritual sounds
let ritualT1Sound, ritualT2Sound, ritualT3Sound, ritualT4Sound, ritualT5Sound, ritualT6Sound, ritualT7Sound, ritualT8Sound, ritualT9Sound, ritualT10Sound 

// Menu stuff
let menuBg

// TUTORIAL
let tArrayMark
let tArray
let  t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38

let tClick
let tMusic


// Buttons

let settings

let optionsButton
let playButton
let loadProgressButton
let exitButton
// sprite sheets
let cultistSpriteArray
let T1idleSheet, T2idleSheet, T3idleSheet, T4idleSheet, T5idleSheet, T6idleSheet, T7idleSheet, T8idleSheet, T9idleSheet, T10idleSheet

let cultistSprite
let mouseOn = true

// SUMMON SPRITES:
// TOKENS
    // COMMON
let zombie1SpriteToken
let zombie2SpriteToken
let zombie3SpriteToken
let spearSpriteToken

    // UNCOMMON
let minotaur1SpriteToken
let minotaur2SpriteToken
let minotaur3SpriteToken
let skeletonSpriteToken

// RARE
let ravenSpriteToken
let mushroomSpriteToken
let goblinSpriteToken

    // LEGENDARY
let goblinBeastSpriteToken
let ancientSkeletonSpriteToken
let goblinRiderSpriteToken
let necromancerSpriteToken

    // MYTHIC
let kitsuneSpriteToken
let eyeSpriteToken
let knightSpriteToken
let flareSpriteToken

    // GODLY
let skeletonGeneralSpriteToken
let plant1SpriteToken
let archerSpriteToken
let skeletonKingSpriteToken

    // FORBIDDEN
let flameSpriteToken
let lightSpriteToken
let magicSpriteToken
// --------------------------------------------
let summonCenter
// COMMON
let zombie1
let zombie2
let zombie3
let attack2

// UNCOMMON
let minotaur1
let minotaur2
let minotaur3
let skeleton

// RARE
let raven
let mushroom
let goblin

// LEGENDARY
let goblinBeast
let ancientSkeleton
let goblinRider
let necromancer

// MYTHIC
let kitsune
let eye
let knight
let idle

// GODLY
let skeletonGeneral
let plant1Sheet
let archerSheet
let skeletonKing

// FORBIDDEN
let titanGif
let flame
let light
let magic

// SUMMON INV BOX:
// COMMON
let zombie1Box
let zombie2Box
let zombie3Box
let spearBox

// UNCOMMON
let minotaur1Box
let minotaur2Box
let minotaur3Box
let skeletonBox

// RARE
let ravenBox
let mushroomBox
let goblinBox

// LEGENDARY
let goblinBeastBox
let ancientSkeletonBox
let goblinRiderBox
let necromancerBox

// MYTHIC
let kitsuneBox
let eyeBox
let knightBox
let flareBox

// GODLY
let skeletonGeneralBox
let plant1Box
let archerBox
let skeletonKingBox

// FORBIDDEN
let titanBox
let flameBox
let lightBox
let magicBox


// summon designs
let eggPrices
let eggNames


// ---------------------------------------------CLASSES ------------------------------------------------
/*      CLASS HEADER

CLASS NAME: 
-Sprite

DESCRIPTION:
-This class handles sprite sheet animations. 
- It allows an image sprite sheet with multiple square frames to be animated by going through the frames.

ARGUMENTS (constructor):
- sheet: p5.Image → The sprite sheet image.
- x: number → The x-coordinate where the animation will be.
- y: number → The y-coordinate where the animation will be.
- scale: number → The scale factor to resize the sprite frames.

METHODS:
- make(): Draws the current frame of the sprite on the canvas and advances the frames for animation.
RETURNS:
-none



*/

class Sprite { // sprite sheet animation
  constructor(sheet, x, y, scale) {
    this.image = sheet   // the image
    this.x = x // x of the img
    this.y = y // y of the img
    this.scale = scale // scale factor

    this.size = sheet.height // side lenght of each frame
    this.frame = 0 // keeps a track of which frame its on
    this.totalFrames = sheet.width / sheet.height // each frame is a square. So square num.is width/height  
    this.inSummonCenter = false
  }

  make() {
    image(
      this.image, //Img file
      this.x, // X value
      this.y, // Y value
      this.size * this.scale, // x- size multiplied by scale factor
      this.size * this.scale, // y- size multiplied by scale factor
      this.size * floor(this.frame), // x value of where to crop from. Floor is there to ensure that it is a good frame not mixed up frames.
      0, // Y value of where to crop from
      this.size, //how far in x
      this.size // how far in y
    )

    this.frame += 0.1// moves the frame by 0.1, but the floor ensures that it stays on one frame for some time and then move on
    if (this.frame >= this.totalFrames) { // ensures that it does not go outside of the frame
      this.frame = 0
    }
  }
}
/*      CLASS HEADER

CLASS NAME: 
-InventoryBox

DESCRIPTION:
-creates boxes in which the animation will play for the summons
ARGUMENTS (constructor):
- x: number → The x-coordinate where the animation will be.
- y: number → The y-coordinate where the animation will be.
- sprite: image → the sprite class duplicates.

METHODS:
- make(): Draws the current frame of the sprite in the box and advances the frame for animation.
RETURNS:
-none



*/
class InventoryBox {
  constructor(x, y, sprite) {
    this.x = x
    this.y = y
    this.sprite = sprite
    this.amount = 0
    this.size = 80
    this.stroke = ("red")
  }

  make() {
    fill(80, 0, 0, 200)
    stroke(this.stroke)
    strokeWeight(3)
    rect(this.x, this.y, this.size, this.size, 10)

    // draw the sprite animation frame
    
    image(
      this.sprite.image, //Image
      this.x + 5, //X coordinate
      this.y + 5, // y coordinate
      this.size - 10, // x dimension
      this.size - 10, // y dimension
      this.sprite.size * floor(this.sprite.frame), // starting X for the crop
      0, // starting y for the crop
      this.sprite.size, // x dimensions for the crop
      this.sprite.size // y dimensions for the crop
    )
//     same logic from sprite class
    this.sprite.frame += 0.17
    if (this.sprite.frame >= this.sprite.totalFrames) {
      this.sprite.frame = 0
    }

    // draw the amount below
    noStroke()
    fill(255)
    textSize(12)
    text(this.amount, this.x + this.size / 2, this.y + this.size + 12)
  }
}




// --------------------------------------------------------------------------------------------------------
function preload() {
// GAMESTATE SWITCH BUTTON
  switchButton = createButton("TRAVEL")
  shrine = loadImage("ClickerShrine.png.png") 
  shopBg = loadImage("shopBgs.gif")
  shrineBg = loadImage("shrineBgs-1.gif")
  shopWidget = loadImage("ShopWidget.png")
// Cursors AKA rituals
  cursorT1 = loadImage("ritualKnife.png")
  cursorT2 = loadImage("ritualStaff.png")
  cursorT3 = loadImage("ritualSkull.png")
  cursorT4 = loadImage("ritualGrimoire.png")
  cursorT5 = loadImage("ritualPendant.png")
  cursorT6 = loadImage("ritualIdol.png")
  cursorT7 = loadImage("ritualScythe.png")
  cursorT8 = loadImage("ritualShell.png")
  cursorT9 = loadImage("ritualScroll.png")
  cursorT10 = loadImage("ritualRing.png")
//   Menu images
  menuBg = loadImage("menuBG.gif")
  playsButton = loadImage("playPNG.png")
  statue = loadImage("statue.png")
//   TUTORIAL IMAGES
  t1  = loadImage("t1.gif")
  t2  = loadImage("t2.gif")
  t3  = loadImage("t3.gif")
  t4  = loadImage("t4.gif")
  t5  = loadImage("t5.jpg")
  t6  = loadImage("t6.jpg")
  t7  = loadImage("t7.gif")
  t8  = loadImage("t8.jpg")
  t9  = loadImage("t9.jpg")
  t10 = loadImage("t10.gif")
  t11 = loadImage("t11.jpg")
  t12 = loadImage("t12.jpg")
  t13 = loadImage("t13.jpg")
  t14 = loadImage("t14.jpg")
  t15 = loadImage("t15.jpg")
  t16 = loadImage("t16.jpg")
  t17 = loadImage("t17.gif")
  t18 = loadImage("t18.jpg")
  t19 = loadImage("t19.jpg")
  t20 = loadImage("t20.jpg")
  t21 = loadImage("t21.jpg")
  t22 = loadImage("t22.jpg")
  t23 = loadImage("t23.jpg")
  t24 = loadImage("t24.gif")
  t25 = loadImage("t25.gif")
  t26 = loadImage("t26.jpg")
  t27 = loadImage("t27.jpg")
  t28 = loadImage("t28.gif")
  t29 = loadImage("t29.jpg")
  t30 = loadImage("t30.jpg")
  t31 = loadImage("t31.jpg")
  t32 = loadImage("t32.jpg")
  t33 = loadImage("t33.jpg")
  t34 = loadImage("t34.jpg")
  t35 = loadImage("t35.jpg")
  t36 = loadImage("t36.jpg")
  t37 = loadImage("t37.gif")
  t38 = loadImage("t38.gif")
  
// tutorial sound
  tMusic = loadSound("tutorialBgMusic.m4a")
  tClick = loadSound("tClick.mp3")
  
  //   fonts
  essenceFont = loadFont("FEASFBRG.TTF")

  //   TIER
  tierRitual = 1
  tierOffer = 1
  tierCultist = 1
  tierGreed = 1

  //   buttons
  eraseButton = createButton("ERASE PROGRESS")
  switchButton.hide()
  switchButton.style('background-color', '#1a1a1a') // bg color
  switchButton.style('color', '#f5f5f5') // text color
  switchButton.style('font-family', 'monospace') // font
  switchButton.style('font-size', '12px') // size
  switchButton.style('border', '2px solid #660000') //border: thickness, type, color
  switchButton.style('border-radius', '4px') // curvature
  switchButton.style('padding', '10px 20px') // space around text (box size)
  switchButton.style('cursor', 'pointer') // cursor

// hover effect using mouseOver and mouseOut
  switchButton.mouseOver(hover)
  switchButton.mouseOut(notHover)


  
//   music
  bgMusicShrine = loadSound("bgMusicShrine.mp3")
  bgMusicMenu = loadSound("Bgmusic.mp3")
//     ritual sounds
  ritualT1Sound = loadSound("ritualT1Sound.mp3")
  ritualT2Sound = loadSound("ritualT2Sound.mp3")
  ritualT3Sound = loadSound("ritualT3Sound.mp3")
  ritualT4Sound = loadSound("ritualT4Sound.mp3")
  ritualT5Sound = loadSound("ritualT5Sound.mp3")
  ritualT6Sound = loadSound("ritualT6Sound.mp3")
  ritualT7Sound = loadSound("ritualT7Sound.mp3")
  ritualT8Sound = loadSound("ritualT8Sound.mp3")
  ritualT9Sound = loadSound("ritualT9Sound.mp3")
  ritualT10Sound = loadSound("ritualT10sound.mp3")
// sprite sheets
  T1idleSheet = loadImage("idleSheet.png")
  T2idleSheet = loadImage("cultistT2idle.png")
  T3idleSheet = loadImage("cultistT3idle.png")
  T4idleSheet = loadImage("cultistT4idle.png")
  T5idleSheet = loadImage("cultistT5idle.png")
  T6idleSheet = loadImage("cultistT6idle.png")
  T7idleSheet = loadImage("cultistT7idle.png")
  T8idleSheet = loadImage("cultistT8idle.png")
  T9idleSheet = loadImage("cultistT9idle.png")
  T10idleSheet = loadImage("cultistT10idle.png")
  
//   SHOP SOUNDS
  shopBgMusic = loadSound("shopBG.mp3")
  fire = loadSound("fire.mp3")
//   --------------------SUMMONS----------------------------
    // COMMON
  zombie1 = loadImage("zombie1.png")
  zombie2 = loadImage("zombie2.png")
  zombie3 = loadImage("zombie3.png")
  attack2 = loadImage("Attack2.png")

  // UNCOMMON
  minotaur1 = loadImage("Minotaur1.png")
  minotaur2 = loadImage("monotaur2.png")
  minotaur3 = loadImage("minotaur3.png")
  skeleton = loadImage("skeleton.png")

  // RARE
  raven = loadImage("raven.png")
  mushroom = loadImage("mushroom.png")
  goblin = loadImage("goblin.png")

  // LEGENDARY
  goblinBeast = loadImage("goblinBeast.png")
  ancientSkeleton = loadImage("ancientSkeleton.png")
  goblinRider = loadImage("goblinRider.png")
  necromancer = loadImage("necromancer.png")

  // MYTHIC
  kitsune = loadImage("kitsune.png")
  eye = loadImage("eye.png")
  knight = loadImage("knight.png")
  idle = loadImage("Idle.png")

  // GODLY
  skeletonGeneral = loadImage("skeletonGeneral.png")
  plant1Sheet = loadImage("plant1Sheet.png")
  archerSheet = loadImage("archerSheet.png")
  skeletonKing = loadImage("skeletonKing.png")

  // FORBIDDEN
  titanGif = loadImage("titanGif.gif")
  flame = loadImage("Flame.png")
  light = loadImage("Light.png")
  magic = loadImage("Magic.png")
// ________________other stuff_________________________
 

}

function setup() {  
  tArrayMark = 0
  createCanvas(800, 800)
  switchButton.show()
  eraseButton.show()
  score = 0
  eraseButton.mousePressed(gameDelete)
  switchButton.mousePressed(toNav)
  base = 1
  baseAdd = 0
  multiplier = 1
  multiplierBoost = 1
  offerMultiplier = 1
  greedMultiplier = 1
  cultistModifier = 0
  bestCursor = cursorT1
  bgMusicShrine.stop()
  
  gamestate = "menu"
  substate = "center"
  summonCenter = []
  ritualPrice = 20
  offerPrice = 50
  cultistPrice = 200

  ritualShow = 1
  offerShow = 1 
  cultistShow = 1 
  greedShow = 1
  
  
  statue1 = createImg("statue.png", "")
  statue2 = createImg("statue.png", "")
  settings = createImg("settings-1.gif", '')
  playText = createP("PLAY")
  tutorialText = createP("TUTORIAL")
  settings.hide()
  statue1.hide()
  playText.hide()
  statue2.hide()
  tutorialText.hide()
  
    zombie1SpriteToken = 0
  zombie2SpriteToken = 0
  zombie3SpriteToken = 0
  spearSpriteToken = 0

  minotaur1SpriteToken = 0
  minotaur2SpriteToken = 0
  minotaur3SpriteToken = 0
  skeletonSpriteToken = 0

  ravenSpriteToken = 0
  mushroomSpriteToken = 0
  goblinSpriteToken = 0

  goblinBeastSpriteToken = 0
  ancientSkeletonSpriteToken = 0
  goblinRiderSpriteToken = 0
  necromancerSpriteToken = 0

  kitsuneSpriteToken = 0
  eyeSpriteToken = 0
  knightSpriteToken = 0
  flareSpriteToken = 0

  skeletonGeneralSpriteToken = 0
  plant1SpriteToken = 0
  archerSpriteToken = 0
  skeletonKingSpriteToken = 0

  flameSpriteToken = 0
  lightSpriteToken = 0
  magicSpriteToken = 0
  
  
  loadOnce = true
  
  

//   // ------------------------------------ARRAYS------------------------------------------
// Ritual arrays
  ritualPrices = [0, 20, 100, 1+"k", 20+"k", 50+"k", 100+"k", 500+"k", 750+"k", 1+"M", 1.25+"M", "NONE"]
  ritualValue = [0,20,100,1000,20000,50000,100000,500000,750000,1000000,1250000]
  ritualBase = [0,1,2,3,5,8,12,18,25,35,50] 
  // Offer arrays
  offerPrices = [0, 100, 1 +"k", 50+"k", 100+"k", 750+"k", 1+"M", 1.5+"M", 7+"M", 8+"M", 20+"M", "NONE"]
  offerValue = [0,100,1000,50000,100000,750000,1000000,1500000,7000000,8000000,20000000]
  offerMultipliers = [0,1,2,3,5,7,10,15,20,30,50,75] 

  // Cultist arrays
  cultistPrices = [0, 500, 1+"k", 5+"k", 10+"k", 25+"k", 50+"k", 100+"k", 250+"k", 500+"k", 1+"M", "NONE"]
  cultistValues = [0, 500, 1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000]
  cultistModifiers = [0,0,1,2,3,5,8,12,18,25,35,50] 

  // Greed arrays
  greedPrices = [0, 300, 1+"k", 10+"k", 25+"k", 50+"k", 100+"k", 500+"k", 1+"M", 5+"M", 10+"M", "NONE"]
  greedValues = [0, 300, 1000, 10000, 25000, 50000, 100000, 500000, 1000000, 5000000, 10000000]
  greedMultipliers = [0,1,2,3,5,7,10,15,20,30,50] 
  
//   CURSOR TIERS IMAGES
  cursorArray = [0,cursorT1, cursorT2, cursorT3, cursorT4, cursorT5, cursorT6, cursorT7, cursorT8, cursorT9, cursorT10]
  
//   offer sprites
  cultistSpriteArray = [0, T1idleSheet, T2idleSheet, T3idleSheet, T4idleSheet, T5idleSheet, T6idleSheet, T7idleSheet, T8idleSheet, T9idleSheet, T10idleSheet]
//         SOUND ARRAYS
  ritualSoundArray = [0,ritualT1Sound, ritualT2Sound, ritualT3Sound, ritualT4Sound, ritualT5Sound, ritualT6Sound, ritualT7Sound, ritualT8Sound, ritualT9Sound, ritualT10Sound]
//   summon Center
  summonCenter = []
  eggPrices = [100, 500, 1000, 5000, 10000, 50000, 100000]
  eggShow = [100, 500, "1k", "5k", "10k", "50k", "100k"]
//       nested array to store colors
  eggColors = [[200, 50, 50], [200, 70, 70], [200, 90, 90], [200, 110, 110], [200, 130, 130], [200, 150, 150], [200, 170, 170] ]

  eggNames = ["Common", "Uncommon", "Rare", "Legendary", "Mythic", "Godly", "Forbidden"]
  maxCenter = 3 //max amount in summon center 
  
//   TUTORIAL:
  tArray = [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38]
// *********************************NEW CLASS ******************************************
  cultistSprite = new Sprite(cultistSpriteArray[offerShow], 20, 350, 3)
  // COMMON
  zombie1Sprite = new Sprite(zombie1, 1)
  zombie2Sprite = new Sprite(zombie2, 1)
  zombie3Sprite = new Sprite(zombie3, 1)
  spearSprite = new Sprite(attack2, 1)

  // UNCOMMON
  minotaur1Sprite = new Sprite(minotaur1, 1)
  minotaur2Sprite = new Sprite(minotaur2, 1)
  minotaur3Sprite = new Sprite(minotaur3, 1)
  skeletonSprite = new Sprite(skeleton, 1)

  // RARE
  ravenSprite = new Sprite(raven, 1)
  mushroomSprite = new Sprite(mushroom, 1)
  goblinSprite = new Sprite(goblin, 1)

  // LEGENDARY
  goblinBeastSprite = new Sprite(goblinBeast, 1)
  ancientSkeletonSprite = new Sprite(ancientSkeleton, 1)
  goblinRiderSprite = new Sprite(goblinRider, 1)
  necromancerSprite = new Sprite(necromancer, 1)

  // MYTHIC
  kitsuneSprite = new Sprite(kitsune, 1)
  eyeSprite = new Sprite(eye, 1)
  knightSprite = new Sprite(knight, 1)
  flareSprite = new Sprite(idle, 1)

  // GODLY
  skeletonGeneralSprite = new Sprite(skeletonGeneral, 1)
  plant1Sprite = new Sprite(plant1Sheet, 1)
  archerSprite = new Sprite(archerSheet, 1)
  skeletonKingSprite = new Sprite(skeletonKing, 1)

  // FORBIDDEN
  // titanSprite = new Sprite(titanGif, 1)
  flameSprite = new Sprite(flame, 1)
  lightSprite = new Sprite(light, 1)
  magicSprite = new Sprite(magic, 1)

  // INV BOXES:
    // COMMON
  zombie1Box = new InventoryBox(20, 20, zombie1Sprite)
  zombie2Box = new InventoryBox(120, 20, zombie2Sprite)
  zombie3Box = new InventoryBox(220, 20, zombie3Sprite)
  spearBox = new InventoryBox(320, 20, spearSprite)

  // UNCOMMON
  minotaur1Box = new InventoryBox(20, 120, minotaur1Sprite)
  minotaur2Box = new InventoryBox(120, 120, minotaur2Sprite)
  minotaur3Box = new InventoryBox(220, 120, minotaur3Sprite)
  skeletonBox = new InventoryBox(320, 120, skeletonSprite)

  // RARE
  ravenBox = new InventoryBox(20, 220, ravenSprite)
  mushroomBox = new InventoryBox(120, 220, mushroomSprite)
  goblinBox = new InventoryBox(220, 220, goblinSprite)

  // LEGENDARY
  goblinBeastBox = new InventoryBox(20, 320, goblinBeastSprite)
  ancientSkeletonBox = new InventoryBox(120, 320, ancientSkeletonSprite)
  goblinRiderBox = new InventoryBox(220, 320, goblinRiderSprite)
  necromancerBox = new InventoryBox(320, 320, necromancerSprite)

  // MYTHIC
  kitsuneBox = new InventoryBox(20, 420, kitsuneSprite)
  eyeBox = new InventoryBox(120, 420, eyeSprite)
  knightBox = new InventoryBox(220, 420, knightSprite)
  flareBox = new InventoryBox(320, 420, flareSprite)

  // GODLY
  skeletonGeneralBox = new InventoryBox(20, 520, skeletonGeneralSprite)
  plant1Box = new InventoryBox(120, 520, plant1Sprite)
  archerBox = new InventoryBox(220, 520, archerSprite)
  skeletonKingBox = new InventoryBox(320, 520, skeletonKingSprite)

  // FORBIDDEN
  // titanBox = new InventoryBox(20, 620, titanSprite)
  flameBox = new InventoryBox(120, 620, flameSprite)
  lightBox = new InventoryBox(220, 620, lightSprite)
  magicBox = new InventoryBox(320, 620, magicSprite)
  
  
  loadGame()
} 
// --------------------------------GAME LOOP------------------------------------------------------
function draw() {
  if (gamestate == "summon") {
    bgMusicShrine.stop()
    tokenAdd()
      
    if(substate == "center")  {
      tokenAdd()
      if (mouseX>= 150 && mouseX<=650 && mouseY>=100 && mouseY<=350) {
        cursor(HAND)
      } else {
        cursor(AUTO)
      }
      switchButton.show()
      switchButton.position(10,20)
      background(40, 0, 0) 
      fill(28,28,28)
      rect(0,600,800,600)
      fill(255)
      textFont(essenceFont)
      textSize(36)
      text("SUMMON CENTER", 300, 50)

      // ---------------- SUMMON PANEL ----------------
      fill(80, 0, 0)
      stroke(180, 0, 0)   
      strokeWeight(4)
      rect(150, 100, 500, 250, 20)

      textSize(24)
      fill(255)
      text("Your Summon Appears Here!", 270, 110)

      fill(150, 0, 0, 120) 
      noStroke()
      circle(400, 220, 150)
      
      
      // Draw the summon center sprites
      for (let i = 0; i < summonCenter.length; i++) {
        let s = summonCenter[i]

        // Draw the frame
        image(
          s.image, // sprite image
          350 + (i-1)*100, // x position (if i is at 1 then sprite one should be at 350 etc...)
          150, // y position
          s.size,  // display width
          s.size,  // display height
          s.size * floor(s.frame), // crop x
          0, // crop y
          s.size, // crop width
          s.size // crop height
        )

        // Animate the sprite
        s.frame += 0.1
        if (s.frame >= s.totalFrames) {
          s.frame = 0
        } // end frame loop
        //COMMON
        if (summonCenter[i] == zombie1Sprite) {
          multiplierBoost = multiplier *1.05
        } // end summon bonus
        if (summonCenter[i] == zombie2Sprite) {
          multiplierBoost = multiplier *1.06
        } // end summon bonus
        if (summonCenter[i] == zombie3Sprite) {
          multiplierBoost = multiplier *1.07
        } // end summon bonus
        if (summonCenter[i] == spearSprite) {
          multiplierBoost = multiplier *1.08
        } // end summon bonus
        // UNCOMMON
        if (summonCenter[i] == minotaur1Sprite) {
          multiplierBoost = multiplier *1.15
        } // end summon bonus
        if (summonCenter[i] == minotaur2Sprite) {
          multiplierBoost = multiplier *1.17
        } // end summon bonus
        if (summonCenter[i] == minotaur3Sprite) {
          multiplierBoost = multiplier *1.19
        } // end summon bonus
        if (summonCenter[i] == skeletonSprite) {
          multiplierBoost = multiplier * 1.2
        } // end summon bonus
        // RARE
        if (summonCenter[i] == ravenSprite) {
          baseAdd+=3
        } // end summon bonus
        if (summonCenter[i] == mushroomSprite) {
          baseAdd+=4      
        } // end summon bonus
        if (summonCenter[i] == goblinSprite) {
          baseAdd+=5
        } // end summon bonus

        if (summonCenter[i] == goblinBeastSprite) {
          multiplierBoost = multiplier*4
        } // end summon bonus
        if (summonCenter[i] == ancientSkeletonSprite) {
          multiplierBoost = multiplier*4.5
        } // end summon bonus
        if (summonCenter[i] == goblinRiderSprite) {
          multiplierBoost = multiplier*4.6
        } // end summon bonus
        if (summonCenter[i] == necromancerSprite) {
          multiplierBoost = multiplier*4.7
        } // end summon bonus

        if (summonCenter[i] == kitsuneSprite) {
          multiplierBoost = multiplier * 6
        } // end summon bonus
        if (summonCenter[i] == eyeSprite) {
          multiplierBoost = multiplier * 7
        } // end summon bonus
        if (summonCenter[i] == knightSprite) {
          multiplierBoost = multiplier * 9 
        } // end summon bonus
        if (summonCenter[i] == flareSprite) {
          multiplierBoost = multiplier * 10
        } // end summon bonus

        if (summonCenter[i] == skeletonGeneralSprite) {
          multiplierBoost = multiplier*10
        } // end summon bonus
        if (summonCenter[i] == plant1Sprite) {
          multiplierBoost = multiplier*15
        } // end summon bonus
        if (summonCenter[i] == archerSprite) {
          multiplierBoost = multiplier*20
        } // end summon bonus
        if (summonCenter[i] == skeletonKingSprite) {
          multiplierBoost = multiplier*25
        } // end summon bonus

        if (summonCenter[i] == flameSprite) {
          baseAdd+= 10
        } // end summon bonus
        if (summonCenter[i] == lightSprite) {
          baseAdd+= 16
        } // end summon bonus
        if (summonCenter[i] == magicSprite) {
          baseAdd+= 17
        } // end summon bonus

      } // end summon center loop


      // ---------------- EGGS ----------------
      

      let startX = 8
      let y = 400
      let spacing = 115   // distance between eggs

      for (let i = 0; i < eggNames.length; i++) {
        let x = startX + i * spacing
        let centerX = x + 45

        // Box
        fill(80, 0, 0, 200)
        stroke(180, 0, 0)
        strokeWeight(3)
        rect(x, y, 90, 110, 15)

        // Circle
        fill(... eggColors[i]) //"unwraps" the color storage
        noStroke()
        circle(centerX, y + 40, 50)

        // Text
        fill(255)
        textSize(12)
        text(eggNames[i], x + 28, y + 10)

        textSize(14)
        text(eggShow[i] + " Essence", x + 14, y + 80)

        textSize(12)
        fill(200)
        text("x1", centerX - 5, y + 95)
      } // end egg list loop

      // Footer
      textSize(16)
      fill(200)
      text("Click an egg to summon a unit!", 315, 550)

  } // end summon center state
    if(substate == "inventory") {
      tokenAdd()
      fill(28,28,28)
      rect(0,0,800,800)
      switchButton.show()
      switchButton.position(420,20)
      // COMMON
      zombie1Box.make()
      zombie2Box.make()
      zombie3Box.make()
      spearBox.make()

      // UNCOMMON
      minotaur1Box.make()
      minotaur2Box.make()
      minotaur3Box.make()
      skeletonBox.make()

      // RARE
      ravenBox.make()
      mushroomBox.make()
      goblinBox.make()

      // LEGENDARY
      goblinBeastBox.make()
      ancientSkeletonBox.make()
      goblinRiderBox.make()
      necromancerBox.make()

      // MYTHIC
      kitsuneBox.make()
      eyeBox.make()
      knightBox.make()
      flareBox.make()

      // GODLY
      skeletonGeneralBox.make()
      plant1Box.make()
      archerBox.make()
      skeletonKingBox.make()

      // FORBIDDEN
      // titanBox.make()
      flameBox.make()
      lightBox.make()
      magicBox.make()
    } // end inventory state
  } // end summon state

    
    if (gamestate !== "menu") {
      statue1.hide()
      playText.hide()
      statue2.hide()
      tutorialText.hide()
      bgMusicMenu.stop()
    } // end non-menu state


    if (gamestate == "menu") {
      statue1.show()
      playText.show()
      statue2.show()
      tutorialText.show()
      statue1.size(468/2.2, 705/2.2)
      statue1.style('z-index', 0)
      statue1.position(0, 100)
      statue1.mousePressed(toGame)
      textSize(20)
      playText.position(80,120)
      playText.style('z-index', 1)
      statue2.size(468/2.2, 705/2.2)
      statue2.style('z-index', 0)
      statue2.position(550, 100)
      statue2.mousePressed(toTutorial)
      textSize(20)
      tutorialText.position(615,120)
      tutorialText.style('z-index', 1)
      scale(1.3)
      image(menuBg, 0,0, menuBg.width, 400)
      scale(1/1.3)
      statue1.show()
      playText.show()
      statue2.show()
      tutorialText.show()
      bgMusicShrine.stop()
      switchButton.hide()
      
      if (bgMusicMenu.isPlaying()) {

      } else {
        bgMusicMenu.play()
      } // end menu music toggle


    } // end menu state
  
    if (gamestate !== "tutorial" && gamestate!== "menu" && gamestate !== "nav") {
      settings.show()
      settings.position(760,20)
      settings.size(40,40)
      settings.mouseOver(settingsHover)
      settings.mousePressed(toSettings)
    } else{
      settings.hide()
    } // end settings toggle
  
    if (gamestate == "tutorial") {
      
      if (tMusic.isPlaying()) {

      } else {
        tMusic.play()
      } // end tutorial music toggle
      
      switchButton.hide()
      switchButton.position(10,20)
      image(tArray[tArrayMark],0,0,800,600)
     
      
    } else{
      tMusic.stop()
    } // end tutorial state
  
    if (gamestate == "settings") {
      eraseButton.show()
      settings.hide()
      noStroke()
      fill(245,20,53,1)
      rect(0,0,800,800)
      stroke(180, 180, 220)      
      strokeWeight(6)
      fill(40, 10, 60, 220)      
      rect(100, 50, 600, 500, 20)
      fill(200, 0, 0)
      stroke(120, 0, 0)
      strokeWeight(3)

      
      eraseButton.position(140,85)
      eraseButton.size(520,440)
      eraseButton.style("font-size", "60px")
      eraseButton.style('background-color', '#1a1a1a') // bg color
      eraseButton.style('color', '#f5f5f5') // text color
      eraseButton.style('font-family', 'monospace') // font
      eraseButton.style('border', '2px solid #660000') //border: thickness, type, color
      eraseButton.style('border-radius', '4px') // curvature
      eraseButton.style('padding', '10px 20px') // space around text (box size)
      eraseButton.style('cursor', 'pointer') // cursor
      eraseButton.mouseOver(eraseHover)
      eraseButton.mouseOut(eraseNotHover)
    } else{
      eraseButton.hide()
    } // end settings state

    if (gamestate == "game") {
      statue1.hide()
      playText.hide()
      statue2.hide()
      tutorialText.hide()
      bgMusicMenu.stop()
      switchButton.show()
      switchButton.position(10,20)

      if (bgMusicShrine.isPlaying()) {

      } else {
        bgMusicShrine.play()
      } // end shrine music toggle
      background(28,28,28)

      image(shrineBg, 0, 0, 800, 600)

      image(shrine ,140,25)

      textFont(essenceFont)
      textSize(50)
      fill(136, 8, 8)
      text("ESSENCE:  " + score,255, 80)
      cultistSprite.make()
      if (mouseX >= 310 && mouseX <= 457 && mouseY >= 237 && mouseY<=466) {
        noCursor()
        image(cursorArray[ritualShow], mouseX, mouseY, 50,50)    

      }
      else {cursor(AUTO)} // end shrine hover
    } // end game state
  if (gamestate !== "shop" && gamestate !== "nav") {
    shopBgMusic.stop()
    fire.stop()
  } // end non-shop state
  // what to do if its in the shop stage
    if (gamestate == "shop") {
      if (shopBgMusic.isPlaying()) {
        
      } else {
        shopBgMusic.play()
      } // end shop music toggle
      
      if (fire.isPlaying()) {
        
      } else {
        fire.play()
      } // end fire loop
      
      
      fill(28,28,28)
      rect(0,600,800,600)
      noStroke()
      fill(28,28,28)
      switchButton.show()
      
      switchButton.position(10,20)
      bgMusicShrine.stop()
      bgMusicMenu.stop()

      image(shopBg,0,0,800,600)

      image(shopWidget, 400, -30, 400, 400)
      image(shopWidget, 0, -30, 400, 400)
      image(shopWidget, 400, 270, 400, 400)
      image(shopWidget, 0, 270, 400, 400)

      fill(255)
      textSize(20)
      textFont("Ariel")

      text("NEXT TIER RITUAL", 115, 160)
      text("TIER   " + tierRitual, 165, 190)
      text("Price " + ritualPrices[ritualShow], 165,215 )

      text("NEXT TIER OFFER", 515, 160)
      text("TIER   " + tierOffer, 565, 190)
      text("Price " + offerPrices[offerShow], 565,215 )

      text("NEXT TIER CULTIST", 108, 460)
      text("TIER   " + tierCultist, 165, 490)
      text("Price " + cultistPrices[cultistShow], 165,520 )

      text("NEXT TIER GREED", 515, 460)
      text("TIER   " + tierGreed, 565, 490)
      text("Price " + greedPrices[greedShow], 565,520 )
    } // end shop state
  
  if (gamestate == "nav") {
    noStroke()
    fill(245,20,53,1)
    rect(0,0,800,800)
    stroke(180, 180, 220)      
    strokeWeight(6)
    fill(40, 10, 60, 220)      
    rect(100, 50, 600, 500, 20)
    
    
    fill(200, 0, 0)
    stroke(120, 0, 0)
    strokeWeight(3)

    // top-left
    rect(140, 60, 220, 220, 10)
    // top-right
    rect(440, 60, 220, 220, 10)
    // bottom-left
    rect(140, 320, 220, 220, 10)
    // bottom-right
    rect(440, 320, 220, 220, 10)
    
    
    fill(255)
    textFont(essenceFont)
    textSize(20)
    text("Shrine", 230,170) // top-left
    text("Shop", 530, 170) // top-right
    text("Summons", 210, 430) // bottom-left
    text("Out of this Life", 500, 430) // bottom-right
    } // end nav state

  if (gamestate == "end") {
    noStroke()
    settings.hide()
    bgMusicShrine.stop()
    bgMusicMenu.stop()
    fill(28,28,28)
    rect(0,0,800,800)
    eraseButton.hide()
    switchButton.hide()
  } // end endgame state
} // end draw

function mousePressed() {
  if (gamestate == "game") {
      base = ritualBase[ritualShow]+cultistModifiers[cultistShow]
      multiplier = offerMultipliers[offerShow]* greedMultipliers[greedShow]
      scoreAdd = (base+baseAdd) *multiplierBoost*multiplier
    //     CHECKS FOR CLICKS ON THE SHRINE
    if (mouseX >= 310 && mouseX <= 457 && mouseY >= 237 && mouseY<=466) {
      score = score+scoreAdd
      ritualSoundArray[ritualShow].play()
      saveGame()
    } // end shrine click
  } // end game state

  if (gamestate == "shop") {


    //   ------------------------------  Handles uprade purchases----------------------------------
//       ritual upgrade
    if (mouseX >= 68 && mouseX <= 323 && mouseY >= 77 && mouseY<=217) {

      if(ritualValue[ritualShow]<= score) {

        if (tierRitual< 10 && ritualShow<10) {
          score-=ritualValue[ritualShow]
          tierRitual++
          ritualShow++
          saveGame()
        }

        if (tierRitual == 10) {
          tierRitual = "MAX"
          ritualShow=10
          saveGame()
        } // end max ritual
      } // end ritual purchase
    } // end ritual click
//     offering upgrade
    if (mouseX >= 498 && mouseX <= 700 && mouseY >= 98 && mouseY<=214) {
      // OFFER PURCHASE
      if (offerValue[offerShow] <= score) {
        if (tierOffer < 10 && offerShow < 10) {
          score -= offerValue[offerShow]
          tierOffer++
          offerShow++
          offerMultiplier++
          saveGame()
        }
        if (tierOffer == 10) {
          tierOffer = "MAX"
          saveGame()
          
        } // end max offer
      } // end offer purchase
    } // end offer click
//     cultist upgrade
    if (mouseX >= 68 && mouseX <= 323 && mouseY >= 400 && mouseY<=500) {
      // CULTIST PURCHASE
      if(cultistValues[cultistShow] <= score) {
        if (tierCultist < 10 && cultistShow < 10) {
          score -= cultistValues[cultistShow]
          tierCultist++
          cultistShow++
          cultistModifier++
//           CHANGING THE SPRITE AT UPGRADE
          cultistSprite.image = cultistSpriteArray[cultistShow] // cchanges the image 
          cultistSprite.size = cultistSprite.image.height // changes the dimensions
          cultistSprite.totalFrames = cultistSprite.image.width / cultistSprite.image.height // calculates the new amount of frames
          cultistSprite.frame = 0 // resets animation
          saveGame()
        }
        if (tierCultist == 10) {
          tierCultist = "MAX"
          saveGame()
        } // end max cultist
      } // end cultist purchase
    } // end cultist click
//  greed upgrade
    if (mouseX >= 498 && mouseX <= 700 && mouseY >= 400 && mouseY<=500) {
      // GREED PURCHASE
      if(greedValues[greedShow] <= score) {
        if (tierGreed < 10 && greedShow < 10) {
          score -= greedValues[greedShow]
          tierGreed++
          greedShow++
          greedMultiplier++
          saveGame()
        }
        if (tierGreed == 10) {
          tierGreed = "MAX"
          saveGame()
        } // end max greed
      } // end greed purchase
    } // end greed click
  } // end shop state
  
  
  if (gamestate == "summon") {

    if (substate == "center") {
      saveGame()

      if (mouseX>= 150 && mouseX<=650 && mouseY>=100 && mouseY<=350) {
        cursor(AUTO)
        substate = "inventory"
      } // end center click
      // EGG 1 - COMMON
      if (mouseX >= 8 && mouseX <= 98 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[0]) {
              score -= eggPrices[0]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned a Common unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<55) {  
                  zombie1Box.amount++
              } // end roll
              if (randNum>=55 && randNum<90) { 
                  zombie2Box.amount++
              } // end roll
              if (randNum>=90 && randNum<99) { 
                  zombie3Box.amount++
              } // end roll
              if (randNum==100) { 
                  spearBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[0]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click

      // EGG 2 - UNCOMMON
      if (mouseX >= 125 && mouseX <= 215 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[1]) {
              score -= eggPrices[1]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned an Uncommon unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<40) { 
                  minotaur1Box.amount++
              } // end roll
              if (randNum>=40 && randNum<75) { 
                  minotaur2Box.amount++
              } // end roll
              if (randNum>=75 && randNum<95) { 
                  minotaur3Box.amount++
              } // end roll
              if (randNum>=95) { 
                  skeletonBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[1]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click

      // EGG 3 - RARE
      if (mouseX >= 242 && mouseX <= 332 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[2]) {
              score -= eggPrices[2]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned a Rare unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<50) { 
                  ravenBox.amount++
              } // end roll
              if (randNum>=50 && randNum<85) { 
                  mushroomBox.amount++
              } // end roll
              if (randNum>=85) { 
                  goblinBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[2]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click

      // EGG 4 - LEGENDARY
      if (mouseX >= 359 && mouseX <= 449 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[3]) {
              score -= eggPrices[3]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned a Legendary unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<40) { 
                  goblinBeastBox.amount++
              } // end roll
              if (randNum>=40 && randNum<70) { 
                  ancientSkeletonBox.amount++
              } // end roll
              if (randNum>=70 && randNum<95) { 
                  goblinRiderBox.amount++
              } // end roll
              if (randNum>=95) { 
                  necromancerBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[3]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click

      // EGG 5 - MYTHIC
      if (mouseX >= 476 && mouseX <= 566 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[4]) {
              score -= eggPrices[4]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned a Mythic unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<40) { 
                  kitsuneBox.amount++
              } // end roll
              if (randNum>=40 && randNum<70) { 
                  eyeBox.amount++
              } // end roll
              if (randNum>=70 && randNum<95) { 
                  knightBox.amount++
              } // end roll
              if (randNum>=95) { 
                  flareBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[4]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click

      // EGG 6 - GODLY
      if (mouseX >= 593 && mouseX <= 683 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[5]) {
              score -= eggPrices[5]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned a Godly unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<40) { 
                  skeletonGeneralBox.amount++
              } // end roll
              if (randNum>=40 && randNum<65) { 
                  plant1Box.amount++
              } // end roll
              if (randNum>=65 && randNum<90) { 
                  archerBox.amount++
              } // end roll
              if (randNum>=90) { 
                  skeletonKingBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[5]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click

      // EGG 7 - FORBIDDEN
      if (mouseX >= 710 && mouseX <= 800 && mouseY >= 400 && mouseY <= 510) {
          if (score >= eggPrices[6]) {
              score -= eggPrices[6]
              Swal.fire({
                  toast: true, 
                  position: 'top-end',
                  icon: 'success',
                  title: 'You summoned a Forbidden unit!',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              let randNum = int(random(1,100))
              if (randNum>=1 && randNum<40) { 
                  flameBox.amount++
              } // end roll
              if (randNum>=40 && randNum<70) { 
                  lightBox.amount++
              } // end roll
              if (randNum>=70 && randNum<99) { 
                  magicBox.amount++
              } // end roll
          } // end purchase check
          if (score < eggPrices[6]) {
              Swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'error',
                  title: 'YOU DO NOT HAVE ENOUGH ESSENCE',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
          } // end insufficient check
      } // end egg click


    } // end summon center state
    if (substate == "inventory") {
      saveGame()
      

// ====================== COMMON ======================
      // zombie1Box
      if (mouseX >= zombie1Box.x && mouseX <= zombie1Box.x + zombie1Box.size && mouseY >=  zombie1Box.y && mouseY <= zombie1Box.y + zombie1Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (zombie1Box.amount >= 1) {
            zombie1Box.stroke = "green"
            zombie1Box.amount--

            zombie1Sprite.inSummonCenter = true
            summonCenter.push(zombie1Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // zombie2Box
      if (mouseX >= zombie2Box.x && mouseX <= zombie2Box.x + zombie2Box.size && mouseY >= zombie2Box.y && mouseY <= zombie2Box.y + zombie2Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (zombie2Box.amount >= 1) {
            zombie2Box.stroke = "green"
            zombie2Box.amount--

            zombie2Sprite.inSummonCenter = true
            summonCenter.push(zombie2Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // zombie3Box
      if (mouseX >= zombie3Box.x && mouseX <= zombie3Box.x + zombie3Box.size && mouseY >= zombie3Box.y && mouseY <= zombie3Box.y + zombie3Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (zombie3Box.amount >= 1) {
            zombie3Box.stroke = "green"
            zombie3Box.amount--

            zombie3Sprite.inSummonCenter = true
            summonCenter.push(zombie3Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // spearBox
      if (mouseX >= spearBox.x && mouseX <= spearBox.x + spearBox.size && mouseY >= spearBox.y && mouseY <= spearBox.y + spearBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (spearBox.amount >= 1) {
            spearBox.stroke = "green"
            spearBox.amount--

            spearSprite.inSummonCenter = true
            summonCenter.push(spearSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // ====================== UNCOMMON ======================

      // minotaur1Box
      if (mouseX >= minotaur1Box.x && mouseX <= minotaur1Box.x + minotaur1Box.size && mouseY >= minotaur1Box.y && mouseY <= minotaur1Box.y + minotaur1Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (minotaur1Box.amount >= 1) {
            minotaur1Box.stroke = "green"
            minotaur1Box.amount--

            minotaur1Sprite.inSummonCenter = true
            summonCenter.push(minotaur1Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // minotaur2Box
      if (mouseX >= minotaur2Box.x && mouseX <= minotaur2Box.x + minotaur2Box.size && mouseY >= minotaur2Box.y && mouseY <= minotaur2Box.y + minotaur2Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (minotaur2Box.amount >= 1) {
            minotaur2Box.stroke = "green"
            minotaur2Box.amount--

            minotaur2Sprite.inSummonCenter = true
            summonCenter.push(minotaur2Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // minotaur3Box
      if (mouseX >= minotaur3Box.x && mouseX <= minotaur3Box.x + minotaur3Box.size && mouseY >= minotaur3Box.y && mouseY <= minotaur3Box.y + minotaur3Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (minotaur3Box.amount >= 1) {
            minotaur3Box.stroke = "green"
            minotaur3Box.amount--

            minotaur3Sprite.inSummonCenter = true
            summonCenter.push(minotaur3Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // skeletonBox
      if (mouseX >= skeletonBox.x && mouseX <= skeletonBox.x + skeletonBox.size && mouseY >= skeletonBox.y && mouseY <= skeletonBox.y + skeletonBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (skeletonBox.amount >= 1) {
            skeletonBox.stroke = "green"
            skeletonBox.amount--

            skeletonSprite.inSummonCenter = true
            summonCenter.push(skeletonSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }




// RARE-----------------------------------------------------------------------------------------
      // ravenBox
      if (mouseX >= ravenBox.x && mouseX <= ravenBox.x + ravenBox.size && mouseY >= ravenBox.y && mouseY <= ravenBox.y + ravenBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (ravenBox.amount >= 1) {
            ravenBox.stroke = "green"
            ravenBox.amount--

            ravenSprite.inSummonCenter = true
            summonCenter.push(ravenSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // mushroomBox
      if (mouseX >= mushroomBox.x && mouseX <= mushroomBox.x + mushroomBox.size && mouseY >= mushroomBox.y && mouseY <= mushroomBox.y + mushroomBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (mushroomBox.amount >= 1) {
            mushroomBox.stroke = "green"
            mushroomBox.amount--

            mushroomSprite.inSummonCenter = true
            summonCenter.push(mushroomSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // goblinBox
      if (mouseX >= goblinBox.x && mouseX <= goblinBox.x + goblinBox.size && mouseY >= goblinBox.y && mouseY <= goblinBox.y + goblinBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (goblinBox.amount >= 1) {
            goblinBox.stroke = "green"
            goblinBox.amount--

            goblinSprite.inSummonCenter = true
            summonCenter.push(goblinSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }



// LEGENDARY-------------------------------------------------------------------------
      // goblinBeastBox
      if (mouseX >= goblinBeastBox.x && mouseX <= goblinBeastBox.x + goblinBeastBox.size && mouseY >= goblinBeastBox.y && mouseY <= goblinBeastBox.y + goblinBeastBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (goblinBeastBox.amount >= 1) {
            goblinBeastBox.stroke = "green"
            goblinBeastBox.amount--

            goblinBeastSprite.inSummonCenter = true
            summonCenter.push(goblinBeastSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // ancientSkeletonBox
      if (mouseX >= ancientSkeletonBox.x && mouseX <= ancientSkeletonBox.x + ancientSkeletonBox.size && mouseY >= ancientSkeletonBox.y && mouseY <= ancientSkeletonBox.y + ancientSkeletonBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (ancientSkeletonBox.amount >= 1) {
            ancientSkeletonBox.stroke = "green"
            ancientSkeletonBox.amount--

            ancientSkeletonSprite.inSummonCenter = true
            summonCenter.push(ancientSkeletonSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // goblinRiderBox
      if (mouseX >= goblinRiderBox.x && mouseX <= goblinRiderBox.x + goblinRiderBox.size && mouseY >= goblinRiderBox.y && mouseY <= goblinRiderBox.y + goblinRiderBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (goblinRiderBox.amount >= 1) {
            goblinRiderBox.stroke = "green"
            goblinRiderBox.amount--

            goblinRiderSprite.inSummonCenter = true
            summonCenter.push(goblinRiderSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // necromancerBox
      if (mouseX >= necromancerBox.x && mouseX <= necromancerBox.x + necromancerBox.size && mouseY >= necromancerBox.y && mouseY <= necromancerBox.y + necromancerBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (necromancerBox.amount >= 1) {
            necromancerBox.stroke = "green"
            necromancerBox.amount--

            necromancerSprite.inSummonCenter = true
            summonCenter.push(necromancerSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }



// MYTHIC -----------------------------------------------------------------------
      // kitsuneBox 
      if (mouseX >= kitsuneBox.x && mouseX <= kitsuneBox.x + kitsuneBox.size && mouseY >= kitsuneBox.y && mouseY <= kitsuneBox.y + kitsuneBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (kitsuneBox.amount >= 1) {
            kitsuneBox.stroke = "green"
            kitsuneBox.amount--

            kitsuneSprite.inSummonCenter = true
            summonCenter.push(kitsuneSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // eyeBox
      if (mouseX >= eyeBox.x && mouseX <= eyeBox.x + eyeBox.size && mouseY >= eyeBox.y && mouseY <= eyeBox.y + eyeBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (eyeBox.amount >= 1) {
            eyeBox.stroke = "green"
            eyeBox.amount--

            eyeSprite.inSummonCenter = true
            summonCenter.push(eyeSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // knightBox
      if (mouseX >= knightBox.x && mouseX <= knightBox.x + knightBox.size && mouseY >= knightBox.y && mouseY <= knightBox.y + knightBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (knightBox.amount >= 1) {
            knightBox.stroke = "green"
            knightBox.amount--

            knightSprite.inSummonCenter = true
            summonCenter.push(knightSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // flareBox
      if (mouseX >= flareBox.x && mouseX <= flareBox.x + flareBox.size && mouseY >= flareBox.y && mouseY <= flareBox.y + flareBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (flareBox.amount >= 1) {
            flareBox.stroke = "green"
            flareBox.amount--

            flareSprite.inSummonCenter = true
            summonCenter.push(flareSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

// GODLY ------------------------------------------------------------------------------

      // skeletonGeneralBox
      if (mouseX >= skeletonGeneralBox.x && mouseX <= skeletonGeneralBox.x + skeletonGeneralBox.size && mouseY >= skeletonGeneralBox.y && mouseY <= skeletonGeneralBox.y + skeletonGeneralBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (skeletonGeneralBox.amount >= 1) {
            skeletonGeneralBox.stroke = "green"
            skeletonGeneralBox.amount--

            skeletonGeneralSprite.inSummonCenter = true
            summonCenter.push(skeletonGeneralSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // plant1Box
      if (mouseX >= plant1Box.x && mouseX <= plant1Box.x + plant1Box.size && mouseY >= plant1Box.y && mouseY <= plant1Box.y + plant1Box.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (plant1Box.amount >= 1) {
            plant1Box.stroke = "green"
            plant1Box.amount--

            plant1Sprite.inSummonCenter = true
            summonCenter.push(plant1Sprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // archerBox
      if (mouseX >= archerBox.x && mouseX <= archerBox.x + archerBox.size && mouseY >= archerBox.y && mouseY <= archerBox.y + archerBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (archerBox.amount >= 1) {
            archerBox.stroke = "green"
            archerBox.amount--

            archerSprite.inSummonCenter = true
            summonCenter.push(archerSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // skeletonKingBox
      if (mouseX >= skeletonKingBox.x && mouseX <= skeletonKingBox.x + skeletonKingBox.size && mouseY >= skeletonKingBox.y && mouseY <= skeletonKingBox.y + skeletonKingBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (skeletonKingBox.amount >= 1) {
            skeletonKingBox.stroke = "green"
            skeletonKingBox.amount--

            skeletonKingSprite.inSummonCenter = true
            summonCenter.push(skeletonKingSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }


// FORBIDDEN -------------------------------------------------------------------------------------

      // flameBox
      if (mouseX >= flameBox.x && mouseX <= flameBox.x + flameBox.size && mouseY >= flameBox.y && mouseY <= flameBox.y + flameBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (flameBox.amount >= 1) {
            flameBox.stroke = "green"
            flameBox.amount--

            flameSprite.inSummonCenter = true
            summonCenter.push(flameSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // lightBox
      if (mouseX >= lightBox.x && mouseX <= lightBox.x + lightBox.size && mouseY >= lightBox.y && mouseY <= lightBox.y + lightBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (lightBox.amount >= 1) {
            lightBox.stroke = "green"
            lightBox.amount--

            lightSprite.inSummonCenter = true
            summonCenter.push(lightSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }

      // magicBox
      if (mouseX >= magicBox.x && mouseX <= magicBox.x + magicBox.size && mouseY >= magicBox.y && mouseY <= magicBox.y + magicBox.size) {

        if (summonCenter.length == maxCenter) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Summon center is full!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        }

        if (summonCenter.length < maxCenter) {
          if (magicBox.amount >= 1) {
            magicBox.stroke = "green"
            magicBox.amount--

            magicSprite.inSummonCenter = true
            summonCenter.push(magicSprite)

            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Added to summon center!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
          }
        }
      }


    } // end inventory state


  } // end summon state
  
  if (gamestate == "tutorial") {
    if(tArrayMark<=36) {
    tArrayMark++
      } else {
        gamestate = "game"
      } // end tutorial step
    tClick.play()
  } // end tutorial state
  if (gamestate == "nav") {
    if (mouseOn == false) {
      mouseOn = true
    } // end mouse reset
    // TAKE TO SHRINE
    if (mouseX >= 140 && mouseX <= 360 && mouseY >= 60 && mouseY <= 280) {
      gamestate = "game"
    } // end shrine nav click

    // TAKE TO SHOP
    if (mouseX >= 440 && mouseX <= 660 && mouseY >= 60 && mouseY <= 280) {
      gamestate = "shop"
    } // end shop nav click

    // TAKE TO SUMMON CENTER
    if (mouseX >= 140 && mouseX <= 360 && mouseY >= 320 && mouseY <= 540) {
      gamestate = "summon"
      substate = "center"
    } // end summon nav click

    // END THE GAME
    if (mouseX >= 440 && mouseX <= 660 && mouseY >= 320 && mouseY <= 540 && mouseOn == true) {
      Swal.fire({
        title: "Are you sure?",
        text: "Your data will be saved but all summons in the summon center will fade away.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, take me away!",
        position: "top-end",
        
      }).then((result) => {
        if (result.isConfirmed) {
          noStroke()
          gamestate = "end"
          noLoop()
          Swal.fire({
            title: "Ascension",
            text: "You have exited this life.",

          });
        } else {
          gamestate = "nav"
        }
      });
      
    } // end endgame nav click
  } // end nav state
} // end mousePressed


function saveGame() {
  zombie1SpriteToken = zombie1Box.amount
  zombie2SpriteToken = zombie2Box.amount
  zombie3SpriteToken = zombie3Box.amount
  spearSpriteToken = spearBox.amount

  minotaur1SpriteToken = minotaur1Box.amount
  minotaur2SpriteToken = minotaur2Box.amount
  minotaur3SpriteToken = minotaur3Box.amount
  skeletonSpriteToken = skeletonBox.amount

  ravenSpriteToken = ravenBox.amount
  mushroomSpriteToken = mushroomBox.amount
  goblinSpriteToken = goblinBox.amount

  goblinBeastSpriteToken = goblinBeastBox.amount
  ancientSkeletonSpriteToken = ancientSkeletonBox.amount
  goblinRiderSpriteToken = goblinRiderBox.amount
  necromancerSpriteToken = necromancerBox.amount

  kitsuneSpriteToken = kitsuneBox.amount
  eyeSpriteToken = eyeBox.amount
  knightSpriteToken = knightBox.amount
  flareSpriteToken = flareBox.amount

  skeletonGeneralSpriteToken = skeletonGeneralBox.amount
  plant1SpriteToken = plant1Box.amount
  archerSpriteToken = archerBox.amount
  skeletonKingSpriteToken = skeletonKingBox.amount

  flameSpriteToken = flameBox.amount
  lightSpriteToken = lightBox.amount
  magicSpriteToken = magicBox.amount
  
  storeItem("score", score)
  storeItem("ritualShow", ritualShow)
  storeItem("offerShow", offerShow)
  storeItem("cultistShow", cultistShow)
  storeItem("greedShow", greedShow)
  storeItem("tierRitual", tierRitual)
  storeItem("tierOffer", tierOffer)
  storeItem("tierCultist", tierCultist)
  storeItem("tierGreed", tierGreed)
  
//   TOKEN STORAGE
  storeItem("zombie1SpriteToken", zombie1SpriteToken)
  storeItem("zombie2SpriteToken", zombie2SpriteToken)
  storeItem("zombie3SpriteToken", zombie3SpriteToken)
  storeItem("spearSpriteToken", spearSpriteToken)

  storeItem("minotaur1SpriteToken", minotaur1SpriteToken)
  storeItem("minotaur2SpriteToken", minotaur2SpriteToken)
  storeItem("minotaur3SpriteToken", minotaur3SpriteToken)
  storeItem("skeletonSpriteToken", skeletonSpriteToken)

  storeItem("ravenSpriteToken", ravenSpriteToken)
  storeItem("mushroomSpriteToken", mushroomSpriteToken)
  storeItem("goblinSpriteToken", goblinSpriteToken)

  storeItem("goblinBeastSpriteToken", goblinBeastSpriteToken)
  storeItem("ancientSkeletonSpriteToken", ancientSkeletonSpriteToken)
  storeItem("goblinRiderSpriteToken", goblinRiderSpriteToken)
  storeItem("necromancerSpriteToken", necromancerSpriteToken)

  storeItem("kitsuneSpriteToken", kitsuneSpriteToken)
  storeItem("eyeSpriteToken", eyeSpriteToken)
  storeItem("knightSpriteToken", knightSpriteToken)
  storeItem("flareSpriteToken", flareSpriteToken)

  storeItem("skeletonGeneralSpriteToken", skeletonGeneralSpriteToken)
  storeItem("plant1SpriteToken", plant1SpriteToken)
  storeItem("archerSpriteToken", archerSpriteToken)
  storeItem("skeletonKingSpriteToken", skeletonKingSpriteToken)

  storeItem("flameSpriteToken", flameSpriteToken)
  storeItem("lightSpriteToken", lightSpriteToken)
  storeItem("magicSpriteToken", magicSpriteToken)
  
}

function loadGame() {
  let s = getItem("score")
  if (s !== null) {
    score = s
  }

  let rs = getItem("ritualShow")
  if (rs !== null) {
    ritualShow = rs
  }

  let os = getItem("offerShow")
  if (os !== null) {
    offerShow = os
  }

  let cs = getItem("cultistShow")
  if (cs !== null) {
    cultistShow = cs
  }

  let gs = getItem("greedShow")
  if (gs !== null) {
    greedShow = gs
  }

  let tr = getItem("tierRitual")
  if (tr !== null) {
    tierRitual = tr
  }

  let to = getItem("tierOffer")
  if (to !== null) {
    tierOffer = to
  }

  let tc = getItem("tierCultist")
  if (tc !== null) {
    tierCultist = tc
  }

  let tg = getItem("tierGreed")
  if (tg !== null) {
    tierGreed = tg
  }
  
    let z1 = getItem("zombie1SpriteToken")
  if (z1 !== null) {
    zombie1SpriteToken = z1
  }

  let z2 = getItem("zombie2SpriteToken")
  if (z2 !== null) {
    zombie2SpriteToken = z2
  }

  let z3 = getItem("zombie3SpriteToken")
  if (z3 !== null) {
    zombie3SpriteToken = z3
  }

  let sp = getItem("spearSpriteToken")
  if (sp !== null) {
    spearSpriteToken = sp
  }

  let m1 = getItem("minotaur1SpriteToken")
  if (m1 !== null) {
    minotaur1SpriteToken = m1
  }

  let m2 = getItem("minotaur2SpriteToken")
  if (m2 !== null) {
    minotaur2SpriteToken = m2
  }

  let m3 = getItem("minotaur3SpriteToken")
  if (m3 !== null) {
    minotaur3SpriteToken = m3
  }

  let sk = getItem("skeletonSpriteToken")
  if (sk !== null) {
    skeletonSpriteToken = sk
  }

  let rv = getItem("ravenSpriteToken")
  if (rv !== null) {
    ravenSpriteToken = rv
  }

  let ms = getItem("mushroomSpriteToken")
  if (ms !== null) {
    mushroomSpriteToken = ms
  }

  let gb = getItem("goblinSpriteToken")
  if (gb !== null) {
    goblinSpriteToken = gb
  }

  let gbt = getItem("goblinBeastSpriteToken")
  if (gbt !== null) {
    goblinBeastSpriteToken = gbt
  }

  let as = getItem("ancientSkeletonSpriteToken")
  if (as !== null) {
    ancientSkeletonSpriteToken = as
  }

  let gr = getItem("goblinRiderSpriteToken")
  if (gr !== null) {
    goblinRiderSpriteToken = gr
  }

  let nc = getItem("necromancerSpriteToken")
  if (nc !== null) {
    necromancerSpriteToken = nc
  }

  let kt = getItem("kitsuneSpriteToken")
  if (kt !== null) {
    kitsuneSpriteToken = kt
  }

  let ey = getItem("eyeSpriteToken")
  if (ey !== null) {
    eyeSpriteToken = ey
  }

  let kn = getItem("knightSpriteToken")
  if (kn !== null) {
    knightSpriteToken = kn
  }

  let fl = getItem("flareSpriteToken")
  if (fl !== null) {
    flareSpriteToken = fl
  }

  let sg = getItem("skeletonGeneralSpriteToken")
  if (sg !== null) {
    skeletonGeneralSpriteToken = sg
  }

  let pl = getItem("plant1SpriteToken")
  if (pl !== null) {
    plant1SpriteToken = pl
  }

  let ar = getItem("archerSpriteToken")
  if (ar !== null) {
    archerSpriteToken = ar
  }

  let skk = getItem("skeletonKingSpriteToken")
  if (skk !== null) {
    skeletonKingSpriteToken = skk
  }

  let fm = getItem("flameSpriteToken")
  if (fm !== null) {
    flameSpriteToken = fm
  }

  let li = getItem("lightSpriteToken")
  if (li !== null) {
    lightSpriteToken = li
  }

  let mg = getItem("magicSpriteToken")
  if (mg !== null) {
    magicSpriteToken = mg
  }
  
  zombie1Box.amount = zombie1SpriteToken
  zombie2Box.amount = zombie2SpriteToken
  zombie3Box.amount = zombie3SpriteToken
  spearBox.amount = spearSpriteToken

  minotaur1Box.amount = minotaur1SpriteToken
  minotaur2Box.amount = minotaur2SpriteToken
  minotaur3Box.amount = minotaur3SpriteToken
  skeletonBox.amount = skeletonSpriteToken

  ravenBox.amount = ravenSpriteToken
  mushroomBox.amount = mushroomSpriteToken
  goblinBox.amount = goblinSpriteToken

  goblinBeastBox.amount = goblinBeastSpriteToken
  ancientSkeletonBox.amount = ancientSkeletonSpriteToken
  goblinRiderBox.amount = goblinRiderSpriteToken
  necromancerBox.amount = necromancerSpriteToken

  kitsuneBox.amount = kitsuneSpriteToken
  eyeBox.amount = eyeSpriteToken
  knightBox.amount = knightSpriteToken
  flareBox.amount = flareSpriteToken

  skeletonGeneralBox.amount = skeletonGeneralSpriteToken
  plant1Box.amount = plant1SpriteToken
  archerBox.amount = archerSpriteToken
  skeletonKingBox.amount = skeletonKingSpriteToken

  flameBox.amount = flameSpriteToken
  lightBox.amount = lightSpriteToken
  magicBox.amount = magicSpriteToken


//   THIS IS TO ENSURE THAT THE CULTIST ALSO SAVES!
  cultistSprite.image = cultistSpriteArray[cultistShow]
  cultistSprite.size = cultistSprite.image.height
  cultistSprite.totalFrames = cultistSprite.image.width / cultistSprite.image.height
  cultistSprite.frame = 0


}


function gameDelete() {
  let confirmed = confirm("WAIT! ARE YOU SURE?")
  if (confirmed) {
//     REMOVES EVERYTHING! ALL PROGRESS
    removeItem("score", score)
    removeItem("ritualShow", ritualShow)
    removeItem("offerShow", offerShow)
    removeItem("cultistShow", cultistShow)
    removeItem("greedShow", greedShow)
    removeItem("tierRitual", tierRitual)
    removeItem("tierOffer", tierOffer)
    removeItem("tierCultist", tierCultist)
    removeItem("tierGreed", tierGreed)
    removeItem("zombie1SpriteToken", zombie1SpriteToken)
    removeItem("zombie2SpriteToken", zombie2SpriteToken)
    removeItem("zombie3SpriteToken", zombie3SpriteToken)
    removeItem("spearSpriteToken", spearSpriteToken)
    removeItem("minotaur1SpriteToken", minotaur1SpriteToken)
    removeItem("minotaur2SpriteToken", minotaur2SpriteToken)
    removeItem("minotaur3SpriteToken", minotaur3SpriteToken)
    removeItem("skeletonSpriteToken", skeletonSpriteToken)
    removeItem("ravenSpriteToken", ravenSpriteToken)
    removeItem("mushroomSpriteToken", mushroomSpriteToken)
    removeItem("goblinSpriteToken", goblinSpriteToken)
    removeItem("goblinBeastSpriteToken", goblinBeastSpriteToken)
    removeItem("ancientSkeletonSpriteToken", ancientSkeletonSpriteToken)
    removeItem("goblinRiderSpriteToken", goblinRiderSpriteToken)
    removeItem("necromancerSpriteToken", necromancerSpriteToken)
    removeItem("kitsuneSpriteToken", kitsuneSpriteToken)
    removeItem("eyeSpriteToken", eyeSpriteToken)
    removeItem("knightSpriteToken", knightSpriteToken)
    removeItem("flareSpriteToken", flareSpriteToken)
    removeItem("skeletonGeneralSpriteToken", skeletonGeneralSpriteToken)
    removeItem("plant1SpriteToken", plant1SpriteToken)
    removeItem("archerSpriteToken", archerSpriteToken)
    removeItem("skeletonKingSpriteToken", skeletonKingSpriteToken)
    removeItem("flameSpriteToken", flameSpriteToken)
    removeItem("lightSpriteToken", lightSpriteToken)
    removeItem("magicSpriteToken", magicSpriteToken)
    summonCenter = []
    zombie1SpriteToken = 0
    zombie2SpriteToken = 0
    zombie3SpriteToken = 0
    spearSpriteToken = 0
    minotaur1SpriteToken = 0
    minotaur2SpriteToken = 0
    minotaur3SpriteToken = 0
    skeletonSpriteToken = 0
    ravenSpriteToken = 0
    mushroomSpriteToken = 0
    goblinSpriteToken = 0
    goblinBeastSpriteToken = 0
    ancientSkeletonSpriteToken = 0
    goblinRiderSpriteToken = 0
    necromancerSpriteToken = 0
    kitsuneSpriteToken = 0
    eyeSpriteToken = 0
    knightSpriteToken = 0
    flareSpriteToken = 0
    skeletonGeneralSpriteToken = 0
    plant1SpriteToken = 0
    archerSpriteToken = 0
    skeletonKingSpriteToken = 0
    flameSpriteToken = 0
    lightSpriteToken = 0
    magicSpriteToken = 0
    zombie1Box.amount = 0
    zombie2Box.amount = 0
    zombie3Box.amount = 0
    spearBox.amount = 0
    minotaur1Box.amount = 0
    minotaur2Box.amount = 0
    minotaur3Box.amount = 0
    skeletonBox.amount = 0
    ravenBox.amount = 0
    mushroomBox.amount = 0
    goblinBox.amount = 0
    goblinBeastBox.amount = 0
    ancientSkeletonBox.amount = 0
    goblinRiderBox.amount = 0
    necromancerBox.amount = 0
    kitsuneBox.amount = 0
    eyeBox.amount = 0
    knightBox.amount = 0
    flareBox.amount = 0
    skeletonGeneralBox.amount = 0
    plant1Box.amount = 0
    archerBox.amount = 0
    skeletonKingBox.amount = 0
    flameBox.amount = 0
    lightBox.amount = 0
    magicBox.amount = 0
    gamestate = "end"
  }  
  
}


function toNav() {
  gamestate = "nav"
  switchButton.hide()
}


function tokenAdd() {
  for (let i = 0; i < summonCenter.length; i++) {
    // COMMON
    if (summonCenter.length > 0) {
        if (summonCenter[i] == zombie1Sprite) {
            zombie1SpriteToken++
        }
        if (summonCenter[i] == zombie2Sprite) {
            zombie2SpriteToken++
        }
        if (summonCenter[i] == zombie3Sprite) {
            zombie3SpriteToken++
        }
        if (summonCenter[i] == spearSprite) {
            spearSpriteToken++
        }

        // UNCOMMON
        if (summonCenter[i] == minotaur1Sprite) {
            minotaur1SpriteToken++
        }
        if (summonCenter[i] == minotaur2Sprite) {
            minotaur2SpriteToken++
        }
        if (summonCenter[i] == minotaur3Sprite) {
            minotaur3SpriteToken++
        }
        if (summonCenter[i] == skeletonSprite) {
            skeletonSpriteToken++
        }

        // RARE
        if (summonCenter[i] == ravenSprite) {
            ravenSpriteToken++
        }
        if (summonCenter[i] == mushroomSprite) {
            mushroomSpriteToken++
        }
        if (summonCenter[i] == goblinSprite) {
            goblinSpriteToken++
        }

        // LEGENDARY
        if (summonCenter[i] == goblinBeastSprite) {
            goblinBeastSpriteToken++
        }
        if (summonCenter[i] == ancientSkeletonSprite) {
            ancientSkeletonSkeletonToken++
        }
        if (summonCenter[i] == goblinRiderSprite) {
            goblinRiderSpriteToken++
        }
        if (summonCenter[i] == necromancerSprite) {
            necromancerSpriteToken++
        }

        // MYTHIC
        if (summonCenter[i] == kitsuneSprite) {
            kitsuneSpriteToken++
        }
        if (summonCenter[i] == eyeSprite) {
            eyeSpriteToken++
        }
        if (summonCenter[i] == knightSprite) {
            knightSpriteToken++
        }
        if (summonCenter[i] == flareSprite) {
            flareSpriteToken++
        }

        // GODLY
        if (summonCenter[i] == skeletonGeneralSprite) {
            skeletonGeneralSpriteToken++
        }
        if (summonCenter[i] == plant1Sprite) {
            plant1SpriteToken++
        }
        if (summonCenter[i] == archerSprite) {
            archerSpriteToken++
        }
        if (summonCenter[i] == skeletonKingSprite) {
            skeletonKingSpriteToken++
        }

        // FORBIDDEN
        if (summonCenter[i] == flameSprite) {
            flameSpriteToken++
        }
        if (summonCenter[i] == lightSprite) {
            lightSpriteToken++
        }
        if (summonCenter[i] == magicSprite) {
            magicSpriteToken++
        }
    }
}
}

/* FUNCTION HEADER
  
FUNCTION NAME: HOVER
  
DESCRIPTION: it changes the style of the travel button when mouse is over it
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function hover() {
  switchButton.style('background-color', '#2b0000') //color of button
  switchButton.style('box-shadow', '0 0 10px #ff3333') // color of shadow
  switchButton.style('transform', 'scale(1.05)') // scales
}
/* FUNCTION HEADER
  
FUNCTION NAME:notHover
  
DESCRIPTION: it reverts back to the original styling of the travel button when mouse is taken off
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function notHover() {
  switchButton.style('background-color', '#1a1a1a') // color of buttton
  switchButton.style('box-shadow', '0 0 5px #660000') // color of shadow
  switchButton.style('transform', 'scale(1)') // scales
}
/* FUNCTION HEADER
  
FUNCTION NAME: toGame
  
DESCRIPTION:changes gamestate to game
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function toGame () {
  gamestate = "game"
}
/* FUNCTION HEADER
  
FUNCTION NAME:toTutorial
  
DESCRIPTION: changes gamestate to tutorial
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function toTutorial() {
  gamestate = "tutorial"
}
/* FUNCTION HEADER
  
FUNCTION NAME: toSettings
  
DESCRIPTION: changes gamestate to setting
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function toSettings() {
  gamestate = "settings"
}
/* FUNCTION HEADER
  
FUNCTION NAME:settingsHover
  
DESCRIPTION: changes the curson when the mouse is over the settngs button
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/

function settingsHover() {
  settings.style("cursor", "pointer")
}
/* FUNCTION HEADER
  
FUNCTION NAME: eraseHover
  
DESCRIPTION: changes the style when mouse is over the erase progress button
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function eraseHover() {
  eraseButton.style('background-color', '#2b0000') //color of button
  eraseButton.style('box-shadow', '0 0 10px #ff3333') // color of shadow
  eraseButton.style('transform', 'scale(1.05)') // scales
}
/* FUNCTION HEADER
  
FUNCTION NAME: eraseNotHover
  
DESCRIPTION: reverts back to original style when not on erase button
  
ARGUMENTS: none
  
RETURNS: none
  
  
*/
function eraseNotHover() {
  eraseButton.style('background-color', '#1a1a1a') // color of buttton
  eraseButton.style('box-shadow', '0 0 5px #660000') // color of shadow
  eraseButton.style('transform', 'scale(1)') // scales
}


// to do:
  //programme header
