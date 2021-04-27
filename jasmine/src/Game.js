class Game {

    constructor(){
        this.NUMBER_OF_FRAMES = 10;
        this.frames = [];
        this.totalScore = 0
        this._setUpFrames();
    }

    _setUpFrames(){
        var i = 0;
         do {
             this.frames.push(new Frame());
             i++;
         } while (i < this.NUMBER_OF_FRAMES);
    }

    getFrames(){
        return this.frames
    }

    getFrame(frameNumber){
        return this.frames[frameNumber - 1]
    }

    currentFrame(){
        return this.frames.find(frame => frame.isBasicRollsComplete() == false)
    }

    roll(pins){
        if (this.hasPreviousFramesThatRequireBonusRolls()){
            this.addRollToBonusRollsOfPreviousFrames(pins)
        }
        this.currentFrame().basicRoll(pins)
    }

    getPreviousFrames(){
        var currentFrameNumber = this.frames.indexOf(this.currentFrame()) + 1
        var previousFramesArray = []
        for (var i = 1; i < currentFrameNumber; i++){
            previousFramesArray.push(this.getFrame(i))
        }
        return previousFramesArray
    }

    getPreviousFramesThatRequireBonusRolls(){
        var previousFramesArray = this.getPreviousFrames()
        return previousFramesArray.filter(frame => frame.requiresBonusRollToBeAdded() == true)
    }

    addRollToBonusRollsOfPreviousFrames(pins){
        var previousFramesThatRequireBonusRolls = this.getPreviousFramesThatRequireBonusRolls()
        for (var i = 0; i < previousFramesThatRequireBonusRolls.length; i++){
            var frame = previousFramesThatRequireBonusRolls[i]
            frame.bonusRoll(pins)
        }
    }

    hasPreviousFramesThatRequireBonusRolls(){
        return (this.getPreviousFramesThatRequireBonusRolls().length > 0)
    }

    // getTotalScore(){
    //     this.calculateTotalScore()
    //     return this.totalScore
    // }

    // calculateTotalScore(){
    //     var i = 1
    //     do {
    //         this.totalScore += this.getFrame(i).getScore()
    //         i++
    //     } while (this.getFrame(i).isComplete() == true)
    // }

}