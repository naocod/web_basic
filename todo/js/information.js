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
            infoInputContainers.forEach(infoInputContainer => {
                // console.log( infoInputContainer.querySelector(".info-input").value);
                infoInputContainer.querySelector(".info-input").disabled = true;
            });
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
        }
    }
    
    // ========================================================================

    
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
        this.showPreview(fileValue);
    }

    showPreview(fileValue) {
        const fileReader = new FileReader();
        
        fileReader.readAsDataURL(fileValue);    // 파일경로 이벤트

        fileReader.onload = (e) => {    // e > 이벤트
            const photoImg = document.querySelector(".info-photo img");
            photoImg.src = e.target.result; // 이벤트가 일어난 대상 객체의 결과를 가져옴(src)
        }
    }
}

