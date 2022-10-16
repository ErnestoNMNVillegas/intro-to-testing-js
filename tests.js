// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for sayHello function
describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane" when "Jane" is passed in function', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when "Alex" is passed in function', function() {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    })
    it('should return "Hello, Pat!" when "Pat" is passed in function', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return "Hello, World!" when no argument entered', function(){
        expect(sayHello()).toBe("Hello, World!");
    })
    it('should return "Hello, World!" if true is passed in function', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it('should return "Hello, World!" if false is passed in function', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    })
    // it('should never return "undefined" when called', function () {
    //     expect(sayHello()).not.toBe(undefined);
    // });
});

// Unit test for isFive function.
describe('isFive', function() {
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    })
    it('should return a Boolean when called', function(){
        expect(typeof isFive()).toBe('boolean');
    })
    it('should return true if passed "5"', function (){
        expect(isFive('5')).toBe(true)
    })
});

//Unit test for isEven function.
describe('isEven', function (){
    it('should be a defined function', function (){
        expect(typeof isEven).toBe('function');
    })
    it ('should return a Boolean when called', function (){
        expect(typeof isEven()).toBe('boolean');
    })
    it ('should return true when executed with 2', function (){
        expect(isEven(2)).toBe(true);
    })
    it ('should return true when executed with -4', function (){
        expect(isEven(-4)).toBe(true);
    })
    it ('should return false when executed with 3', function (){
        expect(isEven(3)).toBe(false);
    })
    it ('should return false when called "banana"', function (){
        expect(isEven("banana")).toBe(false);
    })
    it ('should returns true when called with "8"', function (){
        expect(isEven("8")).toBe(true);
    })
    it ('should returns false when called with Infinity', function (){
        expect(isEven(Infinity)).toBe(false);
    })
    it ('should returns false when called with true', function (){
        expect(isEven(true)).toBe(false);
    })
    it ('should returns false when called with false', function (){
        expect(isEven(false)).toBe(false);
    })
    //Note: I could figure out the fix for this.
    it ('should returns false when called without argument', function (){
        expect(isEven()).toBe(false);
    })
})

// Unit test for isVowel function
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    })
    it('should return a Boolean when called', function () {
        expect(typeof isVowel('')).toBe('boolean');
    })
    it('should return true when executed with "a"', function () {
        expect(isVowel('a')).toBe(true);
    })
    it('should return true when executed with "A"', function () {
        expect(isVowel('A')).toBe(true);
    })
    it('should return true when executed with "y"', function () {
        expect(isVowel('y')).toBe(true);
    })
    it('should return true when executed with 4', function () {
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when executed with "false"', function () {
        expect(isVowel(false)).toBe(false);
    })
    it('should return false when executed with "true"', function () {
        expect(isVowel(true)).toBe(false);
    })
    it('should return false when executed with "banana"', function () {
        expect(isVowel('banana')).toBe(false);
    })
    it('should return false when executed with no argument', function () {
        expect(isVowel(undefined)).toBe(false);
    })
})

// add Function
// Unit test for isAdd function
describe('addFun', function () {
    it('should be a defined function', function () {
        expect(typeof addFun).toBe('function');
    })
    it('should return 5 when executed with 2 and 3', function () {
        expect(addFun(2, 3)).toBe(5);
    })
    it('should return -12 when executed with -3 and -9', function () {
        expect(addFun(-3, -9)).toBe(-12);
    })
    it('should return 11 when executed with "5" and 6', function () {
        expect(addFun('5', 6)).toBe(11);
    })
    it('should return 6 when executed with "-4" and "10', function () {
        expect(addFun('-4', '10')).toBe(6);
    })
    it('should return NaN when executed with "banana" and "split', function () {
        expect(addFun('banana', 'split')).toBe(NaN);
    })
})