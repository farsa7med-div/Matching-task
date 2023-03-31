/****************start loading page***********************/
$("document").ready(function () {

    $(".loader-cover").fadeOut(1000)

});
/****************end loading page***********************/


/***************start scale functionality***************/

// Get the current scale of the website
// var ourbody = document.getElementById("ourBody")
// document.body.style.transform = 'scale(1)'
// //ourbody.style.transform='scale(.5)'

// window.addEventListener('resize', function () {
//     // Get the new width of the window
//     var windowWidth = window.innerWidth;
//     var windoHeight = window.innerHeight;

//     var bodyHeight = ourbody.offsetHeight
//     var bodyWidth = ourbody.offsetWidth

//     var Xscale = windowWidth / bodyWidth;
//     var Yscale = windoHeight / bodyHeight
//     // console.log(Xscale,Yscale)
//     var changeY = 1 / Yscale
//     var changeX = 1 / Xscale
//     console.log(changeY, changeX)
//     //document.body.style.transform=`scaleY(${changeY})`
//     // document.body.style.transform=`scale(${changeX})`

//     // console.log(`windo height ${windoHeight} / body ${bodyHeight}` , `window width ${windowWidth} / body${bodyWidth}`)





// });
// Get the current scale of the website
//var currentScale = document.documentElement.style.zoom || 1;

// Listen for the window resize event
// window.addEventListener('resize', function() {
//   // Get the new width of the window
//   var windowWidth = window.innerWidth;

//   // Set the new scale based on the window width
//   var newScale = windowWidth / 1024; // 1024 is the original width of the website

//   // Update the scale of the website
//   document.documentElement.style.zoom = newScale;
// });

// window.addEventListener('resize', function() {
//     var body = document.getElementsByTagName('body')[0];
//     var scaleFactor = window.innerWidth / 1000; // Change 1000 to the desired width of your website
//     var scaleFactor2=window.innerHeight/1000;
//     body.style.transform = 'scaleX(' + scaleFactor + ')';
//     body.style.transform = 'scaleY(' + scaleFactor2 + ')';
//   });

window.onresize = function () {
    // Get the current window height and width
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var fullh = window.screen.availHeight - (window.outerHeight - window.innerHeight)
    console.log("full h", fullh)
    console.log("h", windowHeight)
    if (windowHeight != fullh) {
        // Scale the website elements based on the window size
        document.getElementById("ourBody").style.transform = 'scale(' + windowWidth + ')';

        document.getElementById("ourBody").style.transform = 'scaleY(' + 0.0009 * windowHeight + ')';
    } else {
        document.getElementById("ourBody").style.transform = 'scaleX(' + 1 + ')';
        // You can also set the width of an image to be 80% of the window width
        document.getElementById("ourBody").style.transform = 'scaleY(' + 1 + ')';
    }

}


/***************end scale functionality***************/

/***************start show dummy and help buttom functionality***************/
$('#show-dummy-btn').click(() => {
    $('#dummy-cont').css('display', 'flex')
})

$('#close-btn').click(() => {
    $('#dummy-cont').css('display', 'none')
})
$('#close-btn2').click(() => {
    $('#help-cont').css('display', 'none')
})
$('#help-btn').click(() => {
    $('#help-cont').css('display', 'flex')
})
/***************end show dummy and help buttom functionality***************/

/***************start questions functionality***************/
var temp = ""

$('.questions').click(function () {

    temp = this.dataset.id
    console.log(temp);
    $(this).find(".radio-circle").addClass("blue-radio");
    $(".answers").addClass("clicked-radio")
    $(".answers").removeClass("clicked")
    // if (temp != "") {
    //     temp = this.dataset.id
    //     // console.log("new temp", temp);
    //     // var allquestions = $('.questions')
    //     // for(let q of allquestions){
    //     //   if($(q).data("id")==temp){
    //     //     console.log("equal")
    //     //    $(q).find(".radio-circle").addClass("white-radio")
    //     //    temp=""
    //     //    break;
    //     //   }
    //     //   else{
    //     //     $(q).find(".radio-circle").addClass("blue-radio")
    //     //   }
    //     // }
    // }
    // var allquestions = $('.questions')
    // for (let q of allquestions) {
    //     if ($(q).data("id") == temp) {
    //         console.log("equal")
    //         $(q).find(".radio-circle").addClass("blue-radio")
    //         $('.questions').addClass("white-radio")
    //         temp=""
    //     }
    //     // else {
    //     //     $(q).find(".radio-circle").addClass("blue-radio")
    //     // }
    // }

})
/***************end questions functionality***************/

/***************strat matching animation ***************/

const changeHeight = [
    { height: "100%" }
];
const changeHeightProps = {
    duration: 700,
    iterations: 1,
    fill: "forwards"
};
const heightZero = [
    { height: "0px" }
];
const heightZeroProps = {
    duration: 0,
    iterations: 1,
    fill: "forwards"
};
/***************end matching animation ***************/

/***************start answers functionality***************/

$('.answers').click(function () {
    console.log("q id", temp)
    $(".answers").addClass("clicked")
    $(".answers").removeClass("clicked-radio")
    console.log(this.dataset.ansId);
    if (temp === this.dataset.ansId) {
        var questions = $('.questions')
        for (let quest of questions) {
            var data1 = $(quest).attr("data-id")

            if (temp === data1) {
                $(quest).find("img").addClass("img-opacity")
                $(quest).find(".radio-circle").addClass("img-opacity")
                $(quest).addClass("clicked")
                //$(quest).find(".radio-circle").addClass("blue-radio")
                if (data1 == 1) {
                    $('#line1').addClass("show-line ")
                }
                if (data1 == 2) {
                    $('#line2').addClass("show-line ")

                }
                if (data1 == 3) {
                    $('#line3').addClass("show-line ")

                }
                if (data1 == 4) {
                    $('#line4').addClass("show-line ")

                }

            }

        }
        $(this).find(".radio-circle").addClass("img-opacity")
        $(this).find("h2").addClass("img-opacity")
        $(this).find(".radio-circle").addClass("blue-radio");
        $(this).find(".radio-circle").removeClass("white-radio");
        let myAudio = document.querySelector('#audio')
        myAudio.play()
        console.log("good boy")
        $(this).find(".right-icon").addClass("active")
        $(this).find(".wrong-icon").removeClass("active")
        $()
        temp = ""
    }
    else {
        console.log("bad")
        let myAudio2 = document.querySelector('#audio-wrong')
        myAudio2.play()
        $(this).find(".wrong-icon").addClass("active").animate({ opacity: "0" }, 1000)
        $(this).find(".right-icon").removeClass("active")
        $(".answers").addClass("clicked-radio")
        $(".answers").removeClass("clicked")
        $(this).find(".radio-circle").addClass("white-radio");
        $(this).find(".radio-circle").removeClass("blue-radio");
        // temp = ""
    }

})
/***************end answers functionality***************/


/***************start rset and show buttom animation ***************/
$('.reset').click(function () {
    temp = ""
    $(".radio-circle").removeClass("blue-radio")
    $(".wrong-icon").removeClass("active")
    $(".right-icon").removeClass("active")
    $("img").removeClass("img-opacity")
    $(".radio-circle").removeClass("img-opacity")
    $("h2").removeClass("img-opacity")
    $(".questions").addClass("clicked-radio")

    // let line = document.getElementById("svg")
    // line.animate(heightZero, heightZeroProps)

    $("line").removeClass("show-line")
    $(".questions").removeClass("img-opacity")
    $(".answers").removeClass("img-opacity")
})

$('.show').click(function () {

    // let line = document.getElementById("svg")
    // line.animate(changeHeight, changeHeightProps)

    $("line").addClass("show-line")
    $(".questions").addClass("img-opacity")
    $(".answers").addClass("img-opacity")
    $(".questions").addClass("clicked")
    $(".answers").find(".radio-circle").removeClass("blue-radio")
    $(".questions").find(".radio-circle").removeClass("blue-radio")
    $(".answers").find(".radio-circle").addClass("white-radio")
    $(".questions").find(".radio-circle").addClass("white-radio")
    $(".answers").find(".wrong-icon").removeClass("active")
    $(".answers").find(".right-icon").removeClass("active")
    $('.show').addClass("img-opacity")

})
/***************end rset and show buttom animation ***************/