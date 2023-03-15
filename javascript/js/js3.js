window.onload = () => { // onload 이벤트가 메소드(funtion)이며 재정의 한 것

}

// a();

function a() {
    console.log("a 함수 호출");
}

console.log(typeof a);


// let b = function(f) { // 변수에 funtion 정의가 들어갈 수 있다.
//     console.log("테스트가 프린트 되기 전에 무조건 실행")
//     f();
// }

let b = (f) => { // 변수에 funtion 정의가 들어갈 수 있다.
    console.log("테스트가 프린트 되기 전에 무조건 실행")
    f();
}

b(a);

b(function(){console.log("test")});

(function(){console.log("test2")}());