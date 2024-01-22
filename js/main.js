let daysTime =document.getElementById("days")
let hoursTime =document.getElementById("hours")
let munitesTime =document.getElementById("munites")
let secondsTime =document.getElementById("seconds")
$(document).ready(function(){

    $('.open_sidebar').on('click', function(){
        $('aside').animate({width:'200px'},700)
    })
    $('#close-aside').on('click', function(){
        $('aside').animate({width:'0px'},700)
    })
    
    
    $('aside ul li a').on('click',function(e){
      let sectionID = $(e.target).attr('href')
      let sectionOffset = $(sectionID).offset().top
      $('html, body').animate ({scrollTop:sectionOffset},1000)
    })
    
    
    $('.duration .part p').on('click', function(e){
        let message =  $(e.target).parent().children('.message')
        let allMessage = $(e.target).parent().siblings().children('.message')
        allMessage.slideUp(500)
        message.slideToggle(500)
    })

    const partyTime = new Date("2024-07-15");
    const partyTimeMs = partyTime.getTime()
let theRemainingTimePeriod
    function calcTime(){
    const timeNow = new Date().getTime(); 
      theRemainingTimePeriod = partyTimeMs - timeNow
    const seconds = Math.floor(theRemainingTimePeriod % (1000 * 60) / 1000)
    const munites = Math.floor(theRemainingTimePeriod % (1000 * 60 * 60) / (1000 * 60))
    const hours =   Math.floor(theRemainingTimePeriod % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const days =    Math.floor((theRemainingTimePeriod / (1000 * 60 * 60 * 24)) * -1)

    daysTime.innerHTML = `${days} D`
    hoursTime.innerHTML = `${hours <= 9 ? "0" + hours : hours} H`
    munitesTime.innerHTML = `${munites <= 9 ? "0" + munites : munites} M`
    secondsTime.innerHTML = `${seconds <= 9 ? "0" + seconds  : seconds} S`
    setInterval(calcTime,1000)
    }
    calcTime()
    
    if(theRemainingTimePeriod <= 0){
        $('.details ul').css('display', 'none')
        $('.details').html('<h1 class="live">We are live</h1>')
        setInterval(calcTime,1000)
    }

let ratio = 100
$('.ratio').text(`${ratio}`)
$('#explane').on('input', function(e){

    let ratioNow = e.target.value.length
    let calcRatio = ratio - ratioNow

  $('.ratio').html(`${calcRatio < 0 ? "your available character finished":calcRatio}`)
  $('.range').css('width', `${calcRatio}%`)

  if(calcRatio < 0){
    $('.ratio').css('color',"red")
  } else{
    $('.ratio').css('color',"#780a10")
  }
})
})