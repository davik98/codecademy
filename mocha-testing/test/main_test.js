// RUN > npm test

const assert = require('assert');
const { Rooster, Phrase } = require('../main.js');

describe('Phrase', () => {
    describe('.initials', () => {
        it('returns the first letter of each word in a phrase.', () => {
            // Setup
            const inputName = 'Nelson Mandela';
            const expectedInitials = 'NM';
            // Exercise
            const result = Phrase.initials(inputName);
            // Verification
            assert.strictEqual(result, expectedInitials);
        });
    });
});

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            // setup 
            const expected = 'moo!'
            // excercise
            const res = Rooster.announceDawn();
            // verify
            assert.ok(expected === res);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            //setup 
            // excercise
            const res = Rooster.timeAtDawn(12);
            // verify
            assert.ok(typeof res === 'string');
        });
        it('throws an error if passed a number less than 0', () => {
            // setup
            const hour = -1;
            // exercise 
            // verify
            assert.throws(() => {
                Rooster.timeAtDawn(hour);
            }, RangeError);

        });
        it('throws an error if passed a number greater than 23', () => {
            // setup
            const hour = 24;
            // exercise 
            // verify
            assert.throws(() => {
                Rooster.timeAtDawn(hour);
            }, RangeError);

        });
    });

});