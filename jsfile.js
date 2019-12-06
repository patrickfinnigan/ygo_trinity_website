//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Sticky Navbar
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
$(window).scroll(function () {
    var distanceFromTop = $(this).scrollTop();
    if (distanceFromTop >= $('.img-fluid').height()) {
        var divCardMarginTop = $(".card").css("margin-top");

        $('.sticky').addClass('fixed');
        $('.banner').css('margin-bottom', $('.navbar').marginTop(divCardMarginTop) + 'px');
    } else {
        $('.sticky').removeClass('fixed');
        $('.img-fluid').css('margin-bottom', '0px');
    }
});

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Unbanned Object List
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var unbannedList = [{
        cardName: "Danger! Bigfoot! (Was Co-Forbidden)",
        cardType: "banlist-effect"
    },
    {
        cardName: "Witchcrafter Golem Aruru (Was Co-Forbidden)",
        cardType: "banlist-effect"
    },
    {
        cardName: "Salamangreat Falco (Was Forbidden)",
        cardType: "banlist-effect"
    },
    {
        cardName: "Fortune Lady Every (Was Co-Forbidden)",
        cardType: "banlist-synchro"
    },
    {
        cardName: "Toadally Awesome (Was Co-Forbidden)",
        cardType: "banlist-xyz"
    },
    {
        cardName: "Evil Eye Domain – Pareidolia (Was Forbidden)",
        cardType: "banlist-spell"
    }
]

for (let i = 0; i < unbannedList.length; i++) {
    console.log(unbannedList[i]);
    $(unbannedCards).append("<li class='list-group-item banlist " + unbannedList[i].cardType + "'>" + unbannedList[i].cardName + "</li>")
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Semi-Forbidden Object List
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var semiLimitedList = [{
        cardName: "Beatraptor",
        cardType: "banlist-effect"
    }, 
    {
        cardName: "Black Luster Soldier – Envoy of the Beginning",
        cardType: "banlist-effect"
    },
    {
        cardName: "Chaos Dragon Levianeer",
        cardType: "banlist-effect"
    },
    {
        cardName: "Cyber Jar",
        cardType: "banlist-effect"
    },
    {
        cardName: "Eater of Millions",
        cardType: "banlist-effect"
    },
    {
        cardName: "Fossil Dyna Pachycephalo",
        cardType: "banlist-effect"
    },
    {
        cardName: "Morphing Jar",
        cardType: "banlist-effect"
    },
    {
        cardName: "Red-Eyes Darkness Metal Dragon",
        cardType: "banlist-effect"
    },
    {
        cardName: "Sky Striker Ace – Raye",
        cardType: "banlist-effect"
    },
    {
        cardName: "Yata-Garasu",
        cardType: "banlist-effect"
    },
    {
        cardName: "Performapal Skullcrobat Joker",
        cardType: "banlist-effect"
    },
    {
        cardName: "ABC-Dragon Buster (Was Semi-Forbidden)",
        cardType: "banlist-fusion"
    },
    {
        cardName: "Denglong, First of the Yang Zing",
        cardType: "banlist-synchro"
    },
    {
        cardName: "Draco Berserker of the Tenyi (New)",
        cardType: "banlist-synchro"
    },
    {
        cardName: "Draco Masters of the Tenyi (New)",
        cardType: "banlist-link"
    },
    {
        cardName: "Galaxy Satellite Dragon (New)",
        cardType: "banlist-link"
    },
    {
        cardName: "I:P Masquerena (New)",
        cardType: "banlist-link"
    },
    {
        cardName: "Salamangreat Pyro Phoenix (New)",
        cardType: "banlist-link"
    },
    {
        cardName: "Traptrix Sera",
        cardType: "banlist-link"
    },
    {
        cardName: "World Gears of Theurlogical Demiurgy",
        cardType: "banlist-link"
    },
    {
        cardName: "Card of Demise",
        cardType: "banlist-spell"
    },
    {
        cardName: "Change of Heart (Was Semi-Forbidden)",
        cardType: "banlist-spell"
    },
    {
        cardName: "Dark Hole",
        cardType: "banlist-spell"
    },
    {
        cardName: "Giant Ballpark",
        cardType: "banlist-spell"
    },
    {
        cardName: "Giant Trunade",
        cardType: "banlist-spell"
    },
    {
        cardName: "Interrupted Kaiju Slumber",
        cardType: "banlist-spell"
    },
    {
        cardName: "Monster Reborn",
        cardType: "banlist-spell"
    },
    {
        cardName: "Pot of Extravagance",
        cardType: "banlist-spell"
    },
    {
        cardName: "Shaddoll Fusion",
        cardType: "banlist-spell"
    },
    {
        cardName: "Slash Draw",
        cardType: "banlist-spell"
    },
    {
        cardName: "SPYRAL Resort (Was Semi-Forbidden)",
        cardType: "banlist-spell"
    },
    {
        cardName: "Terraforming",
        cardType: "banlist-spell"
    },
    {
        cardName: "The Melody of Awakening Dragon",
        cardType: "banlist-spell"
    },
    {
        cardName: "Vessel for the Dragon Cycle (New)",
        cardType: "banlist-spell"
    },
    {
        cardName: "Wavering Eyes",
        cardType: "banlist-spell"
    },
    {
        cardName: "Crackdown",
        cardType: "banlist-trap"
    },
    {
        cardName: "Heavy Storm Duster",
        cardType: "banlist-trap"
    },
    {
        cardName: "Lost Wind",
        cardType: "banlist-trap"
    },
    {
        cardName: "Solemn Judgment",
        cardType: "banlist-trap"
    },
    {
        cardName: "Solemn Strike",
        cardType: "banlist-trap"
    },
    {
        cardName: "Solemn Warning",
        cardType: "banlist-trap"
    },
    {
        cardName: "Shiranui Style Swallow’s Slash",
        cardType: "banlist-trap"
    },
    {
        cardName: "Subterror Succession",
        cardType: "banlist-trap"
    }
]

for (let i = 0; i < semiLimitedList.length; i++) {
    console.log(semiLimitedList[i]);
    $(semiForbiddenCards).append("<li class='list-group-item banlist " + semiLimitedList[i].cardType + "'>" + semiLimitedList[i].cardName + "</li>")
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Co-Forbidden Object List
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var coForbiddenList = [{
    cardName: "Effect",
    cardType: "banlist-effect"
},
{
    cardName: "Fusion",
    cardType: "banlist-fusion"
},
{
    cardName: "Synchro",
    cardType: "banlist-synchro"
},
{
    cardName: "XYZ",
    cardType: "banlist-xyz"
},
{
    cardName: "Spell",
    cardType: "banlist-spell"
},
{
    cardName: "Trap",
    cardType: "banlist-trap"
}
]

for (let i = 0; i < coForbiddenList.length; i++) {
console.log(coForbiddenList[i]);
$(coForbiddenCards).append("<li class='list-group-item banlist " + coForbiddenList[i].cardType + "'>" + coForbiddenList[i].cardName + "</li>")
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Forbidden Object List
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var forbiddenList = [{
    cardName: "Effect",
    cardType: "banlist-effect"
},
{
    cardName: "Fusion",
    cardType: "banlist-fusion"
},
{
    cardName: "Synchro",
    cardType: "banlist-synchro"
},
{
    cardName: "XYZ",
    cardType: "banlist-xyz"
},
{
    cardName: "Spell",
    cardType: "banlist-spell"
},
{
    cardName: "Trap",
    cardType: "banlist-trap"
}
]

for (let i = 0; i < forbiddenList.length; i++) {
console.log(forbiddenList[i]);
$(forbiddenCards).append("<li class='list-group-item banlist " + forbiddenList[i].cardType + "'>" + forbiddenList[i].cardName + "</li>")
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Unbound Object List
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var unboundList = [{
    cardName: "Effect",
    cardType: "banlist-effect"
},
{
    cardName: "Fusion",
    cardType: "banlist-fusion"
},
{
    cardName: "Synchro",
    cardType: "banlist-synchro"
},
{
    cardName: "XYZ",
    cardType: "banlist-xyz"
},
{
    cardName: "Spell",
    cardType: "banlist-spell"
},
{
    cardName: "Trap",
    cardType: "banlist-trap"
}
]

for (let i = 0; i < unboundList.length; i++) {
console.log(unboundList[i]);
$(unboundCards).append("<li class='list-group-item banlist " + unboundList[i].cardType + "'>" + unboundList[i].cardName + "</li>")
}