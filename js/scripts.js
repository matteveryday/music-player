

// Changes the background color of the page
$('h1 .playlist-title').hover(function () {
    
    var link = $(this)
    var overlay = link.data('overlay')
    
    
    $('.overlay-bg').removeClass('visible')
    $(overlay).addClass('visible')
    
    // Changes the text color of buttons to match the background
    var bgColor = $(overlay).css("background-color")
    console.log(bgColor)
    
    $('.button').css("color", bgColor)
    
})

// Keeps the buttons white when hovering over Surprise Me playlist
$('#surprise-me').hover(function (){
    
    console.log("found it!")
    $('.button').css("color", "white")
    
})

