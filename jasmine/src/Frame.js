class Frame {

    constructor(){
        this.basicRolls = []
        this.bonusRolls = []
        this.numberOfBonusRollsToBeAdded = 0
        this.complete = false
        this.score = null
    }

    getBasicRolls(){
        return this.basicRolls
    }

    getBasicRoll(rollNumber){
        return this.basicRolls[rollNumber - 1]
    }

    getBasicRollPins(rollNumber){
        return this.getBasicRoll(rollNumber).getPins()
    }
    
    addBasicRoll(roll){
        this.basicRolls.push(roll)
    }

    getBonusRolls(){
        return this.bonusRolls
    }

    getBonusRoll(rollNumber){
        return this.bonusRolls[rollNumber - 1]
    }

    getBonusRollPins(rollNumber){
        return this.getBonusRoll(rollNumber).getPins()
    }

    addBonusRoll(roll){
        this.bonusRolls.push(roll)
    }

    createNewRoll(){
        new Roll()
    }

    setRollPins(roll, pins){
        roll.setPins(pins)
    }

    basicRoll(pins){
        if (this._hasTwoBasicRolls()){
            return
        }
        var roll = this.createNewRoll()
        this.setRollPins(roll, pins)
        this.addBasicRoll(roll)
        this.calculateNumberOfBonusRollsToBeAdded()
        return roll
    }

    bonusRoll(pins){
        if (this.numberOfBonusRollsToBeAdded == 0){
            return
        }
        var roll = this.createNewRoll()
        this.setRollPins(roll, pins)
        this.addBonusRoll(roll)
        this.bonusRollHasBeenAdded()
        return roll
    }

    _hasTwoBasicRolls(){
        return (this.basicRolls.length == 2)
    }

    isSpare(){
        return (this._hasTwoBasicRolls() && (this.getBasicRollPins(1) + this.getBasicRollPins(2) == 10))
    }

    calculateNumberOfBonusRollsToBeAdded(){
        if (this.isSpare()){
            this.numberOfBonusRollsToBeAdded = 1
        }
    }

    getNumberOfBonusRollsToBeAdded(){
        return this.numberOfBonusRollsToBeAdded
    }

    bonusRollHasBeenAdded(){
        this.numberOfBonusRollsToBeAdded -= 1
    }
    
    // isComplete?

    // getScore(){
    //     if (this.isComplete()) {
    //         this.score = this.calculateScore()
    //         return this.score
    //     }
    // }

    // calculateScore(){
    //     return this.getRollPins(1) + this.getRollPins(2)
    // }

}