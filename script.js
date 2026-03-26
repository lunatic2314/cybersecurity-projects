// Pong Game in JavaScript

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game Objects
const paddleWidth = 10, paddleHeight = 100;
const ballSize = 10;
let playerPaddle = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight };  
let computerPaddle = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight };  
let ball = { x: canvas.width / 2, y: canvas.height / 2, size: ballSize, speedX: 5, speedY: 2 };
let playerScore = 0, computerScore = 0;

// Controls
let playerY = playerPaddle.y;
document.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    playerY = event.clientY - rect.top - (paddleHeight / 2);
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') playerY = Math.max(playerY - 10, 0);
    if (event.key === 'ArrowDown') playerY = Math.min(playerY + 10, canvas.height - paddleHeight);
});

// Update Paddle Positions
function updatePaddles() {
    playerPaddle.y = playerY;
    // Computer AI
    if (computerPaddle.y + paddleHeight / 2 < ball.y) {
        computerPaddle.y += 4;
    } else if (computerPaddle.y + paddleHeight / 2 > ball.y) {
        computerPaddle.y -= 4;
    }
}

// Update Ball Position
function updateBall() {
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Wall collision
    if (ball.y <= 0 || ball.y >= canvas.height - ball.size) {
        ball.speedY *= -1;
    }

    // Paddle collision
    if (ball.x <= playerPaddle.x + playerPaddle.width &&
        ball.y >= playerPaddle.y &&
        ball.y <= playerPaddle.y + playerPaddle.height) {
        ball.speedX *= -1;
        ball.speedX *= 1.1; // Increase speed
    }

    if (ball.x + ball.size >= computerPaddle.x &&
        ball.y >= computerPaddle.y &&
        ball.y <= computerPaddle.y + computerPaddle.height) {
        ball.speedX *= -1;
        ball.speedX *= 1.1; // Increase speed
    }

    // Score Handling
    if (ball.x < 0) {
        computerScore++;
        resetBall();
    }
    if (ball.x > canvas.width) {
        playerScore++;
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = 5;
    ball.speedY = 2;
}

// Draw everything on the screen
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';

    // Draw paddles
    ctx.fillRect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
    ctx.fillRect(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height);

    // Draw ball
    ctx.fillRect(ball.x, ball.y, ball.size, ball.size);

    // Draw Scores
    ctx.font = '20px Arial';
    ctx.fillText(`Player: ${playerScore} - Computer: ${computerScore}`, canvas.width / 2 - 50, 20);

    // Win Condition
    if (playerScore >= 5) {
        ctx.fillText('Player Wins!', canvas.width / 2 - 50, canvas.height / 2);
        return;
    }
    if (computerScore >= 5) {
        ctx.fillText('Computer Wins!', canvas.width / 2 - 50, canvas.height / 2);
        return;
    }
}

// Game Loop
function gameLoop() {
    updatePaddles();
    updateBall();
    draw();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);