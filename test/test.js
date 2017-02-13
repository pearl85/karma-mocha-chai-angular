describe("A test suite", function() {
    beforeEach(function() {});
    afterEach(function() {});
    it('should fail', function() { expect(false).to.be.false; });
});

describe('Array Test', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
})

describe('MMSController', function() {
    beforeEach(module('app-module'));

    describe('getFullName()', function() {
        it('should handle names correctly', inject(function($controller) {
            var myController = $controller('MMSController');
            myController.firstName = 'David';
            myController.lastName = 'Beckham';
            console.log(myController.getFullName());
            myController.getFullName().should.equal('David Beckham');
        }));
    });
});
