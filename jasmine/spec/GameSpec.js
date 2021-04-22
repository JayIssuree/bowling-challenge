describe("Game", function(){

    var subject
    var frameSpy

    beforeEach(function(){
        frameSpy = {};
        subject = new Game();
        subject._createFrame = jasmine.createSpy().and.returnValue(frameSpy);
        subject.start();
    })

    describe("Frames", function(){
        
        it("is initialized with 10 frames", function(){
            expect(subject.frames().length).toEqual(10);
        })

    })

})