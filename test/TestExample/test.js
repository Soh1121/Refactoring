const chai = require('chai');
const assert = chai.assert;
const { Province, sampleProvinceData } = require('../../TestExample/sample');

describe('province', function() {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});