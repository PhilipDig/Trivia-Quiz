let q1result = false
let q2result = false
let q3result = false

let q1answered = false
let q2answered = false
let q3answered = false

let correctAnswers = 0
let incorrectAnswers = 0
let unanswered = 0

let timeRemaining = 30

let timer = {}
let clearTimerFlag = false

$(".q1").on("change", function () {

    q1result = $(this).attr("data-answer")
    q1answered = true
})

$(".q2").on("change", function () {

    q2result = $(this).attr("data-answer")
    q2answered = true
})

$(".q3").on("change", function () {

    q3result = $(this).attr("data-answer")
    q3answered = true
})

$("#startButton").on("click", function () {

    $(".startButton").css("display", "none")
    $(".content").css("display", "block")
    $(document.body).css("background-image", "none")

    timer = setInterval(function () {

        if (clearTimerFlag) {

            clearInterval(timer)
        }

        timeRemaining--
        $("#time_remaining").text(timeRemaining)

        if (timeRemaining <= 0) {

            if (q1answered) {

                if (q1result === "true") {
                    correctAnswers++
                } else {
                    incorrectAnswers++
                }
            } else {

                unanswered++
            }

            if (q2answered) {

                if (q2result === "true") {
                    correctAnswers++
                } else {
                    incorrectAnswers++
                }
            } else {

                unanswered++
            }

            if (q3answered) {

                if (q3result === "true") {
                    correctAnswers++
                } else {
                    incorrectAnswers++
                }
            } else {

                unanswered++
            }

            $("#correct_answers").text(correctAnswers)
            $("#incorrect_answers").text(incorrectAnswers)
            $("#unanswered").text(unanswered)

            $(".content").css("display", "none")
            $(".results").css("display", "block")

            clearInterval(timer)
        }
    }, 1000)
})