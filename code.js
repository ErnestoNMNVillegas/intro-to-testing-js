// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else return "Hello, " + input + "!";
    }

// if (input === 'Alex') {
    //     return "Hello, Alex!";
    // } else if (input === 'Jane'){
    //     return "Hello, Jane!";
    // } else if (input === "Pat") {
    //     return "Hello, Pat!";
    // } else {
    //     return ''
    // }
//Note: Pre-refactored code

// isFive function
function isFive(input){
    let normInput = parseInt(input);
    if (normInput === 5) {
        return true;
    } else {
        return false;
    }
}

// isEven function
function isEven(input){
    if (input % 2 === 0){
        return true;
    } else {
        return false;
    }
}

// isVowel function
function isVowel (input) {
    let vowel = (/[aeiou]/gi);
    if ([input === vowel]) {
        return true;
    }   else if (input === undefined) {
        return false;
    }   else {
        return false;
    }
}

// addFun function
function addFun (x, y) {
    let xNum = parseInt(x);
    let yNum = parseInt(y);

    if (isNaN(xNum) || isNaN(yNum)) {
        return NaN;
    } else if (typeof xNum === "boolean"){
        return false;
    } else if (typeof yNum === "boolean"){
        return false;
    } else {
        return xNum + yNum;
    }
}



