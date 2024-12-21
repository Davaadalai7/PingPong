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

function loginOpen(imageUrl){
  const logIn = document.createElement("div");
logIn.className = "login";
const headerLogin = document.createElement("h3");
headerLogin.id = "gameName";
headerLogin.innerText = "LOGIN"
logIn.appendChild(headerLogin)
let profileChosen = chosenImage(imageUrl)
profileChosen.addEventListener("click", () => {
  logIn.style.display="none"
  editProfile.style.display="flex"
})
const nickname = document.createElement("p")
nickname.innerText = "Nickname:"
const nicknameInput = document.createElement("input")
nicknameInput.type = "text"
nicknameInput.id="nickname"
logIn.appendChild(profileChosen)
logIn.appendChild(nickname);
logIn.appendChild(nicknameInput)
return {container:logIn,image:imageUrl}
}
let logIn=loginOpen("defaultProfile.jpg").container

startPage.appendChild(logIn);

function imageChoices(value, imageUrl) {
  const container = document.createElement('div');
  container.className = 'radio-label';

  const img = document.createElement('img');
  img.id="image"
  img.src = imageUrl;
  img.alt = value;
  container.appendChild(img);

  // Add click event to update selected image style

  return container;
}
const editProfile = document.createElement("div")
editProfile.id = "editProfile"
const profileImg = ["profile1.jpg", "profile2.jpg", "profile3.webp", "profile4.jpg",]
profileImg.forEach(el => {
  const edited=imageChoices(el.indexOf + 1, el)
  editProfile.appendChild(edited)
  edited.addEventListener("click", () => {
    profileChosen=chosenImage(el)
    logIn=loginOpen(el)
    startPage.appendChild(logIn.container)
    editProfile.style.display="none"
  })
})
startPage.appendChild(editProfile)
function chosenImage(imageUrl) {
  const profile = document.createElement("div")
  profile.id = "profile"
  const imagePro = document.createElement("img")
  imagePro.src = imageUrl
  profile.appendChild(imagePro)
  return profile
}


