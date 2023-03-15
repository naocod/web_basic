let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let numbers3 = new Array();

let numbers4 = numbers1.concat(numbers2); // numbers1 배열과 numbers2 배열을 합침(concat)

console.log(numbers1); // 객체이기때문에 object?
console.log(typeof numbers2);
console.log(typeof numbers3);

console.log(numbers4);

function odd(num) {
    return num % 2 != 0;
}

let numbers5 = numbers4.filter(odd);
console.log(numbers5);

let numbers6 = numbers4.filter(n => n % 2 != 0);
console.log(numbers6);

for(let i = 0; i < numbers5.length; i++) {
    console.log("i: " + numbers5[i]);
}

for(let num of numbers5) {
    console.log(`forEach: ${num}`)
}

// Java
// List<String> list = new ArrayList<String>();
// list.forEach(n -> {});

numbers5.forEach(n => console.log(`ArrayForEach: ${n}`));

// 스택 구조
console.log(numbers5.indexOf(5));
console.log(numbers5.lastIndexOf(2)); // 찾지 못했을땐 -1 returm
console.log(numbers5.join(";")); // join > 배열 안에 있는 것들을 전부 합쳐줌, 구분자 설정
console.log(numbers5.push(11)); // concat은 배열을 합쳐서 새로운 배열을 만드는 것이고 push는 add와 같이 배열의 맨 끝에 값 추가
console.log(numbers5);
console.log(numbers5.unshift(13)); // 배열의 맨 앞에 값 추가
console.log(numbers5);
console.log(numbers5.pop()); // 배열의 맨 끝에 값 제거(인덱스 넣어도 맨 마지막꺼 제거됨)
console.log(numbers5);
// console.log(numbers5.splice(2, 2)); // 2번 인덱스부터 2개 제거
// console.log(numbers5.splice(2, 1, 15)); // (start, delete count, add) 2번 인덱스를 지우고 15를 넣음 > 추가와 제거가 동시에 됨
console.log(numbers5.splice(2, 1, 15, 17)); // 여러 인덱스를 추가하고 싶으면 []로 묶는게 아니라 그냥 쓰면 됨
console.log(numbers5);
console.log(numbers5.slice(3, 6)); // 3번 인덱스부터 6번 인덱스까지 자름 > 원본은 변하지 않음
console.log(numbers5);

function compare(n1, n2) {
    if(n1 > n2) return 1;
    if(n1 == n2) return 0;
    if(n1 < n2) return -1;
}
console.log(numbers5.sort(compare)); // sort는 원본을 정렬함

console.log(numbers5.reverse()); // 역정렬
console.log(numbers5.toString()); // ,로 끊어서 나눔

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () => {
    history.back();
}
