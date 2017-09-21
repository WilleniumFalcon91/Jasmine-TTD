describe("FizzbuzzPop", function () {
    it("should return Pop for int 7", function () {
        expect(fizzBuzzPop(7)).toBe('Pop')
    })
    it("should return  Buzz for int 5", function () {
        expect(fizzBuzzPop(5)).toBe('Buzz')
    })
    it("should return Fizz for int 3", function () {
        expect(fizzBuzzPop(3)).toBe('Fizz')
    })
    it("should return 4 for int 4", function () {
        expect(fizzBuzzPop(4)).toBe('4')
    })
    it("should return FizzPop for int 21", function () {
        expect(fizzBuzzPop(21)).toBe('FizzPop')
    })
    it("should return BuzzPop for int 35", function () {
        expect(fizzBuzzPop(35)).toBe('BuzzPop')
    })
    it("should return FizzBuzz for int 15", function () {
        expect(fizzBuzzPop(15)).toBe('FizzBuzz')
    })
})