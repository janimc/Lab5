function testSumArray() {//eslint-disable-line
if (testSumArray(testArray)[0] === 9 && testSumArray(testArray)[1] === '1,3,4 was passed in as an array of numbers, and 9 is their sum.'){
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
}else{
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
}
}

