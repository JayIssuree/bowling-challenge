describe("Game", function(){

    var subject

    beforeEach(function(){
        allFrames = [
            frameSpy1 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy2 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy3 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy4 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy5 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy6 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy7 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy8 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy9 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            },
            frameSpy10 = {
                complete: false,
                isComplete(){
                    return this.complete
                }
            }
        ]
        subject = new Game();
        subject.all_frames = allFrames
    })

    describe("frames", function(){
        
        it("is initialized with 10 frames", function(){
            expect(subject.frames().length).toEqual(10);
        })

    })

    describe("currentFrame", function(){

        it("returns the current frame", function(){
            expect(subject.currentFrame()).toEqual(frameSpy1)
        })

        it("returns the next incomplete frame", function(){
            frameSpy1.complete = true
            expect(subject.currentFrame()).toEqual(frameSpy2)
        })

    })

})