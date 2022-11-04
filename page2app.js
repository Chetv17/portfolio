

$(() => {

///////// CLICK FUNCTIONS /////////

const $openBtn = $('#openModal');
const $modal = $('#contactModal');
const $closeBtn = $('#close');



    const navigateHome = () => {
      alert('works!')
    }





    const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}









//////// INITIAL CONDITION WHERE BIO TEXT IS HIDDEN ////

$('.bio_text').hide();







//////// CLICK LISTENERS ////////

$('#headerClick').on('click', navigateHome);

$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);




////////// HOVER OVER LISTENERS /////////


///// BIO TEXT REVEAL ////
$('.bio').hover(function() {
      $('.bio_text').show('slow');
    }, function() {
      $('.bio_text').hide('slow');
    });

///BACKGROUND EFFECTS
$('.headerfg').hover(function() {
      $('.headerbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
      $('.headerbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.biofg').hover(function() {
      $('.biobg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
        $('.biobg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.footerfg').hover(function() {
      $('.footerbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
      $('.footerbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });


});
