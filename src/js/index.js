import ld from 'lodash';
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

import '../css/style.scss';
import '../css/navi.scss';

import '.././config.js';

import $ from 'jquery';

import icon_sc from '../img/social_media/sc.png';
import icon_yt from '../img/social_media/yt.png';
import icon_fb from '../img/social_media/fb.png';
import icon_mc from '../img/social_media/mc.png';

import icon_de from '../img/languages/de.png';
import icon_en from '../img/languages/en.png';
import icon_es from '../img/languages/es.png';

import '../font/dennioFont.scss';


init();

function init() {
    setImages();
    setLabel('de');
    prepareClickEvents();
    prepareMenuItem(21, 4, 1);



    $('#div11').click(function(e){
        $('#div12').fadeOut('fast', function(){
            $('#div12').replace('<div id="newDiv"></div>').fadeIn('fast');
        });
    });
}

$(document).ready(function() {
    console.log("ready...");
    console.log("ready!");
})

function prepareClickEvents() {
    /* Test */
    $("#fadediv").click(function(e){
        e.preventDefault();
        $('#div5').fadeOut('slow', function(){
            $('#div6').fadeIn('slow');
        });
    });

    $('')

    /* Language Flags */
    $("#lang_en").click(function(e){
        setLabel('en');
    });
    $("#lang_de").click(function(e){
        setLabel('de');
    });
    $("#lang_es").click(function(e){
        setLabel('es');
    });
}

function prepareMenuItem(openMenuItemPos, newDivW, newDivH) {
    console.log('prepareMenuItem start');

    /* 1 Versuch die Biographie in das Raster einzublenden */
    /*$("#div" + openMenuItemPos).click(function() {
        $("#div22").toggle("slide");
        $("#div23").toggle("slide");
        $("#div31").toggle("slide");
        $("#div32").toggle("slide");
        $("#div41").toggle("slide");
        $("#div42").toggle("slide");
        $("#div51").toggle("slide");
        $("#div52").toggle("slide");

        var newEle = document.createElement('div');
        newEle.css("position", "absolute");
        newEle.css("display", "block");
        newEle.css("background-color", "red");
        newEle.setAttribute("id", "newBio")
        $("#content").append(newEle);
        $("#newBio").toggle("slide");
    });*/

    /* 2 Versuch die Biographie in das Raster einzublenden */
    $('.bio').click(function() {
        $("#div21").fadeToggle('slow');
        $("#div22").fadeToggle('slow');
        $("#div23").fadeToggle('slow');
        $("#div31").fadeToggle('slow');
        $("#div32").fadeToggle('slow');
        $("#div33").fadeToggle('slow');
        $("#div41").fadeToggle('slow');
        $("#div42").fadeToggle('slow');
        $("#div43").fadeToggle('slow');
        $("#div51").fadeToggle('slow');
        $("#div52").fadeToggle('slow');
        $("#div53").fadeToggle('slow');
    });
    $('.music').click(function() {
        $("#div23").fadeToggle('slow');
        $("#div24").fadeToggle('slow');
        $("#div25").fadeToggle('slow');
        $("#div33").fadeToggle('slow');
        $("#div34").fadeToggle('slow');
        $("#div35").fadeToggle('slow');
        $("#div43").fadeToggle('slow');
        $("#div44").fadeToggle('slow');
        $("#div45").fadeToggle('slow');
        $("#div53").fadeToggle('slow');
        $("#div54").fadeToggle('slow');
        $("#div55").fadeToggle('slow');
    });
    $('.acts').click(function() {
        $("#div22").fadeToggle('slow');
        $("#div23").fadeToggle('slow');
        $("#div24").fadeToggle('slow');
        $("#div32").fadeToggle('slow');
        $("#div33").fadeToggle('slow');
        $("#div34").fadeToggle('slow');
        $("#div42").fadeToggle('slow');
        $("#div43").fadeToggle('slow');
        $("#div44").fadeToggle('slow');
        $("#div52").fadeToggle('slow');
        $("#div53").fadeToggle('slow');
        $("#div54").fadeToggle('slow');
    });
    $('.contact').click(function() {
        $('#div43').css("display", "none");
        $('#div44').css("display", "none");
        $('#div45').css("display", "none");
        $('#div53').css("display", "none");
        $('#div54').css("display", "none");
        $('#div55').css("display", "none");
        $('#div4X345').stop(true, true).fadeIn('fast');
        $('#div5X345').stop(true, true).fadeIn('fast');
    });
    console.log('prepareMenuItem end')
}

$(window).click(function(ev) {
    var targetId = $(ev.target).attr('id');


    if((targetId != "div42") && (targetId != "div4X345") && (targetId != "div5X345") && (targetId != "null") && (typeof targetId != "undefined")) {
        $('#div4X345').css("display", "none");
        $('#div5X345').css("display", "none");

        $('#div43').stop(true, true).fadeIn('fast');
        $('#div44').stop(true, true).fadeIn('fast');
        $('#div45').stop(true, true).fadeIn('fast');
        $('#div53').stop(true, true).fadeIn('fast');
        $('#div54').stop(true, true).fadeIn('fast');
        $('#div55').stop(true, true).fadeIn('fast');



    }
});



/* Setzt die Social Media/Lanuage Images fuer die Verlinkungen. */
function setImages() {
    /* Social Media */
        /* Set Soundcloud Image */
        var scImg = document.createElement("img");
        scImg.setAttribute('src', icon_sc);
        scImg.setAttribute('alt', 'Cant load Image!');
        $("#soundcloud").append(scImg);

        /* Set Youtube Image */
        var ytImg = document.createElement("img");
        ytImg.setAttribute('src', icon_yt);
        ytImg.setAttribute('alt', 'Cant load Image!');
        $("#youtube").append(ytImg);

        /* Set Facebook Image */
        var fbImg = document.createElement("img");
        fbImg.setAttribute('src', icon_fb);
        fbImg.setAttribute('alt', 'Cant load Image!');
        $("#facebook").append(fbImg);

        /* Set Mixcloud Image */
        var mcImg = document.createElement("img");
        mcImg.setAttribute('src', icon_mc);
        mcImg.setAttribute('alt', 'Cant load Image!');
        $("#mixcloud").append(mcImg);


    /* Flaggen */
        /* Deutsche Flagge */
        var deImg = document.createElement("img");
        deImg.setAttribute('src', icon_de);
        deImg.setAttribute('alt', 'Cant load Image!');
        $("#lang_de").append(deImg);

        /* Englische Flagge*/
        var enImg = document.createElement("img");
        enImg.setAttribute('src', icon_en);
        enImg.setAttribute('alt', 'Cant load Image!');
        $("#lang_en").append(enImg);

        /* Spanische Flagge*/
        var esImg = document.createElement("img");
        esImg.setAttribute('src', icon_es);
        esImg.setAttribute('alt', 'Cant load Image!');
        $("#lang_es").append(esImg);
}

/* Setzt die einzelnen Label entsprechend der gewaehlten Sprache. */
function setLabel(lang) {
    /* Englisch */
    if (lang == 'en') {
        $("#home").text(languages.en_menu_home);
        $(".bio").text(languages.en_menu_bio);
        $(".acts").text(languages.en_menu_acts);
        $(".music").text(languages.en_menu_music);
        $(".contact").text(languages.en_menu_contact);
        $("#mp").text(languages.en_footer_mp);
        $("#impressum").text(languages.en_footer_impressum);
    } else if (lang == 'es') {/* Spanisch */
        $("#home").text(languages.es_menu_home);
        $(".bio").text(languages.es_menu_bio);
        $(".acts").text(languages.es_menu_acts);
        $(".music").text(languages.es_menu_music);
        $(".contact").text(languages.es_menu_contact);
        $("#mp").text(languages.es_footer_mp);
        $("#impressum").text(languages.es_footer_impressum);
    } else {/* Deutsch */
        $("#home").text(languages.de_menu_home);
        $(".bio").text(languages.de_menu_bio);
        $(".acts").text(languages.de_menu_acts);
        $(".music").text(languages.de_menu_music);
        $(".contact").text(languages.de_menu_contact);
        $("#mp").text(languages.de_footer_mp);
        $("#impressum").text(languages.de_footer_impressum);
    }
}