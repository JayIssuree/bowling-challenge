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
        },
        rollSpy3 = {
            pins: null,
            setPins: function(pins){
                this.pins = pins
            },
            getPins: function(){
                return this.pins
            }
        }
    })

    describe("setRollPins", function(){

        it("sets the rolls pins", function(){
            subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
            spyOn(rollSpy1, "setPins")
            var basicRoll = subject.createNewRoll()
            subject.setRollPins(basicRoll, 5)
            expect(rollSpy1.setPins).toHaveBeenCalledWith(5)
        })
        
    })
    
    describe("basicRolls", function(){
        
        describe("getBasicRolls", function(){
    
            it("starts off empty", function(){
                expect(subject.getBasicRolls()).toEqual([])
            })
    
        })

        describe("basicRoll", function(){
    
            it("returns the roll", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                expect(subject.basicRoll(1)).toEqual(rollSpy1)
            })
    
            it("returns an array with 1 roll object when 1 has been made", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(1)
                expect(subject.getBasicRolls()).toEqual([rollSpy1])
            })
    
            it("returns an array with 2 roll objects when 2 have been made", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(1)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(2)
                expect(subject.getBasicRolls()).toEqual([rollSpy1, rollSpy2])
            })
    
            it("only adds 2 basic rolls to the array", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(1)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(2)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                subject.basicRoll(3)
                expect(subject.getBasicRolls()).toEqual([rollSpy1, rollSpy2])
            })
    
        })
    
        describe("getBasicRoll", function(){
    
            it("returns the specific roll", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(1)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(2)
                expect(subject.getBasicRoll(1)).toEqual(rollSpy1)
                expect(subject.getBasicRoll(2)).toEqual(rollSpy2)
            })
    
        })
    
        describe("getBasicRollPins", function(){
    
            it("returns the pins of that roll", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(1)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(2)
                expect(subject.getBasicRollPins(1)).toEqual(1)
                expect(subject.getBasicRollPins(2)).toEqual(2)
            })
    
        })
    
        describe("addBasicRoll", function(){
    
            it("adds the object to the basic rolls array", function(){
                subject.addBasicRoll(rollSpy1)
                expect(subject.getBasicRoll(1)).toEqual(rollSpy1)
            })
    
        })

    })

    describe("bonusRolls", function(){

        describe("getBonusRolls", function(){

            it("starts off empty", function(){
                expect(subject.getBonusRolls()).toEqual([])
            })

        })

        describe("bonusRoll", function(){

            it("returns the roll", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                expect(subject.bonusRoll(1)).toEqual(rollSpy1)
            })

            it("returns the array of bonus rolls", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.bonusRoll(1)
                expect(subject.getBonusRolls()).toEqual([rollSpy1])
            })

        })

        describe("getBonusRoll", function(){

            it("returns the specific bonus roll", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                expect(subject.bonusRoll(1)).toEqual(rollSpy1)
            })

        })

        describe("getBonusRollPins", function(){

            it("returns the pins of that roll", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.bonusRoll(1)
                expect(subject.getBonusRollPins(1)).toEqual(1)
            })

        })

    })



//     describe("isComplete", function(){

//         it("starts off incomplete", function(){
//             expect(subject.isComplete()).toBe(false)
//         })

//         it("is incomplete after 1 roll", function(){
//             subject.roll(4)
//             expect(subject.isComplete()).toBe(false)
//         })

//         it("is complete once there are 2 rolls", function(){
//             subject.roll(1)
//             expect(subject.isComplete()).toBe(false)
//             subject.roll(2)
//             expect(subject.isComplete()).toBe(true)
//         })

//     })

//     describe("getScore", function(){

//         it("returns the score for the frame", function(){
//             subject.roll(5)
//             subject.roll(3)
//             expect(subject.getScore()).toEqual(8)
//         })

//     })

})