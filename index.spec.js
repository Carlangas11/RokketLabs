const { expect } = require('chai')
const {EllysBalancedStrings} = require('./index')

describe("EllysBalancedStrings", function() {
    it("should return 1 if string passed is 'TOPCODER'", () => {
        var ex1 = 'TOPCODER';
      expect(EllysBalancedStrings(ex1)).to.equal(1);
    })
    it("should return 0 if string passed is 'BANANA'", () => {
        var ex2 = 'BANANA';
      expect(EllysBalancedStrings(ex2)).to.equal(0);
    })
    it("should return 2 if string passed is 'WITHOUTITIAMJUSTESPR'", () => {
        var ex3 = 'WITHOUTITIAMJUSTESPR';
      expect(EllysBalancedStrings(ex3)).to.equal(2);
    })
  })