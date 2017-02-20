
describe('Issue Callback' , function(){

    it ('should only fire callback once', function(done) {

        var testVal = 0;

        foo( function (err, res){

            testVal += 1;

            expect(testVal).toEqual(1);
        });

        done();

    });

});