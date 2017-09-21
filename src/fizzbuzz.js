function fizzBuzzPop (input) {
    if (input % 3 === 0 && input % 7 === 0){
        return "FizzPop"
    }
    if (input % 5 === 0 && input % 7 === 0){
        return "BuzzPop"
    }
    if (input % 5 === 0 && input % 3 === 0){
        return "FizzBuzz"
    }
    if (shouldFizz(input)) {
        return "Fizz"
    }
    if (shouldBuzz(input)) {
        return "Buzz"
    }
    if (shouldPop(input)) {
        return "Pop"
    }
    return input.toString() ;
}

function shouldFizz(input) {
    return input % 3 === 0;
}
function shouldBuzz(input) {
    return input % 5 === 0;
}
function shouldPop(input) {
    return input % 7 === 0;
}