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
    it('it should return true if passed "5"', function (){
        expect(isFive('5')).toBe(true)
    })
});