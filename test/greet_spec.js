var greet = require("greet");
describe("greet", function() {
    it("should greet a person by name", function() {
        expect(greet("neo")).to.equal("hello, neo");
    });
    it("should greet a person flirtatiously if drunk", function() {
        expect(greet("neo",true)).to.equal("hello neo, you look sexy today");
    });
});
