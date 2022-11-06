$(() => {


const cabinObjects = ['map to cabin'];

///////// CLICK FUNCTIONS /////////


////// contact modal
const $openBtn = $('#openModal');
const $modal = $('#contactModal');
const $closeBtn = $('#close');

//////// cabin game
const $openCabinCarousel = $('#openCabinCarousel');
const $cabinCarousel = $('#cabinCarousel');
const $closeCabinCarousel = $('#closeCabinCarousel');

let numberOfImages = $('.cabin_images').children().length - 1;
let currentImg = 0;


/////// CONTACT MODAL
const openModal = () => {
$modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}

///////// CABIN GAME ///////////////

const openCabinCarousel = () => {
$('.door').remove();
$cabinCarousel.css('display', 'block');
$('.storytext').text('have you been here before?').css('display', 'block');
}

const closeCabinCarousel = () => {
$('.door').show();
$cabinCarousel.css('display', 'none');
}

const openDrawer = () => {
  $('#contents').css('display', 'block');
  $('.storytext').text('a small vial').css('display', 'block');
}

const addPotion = () => {
  cabinObjects.push('potion');
  $('#potion').hide(2000);
}

const revealOrb = () => {
  cabinObjects.push('dizzy');
  $('#blueOrb').show(1000);
  $('.storytext').text('a blue orb... you hear a noise upstairs...').css('display', 'block');

}

const revealSkeleton = () => {
  $('#skel').css('display', 'block');
  $('#skeleton').show(3000);
  $('.storytext').text('.................').css('display', 'block');
  $('#previousbtn').hide();
  $('#nextbtn').hide();
}

//////// INITIAL CONDITION WHERE BIO TEXT IS HIDDEN ////

$('.bio_text').hide();
$('#blueOrb').hide();
$('#skeleton').hide();

////// click function to make arrow buttons scroll images ///

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

///// click functions that let arrow buttons make text/objects appear in game


///drawer appears in kitchen
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

/// fireplace appears in livingroom

$('#previousbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 0 && cabinObjects.includes('potion') === true) {
    $('#fireplace').css('display', 'block');
    $('.storytext').text('throw the vial in the fireplace').css('display', 'block');
    } else {
      $('#fireplace').css('display', 'none');
      $('.storytext').text('there is a presence...').css('display', 'block');

    }
})

$('#nextbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 0 && cabinObjects.includes('potion') === true) {
    $('#fireplace').css('display', 'block');
    $('.storytext').text('throw the vial in the fireplace').css('display', 'block');
    } else {
     $('#fireplace').css('display', 'none');
     $('.storytext').text('there is no noise...').css('display', 'block');
    }
})

//// blue orb appears in fireplace

$('#previousbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 0 && cabinObjects.includes('dizzy') === true) {
    $('#blueOrb').show();
    } else {
      $('#blueOrb').hide();

    }
})

$('#nextbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 0 && cabinObjects.includes('dizzy') === true) {
    $('#blueOrb').show();
    } else {
      $('#blueOrb').hide();

    }
})

//// lamp appears in bedroom

$('#previousbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 1 && cabinObjects.includes('dizzy') === true) {
    $('.storytext').text('you are drawn to the lamp...').css('display', 'block');
    $('#lamp').css('display', 'block');
    } else {
      $('#lamp').css('display', 'none');

    }
})

$('#nextbtn').on('click', () => {
  $('.cabin_images').children().eq(currentImg);
  if (currentImg === 1 && cabinObjects.includes('dizzy') === true) {
    $('#lamp').css('display', 'block');
    $('.storytext').text('you are drawn to the lamp...').css('display', 'block');
    } else {
     $('#lamp').css('display', 'none');

    }
})


//////// CLICK LISTENERS ////////

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);
$('#doorClick').on('click', openCabinCarousel);
$closeCabinCarousel.on('click', closeCabinCarousel);
$('#drawer').on('click', openDrawer);
$('#contents').on('click', addPotion);
$('#fireplace').on('click', revealOrb);
$('#lamp').on('click', revealSkeleton);

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

$('.cabinCarouselfg').hover(function() {
      $('.storytext').css('display', 'block');
    }, function() {
      $('.storytext').css('display', 'none')
    });

});
