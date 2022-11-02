$(() => {

$('.bio_text').hide();











////////// HOVER OVER LISTENERS /////////


///// BIO TEXT REVEAL ////
$('.bio').hover(function() {
      $('.bio_text').show('slow');
    }, function() {
      $('.bio_text').hide('slow');
    });

///BACKGROUND EFFECTS
$('.headerfg').hover(function() {
      $('.headerbg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
      $('.headerbg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.footerfg').hover(function() {
      $('.footerbg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
      $('.footerbg').css('background-color', 'rgb(73, 93, 78, .5)')
    });


});
