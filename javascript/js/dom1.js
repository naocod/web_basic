const divs = document.getElementsByTagName("div");

console.log(divs[0]);

divs[0].innerHTML += `<button type="button">버튼</button>`;

console.log(divs[0].innerHTML);

const newButton = document.createElement("button");
const newButtonText = document.createTextNode("버튼2");
const buttonTypeAttribute = document.createAttribute("type"); // innerHTML은 백쿼터 안에서 설정해주면 되지만 
newButton.setAttributeNode(buttonTypeAttribute); // buttonTypeAttribute 생성해서 Node에 추가, 기본으로 submit이 들어가 있음
newButton.setAttribute("type", "button");
newButton.appendChild(newButtonText);
divs[0].appendChild(newButton);