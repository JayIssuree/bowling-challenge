describe("Scorecard", function(){

    var subject

    beforeEach(function(){
        frameSpy1 = {
            basicRollsComplete: false,
            bonusRollsComplete: null,
            spare: null,
            strike: null,
            basicRolls: [],
            isStrike(){
                return this.strike
            },
            isSpare(){
                return this.spare
            },
            isBasicRollsComplete(){
                return this.basicRollsComplete
            },
            getBasicRolls(){
                return this.basicRolls
            }
        }
        rollSpy1 = {
            pins: null,
            getPins: function(){
                return this.pins
            }
        }
        rollSpy2 = {
            pins: null,
            getPins: function(){
                return this.pins
            }
        }
        subject = new Scorecard();
    })

    describe("translateFrameToScore", function(){

        it("returns an array of numbers to be displayed on the scorecard per frame", function(){
            frameSpy1.basicRollsComplete = true
            rollSpy1.pins = 5
            rollSpy2.pins = 4
            frameSpy1.basicRolls = [rollSpy1, rollSpy2]
            expect(subject.translateFrameToScore(frameSpy1)).toEqual([5, 4])
        })

        it("returns a / when a spare has been scored", function(){
            frameSpy1.basicRollsComplete = true
            frameSpy1.spare = true
            rollSpy1.pins = 4
            rollSpy2.pins = 6
            frameSpy1.basicRolls = [rollSpy1, rollSpy2]
            expect(subject.translateFrameToScore(frameSpy1)).toEqual([4, '/'])
        })

        it("returns an x when a strike has been scored", function(){
            frameSpy1.basicRollsComplete = true
            frameSpy1.strike = true
            rollSpy1.pins = 10
            frameSpy1.basicRolls = [rollSpy1]
            expect(subject.translateFrameToScore(frameSpy1)).toEqual(['', 'X'])
        })

    })

})