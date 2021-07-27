// import charPhoto from './assets/golbez.png'
// import backgroundPhoto from './assets/background.png'

document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.heigth = 600;

    const keys = [];

    const player = {
        x: 200,
        y: 200,
        width: 34,
        height: 45,
        fx: 0,
        fy: 0,
        speed: 9,
    }

    const playerChar = document.getElementById('player')
    // playerChar.src = charPhoto
    // const background= new Image();
    // background.src = backgroundPhoto
 

    function drawPlayer(img, sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawPlayer(playerChar, player.width * player.fx, player.height * player.fy, player.width, player.height, 
        player.x, player.y, player.width, player.height);
        moveChar();
        requestAnimationFrame(animate);
    }

    
    window.addEventListener('keydown', function(e){
        keys[e.keycode] = true;
        console.log(keys)
    })
    
    window.addEventListener('keyup', function(e){
        delete keys[e.keycode];
    })

    function moveChar(){
        if (keys[38]){
            player.y -= player.speed
        } else if (keys[37]){
            player.x -= player.speed
        } else if (keys[40]){
            player.y += player.speed
        } else if (keys[39]){
            player.x += player.speed
        }
    }

    animate();
})