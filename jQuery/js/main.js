// ELEMENTS
const hello = $("#hello");

// The same as "DOMContentLoaded"
$(document).ready(function () {
    
});

function animateTop () {
    // jQuery animate elements
    hello.animate({top: 450});
}

function floatRight () {
    // jQuery apply css to elements
    hello.css({float: "right"});
}

// #######################################################################
/*** #9 ****/

const tweet = "<div style=\"margin: 20px 0; padding: 10px; background: #eee;\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae unde error accusamus eaque deserunt ipsum cupiditate eum enim, quas fugiat, nulla expedita velit necessitatibus eos commodi perspiciatis impedit quasi ab."

$("#tweets div").css({border: "1px solid red"});

// Addding & changing content

// Append
$("#tweets div").append("'APPENDED TEXT'");

// Prepend
$("#tweets div").prepend("'PREPENDED TEXT'");

// Before
$("#tweets div p").before("'BEFORE TEXT'");

// After
$("#tweets div p").after("'AFTER TEXT'");

// HTML - change content: html code
$("#tweets1 div").html(tweet);

// TEXT - change text content
$("#tweets2 div p").text("TEXT(): Lorem ipsum dolor sit amet consectetur.");

// #####################################################################
/*** 10 ***/

// Wrap & Unwrap elements

// wrap() - Wraps all matched elements individually
$("section").wrap("<h2>");

// wrapAll() - Wraps all elements combined with 1 single element
$("section").wrapAll("<span style=\"color: red\">");

// unwrap() - Unwraps all matched elements
$("section").unwrap(); // span
$("section").unwrap(); // h2

// #####################################################################
/*** 11 ***/

// Removing Content

// empty - Clears the element inner html === (innerHTML = "")
$("#tweets99").empty()

// remove - Removes the elem from the DOM
$("#tweets99").remove()

// #####################################################################
/*** 12 ***/

// Changing Attributes

// removeAttr() - Removes an attribute completely 
$("#tweets div").removeAttr("style");

// attr(<attr>) / attr(<attr>, <value>) - GET/SET an attribute from an element
// SET
$("#tweets div").attr("style", "border: 1px solid green");
// GET
$("#tweets div").attr("style");

// #####################################################################
/*** 13 ***/

// CSS
$("#hello").on("click", function() {
    // Object way - good when passing more than one
    $("#hello").css({
        color: "red",
        fontSize: "1.3rem",
        fontFamily: "Arial"
    });
    // Params ways - good for simple changes
    $("#hello").css("padding", "10px 20px");
});

// #####################################################################
/*** 14 ***/

// CSS Classes

// addClass - adds a class to an elem => elem.classList.remove(<class>)
$("#cssClasses button#hide").on("click", function () {
    $("#cssClasses p").addClass("hidden");
});

// removeClass - removes a class from an elem => elem.classList.add(<class>)
$("#cssClasses button#show").on("click", function () {
    $("#cssClasses p").removeClass("hidden");
});

// toggleClass - adds if it has NOT / remove if it has => elem.classList.toggle(<class>)
$("#cssClasses button#toggle").on("click", function () {
    $("#cssClasses p").toggleClass("hidden");
});

// #####################################################################
/*** 15 ***/

// Bind & Unbind Events

// off - unbinds an event to matched elem
$("#hello").off("click");

// on - binds an event to matched elem
$("#hello").on("click", function () {
    $("#hello").css("color", "blue");
});

// #####################################################################
/*** 16 ***/

// Event Helpers - Short hand method
$("#hello").click(function () {
    $("#hello").css("color", "blue");
});

// #####################################################################
/*** 17 ***/

// Document Ready & Windows Load

// document ready - When all the elements has been loaded
$(document).ready(function () {});
$(document).on("ready", function () {});

// window load - When everything on the window loads not only the elements
$(window).on("load", function () {});
// $(window).load(function () {});


// #####################################################################
/*** 18 ***/

// JQuery | Event Object

$("*").on("click", function (eventObject) {
    // console.log(eventObject.target);
    // console.log("The event type is " + eventObject.type);
    eventObject.stopPropagation(); // Stops Bubbling 
});



// #####################################################################
/*** 19 ***/

// JQuery animation
$("#tweets4").on("click", function () {
    $(this).animate(
        { 
            "height": "62px" 
        }, 
        2000,
        function() {
            $(this).css({background: "#000"});
        }
    ); // hide - good for mobile menu
});

// $("#tweets4").animate({"height": "100px"}, 2000);

// #####################################################################
/*** 20 ***/

// Fade in & out

// fade out (speed, callback)
$("section#tweets5 *").on("click", function() {
    $("#tweets5").fadeOut(1000, function () {
        $("#tweets5btn").fadeIn(0);
    });
});

// fade in (speed, callback)
$("#tweets5btn").on("click", function() {
    $("#tweets5btn").fadeOut(0);
    $("#tweets5").fadeIn(1000);
});

// fade to (speed, opacity, callback)
$("#tweets6 *").on("click", function () {
    $("#tweets6").fadeTo(1500, 0.3).fadeTo(2000, 1);
});

// fade toggle

// #####################################################################
/*** 21 ***/

// Hide & Show Elements

// Hide = .hide(speed, callback)

// Show = .show(speed, callback)

// Toggle = .toggle(speed, callback)


// #####################################################################
/*** 22 ***/

// Sliding Elements

// slideDown(); slideUp(); slideToggle();
$("#menu h3").on("click", function () {
    $("#menu ul").slideToggle(1500);
});