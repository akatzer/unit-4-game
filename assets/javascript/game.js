$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    


    // Setting your values for everything
    function startGame() {
        var tonyNum = 0
        $("#tony-num").text(tonyNum);

        thanosNum = Math.floor((Math.random() * 102) + 19);
        $("#thanos-num").text(thanosNum);

        mindNum = Math.floor((Math.random() * 12) + 1);
        powerNum = Math.floor((Math.random() * 12) + 1);
        realityNum = Math.floor((Math.random() * 12) + 1);
        soulNum = Math.floor((Math.random() * 12) + 1);
        spaceNum = Math.floor((Math.random() * 12) + 1);
        timeNum = Math.floor((Math.random() * 12) + 1);

        $(".mind").on("click", function () {
            tonyNum = tonyNum + mindNum;
            console.log(tonyNum);
        })
        $(".power").on("click", function () {
            tonyNum += powerNum;
            console.log(tonyNum);
        })
        $(".reality").on("click", function () {
            tonyNum += realityNum;
            console.log(tonyNum);
        })
        $(".soul").on("click", function () {
            tonyNum += soulNum;
            console.log(tonyNum);
        })
        $(".space").on("click", function () {
            tonyNum += spaceNum;
            console.log(tonyNum);
        })
        $(".time").on("click", function () {
            tonyNum += timeNum;
            console.log(tonyNum);
            console.log(thanosNum);
        })

        
        }   
        if (tonyNum === thanosNum) {
            alert("YOU WIN!");
            wins++;
            startgame();
        }
        else if (tonyNum > thanosNum) {
            alert("YOU LOSE!");
            losses++;
            startgame();
    }





    








    startGame()

});