/**
 * 1. 추가버튼 클릭시 input에 들어있는 value의 값을 list에 추가
 * 2. 확인버튼 클릭시 todo-content의 색상을 red로 변경, 취소선 적용
 * 3. 확인버튼 다시 클릭시 todo-content의 색상을 black으로 변경, 취소선 미적용
 * // <li><span class="todo-content">장보기</span> <button class="ok-button">확인</button></li>
 */ 

// document.getElementsByClassName("todo-text")[0].value; // 0번 인덱스에 input에 입력된 값을 가져옴

// const addButton = document.getElementsByClassName("add-button");
// addButton[0].onclick = () => {
//     const todoText = document.getElementsByClassName("todo-text");
//     const todoList = document.getElementsByClassName("todo-list");
//     todoList[0].innerHTML += `
//         <li><span class="todo-content">${todoText[0].value}</span> <button class="ok-button">확인</button></li>
//     `;

//     const okButton = document.getElementsByClassName("ok-button");
//     for (let i = 0; i < okButton.length; i++) {
//     okButton[i].onclick = () => {
//         const todoContent = document.getElementsByClassName("todo-content");
//         if (todoContent[i].style.textDecorationLine === "line-through") {
//         todoContent[i].style.textDecorationLine = "none";
//         todoContent[i].style.color = "black";
//         } else {
//         todoContent[i].style.textDecorationLine = "line-through";
//         todoContent[i].style.color = "red";
//         }
//     }
//     }
// }




// `${}` // 표현식??
// ==========================================================
const statusList = new Array();
const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    todoList[0].innerHTML += `
    <li><span class="todo-content">${todoText[0].value}</span> <button class="ok-button">확인</button></li>
    `;
    statusList.push(false); // 상태 관리 리스트를 push, 확인 버튼이 안눌러진 상태를 false로 둘거기 때문에

    addEvent(); // 이벤트 새로 등록
}

function addEvent() { // 확인 버튼에 대한 이벤트
    const okButton = document.getElementsByClassName("ok-button");
    const todoContent = document.getElementsByClassName("todo-content");
    for(let i = 0; i < okButton.length; i++) {
        okButton[i].onclick = () => {
            if(statusList[i]) { // statusList에 클릭한 시점이 true일경우         / boolean을 가지고 조건 넣을때 == true == false 안써야됨
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecorationLine = 'none';
                statusList[i] = false;
            }else { // 현재 false인 상태
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecorationLine = 'line-through';
                statusList[i] = true; // statusList에 상태를 true로 토글을 바꿔 줘야함
            }
        }
    }
}