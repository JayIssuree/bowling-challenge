$(document).ready(function () {

    var game = new Game();
    setUpTable()
    setUpPins()

    function createTable(){
      var tableDiv = document.createElement('div')
      var table = document.createElement('table')
      var frameNumber = document.createElement('tr')
      var frameScores = document.createElement('tr')
      tableDiv.className = "scorecardDiv"
      table.className = "scorecard"
      frameNumber.className = "frameNumber"
      frameScores.className = "frameScores"
      table.appendChild(frameNumber)
      table.appendChild(frameScores)
      tableDiv.appendChild(table)
      $(tableDiv).appendTo("body")
    }

    function insertFrameNumbersIntoTable(){
      var frames = game.getFrames()
      for(var i = 0; i < frames.length; i++) {
        var frameNumber = document.createElement('td')
        frameNumber.setAttribute('colspan', 2)
        frameNumber.innerHTML = `Frame ${i + 1}`
        $(frameNumber).appendTo(".frameNumber")
      }
    }

    function setUpTable(){
      createTable()
      insertFrameNumbersIntoTable()
    }

    function createPins(){
      rollsDiv = document.createElement('div')
      rollsDiv.className = 'pinsToRoll'
      for (var i = 1; i <= 10; i++){
        pinButton = document.createElement('button')
        pinButton.innerHTML = i
        pinButton.className = `pin${i}`
        pinButton.setAttribute('value', i)
        rollsDiv.appendChild(pinButton)
      }
      $(rollsDiv).appendTo("body")
    }

    function setUpPins(){
      createPins()
    }

    $('.pinsToRoll').on('click', '*', function(){
      game.roll(Number(this.value))
      updateBasicRolls()
    })

    function updateBasicRolls(){
      previousFrames = game.getFramesWhereBasicRollsAreComplete()
      var previousFrame = previousFrames[previousFrames.length - 1]
      if (previousFrame == undefined) {
        return
      } else if (game.currentFrame().getBasicRolls().length < 1) {
        var frameScore = game.getScorecard().translateFrameToScore(previousFrame)
        insertScoreIntoScorecard(frameScore)
      }
    }

    function insertScoreIntoScorecard(frameScore){
      for (var i = 0; i < frameScore.length; i++){
        score = document.createElement('td')
        score.innerHTML = frameScore[i]
        $(score).appendTo(".frameScores")
      }
    }
  
  });
  