const begin = document.querySelector("#start")


 // create player 
 let player = {
    x: 250,
    y: 460,
    xVelocity: 0,
    yVelocity: 0,
    jump : true,
    height: 20,
    width: 20
    };
 // ground level    
let ground = {
        x: 0,
        y: 480,
        width: 500,
        height: 20,
    }
 
  
 // create platforms  
 
 
//  class Platform {
//     constructor(x, y, color, height, width) {
//         this.x = (Math.random() * 500)
//         this.y = 0,
//         this.color = "brown",
//         this.height = 10,
//         this.width = 70
//         this.speed = 0
//     }
  
//     }

//     function render() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
 



// let platformOne = new Platform(10, -30, "brown", 10, 70)
let platformA ={
    x: 10,
    y: 20,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformB ={
    x: 90,
    y: 120,
    height: 10,
    width: 70,
   yVelocity: 3, 
}    
let platformC ={
    x: 170,
    y: 220, 
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformD ={
    x: 250,
    y: 0,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformE ={
    x: 330,
    y: 100,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformF ={
    x: 410,
    y: 200,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformG ={
    x: 330,
    y: 300,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformH ={
    x: 270,
    y: 400,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformI ={
    x: 100,
    y: 300,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformJ ={
    x: 150,
    y: 400,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
//left and right side platforms 
let platArrayA = [platformA, platformB, platformC, platformD, platformE, platformF, platformG, platformH, platformI, platformJ]

 //render canvas    
function rendercanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
}
// render player 
function renderplayer(){
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    }
//creating random platforms 
function createPlatforms(){
    let i = Math.floor(Math.random() * 3)
    ctx.fillStyle = "brown";
    ctx.fillRect(platArrayA[0].x, platArrayA[0].y, platArrayA[0].width, platArrayA[0].height);
    ctx.fillRect(platArrayA[1].x, platArrayA[1].y, platArrayA[1].width, platArrayA[1].height);
    ctx.fillRect(platArrayA[2].x, platArrayA[2].y, platArrayA[2].width, platArrayA[2].height);
    ctx.fillRect(platArrayA[3].x, platArrayA[3].y, platArrayA[3].width, platArrayA[3].height);
    ctx.fillRect(platArrayA[4].x, platArrayA[4].y, platArrayA[4].width, platArrayA[4].height);
    ctx.fillRect(platArrayA[5].x, platArrayA[5].y, platArrayA[5].width, platArrayA[5].height);
    ctx.fillRect(platArrayA[6].x, platArrayA[6].y, platArrayA[6].width, platArrayA[6].height)
    ctx.fillRect(platArrayA[7].x, platArrayA[7].y, platArrayA[7].width, platArrayA[7].height)
    ctx.fillRect(platArrayA[8].x, platArrayA[8].y, platArrayA[8].width, platArrayA[8].height)
    ctx.fillRect(platArrayA[9].x, platArrayA[9].y, platArrayA[9].width, platArrayA[9].height)
      }

 //attempting to move platforms      

// render ground 
function renderGround(){
    ctx.fillStyle = "white"
    ctx.fillRect(ground.x, ground.y, ground.width, ground.height)
}


//player movement 
const keys = {
    right: false,
    left: false,
    up: false,
    };

    let gravity = 0.6;
    let friction = 0.7;

function keydown(e) {
    if(e.keyCode == 37) {
        keys.left = true;
    }
    if(e.keyCode == 39) {
        keys.right = true;
    }
    if(e.keyCode == 38) {
        if(player.jump == false) {
            player.yVelocity = -10;
        }
}}
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
    if(e.keyCode == 38) {
        if(player.yVelocity < -1) 
        
        player.yVelocity = -10;
        
    }
} 
 function loop() {
    if(player.jump == false) {
        player.xVelocity *= friction;
    } else {
        // If the player is in the air then apply the effect of gravity
        player.yVelocity += gravity;
    }
    player.jump = true;
    // If the left key is pressed increase the relevant horizontal velocity
    if(keys.left) {
        player.xVelocity = -3;
    }
    if(keys.right) {
        player.xVelocity = 3;
    }
    // Updating the y and x coordinates of the player
    player.y += player.yVelocity;
    player.x += player.xVelocity;
    platArrayA[0].y += .9
    platArrayA[1].y += .9
    platArrayA[2].y += .9
    platArrayA[3].y += .9
    platArrayA[4].y += .9
    platArrayA[5].y += .9
    platArrayA[6].y += .9
    platArrayA[7].y += .9
    platArrayA[8].y += .9
    platArrayA[9].y += .9

    if (platArrayA[0].y > 490) {
        platArrayA[0].y = 0
    }
    if (platArrayA[1].y > 490) {
        platArrayA[1].y = 0
    }
    if (platArrayA[2].y > 490) {
        platArrayA[2].y = 0
    }
    if (platArrayA[3].y > 490) {
        platArrayA[3].y = 0
    }
    if (platArrayA[4].y > 490) {
        platArrayA[4].y = 0
    }
    if (platArrayA[5].y > 490) {
        platArrayA[5].y = 0
    }
    if (platArrayA[6].y > 490) {
        platArrayA[6].y = 0
    }
    if (platArrayA[7].y > 490) {
        platArrayA[7].y = 0
    }
    if (platArrayA[8].y > 490) {
        platArrayA[8].y = 0
    }
    if (platArrayA[9].y > 490) {
        platArrayA[9].y = 0
    }

    let i = -1;
        // if(platforms[0].x < player.x && player.x < platforms[0].x + platforms[0].width &&
        // platforms[0].y < player.y && player.y < platforms[0].y + platforms[0].height){
        //     i = 0;
        // }
        // if(platforms[1].x < player.x && player.x < platforms[1].x + platforms[1].width &&
        // platforms[1].y < player.y && player.y < platforms[1].y + platforms[1].height){
        //     i = 1;
        // }
        // if(platforms[1].x < player.x && player.x < platforms[1].x + platforms[1].width &&
        //     platforms[1].y < player.y && player.y < platforms[1].y + platforms[1].height){
        //         i = 1;
        //     }

        if (ground.y < player.y && player.y < ground.y + ground.height){
                i = 1;
            }    
        if (i >  -1){
            player.jump = false;
            player.y = ground.y; 
        
              
        }
rendercanvas();
renderGround();    
renderplayer();
createPlatforms();
// console.log(platArrayA[1].y)
}

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 800;
ctx.canvas.width = 500;
// createPlatforms();
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
// Calling loop every 22 milliseconds to update the frame
let runGame = setInterval(loop,22)

