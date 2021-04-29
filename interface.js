$(document).ready(function () {

    var game = new Game();
    setUpTable()

    function createTable(){
      var tableDiv = document.createElement('div')
      var table = document.createElement('table')
      var frameNumber = document.createElement('tr')
      table.className = "scorecard"
      frameNumber.className = "frameNumber"
      table.appendChild(frameNumber)
      tableDiv.appendChild(table)
      $(tableDiv).appendTo("body")
    }

    function insertFrameNumbersIntoTable(){
      var frames = game.getFrames()
      for(var i = 0; i < frames.length; i++) {
        var frameNumber = document.createElement('td')
        frameNumber.innerHTML = (`Frame ${i + 1}`)
        $(frameNumber).appendTo(".frameNumber")
      }
    }
    
    function setUpTable(){
      createTable()
      insertFrameNumbersIntoTable()
    }
  
  });
  