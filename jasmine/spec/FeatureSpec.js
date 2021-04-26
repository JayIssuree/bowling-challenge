describe("Features", function(){

    var game

    beforeEach(function(){
        game = new Game()
    })

    describe("roll", function(){

        it("saves the first roll of the game", function(){
            game.roll(2)
            expect(game.getFrame(1).getRoll(1).getPins()).toEqual(2)
        })

        it("saves the second roll of the game", function(){
            game.roll(1)
            game.roll(2)
            expect(game.getFrame(1).getRoll(2).getPins()).toEqual(2)
        })

    })

    describe("getTotalScore", function(){

        it("returns the total score given a number of rolls", function(){
            game.roll(5)
            game.roll(3)
            game.roll(9)
            game.roll(0)
            expect(game.getTotalScore()).toEqual(17)
        })

    })
    
})