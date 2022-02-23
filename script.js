const begin = document.querySelector("#start")


 // create player 
 let player = {
    x: 250,
    y: 760,
    xVelocity: 0,
    yVelocity: 0,
    jump : true,
    height: 20,
    width: 20
    };
 // ground level    
let ground = {
        x: 0,
        y: 790,
        width: 500,
        height: 10,
    }
 
  
 // create platforms   
let platformA ={
    x: 10,
    y: -20,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformB ={
    x: 90,
    y: -20,
    height: 10,
    width: 70,
   yVelocity: 3, 
}    
let platformC ={
    x: 170,
    y: -20, 
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
    y: 0,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
let platformF ={
    x: 410,
    y: 0,
    height: 10,
    width: 70,
    yVelocity: 3, 
}    
//left and right side platforms 
let platArrayA = [platformA, platformB, platformC]
let platArrayB = [platformD, platformE, platformF]

 //render canvas    
function rendercanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 800);
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
    ctx.fillRect(platArrayA[i].x, platArrayA[i].y, platArrayA[i].width, platArrayA[i].height);
    ctx.fillRect(platArrayB[i].x, platArrayB[i].y, platArrayB[i].width, platArrayB[i].height);
      }

 //attempting to move platforms      
function movePlatforms(){ 
    platArrayA[0,1,2].y += 30
    platArrayB[0,1,2].y += 30
   }
// render ground 
function renderGround(){
    ctx.fillStyle = "black"
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
        if(player.yVelocity < -2) {
        player.yVelocity = -10;
        }
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
        player.xVelocity = -2.5;
    }
    if(keys.right) {
        player.xVelocity = 2.5;
    }
    // Updating the y and x coordinates of the player
    player.y += player.yVelocity;
    player.x += player.xVelocity;
    

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

            if (ground.y < player.y && player.y < ground.y + ground.height){
                    i = 1;
                }   
        if (i >  -1){
            player.jump = false;
            player.y = ground.y - 10; 
        
              
        }
rendercanvas();
renderGround();    
renderplayer();

// renderPlatforms()
// movePlatforms()
console.log(platArrayA[1].y)
}

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 800;
ctx.canvas.width = 500;
// createPlatforms();
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
// Calling loop every 22 milliseconds to update the frame
//let runGame = setInterval(loop,40)
let makePlatforms = setInterval(createPlatforms,2000)
