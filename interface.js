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
      } else if (isSpare(val)) {
        insertSpare()
      } else {
        insertIntoRollScore(val)
      }
      game.roll(val)
      updateTotalScore()
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

    function isSpare(justRolled){
      return justRolled + Number($("table tr:last td:last").text()) == 10
    }

    function insertSpare(){
      insertIntoRollScore('/')
    }
  
  });
  