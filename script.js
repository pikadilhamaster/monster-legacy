const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// IMAGENS
const playerImg = new Image();
playerImg.src = "assets/player/idle.png";

const grassImg = new Image();
grassImg.src = "assets/tiles/grass.png";

const enemyImg = new Image();
enemyImg.src = "assets/enemies/slime.png";

// PLAYER
const player = {
  x: 140,
  y: 100,
  speed: 2
};

// CONTROLES (PC + CELULAR)
const keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function movePlayer() {
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;
}

// DESENHO
function draw() {
  // mapa
  for (let y = 0; y < canvas.height; y += 32) {
    for (let x = 0; x < canvas.width; x += 32) {
      ctx.drawImage(grassImg, x, y, 32, 32);
    }
  }

  // inimigo
  ctx.drawImage(enemyImg, 200, 120, 32, 32);

  // player
  ctx.drawImage(playerImg, player.x, player.y, 32, 32);
}

// LOOP
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movePlayer();
  draw();
  requestAnimationFrame(loop);
}

loop();
