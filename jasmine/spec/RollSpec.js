describe("Roll", function(){

    var subject

    beforeEach(function(){
        subject = new Roll()
    })

    describe("pins", function(){
        
        it("saves the number of pins for the roll", function(){
            subject.setPins(5)
            expect(subject.getPins()).toEqual(5)
        })

    })

})