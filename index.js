const startElement = document.getElementById("start");
const startPage = document.createElement("div");
startPage.id = "container";
const logInContainer = document.createElement("div")
logInContainer.className = "logInContainer"
let logInPlayer1 = loginOpen("defaultProfile.jpg", "nicknamePlayer1", "player1img")
let logInPlayer1Div = logInPlayer1.container
const player1pro = logInPlayer1

let logInPlayer2 = loginOpen("defaultProfile.jpg", "nicknamePlayer2", "player2img")
let logInPlayer2Div = logInPlayer2.container
let player2Img = logInPlayer2.image

logInContainer.appendChild(logInPlayer1Div);
logInContainer.appendChild(logInPlayer2Div);
const gameName = document.createElement("h1");
gameName.innerText = "PONG";
gameName.id = "gameName";

startPage.appendChild(gameName);
startElement.appendChild(startPage);

let player1Name = "player 1"
let player2Name = "player 2"
const buttonContainer = document.createElement("div")
buttonContainer.className = "buttonContainer"
const onePlayerButton = document.createElement("button")
onePlayerButton.className = "playerChooseButton"
onePlayerButton.innerText = "one player"

onePlayerButton.addEventListener("click", () => {
  document.getElementById("nicknamePlayer2").value = "Computer"
  document.getElementById("player2img").style.pointerEvents = "none";
  document.getElementById("nicknamePlayer2").style.pointerEvents = "none";
  player1Img = "defaultProfile.jpg"
  player2Img = "defaultProfile.jpg"
  buttonContainer.style.display = "none"
  logInContainer.style.display = "flex"
  backButton.style.display = "block"
  startButton.addEventListener(("click"),()=>{
    console.log(document.getElementById("nicknamePlayer2").value);
    console.log(document.getElementById("nicknamePlayer1").value);
    if(testNickname(document.getElementById("nicknamePlayer1").value)&&testNickname(document.getElementById("nicknamePlayer1").value)){
      startButton.style.display = "none"
      backButton.style.display = "none"
      logInContainer.style.display = "none"
      document.getElementById("gameBoard").style.display = "block"
      document.getElementById("scoreText").style.display = "block"
      document.getElementById("buttonDiv").style.display = "flex"
      computer()
      console.log(player1pro);
      
    }
  })
  startButton.style.display = "block"

})

const twoPlayerButton = document.createElement("button")
twoPlayerButton.className = "playerChooseButton"
twoPlayerButton.innerText = "two player"
twoPlayerButton.addEventListener("click", () => {
  document.getElementById("player2img").style.pointerEvents = "click";
  document.getElementById("nicknamePlayer2").style.pointerEvents = "click";
  player1Img = "defaultProfile.jpg"
  player2Img = "defaultProfile.jpg"
  buttonContainer.style.display = "none"
  logInContainer.style.display = "flex"
  backButton.style.display = "block"
  startButton.addEventListener(("click"),()=>{
    console.log(document.getElementById("nicknamePlayer2").value);
    console.log(document.getElementById("nicknamePlayer1").value);
    if(testNickname(document.getElementById("nicknamePlayer1").value)&&testNickname(document.getElementById("nicknamePlayer1").value)){
      startButton.style.display = "none"
      backButton.style.display = "none"
      logInContainer.style.display = "none"
      document.getElementById("gameBoard").style.display = "block"
      document.getElementById("scoreText").style.display = "block"
      document.getElementById("buttonDiv").style.display = "flex"
      players2()
    }
  })
  startButton.style.display = "block"
})

buttonContainer.appendChild(onePlayerButton)
buttonContainer.appendChild(twoPlayerButton)

startPage.appendChild(buttonContainer);

function loginOpen(imageUrl, inputId, imgId) {
  const logIn = document.createElement("div");
  logIn.className = "login";
  const headerLogin = document.createElement("h3");
  headerLogin.innerText = "LOGIN"
  logIn.appendChild(headerLogin)
  let profileChosen = chosenImage(imageUrl, imgId)
  profileChosen.addEventListener("click", () => {
    logInContainer.style.display = "none"
    const editProfile = editPro(imgId).container
    editProfile.style.display = "flex"
    startPage.appendChild(editProfile)
    console.log(editProfile.newImg);
    
    profileChosen = editProfile.newImg;
  })
  const nickname = document.createElement("p")
  nickname.innerText = "Nickname:"
  let nicknameInput = document.createElement("input")
  nicknameInput.type = "text"
  nicknameInput.id = inputId
  logIn.appendChild(profileChosen)
  logIn.appendChild(nickname);
  logIn.appendChild(nicknameInput)

  return { container: logIn, image: profileChosen }

}

startPage.appendChild(logInContainer)
function imageChoices(imageUrl) {
  const img = document.createElement('img');
  img.id = "image"
  img.src = imageUrl;
  return img;
}
function editPro(imgId) {
  const editProfile = document.createElement("div")
  editProfile.id = "editProfile"
  const profileImg = ["profile1.jpg", "profile2.jpg", "profile3.webp", "profile4.jpg",]
  let changeSrc = document.getElementById(imgId)
  profileImg.forEach(el => {
    const edited = imageChoices(el)
    editProfile.appendChild(edited)
    edited.addEventListener("click", () => {
      changeSrc.src = el
      editProfile.style.display = "none"
      logInContainer.style.display = "flex"
    })
  })
  return { container: editProfile, newImg: changeSrc.src }
}
function chosenImage(imageUrl, imgId) {
  const imagePro = document.createElement("img")
  imagePro.id = imgId
  imagePro.src = imageUrl
  return imagePro
}
const backButton = document.createElement("button")
backButton.className = "playerChooseButton"
backButton.innerText = "BACK"
backButton.style.display = "none"
backButton.addEventListener("click",()=>{
  location.reload()
  logInContainer.style.display = "none"
  backButton.style.display = "none"
  startButton.style.display = "none"
  buttonContainer.style.display = "flex"
})
let startButton = document.createElement("button")
startButton.className = "playerChooseButton"
startButton.innerText = "START"
startButton.style.display = "none"


startPage.appendChild(startButton)
startPage.appendChild(backButton)

function testNickname(input){
  const testStr= /^[a-zA-Z0-9]+$/
  if(testStr.test(input)&&input.length<=8&&input.length>0){
    return true
  }else return false
}
const player1Nickname=document.getElementById("nicknamePlayer2")
const player2Nickname=document.getElementById("nicknamePlayer2")







const start = document.getElementById("start")
const canvas = document.createElement('canvas')
const ctx = canvas.getContext("2d");
canvas.id = "gameBoard"
canvas.width = 1000
canvas.height = 500
const scoreDiv = document.createElement('div')
const gameWidth = canvas.width;
const gameHeight = canvas.height;
const boardBackground = "black";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballRadius = 12.5;
const computerButtom = document.createElement('button')
const player1VSplayer2 = document.createElement('button')
const refresh = document.createElement('button')
const reset = document.createElement('button')
const buttonsDiv = document.createElement('div')
const soundScore = document.createElement("audio")
const soundBounce = document.createElement("audio")
let intervalID;
let ballSpeed;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddleMargin = 10;
let paddle1 = {
    width: 10,
    height: 100,
    x: paddleMargin,
    y: gameHeight / 2 - 50
};
let paddle2 = {
    width: 10,
    height: 100,
    x: gameWidth - paddleMargin - 10,
    y: gameHeight / 2 - 50
};

scoreDiv.id = "scoreText"
scoreDiv.innerHTML = "0 : 0"

soundScore.id = "scoreSound"
soundScore.src = "score.mp3"
soundBounce.id = "bounceSound"
soundBounce.src = "hit.mp3"

buttonsDiv.id = "buttonDiv"
reset.innerHTML = 'reset'
reset.id = 'resetBtn'
refresh.innerHTML = 'back'
refresh.id = 'resetBtn'
let ballTrail = [];
let paddleSpeed = 8;
let paddle1SpeedY = 0;
let paddle2SpeedY = 0;
start.appendChild(canvas)
start.appendChild(scoreDiv)
start.appendChild(soundScore)
start.appendChild(soundBounce)
start.appendChild(buttonsDiv)

function players2(){
    buttonsDiv.appendChild(refresh)
    buttonsDiv.appendChild(reset)
    player1VSplayer2.id = 'hid'
    computerButtom.id = 'hid'
    player()
    computerButtom.disabled = true;
    refresh.addEventListener('click', () => {
        function reloadPage() {
            location.reload();
        } reloadPage()
    })
}
function computer(){
    buttonsDiv.appendChild(refresh)
    buttonsDiv.appendChild(reset)
    computerButtom.id = 'hid'
    player1VSplayer2.id = 'hid'
    bot()
    player1VSplayer2.disabled = true;
    refresh.addEventListener('click', () => {
        function reloadPage() {
            location.reload();
        } reloadPage()
    })
}
function drawBlackHole(x, y) {
    const gradient = ctx.createRadialGradient(x, y, 10, x, y, 150);
    gradient.addColorStop(0, "rgb(2, 32, 41)");
    gradient.addColorStop(0.5, "rgb(11, 46, 56)");
    gradient.addColorStop(1, "rgb(160, 235, 252)");

    ctx.beginPath();
    ctx.ellipse(x, y, 30, 150, 0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = gradient
    ctx.fill();
}
function gameStart() {
    createBall();
    nextTick();
}
function nextTick() {
    intervalID = setTimeout(() => {
        clearBoard();
        drawBlackHole(0, gameHeight / 2)
        drawBlackHole(gameWidth, gameHeight / 2)
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10);
}
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function drawPaddles() {
    ctx.strokeStyle = paddleBorder;
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}
function createBall() {
    ballSpeed = 10;
    if (Math.round(Math.random()) == 1) {
        ballXDirection = 1;
    } else {
        ballXDirection = -1;
    }
    if (Math.round(Math.random()) == 1) {
        ballYDirection = Math.random() * 1;
    } else {
        ballYDirection = Math.random() * -1;
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
}
function moveBall() {
    ballX += ballSpeed * ballXDirection;
    ballY += ballSpeed * ballYDirection;
}
function drawBall(ballX, ballY) {
    ballTrail.push({ x: ballX, y: ballY });

    if (ballTrail.length > 20) {
        ballTrail.shift();
    }
    for (let i = 0; i < ballTrail.length; i++) {
        const trailAlpha = (i + 1) / ballTrail.length;
        ctx.fillStyle = `rgba(255, 0, 0, ${trailAlpha})`; // Red shadow effect with fading
        ctx.fillRect(
            ballTrail[i].x - ballRadius / 2,
            ballTrail[i].y - ballRadius / 2,
            ballRadius,
            ballRadius
        );
    }
    const ballGradient = ctx.createRadialGradient(
        ballX,
        ballY,
        0,
        ballX,
        ballY,
        ballRadius
    );
    ballGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    ballGradient.addColorStop(1, "rgba(0, 0, 255, 1)"); // Ball color gradient from white to blue

    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ballGradient;
    ctx.fill();
}
function checkCollision() {
    if (ballY <= 0 + ballRadius) {
        ballYDirection *= -1;
        playSound("bounceSound");
    } else if (ballY >= gameHeight - ballRadius) {
        ballYDirection *= -1;
        playSound("bounceSound");
    } else if ((ballX <= 0 + ballRadius && ballY > gameHeight - 100 && ballY < gameHeight - ballRadius)) {
        ballXDirection *= -1;
        playSound("bounceSound");
    } else if ((ballX <= 0 + ballRadius && ballY < 100 && ballY > ballRadius)) {
        ballXDirection *= -1;
        playSound("bounceSound");
    } else if ((ballX >= gameWidth - ballRadius && ballY > gameHeight - 100 && ballY < gameHeight - ballRadius)) {
        ballXDirection *= -1;
        playSound("bounceSound");
    } else if ((ballX >= gameWidth - ballRadius && ballY < 100 && ballY > ballRadius)) {
        ballXDirection *= -1;
        playSound("bounceSound");
    }
    if (ballX <= 0) {
        player2Score += 1;
        updateScore();
        createBall();
        increaseBallSpeed();
        playSound("scoreSound");
        return;
    }
    if (ballX >= gameWidth) {
        player1Score += 1;
        updateScore();
        createBall();
        increaseBallSpeed();
        playSound("scoreSound");
        return;
    }
    if (ballX <= paddle1.x + paddle1.width + ballRadius) {
        if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
            ballX = paddle1.x + paddle1.width + ballRadius;
            ballXDirection *= -1;
            playSound("bounceSound");
        }
    }
    if (ballX >= paddle2.x - ballRadius) {
        if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
            ballX = paddle2.x - ballRadius;
            ballXDirection *= -1;
            playSound("bounceSound");
        }
    }
}
function increaseBallSpeed() {
    ballSpeed += 2;
    if (ballSpeed > 100) {
        ballSpeed = 18;
    }
}
function changeDirection(event) {
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch (keyPressed) {
        case paddle1Up:
            paddle1SpeedY = -paddleSpeed;
            break;
        case paddle1Down:
            paddle1SpeedY = paddleSpeed;
            break;
        case paddle2Up:
            paddle2SpeedY = -paddleSpeed;
            break;
        case paddle2Down:
            paddle2SpeedY = paddleSpeed;
            break;
    }
}
function changeDirectionMouse(event) {

    canvas.addEventListener('mousemove', (e) => {

        const mouseY = e.clientY;
        paddle1.y = mouseY -170;

    });
    setInterval(() => {
        if (ballY < paddle2.y + paddle2.height / 2) {
            paddle2.y -= 12;
        } else if (ballY > paddle2.y + paddle2.height / 2) {
            paddle2.y += 12;
        }
    }, 100);
}
function stopPaddleMovement(event) {
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch (keyPressed) {
        case paddle1Up:
        case paddle1Down:
            paddle1SpeedY = 0;
            break;
        case paddle2Up:
        case paddle2Down:
            paddle2SpeedY = 0;
            break;
    }
}
function updatePaddlePosition() {

    if (paddle1.y + paddle1SpeedY >= 0 && paddle1.y + paddle1SpeedY <= gameHeight - paddle1.height) {
        paddle1.y += paddle1SpeedY;
    }
    if (paddle2.y + paddle2SpeedY >= 0 && paddle2.y + paddle2SpeedY <= gameHeight - paddle2.height) {
        paddle2.y += paddle2SpeedY;
    }

    requestAnimationFrame(updatePaddlePosition);
}
/* document.addEventListener('keydown', changeDirection); */
document.addEventListener('keyup', stopPaddleMovement);
requestAnimationFrame(updatePaddlePosition);

function updateScore() {
  scoreDiv.textContent = `${player1Score} : ${player2Score}`;
}
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        width: 10,
        height: 100,
        x: paddleMargin,
        y: gameHeight / 2 - 50
    };
    paddle2 = {
        width: 10,
        height: 100,
        x: gameWidth - paddleMargin - 10,
        y: gameHeight / 2 - 50
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalID);
    gameStart();
}
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;  // Дууг эхнээс нь дахин тоглуулах
    sound.play();
}
function player() {
    window.addEventListener("keydown", changeDirection);

    reset.addEventListener("click", resetGame);
    gameStart()

    document.addEventListener('keydown', changeDirection);
    document.addEventListener('keyup', stopPaddleMovement);

    requestAnimationFrame(updatePaddlePosition);


}
function bot() {
   /*  window.addEventListener("keydown", changeDirectionMouse); */
  changeDirectionMouse(1)
    reset.addEventListener("click", resetGame);
    gameStart();
    changeDirection(1)
    stopPaddleMovement(1)
    /*    document.addEventListener('keydown', changeDirectionMouse); */
    document.addEventListener('keyup', stopPaddleMovement);
    requestAnimationFrame(updatePaddlePosition);
}


