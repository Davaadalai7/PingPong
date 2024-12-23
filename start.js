const startElement = document.getElementById("start");
const startPage = document.createElement("div");
startPage.id = "container";

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
onePlayerButton.className = "playerNumber"
onePlayerButton.innerText = "one player"

const twoPlayerButton = document.createElement("button")
twoPlayerButton.className = "playerNumber"
twoPlayerButton.innerText = "two player"


buttonContainer.appendChild(onePlayerButton)
buttonContainer.appendChild(twoPlayerButton)

startPage.appendChild(buttonContainer);

function loginOpen(imageUrl,inputId,imgId){
const logIn = document.createElement("div");
logIn.className = "login";
const headerLogin = document.createElement("h3");
headerLogin.id = "gameName";
headerLogin.innerText = "LOGIN"
logIn.appendChild(headerLogin)
let profileChosen = chosenImage(imageUrl,imgId)
profileChosen.addEventListener("click", () => {
  logInContainer.style.display="none"
  const editProfile = editPro(imgId).container
  editProfile.style.display = "flex"
  startPage.appendChild(editProfile)
  profileChosen=editProfile.newImg;
})
const nickname = document.createElement("p")
nickname.innerText = "Nickname:"
const nicknameInput = document.createElement("input")
nicknameInput.type = "text"
nicknameInput.id=inputId
logIn.appendChild(profileChosen)
logIn.appendChild(nickname);
logIn.appendChild(nicknameInput)

return {container:logIn,image:imageUrl}

}
const logInContainer=document.createElement("div")
logInContainer.className = "logInContainer"
let logInPlayer1=loginOpen("defaultProfile.jpg","nicknamePlayer1","player1img").container
let logInPlayer2=loginOpen("defaultProfile.jpg","nicknamePlayer2","player2img").container
logInContainer.appendChild(logInPlayer1);
logInContainer.appendChild(logInPlayer2);
startPage.appendChild(logInContainer)

function imageChoices(imageUrl) {
  const img = document.createElement('img');
  img.id="image"
  img.src = imageUrl;
  return img;
}
function editPro(imgId){
  const editProfile = document.createElement("div")
  editProfile.id = "editProfile"
  const profileImg = ["profile1.jpg", "profile2.jpg", "profile3.webp", "profile4.jpg",]
  let changeSrc=document.getElementById(imgId)
  profileImg.forEach(el => {
    const edited=imageChoices(el)
    editProfile.appendChild(edited)
    edited.addEventListener("click", () => {
      changeSrc.src=el
      editProfile.style.display="none"
      logInContainer.style.display="flex"
    })
  })
  return {container:editProfile , newImg:changeSrc}
}
function chosenImage(imageUrl,imgId) {
  const imagePro = document.createElement("img")
  imagePro.id = imgId
  imagePro.src = imageUrl
  return imagePro
}


