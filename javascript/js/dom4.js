/**
 * 1. 추가버튼 클릭시 input에 들어있는 value의 값을 list에 추가
 * 2. 확인버튼 클릭시 todo-content의 색상을 red로 변경, 취소선 적용
 * 3. 확인버튼 다시 클릭시 todo-content의 색상을 black으로 변경, 취소선 미적용
 * // <li><span class="todo-content">장보기</span> <button class="ok-button">확인</button></li>
 */ 

const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    const li = document.createElement("li"); // li만 create를 해서
    li.innerHTML = `
        <input type="checkbox" class="ok-check"> <span class="todo-content">${todoText[0].value}</span>
    `;
    todoList[0].appendChild(li); // todoList에 li를 추가 해주면 위에 이벤트는 그대로 두고 밑에 추가됨 >> 이벤트가 살아있음

    addEvent(); // 이벤트 새로 등록
}

function addEvent() { // 확인 버튼에 대한 이벤트
    const okCheck = document.getElementsByClassName("ok-check");
    // okCheck[0].checked;
    const todoContent = document.getElementsByClassName("todo-content");
    for(let i = 0; i < okCheck.length; i++) {
        okCheck[i].onchange = () => {  // 체크 박스를 클릭했을때 value 안의 값이 바뀌기 때문에 onchange를 사용해도 되고 onclick을 써도 됨
            if(okCheck[i].checked) { // statusList에 클릭한 시점이 true일경우         / boolean을 가지고 조건 넣을때 == true == false 안써야됨
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecorationLine = 'line-through';
            }else {
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecorationLine = 'none';
            }
        }
    }
}

