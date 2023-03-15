window.onload = () => {
    console.log("온로드 테스트");
    let calc = new Calc("김준일"); // 생성
    calc.showInfo();
    Calc.staticPrint();
    console.log(Calc.testNumber2);
    TestService.getInstance().showTestPrint();
}

function add(a, b) {
    return a + b;
}

// ===<< PYTHON >>===
// def add(a, b):
//     return a + b

// ===<< JAVA >>===
// int add(int a, int b) {
//     return a + b;
// }

console.log(add(10, 20));

/**
 *  Javasctipt에서의 Class
 * 
 *  - #은 private을 의미한다.
 *  - 자료형은 선언하지 않는다.
 *  - 멤버변수 또는 멤버메소드를 참조할 때는 항상 this를 붙인다.
 *  - 멤버메소드를 정의할 때는 funtion 키워드를 사용하지 않는다.
 *  - 생성자는 contructor로 정의한다.
 */

// 함수 정의
class Calc {
    #PI = null;             // # >> private / 지우면 public 
    testNumber = 10;
    static testNumber2= 20;
    name = null;
    age = null;

    constructor(name, age) {
        if(typeof name == "string" && typeof age == "Numner") { // 안들어왔으면 undefined
            this.name = name;
            this.age = age;
        }else if(typeof name == "string") {
            this.name = name;
        }else if(typeof age == "Numner") {
            this.age = age;
        }else {
            this.name = null;
            this.age = null;
        }
    }

    showInfo() {
        console.log(this.#PI);
        console.log(this.testNumber);
        console.log(this.testNumber2);
        console.log(this.name);
        console.log(this.age);
    }

    static staticPrint() {
        console.log("스태틱 테스트")
    }
}

let calc2 = {
    name: "김준일",
    age: 30,
    showInfo: function() {
        console.log(calc2.name);
        console.log(calc2.age);
    }
}

// 싱글톤
class TestService {
    static #instance = null; // private 걸어야됨
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new TestService();
        }
        return this.#instance;
    } // 생성자는 private을 만들 수 없으므로 생략
    
    showTestPrint() {
        console.log("싱글톤 테스트 출력");
    }
}
