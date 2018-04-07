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

import '../font/darkenstone.scss';


$(document).ready(function() {
    console.log("ready...");
})

init();

function init() {
    setImages();
    setLabel('de')
    prepareClickEvents();
}

/* Setzt die Standart Click Events */
function prepareClickEvents() {
    /* Menu Click Events */
    $('#home').click(function(e){
        $( "#content" ).load( "home.html #main" );
    });
    $('#acts').click(function(e){
        $( "#content" ).load( "acts.html #main" );
    });
    $('#bio').click(function(e){
        $( "#content" ).load( "bio.html #main" );
    });
    $('#music').click(function(e){
        $( "#content" ).load( "music.html #main" );
    });
    $('#contact').click(function(e){
        $( "#content" ).load( "contact.html #main" );
    });


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
        $("#home").text(languages.en.menu_home);
        $(".bio").text(languages.en.menu_bio);
        $(".acts").text(languages.en.menu_acts);
        $(".music").text(languages.en.menu_music);
        $(".contact").text(languages.en.menu_contact);
        $("#mp").text(languages.en.footer_mp);
        $("#impressum").text(languages.en.footer_impressum);
    } else if (lang == 'es') {/* Spanisch */
        $("#home").text(languages.es.menu_home);
        $(".bio").text(languages.es.menu_bio);
        $(".acts").text(languages.es.menu_acts);
        $(".music").text(languages.es.menu_music);
        $(".contact").text(languages.es.menu_contact);
        $("#mp").text(languages.es.footer_mp);
        $("#impressum").text(languages.es.footer_impressum);
    } else {/* Deutsch */
        $("#home").text(languages.de.menu_home);
        $(".bio").text(languages.de.menu_bio);
        $(".acts").text(languages.de.menu_acts);
        $(".music").text(languages.de.menu_music);
        $(".contact").text(languages.de.menu_contact);
        $("#mp").text(languages.de.footer_mp);
        $("#impressum").text(languages.de.footer_impressum);
    }
}