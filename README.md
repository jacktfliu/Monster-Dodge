Welcome to the Monster Dodge wiki!

# Monster Dodge

Monster Dodge is a pixel game that lets you move about to avoid moving objects. Players move about as long as possible to earn points, but if they touch an enemy or an enemy touches them, they lose the game. This is a single player game. 

Here's the live site!

![Screen Shot 2021-09-08 at 7 52 43 AM](https://user-images.githubusercontent.com/82416350/132507563-ea79a33d-8886-4fc2-bc34-6276f234d6db.png)

## Technologies
* Vanilla Javascript 
* HTML
* SCSS
* Canvas

## Functionality
Users are able to: 

* Move around within the bounds of canvas width and height
* Move left or right 
* Move up and down

## MVP & Timeline

## 1. User input dictates character movement (1 day)
* Users can move left and right using keys on the keyboard 
* Users can move up and down using keys on the keyboard

![walking](https://user-images.githubusercontent.com/82416350/132507766-55a21725-0ea5-4352-b195-a6a7af2b03a7.gif)


```javascript
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

function handlePlayerF(){
    if (player.fx < 3 && player.moving){
        player.fx++
    } else {
        player.fx = 0
    }
}
```

## 2. Pixel Bot (2 days)
* Different sized pixel bots move around randomly
* Number of pixel bots differ depending on size
* Speed of pixel bots are randomized

![walking around](https://user-images.githubusercontent.com/82416350/132508439-1a9b7ac0-0930-409a-ac1d-ca57086c8d2f.gif)

```javascript
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
```

## 3. Collision(1 day) 
* Collision between player and pixel character
![collison](https://user-images.githubusercontent.com/82416350/132508759-8b9b794d-b38e-4c58-a6b6-6e01765b97b2.gif)


```javascript
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
  
drawDeath(){
    drawPlayer(deathScytheTarget, this.width * this.fx, this.height * this.fy, this.width, this.height, this.x, this.y, this.width * 1.5, 
    this.height * 1.5);

    if (collision(player, this)){
        gameOver = true;
    }

    if (this.fx < this.maxFrame){
        this.fx++
    } else {
        this.fx = this.minFrame
    }
}
```

## 4. Scorecard (1 day)
* Shows your score when you die

## 5. Animation (1 day)
* Pixel animation on player
* Pixel animation on pixel characters

```javascript
  function handlePlayerF(){
      if (player.fx < 3 && player.moving){
          player.fx++
      } else {
          player.fx = 0
      }
  }
  //pixel characters movement
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
``` 


