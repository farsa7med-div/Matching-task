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

/***************end scale functionality***************/


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
var temp = ""

$('.questions').click(function () {

    temp = this.dataset.id
    console.log(temp);
    $(this).find(".radio-circle").toggleClass("GFG");
    $(".answers").addClass("clicked-radio")
    $(".answers").removeClass("clicked")
    if (temp != "") {
        temp = this.dataset.id
        console.log("new temp",temp);
        // var allquestions = $('.questions')
        // for(let q of allquestions){
        //   if($(q).data("id")==temp){
        //     console.log("equal")
        //    $(q).find(".radio-circle").addClass("GFG")
        //    break;
        //   }
        //   else{
        //     $(q).find(".radio-circle").addClass("GFG2")
        //     continue;
        //   }
        // }
    }
})

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
                console.log(quest)
                $(quest).find("img").addClass("img-opacity")
                $(quest).find(".radio-circle").addClass("img-opacity")
                $(quest).addClass("clicked")
                //$(quest).find(".radio-circle").addClass("GFG")
            }
        }
        $(this).find(".radio-circle").addClass("img-opacity")
        $(this).find("h2").addClass("img-opacity")
        $(this).find(".radio-circle").addClass("GFG");
        $(this).find(".radio-circle").removeClass("GFG2");
        let myAudio = document.querySelector('#audio')
        myAudio.play()
        console.log("good boy")
        $(this).find(".right-icon").addClass("active")
        $(this).find(".wrong-icon").removeClass("active")
        $()
        temp = ""
    }
    else {
        //  $(this).find(".radio-circle").toggleClass("GFG");
        console.log("bad")
        let myAudio2 = document.querySelector('#audio-wrong')
        myAudio2.play()
        $(this).find(".wrong-icon").addClass("active").animate({ opacity: "0" }, 1000)
        $(this).find(".right-icon").removeClass("active")
        $(".answers").addClass("clicked-radio")
        $(".answers").removeClass("clicked")
        $(this).find(".radio-circle").addClass("GFG2");
        $(this).find(".radio-circle").removeClass("GFG");
        // temp = ""
    }

})
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
$('.footer-reply').click(function () {
    temp = ""
    $(".radio-circle").removeClass("GFG")
    $(".wrong-icon").removeClass("active")
    $(".right-icon").removeClass("active")
    $("img").removeClass("img-opacity")
    $(".radio-circle").removeClass("img-opacity")
    $("h2").removeClass("img-opacity")
    $(".questions").addClass("clicked-radio")
    // $(".lines").css("visibility","hidden")
    let line = document.getElementById("svg")

    line.animate(heightZero, heightZeroProps)
    $(".questions").removeClass("img-opacity")
    $(".answers").removeClass("img-opacity")
})

$('.footer-show').click(function () {
    // var questions = $('.questions')
    // var answers = $('.answers')
    // //var qi=$('.test').find(dataset.dataset.id)
    // for (let quest of questions) {
    //     var data1 = $(quest).data("id")
    //     for (let ans of answers) {
    //         var data2 = $(ans).attr("data-ans-id");
    //         if (data1 == data2) {
    //             console.log(`ques ${data1} equal  ${data2} `)
    //         }
    //     }

    // }
    // $(".lines").css("visibility","visible")
    let line = document.getElementById("svg")

    line.animate(changeHeight, changeHeightProps)
    $(".questions").addClass("img-opacity")
    $(".answers").addClass("img-opacity")
    $(".questions").addClass("clicked")


})