$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var tonyNum = 0;
    var thanosNum = 0;


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
    }


    $(".mind").on("click", function () {
        tonyNum += mindNum;
        $("#tony-num").text(tonyNum);
        logic();
    })
    $(".power").on("click", function () {
        tonyNum += powerNum;
        $("#tony-num").text(tonyNum);
        logic();
    })
    $(".reality").on("click", function () {
        tonyNum += realityNum;
        $("#tony-num").text(tonyNum);
        logic();
    })
    $(".soul").on("click", function () {
        tonyNum += soulNum;
        $("#tony-num").text(tonyNum);
        logic();
    })
    $(".space").on("click", function () {
        tonyNum += spaceNum;
        $("#tony-num").text(tonyNum);
        logic();
    })
    $(".time").on("click", function () {
        tonyNum += timeNum;
        $("#tony-num").text(tonyNum);
        logic();
    })

    function logic() {
        if (tonyNum === thanosNum) {
            alert("YOU WIN!");
            wins++;
            $(".wins").text(wins)
            resetGame();
        }
        else if (tonyNum > thanosNum) {
            alert("YOU LOSE!");
            losses++;
            $(".losses").text(losses);
            resetGame();
        }
    }









    resetGame();

});