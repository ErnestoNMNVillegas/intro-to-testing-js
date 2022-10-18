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
    } else if (input % 2 === 1){
        return false;
    } else if (input === undefined){
        return false;
    } else if (input === 'false' || input === 'true'){
        return false;
    } else if (isNaN(input)){
        return false;
    } else if (input === Infinity){
        return false;
    }
}

// isVowel function
function isVowel (input) {
    let vowel = (/[aeiou]/gi);
    if ([input === vowel]) {
        return true;
    }   else if (input === 'false' || input === 'true') {
        return false;
    }   else if (input === undefined) {
        return false;
    }
}

// addFun function
function addFun (x, y) {
    let xNum = Number(x);
    let yNum = Number(y);

    if (isNaN(xNum) || isNaN(yNum)) {
        return 'NaN';
    } else if (xNum === 'true' || yNum === "true"){
        return false;
    } else if (xNum === undefined || yNum === undefined){
        return false;
    } else {
        return xNum + yNum;
    }
}



