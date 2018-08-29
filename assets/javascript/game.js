$(document).ready(function () {
    var tonyNum = 0;
    var wins = 0;
    var losses = 0;
    
    $("#tony-num").text(tonyNum);

    thanosNum = Math.floor((Math.random() * 102) + 19);
    $("#thanos-num").text(thanosNum);

    // Setting your values for everything
    function resetGame() {
        tonyNum = 0
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
            tonyNum += mindNum;
            $("#tony-num").text(tonyNum);
            console.log(tonyNum);
        })
        $(".power").on("click", function () {
            tonyNum += powerNum;
            $("#tony-num").text(tonyNum);
            console.log(tonyNum);
        })
        $(".reality").on("click", function () {
            tonyNum += realityNum;
            $("#tony-num").text(tonyNum);
            console.log(tonyNum);
        })
        $(".soul").on("click", function () {
            tonyNum += soulNum;
            $("#tony-num").text(tonyNum);
            console.log(tonyNum);
        })
        $(".space").on("click", function () {
            tonyNum += spaceNum;
            $("#tony-num").text(tonyNum);
            console.log(tonyNum);
        })
        $(".time").on("click", function () {
            tonyNum += timeNum;
            $("#tony-num").text(tonyNum);
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