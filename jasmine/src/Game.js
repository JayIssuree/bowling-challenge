class Game {

    constructor(){
        this.NUMBER_OF_FRAMES = 10;
        this.all_frames = [];
        this._setUpFrames();
    }

    frames(){
        return this.all_frames;
    }

    currentFrame(){
        return this.all_frames.find(frame => frame.isComplete() == false)
    }

    _setUpFrames(){
        var i = 0;
         do {
             this.all_frames.push(new Frame());
             i++;
         } while (i < this.NUMBER_OF_FRAMES);
    }

}