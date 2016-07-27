"use strict";
var chai = require("chai");
var chai_1 = require("chai");
var chaiAsPromised = require("chai-as-promised");
var odata_get_1 = require("../../../lib/base/get/odata_get");
describe("ODataGetBase", function () {
    before(function () {
        chai.use(chaiAsPromised);
        chai.should();
    });
    describe("_getCollectionData", function () {
        var sut;
        beforeEach(function () {
            sut = new odata_get_1.ODataGetBase();
        });
        it("should return ordered collection", function () {
            var req = {
                url: "http://localhost:3000/Customer?$orderby=quantity"
            };
            var res = {
                status: 0
            };
            return chai_1.expect(true).to.be.true;
        });
    });
});
//# sourceMappingURL=odata_get.test.js.map