import ld from 'lodash';
import '../css/style.css';
import '../css/styles.css';
//import icon_twitter from './img/tt.png';;
//import Icon from './img/tt.jpg';
//import data from '.././data/data.xml';
import printMe from './print.js';
import '.././config.js';
import $ from 'jquery';

let element = component(); // Store the element to re-render on print.js changes
//document.body.appendChild(element);

function component() {
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    var menu1 = languages.de_menu_home;
    $("#bio").text(menu1);


    //prepareContent();

    //return element;
}

function prepareContent() {
    var contentDiv = $('content');
    var children = contentDiv.getChildren();
    for (var i = 0; i < contentDiv.getChildren.size(); i++) {
        alert(i + '. ' + contentDiv[i]);
    }
}

$(document ).ready(function() {
    console.log("ready...");
    prepareMenuItem();
    console.log("ready!");
})

function prepareMenuItem() {
    $( "#clickme" ).click(function() {
        /* $("#toggle").css("display",  "block");
         $("#toggle").css("position",  "absolute");
         $("#toggle").css("cursor",  "pointer");
         /*$("#toggle").slideToggle("slow");*/
/*        $( ".toggler" ).css("display",  "block");*/
        $( "#effect2" ).css("display",  "block");
        $( "#effect2" ).toggleClass( "newClass", 1000 );

        $( "#biodiv" ).toggle( "fold" );


       /* $( "#biodiv" ).show( "fold", options, 10 );*/

        /*'var newDiv = document.createElement("div");
        newDiv.innerHTML = ld.join(['Neues', ' PoPUp'], ' !');*/

        return false;
    });
    $( "#bio" ).click(function() {
        $("#biodiv").text(languages.en_menu_home);
    });
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
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

function switchMenu() {
    var navi = document.getElementById('navigation');
}
