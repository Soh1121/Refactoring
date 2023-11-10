const chai = require('chai');
const expect = chai.expect;
const { Province, sampleProvinceData } = require('../../TestExample/sample');

describe('province', function() {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });
    it('profit', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    });
});