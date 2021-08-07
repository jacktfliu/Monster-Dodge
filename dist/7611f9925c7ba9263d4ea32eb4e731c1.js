import charPhoto from './assets/golbez.png'
import backgroundPhoto from './assets/background.png'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.heigth = 600;

    const keys = [];

    const player = {
        x: 0,
        y: 0,
        width: 50,
        height: 80,
        dx: 0,
        dy: 0,
        speed: 9,
        moving: false
    }

    const playerChar = new Image();
    playerChar.src = 'charPhoto'
    const background= new Image();
    background.src = 'backgroundPhoto'


    function drawPlayer(img, sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawPlayer(playerChar, 0, 0, player.width, player.height, 
        200, 150, player.width, player.height);
        requestAnimationFrame(animate);
    }

    animate();
})