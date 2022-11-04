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






//////// CLICK LISTENERS ////////

$('#headerClick').on('click', navigateHome);

$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);




////////// HOVER OVER LISTENERS /////////


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
