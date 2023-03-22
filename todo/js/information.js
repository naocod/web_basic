class InformationEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new InformationEvent();
        }
        return this.#instance;
    }

    addEventPhotoChangeClick() {
        const infoPhoto = document.querySelector(".info-photo");
        infoPhoto.onclick = () => {
            const photoFile = document.querySelector(".photo-file");
            photoFile.click();  // display가 none이기에 클릭할 수 없어서 js에서 click 이벤트 줌
        }
    }
    
    addEventPhotoChange() {
        const photoFile = document.querySelector(".photo-file");
        photoFile.onchange = () => {
            FileService.getInstance().changePhoto();
        }

    }

    // addInfoDetaileInput() {
    //     const aboutMeModifyButton = document.querySelector(".m-aboutme");
    //     const aboutMeSaveButton = document.querySelector(".s-aboutme");
    //     const infoDetailInputs = document.querySelectorAll(".info-input");
        
    //     aboutMeModifyButton.onclick = () => {
    //         aboutMeModifyButton.classList.add("button-hidden");
    //         aboutMeSaveButton.classList.remove("button-hidden");
            
    //         infoDetailInputs.forEach(infoDetailInput => {
    //             infoDetailInput.disabled = false;
    //         })
    //     }
        
    //     aboutMeSaveButton.onclick = () => {
    //         infoDetailInputs.forEach(infoDetailInput => {
    //             infoDetailInput.disabled = true;
    //         })
    //         aboutMeModifyButton.classList.remove("button-hidden");
    //         aboutMeSaveButton.classList.add("button-hidden");
    //     }

    // }

    // addEventInfoIntroduceInput() {
    //     const mIntroduceButton = document.querySelector(".m-introduce");
    //     const sIntroduceButton = document.querySelector(".s-introduce");
    //     const introduceInput = document.querySelector(".introduce-input");

    //     mIntroduceButton.onclick = () => {
    //         introduceInput.disabled = false;
    //         mIntroduceButton.classList.add("button-hidden");
    //         sIntroduceButton.classList.remove("button-hidden");
    //     }

    //     sIntroduceButton.onclick = () => {
    //         introduceInput.disabled = true;
    //         mIntroduceButton.classList.remove("button-hidden");
    //         sIntroduceButton.classList.add("button-hidden");
    //     }
    // }
        // ========================================================================
    
    addEventAboutMeModifyClick() {
        const aboutMeModifyButton = document.querySelector(".m-aboutme");
        aboutMeModifyButton.onclick = () => {
            const aboutMeSaveButton = document.querySelector(".s-aboutme");
            aboutMeSaveButton.classList.remove("button-hidden");
            aboutMeModifyButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelectorAll(".info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = false;
            });
        }
    }

    addEventAboutMeSaveClick() {
        const aboutMeSaveButton = document.querySelector(".s-aboutme");
        aboutMeSaveButton.onclick = () => {
            const aboutMeModifyButton = document.querySelector(".m-aboutme");
            aboutMeModifyButton.classList.remove("button-hidden");
            aboutMeSaveButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelectorAll(".info-input-container");
            const userInfo = InformationService.getInstance().userInfo;     // 유저 정보 가져옴

            infoInputContainers.forEach(infoInputContainer => {
                const infoInput = infoInputContainer.querySelector(".info-input");
                userInfo[infoInput.id] = infoInput.value;   // userInfo가 비어있는 상태에서 객체의 값을 key-value 형태로 저장함 > Object
                infoInput.disabled = true;
            });

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
        
    }

    addEventIntroduceModifyClick() {
        const introduceModifyButton = document.querySelector(".m-introduce");
        introduceModifyButton.onclick = () => {
            const introduceSaveButton = document.querySelector(".s-introduce");
            introduceSaveButton.classList.remove("button-hidden");
            introduceModifyButton.classList.add("button-hidden");

            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = false;
        }
    }

    addEventIntroduceSavaClick() {
        const introduceSaveButton = document.querySelector(".s-introduce");
        introduceSaveButton.onclick = () => {
            const introduceModifyButton = document.querySelector(".m-introduce");
            introduceModifyButton.classList.remove("button-hidden");
            introduceSaveButton.classList.add("button-hidden");

            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = true;

            const userInfo = InformationService.getInstance().userInfo;     // 유저 정보 가져옴
            userInfo["introduce"] = introduceInput.value;  // id값이 없기에 문자열로 key값 지정

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    }
    
    // ========================================================================
    
}

class InformationService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new InformationService();
        }
        return this.#instance;
    }

    userInfo = {};

    loadInfo() {
        this.loadInfoPhoto();
        this.loadInfoUser();
    }

    loadInfoPhoto() {
        const infoPhotoImg = document.querySelector(".info-photo img");
        const infoPhoto = localStorage.getItem("infoPhoto");
        if(localStorage.getItem("infoPhoto") == null) {
            infoPhotoImg.src = "./images/noimage.jpg";
        }else {
            infoPhotoImg.src = infoPhoto;

        }
    }

    loadInfoUser() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if(this.userInfo == null) {
            this.userInfo = {};
            return;
        }
        Object.keys(this.userInfo).forEach(key => { // userInfo 객체의 key값을 list로 전부 뽑아서 forEach로 돌리면서 반복
            const infoInput = document.querySelectorAll(".info-input");
            infoInput.forEach(input => {
                if(input.id == key) {
                    input.value = this.userInfo[key];
                }
            })
        });

        if(typeof this.userInfo.introduce == "undefined"){
            return;
        }
        const introduceInput = document.querySelector(".introduce-input");
        introduceInput.value = this.userInfo.introduce;
    }
}

class FileService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new FileService();
        }
        return this.#instance;
    }

    changePhoto() {
        const photoForm = document.querySelector(".photo-form")
        const formData = new FormData(photoForm); // js의 내장 클래스 > form 객체를 들고와서 formdata 형식으로 가져옴
        const fileValue = formData.get("file"); // file 키의 value 값을 꺼냄
        let changeFlag = true;

        if(fileValue.size == 0) {
            return;
        }

        this.showPreview(fileValue);
    }

    showPreview(fileValue) {
        const fileReader = new FileReader();
        
        fileReader.readAsDataURL(fileValue);    // 파일경로 이벤트

        fileReader.onload = (e) => {    // e > 이벤트
            const photoImg = document.querySelector(".info-photo img");
            photoImg.src = e.target.result; // 이벤트가 일어난 대상 객체의 결과를 가져옴(src)
            localStorage.setItem("infoPhoto", photoImg.src);
        }

    }
}

