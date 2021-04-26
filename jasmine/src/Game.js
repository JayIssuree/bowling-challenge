class Game {

    constructor(){
        this.NUMBER_OF_FRAMES = 10;
        this.all_frames = [];
        this.totalScore = 0
        this._setUpFrames();
    }

    frames(){
        return this.all_frames;
    }

    currentFrame(){
        return this.frames().find(frame => frame.isComplete() == false)
    }

    getFrame(frameNumber){
        return this.all_frames[frameNumber - 1]
    }

    roll(pins){
        this.currentFrame().roll(pins)
    }

    _setUpFrames(){
        var i = 0;
         do {
             this.frames().push(new Frame());
             i++;
         } while (i < this.NUMBER_OF_FRAMES);
    }

    getTotalScore(){
        this.calculateTotalScore()
        return this.totalScore
    }

    calculateTotalScore(){
        var i = 1
        do {
            this.totalScore += this.getFrame(i).getScore()
            i++
        } while (this.getFrame(i).isComplete() == true)
    }

}