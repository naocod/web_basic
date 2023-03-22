class TodoEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new TodoEvent();
        }
        return this.#instance;
    }

    addEventAddTodoClick() {
        const addTodoButton = document.querySelector(".add-todo-button");
        addTodoButton.onclick = () => {
            TodoService.getInstance().addTodo();
            const todoInput = document.querySelector(".todo-input");
            todoInput.value = "";
        }
    }

    addEventAddTodoKeyUp() {
        const todoInput = document.querySelector(".todo-input");
        todoInput.onkeyup = () => {
            if(window.event.keyCode == 13) {
                const addTodoButton = document.querySelector(".add-todo-button");
                addTodoButton.click();
            }
        }
    }

    addEventRemoveToDoClick() {
        const removeButtons = document.querySelectorAll(".content-footer .remove-button");
        removeButtons.forEach((removeButton, index) => {
            removeButton.onclick = () => {
                ModalService.getInstance().showRemoveModal(index);
            }
        });
    }
    
    addEventModifyToDoClick() {
        const modifyButtons = document.querySelectorAll(".content-footer .modify-button");
        modifyButtons.forEach((modifyButton, index) => {
            modifyButton.onclick = () => {
                ModalService.getInstance().showModifyModal(index);
            }
        });
    }
}

class TodoService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new TodoService();
        }
        return this.#instance;
    }

    todoList = null;

    constructor() {
        if(localStorage.getItem("todoList") == null) {
            this.todoList = new Array();
        }else {
            this.todoList = JSON.parse(localStorage.getItem("todoList"));
        }
        this.loadTodoList();
    }

    updateLocalStorage() {
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        this.loadTodoList();
    }

    addTodo() {
        const todoInput = document.querySelector(".todo-input");
        const nowData = new Date(); 

        const month = ("0" + (nowData.getMonth() + 1)).slice(-2);
        const date = ("0" + nowData.getDate()).slice(-2);
        const hours = ("0" + nowData.getHours()).slice(-2);
        const minutes = ("0" + nowData.getMinutes()).slice(-2);
        const seconds = ("0" + nowData.getSeconds()).slice(-2);
       
        
        // 월이 0월부터 시작함 >> 그래서 +1 해줘야함
        // 요일이 0~6 >> 일~월
        // console.log(`년: ${nowData.getFullYear()}`);
        // console.log(`월: ${nowData.getMonth()}`);
        // console.log(`일: ${nowData.getDate()}`);
        // console.log(`요일: ${nowData.getDay()}`);
        // console.log(`시: ${nowData.getHours()}`);
        // console.log(`분: ${nowData.getMinutes()}`);
        // console.log(`초: ${nowData.getSeconds()}`);

        const convertDay = (day) => {
            return day == 0 ? "일" 
                : day == 1 ? "월" 
                : day == 2 ? "화" 
                : day == 3 ? "수" 
                : day == 4 ? "목" 
                : day == 5 ? "금" : "토"
        }

        const todoObj = {
            todoDate: `${nowData.getFullYear()}.${month}.${date}.(${convertDay(nowData.getDay())})`,    // getter가 number면 +1해줘도 문제 없지만 다른거면 parseInt해서 형변환 해줘야함
            todoDateTime: `${hours}:${minutes}:${seconds}`,
            todoContent: todoInput.value
        }

        this.todoList.push(todoObj);
        this.updateLocalStorage();
        
    }
    
    loadTodoList() {
        const todoContentList = document.querySelector(".todo-content-list");
        todoContentList.innerHTML = ``; // 리스트 초기화

        this.todoList.forEach(todoObj => {
            todoContentList.innerHTML += `
                <li class="content-container">
                    <div class="content-header">
                        <div class="todo-date">${todoObj.todoDate}</div>
                        <div class="todo-date-time">${todoObj.todoDateTime}</div>
                    </div>
                    <div class="content-main">
                        ${todoObj.todoContent}
                    </div>
                    <div class="content-footer">
                        <button class="modify-button">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="remove-button">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </li>
            `;
        });

        TodoEvent.getInstance().addEventModifyToDoClick();
        TodoEvent.getInstance().addEventRemoveToDoClick();
    }
}