// alert("알림창을 확인해주세요.");
// alert("두번째 알림창");
// alert(10 + 20);
// console.log("println");
// let flag = confirm("선택해주세요");
// console.log(flag);

// let name2 = prompt("이름을 입력해주세요");
// console.log(name2);

// console.log(test)
// let test = 10; // 실행조차 안되어야하지만 var 자료형을 사용한다면 오류가 나지 않고 대입과정이 없기에 값이 입력되진 않음 >> Hoisting
// 실행되기 전에 먼저 정의가 이루어지고 실행이 되어야하는것, 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것 >> Hoisting
// let은 Hoisting을 막았으며 재정의 또한 불가함

// let test;
// console.log(test) // undefined > 자료형이 정해지지 않았을 때 consol에 뜸 대입조차 되지 않음

let num1 = Number(prompt("첫번째 수 입력")) // 형변환 할때는 바꿔서 들고옴
let num2 = parseInt(prompt("두번째 수 입력"))
console.log(num1 + num2);