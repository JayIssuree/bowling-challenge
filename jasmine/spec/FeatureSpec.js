describe("Features", function(){

    var game

    beforeEach(function(){
        game = new Game()
    })

    describe("roll", function(){

        it("saves the first roll of the game", function(){
            game.roll(2)
            expect(game.currentFrame().rolls()[0].getPins()).toEqual(2)
        })

    })
    
})