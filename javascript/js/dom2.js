const box = document.getElementsByClassName("box"); // box 객체 가지고 옴
box[0].style.backgroundColor = "black"; // box 0번 인덱스의 style의 backgroundColor를 black


addEvent();

function addEvent() {
    const redButton = document.getElementsByClassName("red-button"); // red-button 클래스 객체 가져옴
    const blueButton = document.getElementsByClassName("blue-button"); // 

    for(let i = 0; i < box.length; i++) { // 반복을 통해서 처음부터 끝까지 다시 등록해줌
        redButton[i].onclick = () => { // onclick 이벤트 
            box[i].style.backgroundColor = "red";
       }
       blueButton[i].onclick = () => {
            box[i].style.backgroundColor = "blue";
        }
    }
}

const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const container = document.getElementsByClassName("container");
    container[0].innerHTML += ` 
        <div class="box"></div>
        <button class="red-button">빨간색</button>
        <button class="blue-button">파란색</button>
    `; // innerHTML을 건드리는 순간 모든 이벤트 먹통될 수 있음
    // 자기 자신의 문자열에 새로운 html코드를 더하고 나서 자기 자신에게 대입하는 것(덮어버림) >> 기존의 객체가 존재하지 않고 새로 생성됨 > 기존의 이벤트가 싹 다 날라감
    // 그래서 addEvent 이벤트를 반복으로 돌려서 처음부터 다시 등록해줌
    box[box.length - 1].style.backgroundColor = "black"; // box가 여러개 추가 되었기에 최대 길이에서 -1 한 인덱스가 자기자신

    addEvent(); // addButton 클릭이 일어날 때 마다 addEvent 이벤트 추가
}




