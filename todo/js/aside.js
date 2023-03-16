class AsideEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AsideEvent();
        }
        return this.#instance;
    }

    addEventShowMenuButton() {
        const menuButton = document.querySelector(".menu-button"); // Selector(선택자)를 통해서 가져옴 
        // querySelectorAll은 list로 들고오고
        // querySelector은 여러개 중 첫번째를 들고옴
        // css에서 쓰는 선택자와 같이 class는 .class id는 #id 이렇게 들고올 수 있음
        menuButton.onclick = () => {
            const menuAside = document.querySelector(".menu-aside");
            if(menuAside.classList.contains("hidden-menu")) {    // contains -> 포함되어있는지 확인
                menuAside.classList.remove("hidden-menu"); // hidden-menu를 지워서 메뉴를 나타냄
                menuButton.textContent = "◀"
            }else {
                menuAside.classList.add("hidden-menu"); // hidden-menu를 더해서 메뉴를 숨김
                menuButton.textContent = "▶"
            }
        }
    }

    addEventMainChange() {
        const menuItems = document.querySelectorAll(".menu-items");
        menuItems.forEach((menuItem, index) => {
            menuItem.onclick = () => {
                const mainContainers = document.querySelectorAll(".main-container");
                const menuAside = document.querySelector(".menu-aside");
                mainContainers.forEach(mainContainer => {
                    mainContainer.classList.add("main-hidden"); // 처음부터 끝까지 hidden을 add시킴
                });
                mainContainers[index].classList.remove("main-hidden"); // 클릭된 index끼리 위치가 일치한 hidden을 지워서 페이지 전환
                menuAside.classList.add("hidden-menu")
            }
        });
    }
}