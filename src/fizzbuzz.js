function fizzBuzzTranslator(input) {
    if(shouldBuzz(input) && shouldFizz(input)) {
        return "FizzBuzz";
    }
    if (shouldFizz(input)) {
        return "Fizz";
    }
    if (shouldBuzz(input)) {
        return "Buzz";
    }
    return input.toString();
}

function shouldFizz(input) {
    return input % 3 === 0;
}
function shouldBuzz(input) {
    return input % 5 === 0;
}