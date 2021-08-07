import charPhoto from './assets/golbez.png'

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
        speed: 8,
        moving: false
    }

    const playerChar = new Image();
    playerChar.src = charPhoto


})