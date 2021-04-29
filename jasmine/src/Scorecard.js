class Scorecard {
    
    translateFrameToScore(frame){
        if(frame.isSpare()) {
            return this.translateSpare(frame)
        } else if (frame.isStrike()){
            return this.translateStrike(frame)
        }
        return this.pinsToArray(frame)
    }

    translateSpare(frame){
        var newArr = this.pinsToArray(frame)
        newArr[1] = '/'
        return newArr
    }

    translateStrike(frame){
        var newArr = this.pinsToArray(frame)
        newArr[0] = ''
        newArr[1] = 'X'
        return newArr
    }

    pinsToArray(frame){
        return frame.getBasicRolls().map(roll => roll.getPins())
    }

}