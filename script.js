const begin = document.querySelector("#start")
const welcome = document.querySelector('#welcome')
const restart = document.querySelector('#restart')
const instructions = document.querySelector('#instructions')
const instructionPage = document.querySelector('#instructionPage')
const winner = document.querySelector('#winner')
const img = document.querySelector('img')
const loser = document.querySelector('#loser')
const flip = document.querySelector("#flip") 
let counter = 1
 // create player 
 let player = {
    x: 173,
    y: 200,
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
 // final platform 

 let finalPlatform = {
     x: 0,
     y: -1000,
     width: 500,
     height: 20, 

 }
  //losing platform - falls later so player doesn't die immediately 

let losingPlatform = {
    x: 0,
    y: 480,
    width: 500,
    height: 20, 
}

 // create platforms  
 
let platformA ={
    x: 10,
    y: 20,
    height: 10,
    width: 70, 
}    
let platformB ={
    x: 90,
    y: 120,
    height: 10,
    width: 70, 
}    
let platformC ={
    x: 170,
    y: 220, 
    height: 10,
    width: 70, 
}    
let platformD ={
    x: 250,
    y: 0,
    height: 10,
    width: 70, 
}    
let platformE ={
    x: 330,
    y: 100,
    height: 10,
    width: 70, 
}    
let platformF ={
    x: 410,
    y: 200,
    height: 10,
    width: 70, 
}    
let platformG ={
    x: 330,
    y: 300,
    height: 10,
    width: 70, 
}    
let platformH ={
    x: 270,
    y: 400,
    height: 10,
    width: 70, 
}    
let platformI ={
    x: 100,
    y: 300,
    height: 10,
    width: 70, 
}    
let platformJ ={
    x: 150,
    y: 400,
    height: 10,
    width: 70, 
}    
//platform array 
let platArrayA = [platformA, platformB, platformC, platformD, platformE, platformF, platformG, platformH, platformI, platformJ]

 //render canvas    
function rendercanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
}
// render player 
function renderplayer(){
 
    if (counter % 2 == 0) { 
    ctx.drawImage(img, player.x, player.y, player.width, player.height);
    }
    else {
        ctx.drawImage(flip, player.x, player.y, player.width, player.height)
    }
    
}
//render final platform
function renderFinalPlatform(){
    ctx.fillStyle = "black"
    ctx.fillRect(finalPlatform.x, finalPlatform.y, finalPlatform.width, finalPlatform.height)
}    
//render loser
function renderLosingPlatform(){
  
    ctx.fillStyle = "red"
    ctx.fillRect(losingPlatform.x, losingPlatform.y, losingPlatform.width, losingPlatform.height)}

//creating platforms 
function createPlatforms(){
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

     

// render ground 
function renderGround(){
    ctx.fillStyle = "white"
    ctx.fillRect(ground.x, ground.y, ground.width, ground.height)
}


//player movement gravity help from https://www.w3schools.com/graphics/game_gravity.asp
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
        counter +=1
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
        if(player.yVelocity < -2) 
        player.yVelocity = -3; 
    }
    //--------------------game conditions------------------------
} 
     let gameWon = false
     let gameLost = false
    //  let levelTwo = 
    //  if (levelTwo) { 
    //     platArrayA[0].y += 1.5
    //     platArrayA[1].y += 1.5
    //     platArrayA[2].y += 1.5
    //     platArrayA[3].y += 1.5
    //     platArrayA[4].y += 1.5
    //     platArrayA[5].y += 1.5
    //     platArrayA[6].y += 1.5
    //     platArrayA[7].y += 1.5
    //     platArrayA[8].y += 1.5
    //     platArrayA[9].y += 1.5

    //  }

// ----------------------game loop------------------------------
     function loop() {

     if (!gameWon && !gameLost) {

    if(player.jump == false) {
        player.xVelocity *= friction;
    } else {
        
        player.yVelocity += gravity;
    }
    player.jump = true;
    
    if(keys.left) {
        player.xVelocity = -3;
    }
    if(keys.right) {
        player.xVelocity = 3;
    }
    // Updating the y and x coordinates of the player and platforms 
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
    finalPlatform.y += .9
    losingPlatform.y += .9 

    // if (levelTwo) { 
    //     platArrayA[0].y += 1
    //     platArrayA[1].y += 1
    //     platArrayA[2].y += 1
    //     platArrayA[3].y += 1
    //     platArrayA[4].y += 1
    //     platArrayA[5].y += 1
    //     platArrayA[6].y += 1
    //     platArrayA[7].y += 1
    //     platArrayA[8].y += 1
    //     platArrayA[9].y += 1

    //  }


    //Collision detection 

    if (platArrayA[0].y > 490) {
        platArrayA[0].y = 0
        platArrayA[0].x = Math.random() * 250
    }
    if (platArrayA[1].y > 490) {
        platArrayA[1].y = 0
        platArrayA[1].x = Math.random() * 250
    }
    if (platArrayA[2].y > 490) {
        platArrayA[2].y = 0
        platArrayA[2].x = Math.random() * 250
    }
    if (platArrayA[3].y > 490) {
        platArrayA[3].y = 0
        platArrayA[3].x = Math.random() * 400
    }
    if (platArrayA[4].y > 490) {
        platArrayA[4].y = 0
        platArrayA[4].x = Math.random() * 400
    }
    if (platArrayA[5].y > 490) {
        platArrayA[5].y = 0
        platArrayA[5].x = Math.random() * 400
    }
    if (platArrayA[6].y > 490) {
        platArrayA[6].y = 0
        platArrayA[6].x = Math.random() * 250
    }
    if (platArrayA[7].y > 490) {
        platArrayA[7].y = 0
        platArrayA[7].x = Math.random() * 250
    }
    if (platArrayA[8].y > 490) {
        platArrayA[8].y = 0
        platArrayA[8].x = Math.random() * 430
    }
    if (platArrayA[9].y > 490) {
        platArrayA[9].y = 0
        platArrayA[9].x = Math.random() * 430
    }
    if (finalPlatform.y > 50) {
        finalPlatform.y = 50
    }

    if(losingPlatform.y > 490) {
        losingPlatform.y = 490
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
        if (player.x <finalPlatform.x +finalPlatform.width
            && player.x + player.width >finalPlatform.x
           && player.y <finalPlatform.y +finalPlatform.height
            && player.y + player.height >finalPlatform.y && finalPlatform.y > 40){
            i = 23;
        }

        if (player.y <= losingPlatform.y +losingPlatform.height
            && player.y + player.height >= losingPlatform.y && losingPlatform.y >= 480){
            i = 25;
        }

        if (ground.y < player.y && player.y < ground.y + ground.height){
                i = 1;
            }    
        //walls
        
        if (player.x <= 0) {
            player.x = 1 
        }
        if (player.x >= 500) {
            player.x = 499
        }

        if (player.y <= 0) {
            player.y = 0
        }

        if (player.y > 500)
        {player.y = 480}


        if (i > 0 && i < 2){
            player.jump = false;
            player.y = ground.y; 
            }
         else if (i > 2 && i < 4) {
                player.jump = false;
                player.y = platArrayA[0].y - 20
            }
            else if (i > 4 && i < 6) {
                player.jump = false;
                player.y = platArrayA[1].y - 20
            }
            else if (i > 6 && i < 8) {
                player.jump = false;
                player.y = platArrayA[2].y - 20
            }
            else if (i > 8 && i < 10) {
                player.jump = false;
                player.y = platArrayA[3].y - 20
            }
            else if (i > 10 && i < 12) {
                player.jump = false;
                player.y = platArrayA[4].y - 20
            }
            else if (i > 12 && i < 14) {
                player.jump = false;
                player.y = platArrayA[5].y - 20
            }
            else if (i > 14 && i < 16) {
                player.jump = false;
                player.y = platArrayA[6].y - 20
            }
            else if (i > 16 && i < 18) {
                player.jump = false;
                player.y = platArrayA[7].y - 20
            }
            else if (i > 18 && i < 20) {
                player.jump = false;
                player.y = platArrayA[8].y - 20
            }
            else if (i > 20 && i < 22) {
                player.jump = false;
                player.y = platArrayA[9].y - 20
            }
            else if (i > 22 && i < 24) {
                player.jump = false;
                player.y = finalPlatform.y - 20
                gameWon = true
            }
            else if (i > 24 && i < 26) {
                player.jump = false;
                player.y = losingPlatform.y - 20
                gameLost = true
            }




rendercanvas();
createPlatforms();
renderGround();    
renderplayer();
renderFinalPlatform()
renderLosingPlatform()
}
if (gameWon) {
    winner.style.display = "grid"
}
if (gameLost) {
    loser.style.display = "grid"
}

}

let startGame = begin.addEventListener('click', function () {
welcome.style.display = "none"
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 800;
ctx.canvas.width = 500;
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
let runGame = setInterval(loop,22)
restart.style.display = "grid"

})
instructions.addEventListener('click', function () {
    instructionPage.style.display = "grid"
})

restart.addEventListener('click', function() {
     location.reload()
    
})
