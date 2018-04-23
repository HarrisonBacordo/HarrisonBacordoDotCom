var skillsMarg = [];    //holds default margin for skill bars
var skillsRGB = [];     //holds default RGB value for skill bars
var skillsOpen = [];    //holds boolean value for if each skill bar is open
var skillsHeight = $("#java").css("height");    //takes sample of skill bar to get height

//initializes skills arrays
$(".skills-item").each(function(index) {
    skillsMarg[index] = $(this).css("margin-right");
    skillsRGB[index] = $(this).css("backgroundColor");
    skillsOpen[index] = false;
});

// Changes skill bar to gray when it is hovered over. Changes it back to its
// original color after hover
$(".skills-item").hover(function() {
    var skillNum = matchSkill(this);
  $( this ).animate({
      backgroundColor: "rgb(200, 200, 200)",
      color: "rgb(20, 20, 20)"
  }, 150);
}, function() {
    var skillNum = matchSkill(this);
    // find appropriate skill bar in skillsRGB array
    $( this ).animate({
        backgroundColor: skillsRGB[skillNum],
        color: "white"
    }, 150);
});

// "opens" the skill bar to show more info about it
// TODO: animation is broken on first click; expands height immediately, then opens width.
$(".skills-item").on('click', function() {
    var skillNum = matchSkill(this);
    // skill is closed
    if(!skillsOpen[skillNum]) {
        // default background, widen the skill bar
        if ($(window).width() < 960) {
            $(this).animate({
                marginRight: '0',
                backgroundColor: skillsRGB[skillNum],
                color: "white"
            });
        } else {
            $(this).animate({
                marginRight: '40%',
                backgroundColor: skillsRGB[skillNum],
                color: "white"
            });
        }
        // expand the skill bar downward
        $(this).animate({height: '27vh'}).find('p').fadeToggle(1500);
    // skill is open
    } else {
        $(this).find('p').fadeToggle();
        // default skill bar height
        $(this).animate({height: skillsHeight});
        // default skill bar width
        $(this).animate({marginRight: String(skillsMarg[skillNum])});
    }

    // reverse skillsOpen boolean
    skillsOpen[skillNum] = !skillsOpen[skillNum];
});

// matches passed in skill to its index in the arrays
function matchSkill(skill) {
    var toReturn;
    $(".skills-item").each(function(index) {
        if(this == skill) {
            toReturn = index;
        }
    });
    console.log(toReturn);
    return toReturn;
}

// whitens project imgs; visibly makes them look clickable
$("#projects img").hover(function() {
    console.log("SAME");
    $(this).animate({opacity: "0.3"}, 200)
}, function() {
    $(this).animate({opacity: "1"}, 200)
});

// black background for hamburger if hovered over
$("#hamburger").hover(function() {
    $(this).animate({backgroundColor: "rgba(0, 0, 0, 0.5)"}, 200)
}, function() {
    $(this).animate({backgroundColor: "rgba(100, 100, 100, 0)"}, 200)
});

// darkens hamburger items when hovered over
$("#hamburger-menu li").hover(function() {
    $(this).animate({backgroundColor: "rgba(28, 31, 35, 0.7)"}, 200)
}, function() {
    $(this).animate({backgroundColor: "#2c3238"}, 200)
});

$("#hamburger").on('click', function() {
    $("#hamburger-menu").animate({width:'toggle'},350);
    $("#main-page").animate({backgroundColor: 'rgba(0,0,0,0.5)'});
});

// smooth scroll from hamburger menu to selected section of the page
$("#nav-menu-main li").on('click', function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    if ($(window).width() < 960) {
        $("#hamburger-menu").animate({width:'toggle'},350);
        $("#main-page").animate({backgroundColor: 'rgba(0,0,0,0)'});
    }
});

// Changes background colour of hamburger menu on hover (to show it is selected)
$("#hamburger-menu h1").hover(function() {
    $(this).animate({backgroundColor: "#4374c1"}, 200)
}, function() {
    $(this).animate({backgroundColor: "#5491F2"}, 200)
});

// opens up navigation menu on hamburger click (for mobile only)
$("#hamburger-menu h1").on('click', function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    if ($(window).width() < 960) {
        $("#hamburger-menu").animate({width:'toggle'},350);
        $("#main-page").animate({backgroundColor: 'rgba(0,0,0,0)'});
    }
})
