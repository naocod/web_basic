// console.log(location.href);
// location.href = "https://www.naver.com";

const naverButton = document.getElementsByTagName("button"); // tagName이 button인 것의 모든 요소를 가져오기에 list로 가져옴
naverButton[0].onclick = () => {
    // location.href = "https://www.naver.com"; // 프로퍼티, 뒤로가기 됨
    location.replace("https://www.naver.com"); // funtion, 뒤로가기 안됨
}

naverButton[1].onclick = () => {
    location.href = "http://127.0.0.1:5500/javascript/window.html";
}