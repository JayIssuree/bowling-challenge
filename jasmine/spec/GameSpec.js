describe("Game", function(){

    var subject

    beforeEach(function(){
        allFrames = [
            frameSpy1 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy2 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy3 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy4 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy5 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy6 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy7 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy8 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy9 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
                }
            },
            frameSpy10 = {
                basicRollsComplete: false,
                bonusRollsComplete: null,
                frameScore: 0,
                complete: false,
                isComplete(){
                    return this.complete
                },
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
                getFrameScore(){
                    return this.frameScore
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

    describe("getPreviousCompleteFrames", function(){

        it("returns an array of previous frames that are complete", function(){
            frameSpy1.complete = true
            frameSpy1.basicRollsComplete = true
            frameSpy2.complete = true
            frameSpy2.basicRollsComplete = true
            frameSpy3.complete = true
            frameSpy3.basicRollsComplete = true
            frameSpy4.complete = true
            frameSpy4.basicRollsComplete = true
            frameSpy5.complete = true
            frameSpy5.basicRollsComplete = true
            expect(subject.getPreviousCompleteFrames()).toEqual([frameSpy1, frameSpy2, frameSpy3, frameSpy4, frameSpy5])
        })

    })

    describe("getTotalScore", function(){

        it("returns the total score", function(){
            frameSpy1.frameScore = 4
            frameSpy1.basicRollsComplete = true
            frameSpy1.complete = true
            frameSpy2.frameScore = 18
            frameSpy2.basicRollsComplete = true
            frameSpy2.complete = true
            frameSpy3.frameScore = 8
            frameSpy3.basicRollsComplete = true
            frameSpy3.complete = true
            frameSpy4.frameScore = 14
            frameSpy4.basicRollsComplete = true
            frameSpy4.complete = true
            frameSpy5.frameScore = 6
            frameSpy5.basicRollsComplete = true
            frameSpy5.complete = true
            expect(subject.getTotalScore()).toEqual(50)
        })

    })

    describe("getCumulativeScores", function(){

        it("returns an array of the cumulative scores", function(){
            frameSpy1.frameScore = 4
            frameSpy1.basicRollsComplete = true
            frameSpy1.complete = true
            frameSpy2.frameScore = 18
            frameSpy2.basicRollsComplete = true
            frameSpy2.complete = true
            frameSpy3.frameScore = 8
            frameSpy3.basicRollsComplete = true
            frameSpy3.complete = true
            frameSpy4.frameScore = 14
            frameSpy4.basicRollsComplete = true
            frameSpy4.complete = true
            frameSpy5.frameScore = 6
            frameSpy5.basicRollsComplete = true
            frameSpy5.complete = true
            expect(subject.getCumulativeScores()).toEqual([4, 22, 30, 44, 50])
        })

        it("does not include incomplete frames", function(){
            frameSpy1.frameScore = 30
            frameSpy1.basicRollsComplete = true
            frameSpy1.complete = true
            frameSpy2.frameScore = 20
            frameSpy2.basicRollsComplete = true
            frameSpy2.complete = false
            frameSpy3.frameScore = 10
            frameSpy3.basicRollsComplete = true
            frameSpy3.complete = false
            expect(subject.getCumulativeScores()).toEqual([30])
        })

    })

})