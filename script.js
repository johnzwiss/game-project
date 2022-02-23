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
        if (player.x <platArrayA[0].x +platArrayA[0].width
            && player.x + player.width >platArrayA[0].x
           && player.y <platArrayA[0].y +platArrayA[0].height
            && player.y + player.height >platArrayA[0].y){
            i = 3;
        }
        if (player.x <platArrayA[1].x +platArrayA[1].width
            && player.x + player.width >platArrayA[1].x
           && player.y <platArrayA[1].y +platArrayA[1].height
            && player.y + player.height >platArrayA[1].y){
            i = 5;
        }
        if (player.x <platArrayA[2].x +platArrayA[2].width
            && player.x + player.width >platArrayA[2].x
           && player.y <platArrayA[2].y +platArrayA[2].height
            && player.y + player.height >platArrayA[2].y){
            i = 7;
        }
        if (player.x <platArrayA[3].x +platArrayA[3].width
            && player.x + player.width >platArrayA[3].x
           && player.y <platArrayA[3].y +platArrayA[3].height
            && player.y + player.height >platArrayA[3].y){
            i = 9;
        }
        if (player.x <platArrayA[4].x +platArrayA[4].width
            && player.x + player.width >platArrayA[4].x
           && player.y <platArrayA[4].y +platArrayA[4].height
            && player.y + player.height >platArrayA[4].y){
            i = 11;
        }
        if (player.x <platArrayA[5].x +platArrayA[5].width
            && player.x + player.width >platArrayA[5].x
           && player.y <platArrayA[5].y +platArrayA[5].height
            && player.y + player.height >platArrayA[5].y){
            i = 13;
        }
        if (player.x <platArrayA[6].x +platArrayA[6].width
            && player.x + player.width >platArrayA[6].x
           && player.y <platArrayA[6].y +platArrayA[6].height
            && player.y + player.height >platArrayA[6].y){
            i = 15;
        }
        if (player.x <platArrayA[7].x +platArrayA[7].width
            && player.x + player.width >platArrayA[7].x
           && player.y <platArrayA[7].y +platArrayA[7].height
            && player.y + player.height >platArrayA[7].y){
            i = 17;
        }
        if (player.x <platArrayA[8].x +platArrayA[8].width
            && player.x + player.width >platArrayA[8].x
           && player.y <platArrayA[8].y +platArrayA[8].height
            && player.y + player.height >platArrayA[8].y){
            i = 19;
        }
        if (player.x <platArrayA[9].x +platArrayA[9].width
            && player.x + player.width >platArrayA[9].x
           && player.y <platArrayA[9].y +platArrayA[9].height
            && player.y + player.height >platArrayA[9].y){
            i = 21;
        }

        if (ground.y < player.y && player.y < ground.y + ground.height){
                i = 1;
            }    


        if (i > 0 && i < 2){
            player.jump = false;
            player.y = ground.y; 
            }
         else if (i > 2 && i < 4) {
                player.jump = false;
                player.y = platArrayA[0].y - 10
            }
            else if (i > 4 && i < 6) {
                player.jump = false;
                player.y = platArrayA[1].y - 10
            }
            else if (i > 6 && i < 8) {
                player.jump = false;
                player.y = platArrayA[2].y - 10
            }
            else if (i > 8 && i < 10) {
                player.jump = false;
                player.y = platArrayA[3].y - 10
            }
            else if (i > 10 && i < 12) {
                player.jump = false;
                player.y = platArrayA[4].y - 10
            }
            else if (i > 12 && i < 14) {
                player.jump = false;
                player.y = platArrayA[5].y - 10
            }
            else if (i > 14 && i < 16) {
                player.jump = false;
                player.y = platArrayA[6].y - 10
            }
            else if (i > 16 && i < 18) {
                player.jump = false;
                player.y = platArrayA[7].y - 10
            }
            else if (i > 18 && i < 20) {
                player.jump = false;
                player.y = platArrayA[8].y - 10
            }
            else if (i > 20 && i < 22) {
                player.jump = false;
                player.y = platArrayA[9].y - 10
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

