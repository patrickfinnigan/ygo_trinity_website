var unbannedList = [
    {cardName: "Danger! Bigfoot! (Was Co-Forbidden)", cardType: "banlist-effect"},
    {cardName: "Witchcrafter Golem Aruru (Was Co-Forbidden)", cardType: "banlist-effect"},
    {cardName: "Salamangreat Falco (Was Forbidden)", cardType: "banlist-effect"},
    {cardName: "Fortune Lady Every (Was Co-Forbidden)", cardType: "banlist-synchro"},
    {cardName: "Toadally Awesome (Was Co-Forbidden)", cardType: "banlist-xyz"},
    {cardName: "Evil Eye Domain – Pareidolia (Was Forbidden)", cardType: "banlist-spell"}
]

for (let i = 0; i < unbannedList.length; i++) {
    console.log(unbannedList[i]);
    $(unbannedCards).append("<li class='list-group-item banlist " + unbannedList[i].cardType + "'>" + unbannedList[i].cardName + "</li>")
}

$(window).scroll(function () {
    var distanceFromTop = $(this).scrollTop();
    if (distanceFromTop >= $('.img-fluid').height()) {
        var divCardMarginTop = $(".card").css("margin-top");

        $('.sticky').addClass('fixed');
        $('.img-fluid').css('margin-bottom', $('.navbar').height(divCardMarginTop) + 'px');
    } else {
        $('.sticky').removeClass('fixed');
        $('.img-fluid').css('margin-bottom', '0px');
    }
});