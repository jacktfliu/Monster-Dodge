
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.heigth = 600;


    const keys = [];
    const targetActions = ['up', 'down', 'left', 'right']

    const player = {
        x: 200,
        y: 200,
        width: 32,
        height: 48,
        fx: 0,
        fy: 0,
        speed: 5,
        moving: false
    }
    const dragon = {
        x: 0,
        y: 0,
        width: 142,
        height: 142,
        fx: 0,
        fy: 0,
        speed: 4,
    }
    const leviathan = {
        x: 300,
        y: 300,
        width: 177.5,
        height: 177.5,
        fx: 0,
        fy: 0,
        speed: 4,
    }
    // const phoenix = {
    //     x: 200,
    //     y: 200,
    //     width: 142,
    //     height: 142,
    //     fx: 0,
    //     fy: 0,
    //     speed: 4,
    // }
    const deathScythe = {
        x: 200,
        y: 200,
        width: 50,
        height: 48,
        fx: 0,
        fy: 0,
        speed: 4,
    }
    const ifrit = {
        x: 100,
        y: 100,
        width: 80,
        height: 80,
        fx: 0,
        fy: 0,
        speed: 2,
    }

    const playerChar = document.getElementById('player')
    const dragonTarget = document.getElementById('dragon')
    const leviathanTarget = document.getElementById('leviathan')
    // const phoenix = document.getElementById('phoenix')
    const deathScytheTarget = document.getElementById('death-scythe')
    const ifritTarget = document.getElementById('ifrit')    

    function drawPlayer(imgfile, sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(imgfile, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    function animatePlayer(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //player sprite
        drawPlayer(playerChar, player.width * player.fx, player.height * player.fy, player.width, player.height, 
        player.x, player.y, player.width, player.height);

        //leviathan sprite
        ctx.drawImage(leviathanTarget, leviathan.width * leviathan.fx, leviathan.height * leviathan.fy, leviathan.width, leviathan.height, 
        leviathan.x, leviathan.y, leviathan.width, leviathan.height)
        //leviathan movement
        if (leviathan.fx < 3){leviathan.fx++} else {leviathan.fx = 1, leviathan.fy = 2}
        // move leviathan 
        if (leviathan.x < canvas.width + leviathan.width) {
            leviathan.x += leviathan.speed
        } else {leviathan.x = 0 - leviathan.width}

        //deathScythe sprite
        ctx.drawImage(deathScytheTarget, deathScythe.width * deathScythe.fx, deathScythe.height * deathScythe.fy, deathScythe.width, deathScythe.height, 
        deathScythe.x, deathScythe.y, deathScythe.width, deathScythe.height)
        //deathScythe movement
        if (deathScythe.fx < 3){deathScythe.fx++} else {deathScythe.fx = 0, deathScythe.fy = 2}
        // move deathScythe 
        if (deathScythe.x < canvas.width + deathScythe.width) {
            deathScythe.x += deathScythe.speed
        } else {deathScythe.x = 0 - deathScythe.width}
    
        //ifrit sprite
        ctx.drawImage(ifritTarget, ifrit.width * ifrit.fx, ifrit.height * ifrit.fy, ifrit.width, ifrit.height, 
        ifrit.x, ifrit.y, ifrit.width, ifrit.height)
        //ifrit movement
        if (ifrit.fx < 3){ifrit.fx++} else {ifrit.fx = 0, ifrit.fy = 2}
        // move ifrit 
        if (ifrit.x < canvas.width + ifrit.width) {
            ifrit.x += ifrit.speed
        } else {ifrit.x = 0 - ifrit.width}


        //dragon sprite
        ctx.drawImage(dragonTarget, dragon.width * dragon.fx, dragon.height * dragon.fy, dragon.width, dragon.height, 
        dragon.x, dragon.y, dragon.width, dragon.height)
        //dragon movement
        if (dragon.fx < 3){dragon.fx++} else {dragon.fx = 0, dragon.fy = 2}
        // move draogn 
        if (dragon.x < canvas.width + dragon.width) {
            dragon.x += dragon.speed
        } else {dragon.x = 0 - dragon.width}


        moveChar();
        handlePlayerF();
        requestAnimationFrame(animatePlayer);
    }

    
    window.addEventListener('keydown', function(e){
        keys[e.keyCode] = true;
        player.moving = true;
    })
    
    window.addEventListener('keyup', function(e){
        delete keys[e.keyCode];
        player.moving = false;
    })
  
    //player control 
    function moveChar(){
        if (keys[38] && player.y > 0){
            player.y -= player.speed
            player.fy = 3
        } else if (keys[37] && player.x > 0){
            player.x -= player.speed
            player.fy = 1
        } else if (keys[40] && player.y < canvas.heigth - player.height){
            player.y += player.speed
            player.fy = 0
        } else if (keys[39] && player.x < canvas.width - player.width){
            player.x += player.speed
            player.fy = 2
        }
    }

    // player aniamtion movement
    function handlePlayerF(){
        if (player.fx < 3 && player.moving){
            player.fx++
        } else {
            player.fx = 0
        }
    }

    function update (){
        animatePlayer();   
    }

    class Character {
        constructor(){
            
        }
    }

    update();
})