describe("Game", function(){

    var subject

    beforeEach(function(){
        allFrames = [
            frameSpy1 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy2 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy3 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy4 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy5 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy6 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy7 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy8 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy9 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            },
            frameSpy10 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                isBasicRollsComplete(){
                    return this.basicRollsComplete
                },
                requiresBonusRollToBeAdded(){
                    return this.bonusRollsToBeAdded
                },
                basicRoll(pins){
                    return this
                },
                bonusRoll(pins){
                    return this
                },
                getScore(){
                    return this
                }
            }
        ]
        subject = new Game();
        subject.frames = allFrames
    })

    describe("frames", function(){
        
        it("is initialized with 10 frames", function(){
            expect(subject.getFrames().length).toEqual(10);
        })

    })

    describe("currentFrame", function(){

        it("returns the current frame", function(){
            expect(subject.currentFrame()).toEqual(frameSpy1)
        })

        it("returns the next incomplete frame", function(){
            frameSpy1.basicRollsComplete = true
            expect(subject.currentFrame()).toEqual(frameSpy2)
        })

        it("returns the third frame", function(){
            frameSpy1.basicRollsComplete = true
            frameSpy2.basicRollsComplete = true
            expect(subject.currentFrame()).toEqual(frameSpy3)
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

        it("adds a basicRoll to the current frame", function(){
            spyOn(frameSpy1, "basicRoll")
            subject.roll(5)
            expect(frameSpy1.basicRoll).toHaveBeenCalledWith(5)
        })

    })

    describe("getPreviousFrames", function(){

        it("returns an array of the frames that are before the current frame", function(){
            frameSpy1.basicRollsComplete = true
            frameSpy2.basicRollsComplete = true
            frameSpy3.basicRollsComplete = true
            frameSpy4.basicRollsComplete = true
            frameSpy5.basicRollsComplete = true
            expect(subject.getPreviousFrames()).toEqual([frameSpy1, frameSpy2, frameSpy3, frameSpy4, frameSpy5])
        })
    })

    describe("getPreviousFramesThatRequireBonusRolls", function(){
        
        it("returns an array of the frames that require a bonus roll to be added", function(){
            frameSpy1.basicRollsComplete = true
            frameSpy2.basicRollsComplete = true
            frameSpy2.bonusRollsToBeAdded = true
            frameSpy3.basicRollsComplete = true
            frameSpy3.bonusRollsToBeAdded = true
            expect(subject.getPreviousFramesThatRequireBonusRolls()).toEqual([frameSpy2, frameSpy3])
        })

    })

    describe("addRollToBonusRollsOfPreviousFrames", function(){

        it("calls the correct methods on the frames that require a bonus roll", function(){
            spyOn(frameSpy2, "bonusRoll")
            spyOn(frameSpy3, "bonusRoll")
            frameSpy1.basicRollsComplete = true
            frameSpy2.basicRollsComplete = true
            frameSpy2.bonusRollsToBeAdded = true
            frameSpy3.basicRollsComplete = true
            frameSpy3.bonusRollsToBeAdded = true
            subject.roll(5)
            expect(frameSpy2.bonusRoll).toHaveBeenCalledWith(5)
            expect(frameSpy3.bonusRoll).toHaveBeenCalledWith(5)

        })
    })

    // describe("getTotalScore", function(){

    //     it("returns the total score", function(){
    //         spyOn(frameSpy1, "getScore").and.returnValue(8)
    //         spyOn(frameSpy2, "getScore").and.returnValue(7)
    //         frameSpy1.basicRollsComplete = true
    //         frameSpy2.basicRollsComplete = true
    //         expect(subject.getTotalScore()).toEqual(15)
    //     })

    // })

})