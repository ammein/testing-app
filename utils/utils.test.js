// import utils
const utils = require('./utils');
// Import expect
const expect = require('expect');

it('should add two numbers' , () => {
    var res = utils.add(33 , 11);
    expect(res).toBe(44, `Your value is not 40 . You get ${res}`).toBeA('number');
    // if(res !== 44){
    //     throw new Error('Your Value is not 44');
    // }
});


it('should square a number' , () => {
    var res = utils.square(20);

    expect(res).toBe(400 , `Expected Result : 400 . You get ${res}`)
});

it('should timeOut testing valid for square number' , (done) => {
    utils.asyncSquare(2 , (sum)=>{
        expect(sum).toBe(4).toBeA('number');
        done();
    })
})

it('should expect some values' , () => {
    // expect(12).toNotBe(11);
    // expect({name : 'Andrew'}).toNotEqual({name : 'Andrew'} , `JSON does not match ! It goes ${this}`);
    // Array expect
    // expect([2,3,4]).toExclude(5); // return true . 5 exclude
    // expect([2,3,4]).toInclude(5); // return error. 5 not include
    // Object Expect
    expect({
        name : 'Andrew',
        age : 25,
        location : 'Philadelphia'
    }).toInclude({
        age : 25
    });
});

it('Should async add two numbers' , (done) => {
    utils.asyncAdd(4 , 3 ,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();        
    });
});


it('should verify first and last name are set' ,() => {
    var user = {location : 'Philadelphia' , age : 25};
    var res = utils.setName(user , 'Andrew Mead');

    expect(res).toInclude({
        firstName : 'Andrew',
        lastName : 'Mead'
    });
});