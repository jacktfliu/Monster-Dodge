    const deathScytheMovement = ['up','right', 'left', 'down'];
    const numOfDeathScythe = 3;
    const DeathScytheBot = [];
    
    class DeathScythe {
        constructor(){
            this.width = 72;
            this.height = 72;
            this.fx = 0;
            this.x = Math.random() * canvas.width - this.width;
            this.y = Math.random() * canvas.height - this.height;
            this.speed = (Math.random() * 3) + 2;
            this.minFrame = 0;
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

        drawDeathScythe(){
            drawPlayer(DeathScythe, this.width * this.fx, this.height * this.fy, this.width, this.height, this.x, this.y, this.width * 1.5, this.height * 1.5);
            
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

    for (i = 0; i < numOfDeathScythe; i++){
        DeathScytheBot.push(new DeathScythe());
    }