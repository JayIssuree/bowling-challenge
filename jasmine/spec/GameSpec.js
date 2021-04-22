describe("Game", function(){

    var subject
    var frameSpy

    beforeEach(function(){
        frameSpy = jasmine.createSpy()
        subject = new Game(FrameClass = frameSpy);
    })

    describe("Frames", function(){
        
        it("is initialized with 10 frames", function(){
            expect(subject.frames().length).toEqual(10)
        })

    })

})