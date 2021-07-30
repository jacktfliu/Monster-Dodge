
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.heigth = 600;

    const keys = [];
    const ifritMovements = ['up','right', 'left', 'down'];
    const numOfIfrit = 5;
    let  ifritBot = [];

    const dragonMovement = ['up','right', 'left', 'down'];
    const numOfDragon = 3;
    let dragonBot = [];

    const deathScytheMovement = ['up','right', 'left', 'down'];
    const numOfDeathScythe = 8;
    let DeathScytheBot = [];

    let score = 0;
    let gameOver = false;

    const playerChar = document.getElementById('player')
    const dragonTarget = document.getElementById('dragon')
    const deathScytheTarget = document.getElementById('death-scythe')
    const ifritTarget = document.getElementById('ifrit') 
    const monster = document.getElementById('monster')  
    
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

    function drawPlayer(img, sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
    
    function animatePlayer(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //player sprite
        drawPlayer(playerChar, player.width * player.fx, player.height * player.fy, player.width, player.height, 
        player.x, player.y, player.width, player.height);

        for (i = 0; i < DeathScytheBot.length; i++ ){
            DeathScytheBot[i].drawDeath();
            DeathScytheBot[i].updateDeathMovement();
        }

        for (i = 0; i < ifritBot.length; i++ ){
            ifritBot[i].drawIfrit();
            ifritBot[i].updateIfritMovement();
        }

        for (i = 0; i < dragonBot.length; i++ ){
            dragonBot[i].drawDragon();
            dragonBot[i].updateDragonMovement();
        }

        drawScore()
        handleGameStatus()
        moveChar();
        handlePlayerF();
        if (!gameOver){
            requestAnimationFrame(animatePlayer);
        } 
    }

    monster.addEventListener('click', () => {
        gameOver = false;
        ifritBot = []; 
        dragonBot = [];
        DeathScytheBot = []
        score = 0;

        for (i = 0; i < numOfIfrit; i++){
        ifritBot.push(new Ifrit());
        }
        
        for (i = 0; i < numOfDragon; i++){
        dragonBot.push(new Dragon());
        }

        for (i = 0; i < numOfDeathScythe; i++){
        DeathScytheBot.push(new DeathScythe());
        }        
        

        animatePlayer();

    })


    

    function drawScore(){
        ctx.font = "18px Arial";
        ctx.fillStyle = "#black";
        ctx.fillText("Score: "+score, 20, 25);
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

    //collision function
    function collision(first, second){
        if ( !(first.x > second.x + second.width ||
                first.x  + first.width < second.x || 
                first.y > second.y + second.height ||
                first.y + first.height < second.y)
        ){
            return true
        } else {
            (score++ / 100);
        }
    }

    // handlegame 
    function handleGameStatus(){
        if (gameOver){
            ctx.fillStyle = 'black';
            ctx.font = '90px Orbitron';
            ctx.fillText('GAME OVER', 230, 300);
            ctx.fillStyle = 'white';
            ctx.font = '40px Orbitron';
            ctx.fillText('Your Score is:'+ " " +score, 345, 400);            
        }
    }

    //ifrit movements
    class Ifrit {
        constructor(){
            this.width = 40;
            this.height = 56;
            this.fx = 0;
            this.x = Math.random() * canvas.width - this.width;
            this.y = Math.random() * canvas.height - this.height;
            this.speed = (Math.random() * 3) + 2;
            this.action = ifritMovements[Math.floor(Math.random() * ifritMovements.length)];
            if (this.action === 'up') {
                this.fy = 3; 
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'right') {
                this.fy = 2; 
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'down') {
                this.fy = 0;
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'left') {
                this.fy = 1;
                this.minFrame = 0;
                this.maxFrame = 3
            }

        }

        drawIfrit(){
            drawPlayer(ifritTarget, this.width * this.fx, this.height * this.fy, this.width, this.height, this.x, this.y, this.width * 1.5, this.height * 1.5);
            
            if (collision(player, this)){
                gameOver = true;
            }
            if (this.fx < this.maxFrame){
                this.fx++
            } else {
                this.fx = this.minFrame
            }
        }

        updateIfritMovement(){
            if (this.action === 'up') {
                if (this.y < 0 - (this.height * 5)) {
                    this.y = canvas.height + this.height;
                    this.x = Math.random() * canvas.width;
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.y -= this.speed;  
                }
            }
            else if (this.action === 'right') {
                if (this.x > canvas.width + (this.width * 5)) {
                    this.x = 0 - this.width;
                    this.y = Math.random() * canvas.height; 
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.x += this.speed; 
                }
            } 
            else if (this.action ==='left'){
                if (this.x > canvas.width + (this.width * 5)) {
                    this.x = 0 + this.width;
                    this.y = Math.random() * canvas.height; 
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.x -= this.speed
                }
            } 
            else if (this.action === 'down') {
                if (this.y > canvas.height + (this.height * 5)) {
                    this.y = 0 - this.height;
                    this.x = Math.random() * canvas.width;
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.y += this.speed;  
                }
            }
        }
    }

    // dragon 

    class Dragon {
        constructor(){
            this.width = 142;
            this.height = 142;
            this.fx = 0;
            this.x = Math.random() * canvas.width - this.width;
            this.y = Math.random() * canvas.height - this.height;
            this.speed = (Math.random() * 3) + 2;
            this.action = dragonMovement[Math.floor(Math.random() * dragonMovement.length)];
            if (this.action === 'up') {
                this.fy = 3; 
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'right') {
                this.fy = 2; 
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'down') {
                this.fy = 0;
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'left') {
                this.fy = 1;
                this.minFrame = 0;
                this.maxFrame = 3
            }

        }

        drawDragon(){
            drawPlayer(dragonTarget, this.width * this.fx, this.height * this.fy, this.width, this.height, this.x, this.y, this.width * 1.5, this.height * 1.5);
            
            if (collision(player, this)){
                gameOver = true;
            }
            if (this.fx < this.maxFrame){
                this.fx++
            } else {
                this.fx = this.minFrame
            }
        }

        updateDragonMovement(){
            if (this.action === 'up') {
                if (this.y < 0 - (this.height * 5)) {
                    this.y = canvas.height + this.height;
                    this.x = Math.random() * canvas.width;
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.y -= this.speed;  
                }
            }
            else if (this.action === 'right') {
                if (this.x > canvas.width + (this.width * 5)) {
                    this.x = 0 - this.width;
                    this.y = Math.random() * canvas.height; 
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.x += this.speed; 
                }
            } 
            else if (this.action ==='left'){
                if (this.x > canvas.width + (this.width * 5)) {
                    this.x = 0 + this.width;
                    this.y = Math.random() * canvas.height; 
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.x -= this.speed
                }
            } 
            else if (this.action === 'down') {
                if (this.y > canvas.height + (this.height * 5)) {
                    this.y = 0 - this.height;
                    this.x = Math.random() * canvas.width;
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.y += this.speed;  
                }
            }
        }
    }

    // DeathScythe

    class DeathScythe {
        constructor(){
            this.width = 50;
            this.height = 48;
            this.fx = 0;
            this.x = Math.random() * canvas.width - this.width;
            this.y = Math.random() * canvas.height - this.height;
            this.speed = (Math.random() * 3) + 2;
            this.action = deathScytheMovement[Math.floor(Math.random() * deathScytheMovement.length)];
            if (this.action === 'up') {
                this.fy = 3; 
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'right') {
                this.fy = 2; 
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'down') {
                this.fy = 0;
                this.minFrame = 0;
                this.maxFrame = 3;
            }
            else if (this.action === 'left') {
                this.fy = 1;
                this.minFrame = 0;
                this.maxFrame = 3
            }

        }

        drawDeath(){
            drawPlayer(deathScytheTarget, this.width * this.fx, this.height * this.fy, this.width, this.height, this.x, this.y, this.width * 1.5, this.height * 1.5);
            
            if (collision(player, this)){
                gameOver = true;
            }

            if (this.fx < this.maxFrame){
                this.fx++
            } else {
                this.fx = this.minFrame
            }
        }

        updateDeathMovement(){
            if (this.action === 'up') {
                if (this.y < 0 - (this.height * 5)) {
                    this.y = canvas.height + this.height;
                    this.x = Math.random() * canvas.width;
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.y -= this.speed;  
                }
            }
            else if (this.action === 'right') {
                if (this.x > canvas.width + (this.width * 5)) {
                    this.x = 0 - this.width;
                    this.y = Math.random() * canvas.height; 
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.x += this.speed; 
                }
            } 
            else if (this.action ==='left'){
                if (this.x > canvas.width + (this.width * 5)) {
                    this.x = 0 + this.width;
                    this.y = Math.random() * canvas.height; 
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.x -= this.speed
                }
            } 
            else if (this.action === 'down') {
                if (this.y > canvas.height + (this.height * 5)) {
                    this.y = 0 - this.height;
                    this.x = Math.random() * canvas.width;
                    this.speed = (Math.random() * 3) + 2;
                } else {
                    this.y += this.speed;  
                }
            }
        }
    }

    for (i = 0; i < numOfIfrit; i++){
    ifritBot.push(new Ifrit());
    }
    
    for (i = 0; i < numOfDragon; i++){
    dragonBot.push(new Dragon());
    }

    for (i = 0; i < numOfDeathScythe; i++){
    DeathScytheBot.push(new DeathScythe());
    }   

})