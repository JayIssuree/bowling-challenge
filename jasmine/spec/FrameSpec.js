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
        },
        rollSpy4 = {
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

        describe("isSpare", function(){

            beforeEach(function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(4)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(6)
            })

            it("determines a spare has been rolled", function(){
                expect(subject.isSpare()).toBe(true)
                expect(subject.isStrike()).toBe(false)
            })
    
            it("returns false when a spare has not been rolled", function(){
                subject = new Frame()
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(4)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(4)
                expect(subject.isSpare()).toBe(false)
            })
    
            it("sets the number of bonus rolls to be added to 1", function(){
                expect(subject.getNumberOfBonusRollsToBeAdded()).toEqual(1)
            })

            describe("bonusRoll", function(){

                it("returns the roll", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    expect(subject.bonusRoll(5)).toEqual(rollSpy3)
                })
    
                it("returns the array of bonus rolls", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(4)
                    expect(subject.getBonusRolls()).toEqual([rollSpy3])
                })
    
                it("only adds one bonus roll after a spare", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(4)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy4)
                    subject.bonusRoll(5)
                    expect(subject.getBonusRolls()).toEqual([rollSpy3])
                })
    
            })

            describe("getBonusRoll", function(){

                it("returns the specific bonus roll", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(8)
                    expect(subject.getBonusRoll(1)).toEqual(rollSpy3)
                })
    
            })

            describe("getBonusRollPins", function(){

                it("returns the pins of that roll", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(5)
                    expect(subject.getBonusRollPins(1)).toEqual(5)
                })
    
            })

            describe("requiresBonusRollToBeAdded", function(){

                it("returns true when bonus rolls need to be added", function(){
                    expect(subject.requiresBonusRollToBeAdded()).toBe(true)
                })

                it("returns false once the bonus has been added", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(4)
                    expect(subject.requiresBonusRollToBeAdded()).toBe(false)
                })

            })
    
        })

        describe("isStrike", function(){

            beforeEach(function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(10)
            })

            it("determines a strike has been rolled", function(){
                expect(subject.isSpare()).toBe(false)
                expect(subject.isStrike()).toBe(true)
            })

            it("returns false when a strike has not been rolled (1 roll)", function(){
                subject = new Frame()
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(9)
                expect(subject.isStrike()).toBe(false)
            })

            it("returns false when a strike has not been rolled (2 rolls)", function(){
                subject = new Frame()
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
                subject.basicRoll(4)
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(5)
                expect(subject.isStrike()).toBe(false)
            })

            it("sets the number of bonus rolls to be added to 2", function(){
                expect(subject.getNumberOfBonusRollsToBeAdded()).toEqual(2)
            })

            it("does not allow for another basic roll to be added after a strike", function(){
                subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                subject.basicRoll(5)
                expect(subject.getBasicRolls()).toEqual([rollSpy1])
            })

            describe("bonusRoll", function(){

                it("returns the roll", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                    expect(subject.bonusRoll(5)).toEqual(rollSpy2)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    expect(subject.bonusRoll(3)).toEqual(rollSpy3)
                })
    
                it("returns the array of bonus rolls", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                    subject.bonusRoll(4)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(5)
                    expect(subject.getBonusRolls()).toEqual([rollSpy2, rollSpy3])
                })
    
                it("only adds two bonus roll after a strike", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                    subject.bonusRoll(3)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(4)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy4)
                    subject.bonusRoll(1)
                    expect(subject.getBonusRolls()).toEqual([rollSpy2, rollSpy3])
                })
    
            })

            describe("getBonusRoll", function(){

                it("returns the specific bonus roll", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                    subject.bonusRoll(8)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(2)
                    expect(subject.getBonusRoll(1)).toEqual(rollSpy2)
                    expect(subject.getBonusRoll(2)).toEqual(rollSpy3)
                })
    
            })

            describe("getBonusRollPins", function(){

                it("returns the pins of that roll", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                    subject.bonusRoll(4)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(6)
                    expect(subject.getBonusRollPins(1)).toEqual(4)
                    expect(subject.getBonusRollPins(2)).toEqual(6)
                })
    
            })

            describe("requiresBonusRollToBeAdded", function(){

                it("returns true when bonus rolls need to be added", function(){
                    expect(subject.requiresBonusRollToBeAdded()).toBe(true)
                })

                it("returns false once the bonus has been added", function(){
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
                    subject.bonusRoll(4)
                    subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy3)
                    subject.bonusRoll(6)
                    expect(subject.requiresBonusRollToBeAdded()).toBe(false)
                })

            })

        })

    })

    describe("isComplete", function(){

        it("starts off false", function(){
            expect(subject.isComplete()).toBe(false)
        })

        it("returns true when there are 2 basic rolls", function(){
            subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
            subject.basicRoll(4)
            subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy2)
            subject.basicRoll(6)
            expect(subject.isComplete()).toBe(true)
        })

        it("returns true if a strike has been rolled", function(){
            subject.createNewRoll = jasmine.createSpy().and.returnValue(rollSpy1)
            subject.basicRoll(10)
            expect(subject.isComplete()).toBe(true)
        })

    })

//     describe("getScore", function(){

//         it("returns the score for the frame", function(){
//             subject.roll(5)
//             subject.roll(3)
//             expect(subject.getScore()).toEqual(8)
//         })

//     })

})