describe("FizzBuz", function() {
    it("should return 1 for int 1", function() {
        expect(fizzBuzzTranslator(1)).toBe("1")
    })
    it("should return 2 for int 2", function() {
        expect(fizzBuzzTranslator(2)).toBe("2")
    })
    it("should return Fizz for int 3", function() {
        expect(fizzBuzzTranslator(3)).toBe("Fizz")
    })
    it("should return Buzz for int 5", function() {
        expect(fizzBuzzTranslator(5)).toBe("Buzz")
    })
})