// import utils
const utils = require('./utils');

it('should add two numbers' , () => {
    var res = utils.add(33 , 11);
    if(res !== 44){
        throw new Error(`Expected value = 44 . But got ${res}`);
    }
});


it('should square a number' , () => {
    var res = utils.square(20);

    if(res !== 400)
    {
        throw new Error(`The expected result is 400. But got ${res}`);
    }
})