var index = 0;

    var background1 = $('body').css('background-image', 'url("assets/images/img1.jpg")');
    var background2 = $('body').css('background-image', 'url("assets/images/img2.jpg")');
    var background3 = $('body').css('background-image', 'url("assets/images/img3.jpg")');
    var background4 = $('body').css('background-image', 'url("assets/images/img4.jpg")');
    // setTimeout(changeBackground, 5000);
    // $("#wrapper").append(image);
    $("body").fadeTo(3000, 0.7,changeBackground);


function changeBackground() {
    index++;
    var bgImages = ['url("assets/images/img2.jpg")', 'url("assets/images/img3.jpg")', 'url("assets/images/img4.jpg")']
    $('body').css('background-image', bgImages[index]);
    if (index === 2) {
        index = -1;
    }

}