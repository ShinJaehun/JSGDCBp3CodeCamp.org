/** @type {HTMLCanvasElement} */
//이게 뭐지?
import "./styles.css";

const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
const CANVAS_WIDTH1 = (canvas1.width = 500);
const CANVAS_HEIGHT1 = (canvas1.height = 1000);

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
const CANVAS_WIDTH2 = (canvas2.width = 500);
const CANVAS_HEIGHT2 = (canvas2.height = 1000);

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
const CANVAS_WIDTH3 = (canvas3.width = 500);
const CANVAS_HEIGHT3 = (canvas3.height = 1000);

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
const CANVAS_WIDTH4 = (canvas4.width = 500);
const CANVAS_HEIGHT4 = (canvas4.height = 1000);

const numberOfEnemies = 20;
const enemy1Array = [];
const enemy2Array = [];
const enemy3Array = [];
const enemy4Array = [];

//const enemyImage = new Image();
//enemyImage.src = "../assets/img/enemy1.png";

let gameFrame = 0;

/*
const enemy1 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200
};
*/

class Enemy1 {
  constructor() {
    this.image = new Image();
    this.image.src = "../assets/img/enemy1.png";

    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;

    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;

    this.x = Math.random() * (canvas1.width - this.width);
    this.y = Math.random() * (canvas1.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    //ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx1.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Enemy2 {
  constructor() {
    this.image = new Image();
    this.image.src = "../assets/img/enemy2.png";

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;

    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;

    this.x = Math.random() * (canvas2.width - this.width);
    this.y = Math.random() * (canvas2.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    //this.angle = Math.random() * 2;
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }

  update() {
    this.x -= this.speed;
    //this.y += 10 * Math.sin(this.angle);
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;

    if (this.x + this.width < 0) this.x = canvas2.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx2.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Enemy3 {
  constructor() {
    this.image = new Image();
    this.image.src = "../assets/img/enemy3.png";

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;

    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;

    this.x = Math.random() * (canvas3.width - this.width);
    this.y = Math.random() * (canvas3.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    //this.angle = Math.random() * 2;
    this.angle = Math.random() * 500;
    this.angleSpeed = Math.random() * 1.5 + 0.5;
    //this.curve = Math.random() * 200 + 50;
  }

  update() {
    /*
    //sin과 cos를 조합한 여러 다양한 패턴을 활용해볼 수 있음.
    this.x = this.curve * Math.sin(this.angle * Math.PI/90) + 
              (canvas3.width/2 - this.width/2);
    this.y = this.curve * Math.cos(this.angle * Math.PI/180) + 
              (canvas3.height/2 - this.height/2);
    */
    this.x =
      (canvas3.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
      (canvas3.width / 2 - this.width / 2);
    this.y =
      (canvas3.width / 2) * Math.cos((this.angle * Math.PI) / 270) +
      (canvas3.height / 2 - this.height / 2);
    this.angle += this.angleSpeed;

    if (this.x + this.width < 0) this.x = canvas3.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx3.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Enemy4 {
  constructor() {
    this.image = new Image();
    this.image.src = "../assets/img/enemy4.png";

    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;

    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;

    this.x = Math.random() * (canvas4.width - this.width);
    this.y = Math.random() * (canvas4.height - this.height);
    this.newX = Math.random() * (canvas4.width - this.width);
    this.newY = Math.random() * (canvas4.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  update() {
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (canvas4.width - this.width);
      this.newY = Math.random() * (canvas4.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 70;
    this.y -= dy / 70;

    if (this.x + this.width < 0) this.x = canvas4.width;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx4.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

//const enemy1 = new Enemy();

for (let i = 0; i < numberOfEnemies; i++) {
  enemy1Array.push(new Enemy1());
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemy2Array.push(new Enemy2());
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemy3Array.push(new Enemy3());
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemy4Array.push(new Enemy4());
}

function animate() {
  ctx1.clearRect(0, 0, CANVAS_WIDTH1, CANVAS_HEIGHT1);
  ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2);
  ctx3.clearRect(0, 0, CANVAS_WIDTH3, CANVAS_HEIGHT3);
  ctx4.clearRect(0, 0, CANVAS_WIDTH4, CANVAS_HEIGHT4);

  //enemy1.x++;
  //enemy1.y++;
  //ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);

  //enemy1.update()
  //enemy1.draw()

  enemy1Array.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  enemy2Array.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  enemy3Array.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  enemy4Array.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
