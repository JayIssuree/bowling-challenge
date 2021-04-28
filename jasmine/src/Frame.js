class Frame {

    constructor(){
        this.basicRolls = []
        this.bonusRolls = []
        this.numberOfBonusRollsToBeAdded = 0
        this.basicRollsComplete = false
        this.bonusRollsComplete = null
        this.complete = false
        this.basicRollsScore = 0
        this.bonusRollsScore = 0
        this.frameScore = 0
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
        return new Roll()
    }

    setRollPins(roll, pins){
        roll.setPins(pins)
    }

    basicRoll(pins){
        if (this.isBasicRollsComplete() == false){
            var roll = this.createNewRoll()
            this.setRollPins(roll, pins)
            this.addBasicRoll(roll)
            this.calculateNumberOfBonusRollsToBeAdded()
            return roll
        }
    }

    bonusRoll(pins){
        if (this.requiresBonusRollToBeAdded()){
            var roll = this.createNewRoll()
            this.setRollPins(roll, pins)
            this.addBonusRoll(roll)
            this.bonusRollHasBeenAdded()
            return roll
        }
    }

    _hasTwoBasicRolls(){
        return (this.basicRolls.length == 2)
    }

    _hasOneBasicRoll(){
        return (this.basicRolls.length == 1)
    }

    isSpare(){
        return (this._hasTwoBasicRolls() && (this.getBasicRollPins(1) + this.getBasicRollPins(2) == 10))
    }

    isStrike(){
        return (this._hasOneBasicRoll() && (this.getBasicRollPins(1) == 10))
    }

    calculateNumberOfBonusRollsToBeAdded(){
        if (this.isSpare()){
            this.numberOfBonusRollsToBeAdded = 1
        } else if (this.isStrike()) {
            this.numberOfBonusRollsToBeAdded = 2
        }
    }

    getNumberOfBonusRollsToBeAdded(){
        return this.numberOfBonusRollsToBeAdded
    }

    bonusRollHasBeenAdded(){
        this.numberOfBonusRollsToBeAdded -= 1
    }

    requiresBonusRollToBeAdded(){
        return this.numberOfBonusRollsToBeAdded > 0
    }
    
    isBasicRollsComplete(){
        if (this._hasTwoBasicRolls() || this.isStrike()) {
            this.basicRollsComplete = true
        }
        return this.basicRollsComplete
    }

    isBonusRollsComplete(){
        if (this.isBasicRollsComplete() && (this.requiresBonusRollToBeAdded() == false)) {
            this.bonusRollsComplete = true
        } else if (this.isBasicRollsComplete() && this.requiresBonusRollToBeAdded()) {
            this.bonusRollsComplete = false
        }
        return this.bonusRollsComplete
    }

    isComplete(){
        this.complete = (this.isBasicRollsComplete() && this.isBonusRollsComplete())
        return this.complete
    }

    getBasicRollsScore(){
        this.calculateBasicRollsScore()
        return this.basicRollsScore
    }

    getBonusRollsScore(){
        this.calculateBonusRollsScore()
        return this.bonusRollsScore
    }

    getFrameScore(){
        this.calculateFrameScore()
        return this.frameScore
    }

    calculateBasicRollsScore(){
        this.basicRollsScore = 0
        if (this.isBasicRollsComplete()){
            var i = 1
            do {
                this.basicRollsScore += this.getBasicRollPins(i)
                i++
            } while (i <= this.basicRolls.length)
        }
    }

    calculateBonusRollsScore(){
        this.bonusRollsScore = 0
        if (this.isBonusRollsComplete()){
            var i = 1
            do {
                this.bonusRollsScore += this.getBonusRollPins(i)
                i++
            } while (i <= this.bonusRolls.length)
        }
    }

    calculateFrameScore(){
        this.frameScore = (this.getBasicRollsScore() + this.getBonusRollsScore())
    }

}