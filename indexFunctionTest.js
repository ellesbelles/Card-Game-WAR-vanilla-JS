var expect = chai.expect;

describe('myFunction', function() {
    describe('whoWins', function(){
        it('should compare the two arrays and chose a winner', function(){
            var x = whoWins(player1 || player2);
            expect(x).to.equal(player1 || player2);
        })
        it('should throw an eror if first parameter is not player1 or player2', function() {
            expect(function() {
                whoWins(any);
            }).to.throw(Error):
        })
    })

})