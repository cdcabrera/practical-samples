
describe('Issue Sequence' , function(){

    it ('should return a total value after delay', function(done) {
        
        remoteMathService( function (err, answer) {

            expect(answer).toEqual(3);

            done();
        });

    });

});