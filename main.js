function testSuAndMultiply() {//eslint-disable-lint
if (testSumAndMultiply(4,7,5)[0] === 16 && testSumAndMultiply(4,7,5)[1] === 140 && testSumAndMultiply(4,7,5)[2] === '4 and 7 and 5 sum to 16'&& sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
}else{
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
}

}




