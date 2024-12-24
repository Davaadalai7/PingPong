const startElement = document.getElementById("start");
const startPage = document.createElement("div");
startPage.id = "container";
const logInContainer = document.createElement("div")
logInContainer.className = "logInContainer"
let logInPlayer1 = loginOpen("defaultProfile.jpg", "nicknamePlayer1", "player1img")
let logInPlayer1Div = logInPlayer1.container
let player1Img = logInPlayer1.image

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

  return { container: logIn, image: profileChosen.src }

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
  return { container: editProfile, newImg: changeSrc }
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
const startButton = document.createElement("button")
startButton.className = "playerChooseButton"
startButton.innerText = "START"
startButton.style.display = "none"

startButton.addEventListener(("click"),()=>{
  console.log(document.getElementById("nicknamePlayer2").value);
  console.log(document.getElementById("nicknamePlayer1").value);
  if(testNickname(document.getElementById("nicknamePlayer1").value)&&testNickname(document.getElementById("nicknamePlayer1").value)){
    startButton.style.display = "none"
    backButton.style.display = "none"
    document.getElementById("gameBoard").style.display = "block"
    document.getElementById("scoreText").style.display = "block"
    document.getElementById("buttonDiv").style.display = "flex"
  }
})
startPage.appendChild(startButton)
startPage.appendChild(backButton)

function testNickname(input){
  const testStr= /^[a-zA-Z0-9]+$/
  if(testStr.test(input)&&input.length<=8&&input.length>0){
    return true
  }else return false
}

