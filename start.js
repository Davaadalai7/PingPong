const startElement = document.getElementById("start");
const startPage = document.createElement("div");
startPage.id = "container";

const gameName = document.createElement("h1");
gameName.innerText = "PONG";
gameName.id = "gameName";

startPage.appendChild(gameName);
startElement.appendChild(startPage);

let player1Name="player 1"
let player2Name="player 2"
const buttonContainer=document.createElement("div")
buttonContainer.className="buttonContainer"
const onePlayerButton=document.createElement("button")
onePlayerButton.className="playerNumber"
onePlayerButton.innerText="one player"

const twoPlayerButton=document.createElement("button")
twoPlayerButton.className="playerNumber"
twoPlayerButton.innerText="two player"


buttonContainer.appendChild(onePlayerButton)
buttonContainer.appendChild(twoPlayerButton)

startPage.appendChild(buttonContainer);


const logIn = document.createElement("div");
logIn.className = "login";
const headerLogin = document.createElement("h3");
headerLogin.id = "gameName";
headerLogin.innerText = "LOGIN"
logIn.appendChild(headerLogin)
const nickname=document.createElement("p")
nickname.innerText="Nickname:"
logIn.appendChild(nickname);
const nicknameInput=document.createElement("input")
nicknameInput.type="text"
logIn.appendChild(nicknameInput)
startPage.appendChild(logIn);
