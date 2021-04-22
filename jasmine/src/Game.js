class Game {

    constructor(FrameClass = Frame){
        this.FrameClass = FrameClass
        this.NUMBER_OF_FRAMES = 10;
        this.all_frames = [];
        this._setUpFrames();
    }

    frames(){
        return this.all_frames
    }

    _setUpFrames(){
        var i = 0
         do {
             this.all_frames.push(new this.FrameClass())
             i++
         } while (i < this.NUMBER_OF_FRAMES)
    }

}