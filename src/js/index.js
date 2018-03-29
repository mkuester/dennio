import ld from 'lodash';
import '../css/style.css';
import '../css/styles.css';
import '.././config.js';

import $ from 'jquery';

import icon_sc from '../img/sc.png';
import icon_yt from '../img/yt.png';
import icon_fb from '../img/fb.png';
import icon_mc from '../img/mc.png';
import icon_de from '../img/de.png';
import icon_en from '../img/en.png';
import printMe from './print.js';

let element = component(); // Store the element to re-render on print.js changes
//document.body.appendChild(element);

function component() {
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    setImages();
    setLabel('de')


    $("#fadediv").click(function(e){
        e.preventDefault();
        $('#div5').fadeOut('slow', function(){
            $('#div6').fadeIn('slow');
        });
    });
    $("#lang_en").click(function(e){
        e.preventDefault();
        setLabel('en');
    });
    $("#lang_de").click(function(e){
        e.preventDefault();
        setLabel('de');
    });
}
/* Setzt die Social Media/Lanuage Images fuer die Verlinkungen. */
function setImages() {
    // Set Soundcloud Image
    var scImg = document.createElement("img");
    scImg.setAttribute('src', icon_sc);
    scImg.setAttribute('alt', 'Cant load Image!');
    $("#soundcloud").append(scImg);

    // Set Youtube Image
    var ytImg = document.createElement("img");
    ytImg.setAttribute('src', icon_yt);
    ytImg.setAttribute('alt', 'Cant load Image!');
    $("#youtube").append(ytImg);

    // Set Facebook Image
    var fbImg = document.createElement("img");
    fbImg.setAttribute('src', icon_fb);
    fbImg.setAttribute('alt', 'Cant load Image!');
    $("#facebook").append(fbImg);

    // Set Mixcloud Image
    var mcImg = document.createElement("img");
    mcImg.setAttribute('src', icon_mc);
    mcImg.setAttribute('alt', 'Cant load Image!');
    $("#mixcloud").append(mcImg);


    /* Deutsche Flagge */
    var deImg = document.createElement("img");
    deImg.setAttribute('src', icon_de);
    deImg.setAttribute('alt', 'Cant load Image!');
    deImg.setAttribute('width', '10%');
    deImg.setAttribute('height', '10%');
    $("#lang_de").append(deImg);

    /* Englische Flagge*/
    var enImg = document.createElement("img");
    enImg.setAttribute('src', icon_en);
    enImg.setAttribute('alt', 'Cant load Image!');
    $("#lang_en").append(enImg);
}

function setLabel(lang) {
    if (lang == 'en') {
        $("#home").text(languages.en_menu_home);
        $("#bio").text(languages.en_menu_bio);
        $("#acts").text(languages.en_menu_acts);
        $("#music").text(languages.en_menu_music);
        $("#contact").text(languages.en_menu_contact);
        $("#mp").text(languages.en_footer_mp);
        $("#impressum").text(languages.en_footer_impressum);
    } else {
        $("#home").text(languages.de_menu_home);
        $("#bio").text(languages.de_menu_bio);
        $("#acts").text(languages.de_menu_acts);
        $("#music").text(languages.de_menu_music);
        $("#contact").text(languages.de_menu_contact);
        $("#mp").text(languages.de_footer_mp);
        $("#impressum").text(languages.de_footer_impressum);
    }
}

$(document).ready(function() {
    console.log("ready...");
    prepareMenuItem();
    console.log("ready!");
})

function prepareMenuItem() {
    console.log('prepareMenuItem start')
    $( "#clickme" ).click(function() {

        $( "#effect2" ).css("display",  "block");
        $( "#effect2" ).toggleClass( "newClass", 1000 );

        $( "#biodiv" ).toggle( "fold" );
        /* $( "#biodiv" ).show( "fold", options, 10 );*/

        /*'var newDiv = document.createElement("div");
        newDiv.innerHTML = ld.join(['Neues', ' PoPUp'], ' !');*/
    });
    console.log('prepareMenuItem end')
}

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}