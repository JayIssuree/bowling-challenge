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
      $(tableDiv).prependTo("body")
    }
    
    function resetCumulativeScores(){
      $(".cumulativeScores").remove()
      var cumulativeScores = document.createElement('tr')
      cumulativeScores.className = "cumulativeScores"
      $(cumulativeScores).appendTo(".scorecard")
    }

    function updateCumulativeScores(){
      resetCumulativeScores()
      var cumulativeScores = game.getCumulativeScores()
      for(var i = 0; i < cumulativeScores.length; i++) {
        score = cumulativeScores[i]
        cumulativeScoreTd = document.createElement('td')
        cumulativeScoreTd.setAttribute('colspan', 2)
        cumulativeScoreTd.innerHTML = score
        $(cumulativeScoreTd).appendTo(".cumulativeScores")
      }
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

    function updateTotalScore() {
      $(document).find(".totalScore").text(game.getTotalScore())
    }

    $('.pinsToRoll').on('click', '*', function(){
      var val = Number(this.value)
      if (isStrike(val)) {
        insertStrike()
        game.roll(val)
        updateTotalScore()
        updateCumulativeScores()
        return
      } else {
        game.roll(val)
        if (isSpare()) {
          insertSpare()
          updateTotalScore()
          updateCumulativeScores()
          return
        }
        insertIntoRollScore(val)
        updateTotalScore()
        updateCumulativeScores()
      } 
    })

    function insertIntoRollScore(val){
      score = document.createElement('td')
      score.innerHTML = val
      score.setAttribute('value', val)
      $(score).appendTo(".frameScores")
    }

    function isStrike(val){
      return val == 10
    }

    function insertStrike(){
        insertIntoRollScore('-')
        insertIntoRollScore('X')
    }

    function isSpare(){
      previousFrames = game.getFramesWhereBasicRollsAreComplete()
      var previousFrame = previousFrames[previousFrames.length -1]
      return (previousFrame != undefined && previousFrame.isSpare() && game.currentFrame().getBasicRolls().length == 0)
    }

    function insertSpare(){
      insertIntoRollScore('/')
    }
  
  });
  