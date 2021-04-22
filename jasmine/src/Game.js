class Game {

    constructor(){
        this.NUMBER_OF_FRAMES = 10;
        this.all_frames = [];
    }

    start(){
        this._setUpFrames();
    }

    frames(){
        return this.all_frames;
    }

    _createFrame(){
        return new Frame();
    }

    _setUpFrames(){
        var i = 0;
         do {
             this.all_frames.push(this._createFrame());
             i++;
         } while (i < this.NUMBER_OF_FRAMES);
    }

}