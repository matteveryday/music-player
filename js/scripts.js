

// Changes the background color of the page on HOVER
$('h1 .playlist-title').click(function () {
    
    var link = $(this)
    var overlay = link.data('overlay')
    
    
    $('.overlay-bg').removeClass('visible')
    $(overlay).addClass('visible')
    
    // Changes the text color of buttons to match the background
    var bgColor = $(overlay).css("background-color")
    $('.button').css("color", bgColor)
    
})

// Keeps the buttons white when hovering over Surprise Me playlist
$('#surprise-me').click(function (){

    $('.button').css("color", "white")
    
})


// Keep playlist title black when you click on one
$('h1 .playlist-title').click(function () {
    
    $('.playlist-title').removeClass('active')
    $(this).addClass('active')
    
})