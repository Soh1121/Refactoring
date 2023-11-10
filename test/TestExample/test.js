const chai = require('chai');
const expect = chai.expect;
const { Province, sampleProvinceData } = require('../../TestExample/sample');

describe('province', function() {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData());
    });
    it('shortfall', () => {
        expect(asia.shortfall).equal(5);
    });
    it('profit', () => {
        expect(asia.profit).equal(230);
    });
});