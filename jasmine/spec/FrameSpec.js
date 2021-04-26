describe("Frame", function(){

    var subject

    beforeEach(function(){
        subject = new Frame()
        rollSpy1 = {
            pins: null,
            setPins: function(pins){
                this.pins = pins
            },
            getPins: function(){
                return this.pins
            }
        }
        rollSpy2 = {
            pins: null,
            setPins: function(pins){
                this.pins = pins
            },
            getPins: function(){
                return this.pins
            }
        }
        subject.allRolls = [rollSpy1]
        subject._createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
    })

    describe("rolls", function(){

        it("starts with 1 roll", function(){
            expect(subject.rolls().length).toEqual(1)
        })

    })

    describe("getRoll", function(){

        it("returns the roll given a number", function(){
            expect(subject.getRoll(1)).toEqual(rollSpy1)
        })

        it("returns the roll given a number", function(){
            subject.roll(1)
            expect(subject.getRoll(2)).toEqual(rollSpy2)
        })

    })

    describe("getRollPins", function(){

        it("gets the pins of the roll", function(){
            subject.roll(8)
            expect(subject.getRollPins(1)).toEqual(8)
        })

    })

    describe("addRoll", function(){

        it("adds a roll to the frame", function(){
            subject.addRoll()
            expect(subject.rolls().length).toEqual(2)
        })

    })

    describe("roll", function(){

        it("calls the correct method on the current roll(first)", function(){
            spyOn(rollSpy1, "setPins")
            subject.roll(4)
            expect(rollSpy1.setPins).toHaveBeenCalledWith(4)
        })

        it("calls the correct method on the current roll(second)", function(){
            spyOn(rollSpy2, "setPins")
            subject.roll(3)
            subject.roll(4)
            expect(rollSpy2.setPins).toHaveBeenCalledWith(4)
        })

    })

    describe("currentRoll", function(){

        it("returns the current roll (first)", function(){
            expect(subject.currentRoll()).toEqual(rollSpy1)
        })

        it("returns the current roll (second)", function(){
            subject.roll(2)
            expect(subject.currentRoll()).toEqual(rollSpy2)
        })

    })

    describe("isComplete", function(){

        it("starts off incomplete", function(){
            expect(subject.isComplete()).toBe(false)
        })

        it("is incomplete after 1 roll", function(){
            subject.roll(4)
            expect(subject.isComplete()).toBe(false)
        })

        it("is complete once there are 2 rolls", function(){
            subject.roll(1)
            expect(subject.isComplete()).toBe(false)
            subject.roll(2)
            expect(subject.isComplete()).toBe(true)
        })

    })

    describe("getScore", function(){

        it("returns the score for the frame", function(){
            subject.roll(5)
            subject.roll(3)
            expect(subject.getScore()).toEqual(8)
        })

    })

})