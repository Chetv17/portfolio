$(() => {


const cabinObjects = ['map to cabin'];

///////// CLICK FUNCTIONS /////////

const $openBtn = $('#openModal');
const $modal = $('#contactModal');
const $closeBtn = $('#close');


const $openCabinCarousel = $('#openCabinCarousel');
const $cabinCarousel = $('#cabinCarousel');
const $closeCabinCarousel = $('#closeCabinCarousel');

let numberOfImages = $('.cabin_images').children().length - 1;
let currentImg = 0;



    const navigateHome = () => {
      alert('works!')
    }





    const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

const openCabinCarousel = () => {
$('.door').hide();
$cabinCarousel.css('display', 'block');
}

const closeCabinCarousel = () => {
$('.door').show();
$cabinCarousel.css('display', 'none');
}

const openDrawer = () => {
  $('#potion').css('display', 'block');
}

const addPotion = () => {
  $
}



//////// INITIAL CONDITION WHERE BIO TEXT IS HIDDEN ////

$('.bio_text').hide();



///////// CABIN GAME ///////////////

////// arrow buttons to scroll photo carousel ///

$('#previousbtn').on('click', () => {
    $('.cabin_images').children().eq(currentImg).css('display', 'none');
    if (currentImg > 0) {
      currentImg--
    } else {
      currentImg = numberOfImages;
    }
   $('.cabin_images').children().eq(currentImg).css('display', 'block');

})

$('#nextbtn').on('click', () => {
    $('.cabin_images').children().eq(currentImg).css('display', 'none');
    if (currentImg < numberOfImages) {
      currentImg++
    } else {
      currentImg = 0;
    }
   $('.cabin_images').children().eq(currentImg).css('display', 'block');

})

///// use arrow buttons to make secrets appear in the cabin //////

//previous

///drawer
$('#previousbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 2) {
    $('#drawer').css('display', 'block');
    } else {
      $('#drawer').css('display', 'none');
    }
})

$('#nextbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 2) {
    $('#drawer').css('display', 'block');
    } else {
      $('#drawer').css('display', 'none');
    }
})

/// fireplace

$('#previousbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 0) {
    $('#fireplace').css('display', 'block');
    } else {
      $('#fireplace').css('display', 'none');
    }
})

$('#nextbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 0) {
    $('#fireplace').css('display', 'block');
    } else {
     $('#fireplace').css('display', 'none');
    }
})




//////// CLICK LISTENERS ////////

$('#headerClick').on('click', navigateHome);
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);
$('#doorClick').on('click', openCabinCarousel);
$closeCabinCarousel.on('click', closeCabinCarousel);
$('#drawer').on('click', openDrawer);

$('#potion').on('click', addPotion);


////////// HOVER OVER LISTENERS /////////



///BACKGROUND EFFECTS
$('.headerfg').hover(function() {
      $('.headerbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
      $('.headerbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.footerfg').hover(function() {
      $('.footerbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
      $('.footerbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

    $('.cabinCarouselfg').hover(function() {
           $('.cabinCarouselbg').css('background-color', 'rgb(225, 225, 225, .8)');
        }, function() {
           $('.cabinCarouselbg').css('background-color', 'rgb(73, 93, 78, .1)')
        });

});
