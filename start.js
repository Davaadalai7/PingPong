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

function loginOpen(imageUrl,inputId){
const logIn = document.createElement("div");
logIn.className = "login";
const headerLogin = document.createElement("h3");
headerLogin.id = "gameName";
headerLogin.innerText = "LOGIN"
logIn.appendChild(headerLogin)
let profileChosen = chosenImage(imageUrl)
profileChosen.addEventListener("click", () => {
  logInContainer.style.display="none"
  document.getElementById("editProfile").style.display="flex"
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
logInContainer.style.display= "flex"
let logInPlayer1=loginOpen("defaultProfile.jpg","nicknamePlayer1").container
let logInPlayer2=loginOpen("defaultProfile.jpg","nicknamePlayer2").container
logInContainer.appendChild(logInPlayer1);
logInContainer.appendChild(logInPlayer2);
startPage.appendChild(logInContainer)

function imageChoices(value, imageUrl) {
  const container = document.createElement('div');
  container.className = 'radio-label';

  const img = document.createElement('img');
  img.id="image"
  img.src = imageUrl;
  img.alt = value;
  container.appendChild(img);
  return container;
}
function editPro(logIn,nicknameInput){
  const editProfile = document.createElement("div")
  editProfile.id = "editProfile"
  const profileImg = ["profile1.jpg", "profile2.jpg", "profile3.webp", "profile4.jpg",]
  profileImg.forEach(el => {
    const edited=imageChoices(el.indexOf + 1, el)
    editProfile.appendChild(edited)
    edited.addEventListener("click", () => {
      profileChosen=chosenImage(el)
      const newlogIn=loginOpen(el,nicknameInput).container
      logInContainer.replaceChild(newlogIn,logIn)
      editProfile.style.display="none"
      logInContainer.style.display="flex"
    })
  })
  return editProfile
}
  

startPage.appendChild(editPro(logInPlayer1,"nicknamePlayer1"))
startPage.appendChild(editPro(logInPlayer2,"nicknamePlayer2"))
function chosenImage(imageUrl) {
  const profile = document.createElement("div")
  profile.id = "profile"
  const imagePro = document.createElement("img")
  imagePro.src = imageUrl
  profile.appendChild(imagePro)
  return profile
}


