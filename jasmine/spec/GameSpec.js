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
                },
                getScore(){
                    return null
                }
            },
            frameSpy2 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy3 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy4 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy5 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy6 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy7 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy8 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy9 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
                }
            },
            frameSpy10 = {
                complete: false,
                isComplete(){
                    return this.complete
                },
                roll(pins){
                    return pins
                },
                getScore(){
                    return null
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

    describe("getFrame", function(){

        it("returns a specific frame given the number", function(){
            expect(subject.getFrame(1)).toEqual(frameSpy1)
            expect(subject.getFrame(2)).toEqual(frameSpy2)
            expect(subject.getFrame(3)).toEqual(frameSpy3)
            expect(subject.getFrame(4)).toEqual(frameSpy4)
            expect(subject.getFrame(5)).toEqual(frameSpy5)
        })
        
    })

    describe("roll", function(){

        it("adds a roll to the current frame", function(){
            spyOn(frameSpy1, "roll")
            subject.roll(5)
            expect(frameSpy1.roll).toHaveBeenCalledWith(5)
        })

    })

    describe("getTotalScore", function(){

        it("returns the total score", function(){
            spyOn(frameSpy1, "getScore").and.returnValue(8)
            spyOn(frameSpy2, "getScore").and.returnValue(7)
            frameSpy1.complete = true
            frameSpy2.complete = true
            expect(subject.getTotalScore()).toEqual(15)
        })

    })

})