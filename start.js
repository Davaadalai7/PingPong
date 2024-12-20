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

function imageChoices(name, value, imageUrl) {
    const container = document.createElement('div');
    container.className = 'radio-label';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.id = value;
    input.value = value;

    const label = document.createElement('label');
    label.setAttribute('for', value);

    const img = document.createElement('img');
    img.src =imageUrl;
    img.alt = value;

    label.appendChild(img);
    container.appendChild(input);
    container.appendChild(label);

    // Add click event to update selected image style
    input.addEventListener('change', () => {
      document.querySelectorAll('.radio-label img').forEach((img) => {
        img.classList.remove('selected');
      });
      img.classList.add('selected');
    });

    return container;
  }
  const profileImg=["profile1.jpg","profile2.jpg","profile3.webp","profile4.jpg",]
  profileImg.forEach(el=>{
    startPage.appendChild(imageChoices("profileImg",el.indexOf+1,el))
  })

/**
 * #Field45-1 + label {
    background-image: url(imageURLhere);
    background-size: 100% 100% !important;
    background-repeat: no-repeat;
    height: 80px !important;
    width: 85px !important;
    display: inline-block;
      color:white;
}
 */