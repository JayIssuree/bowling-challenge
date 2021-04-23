describe("Game", function(){

    var subject

    beforeEach(function(){
        allFrames = [
            frameSpy1 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy2 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy3 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy4 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy5 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy6 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy7 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy8 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy9 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                }
            },
            frameSpy10 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
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

    describe("roll", function(){

        it("adds a roll to the current frame", function(){
            spyOn(frameSpy1, "roll")
            subject.roll(5)
            expect(frameSpy1.roll).toHaveBeenCalledWith(5)
        })

    })

})