// Import an assertion library (in the case chai)
const { assert } = require('chai');
const Person = require('../classes/Person');

//The test we are going to run 

describe('Person', () => {
    describe('firtsName restrictions', () => {
        it('We sholuld get an error if trying to set too short name', () => {
            assert.throw(() => {
                new Person('', 'Doe', 'jane@doe.com', '1995-02-05');
            });
        });

    });

    // We sholud write another test here for too long names 
    describe('lastName restrictions', () => {
        it('We sholuld get an error if trying to set too short name', () => {
            assert.throw(() => {
                new Person('Jane', '', 'jane@doe.com', '1995-02-05');
            });
        });

    });
});

