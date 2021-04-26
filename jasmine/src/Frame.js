class Frame {

    constructor(){
        this.basicRolls = []
        this.bonusRolls = []
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
        return this.bonusRolls()[rollNumber - 1]
    }

    getBonusRollPins(rollNumber){
        return this.getBonusRoll(rollNumber).getPins()
    }

    addBonusRoll(roll){
        var roll = this.createNewRoll(pins)
        this.bonusRolls.push(roll)
    }

    createNewRoll(){
        new Roll()
    }

    setRollPins(roll, pins){
        roll.setPins(pins)
    }

    roll(pins){
        if (this._hasTwoRolls()){
            return
        }
        var roll = this.createNewRoll()
        this.setRollPins(roll, pins)
        this.addBasicRoll(roll)
    }

    // isComplete(){
    //     if (this._hasTwoRolls()) {
    //         this.complete = true
    //     }
    //     return this.complete
    // }

    _hasTwoRolls(){
        return (this.basicRolls.length == 2)
    }

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