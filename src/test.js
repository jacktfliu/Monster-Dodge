

// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = 1000;
//     canvas.heigth = 600;


//     const player = {
//         x: 0,
//         y: 450, 
//         w: 40,
//         h: 72,
//         dx: 0,
//         dy: 0,
//         speed: 7,
//     }

//     const target = new Target()

//     const sprite = document.getElementById('sprite')
//     const targetRed = document.getElementById('target')


//     function drawPlayer() {
//         ctx.drawImage(sprite, player.x, player.y, player.w, player.h);
//     }

//     function drawTarget() {
//         ctx.drawImage(targetRed, target.x, target.y, target.w, target.h);
//     }

//     function clear() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }

//     function newPosition() {
//         player.x += player.dx;
//         player.y += player.dy;

//         detectWalls();
//     }

//     function detectWalls() {
//         if (player.x < 0) {
//             player.x = 0;
//         }

//         if (player.x + player.w > canvas.width) {
//             player.x = canvas.width - player.w;
//         }
//     }

//     function update() {
//         clear();

//         drawPlayer();
//         drawTarget();

//         newPosition();

//         requestAnimationFrame(update);
//     }

//     function moveRight() {
//         player.dx = player.speed;
//     }

//     function moveLeft() {
//         player.dx = -player.speed;
//     }

//     function keyDown(e) {
//         if (e.key === 'ArrowRight' || e.key === 'Right') {
//             moveRight();
//         } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
//             moveLeft();
//         }
//     }

//     function keyUp(e) {
//         if ( e.key == 'Right' || e.key == 'ArrowRight' ||
//             e.key == 'Left' || e.key == 'ArrowLeft'){
//             player.dx = 0;
//             player.dy = 0;
//         }
//     }

//     update();

//     document.addEventListener('keydown', keyDown);
//     document.addEventListener('keyup', keyUp);
    
// })
