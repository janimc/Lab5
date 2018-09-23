function testMultiply() { //eslint-disable-line
    if(multiply(5,9)[0] === 45 && multiply(5,9)[1] === 'the product of 5 and 9 is 45.'){
        console.log('%c TEST FOR multiply() PASSES', 'color:green');
    }else{
        console.log('%c TEST FOR multiply() FAILS', 'color: red');
    }
}