// import assert here
const assert = require("assert");

describe("+", () => {
    it("returns the sum of its arguments", () => {
        // Write assertion here
        assert.ok(3 + 4 === 8);
    });
    it("returns the sum of its arguments version 2", () => {
        // will pass the test :
        assert.ok(3 + 4 === 7);
    });
});