class Frame {

    constructor(){
        this.allRolls = []
        this.addRoll()
        this.complete = false
    }

    rolls(){
        return this.allRolls
    }

    addRoll(){
        this.rolls().push(this._createNewRoll())
    }

    currentRoll(){
        return this.rolls()[this.rolls().length -1]
    }

    getRoll(rollNumber){
        return this.rolls()[rollNumber - 1]
    }

    roll(pins){
        this.currentRoll().setPins(pins)
        if (this.isComplete() == false){
            this.addRoll()
        }
    }

    _createNewRoll(){
        return new Roll()
    }

    isComplete(){
        if (this._hasTwoRolls()) {
            this.complete = true
        }
        return this.complete
    }

    _hasTwoRolls(){
        return (this.rolls().length == 2 && (this.rolls()[0].getPins() != null && this.rolls()[1].getPins() != null))
    }

}