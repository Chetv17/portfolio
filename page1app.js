
$(() => {

  const $openBtn = $('#openModal');
  const $modal = $('#contactModal');
  const $closeBtn = $('#close');

  const $openCarousel = $('#openCarousel');
  const $carousel = $('#carouselModal');
  const $closeCarousel = $('#closeCarousel');

  let numberOfImages = $('.images').children().length - 1;
  let currentImg = 0;











///////// CLICK FUNCTIONS /////////

  const navigateHome = () => {
    alert('works!')
  }
  const navigateAboutMe = () => {
    alert('works!')
  }
  const navigateResume = () => {
    alert('works!')
  }
  const navigateProjects = () => {
    alert('works!')
  }

  ////// CAROUSEL MODAL ///////

  $('#previousbtn').on('click', () => {
      $('.images').children().eq(currentImg).css('display', 'none');
      if (currentImg > 0) {
        currentImg--
      } else {
        currentImg = numberOfImages;
      }
     $('.images').children().eq(currentImg).css('display', 'block');
  })

  $('#nextbtn').on('click', () => {
      $('.images').children().eq(currentImg).css('display', 'none');
      if (currentImg < numberOfImages) {
        currentImg++
      } else {
        currentImg = 0;
      }
     $('.images').children().eq(currentImg).css('display', 'block');
  })

///////////////

const openModal = () => {
$modal.css('display', 'block');
}

const closeModal = () => {
$modal.css('display', 'none');
}

const openCarousel = () => {
$carousel.css('display', 'block');
}

const closeCarousel = () => {
$carousel.css('display', 'none');
}







//////// CLICK LISTENERS ////////

$('#headerClick').on('click', navigateHome);
$('#aboutMeClick').on('click', navigateAboutMe);
$('#resumeClick').on('click', navigateResume);
$('#projectsClick').on('click', navigateProjects);
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);
$openCarousel.on('click', openCarousel);
$closeCarousel.on('click', closeCarousel);

///////// HOVER-OVER LISTENERS //////////

$('.headerfg').hover(function() {
      $('.headerbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
      $('.headerbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.linksfg').hover(function() {
       $('.linksbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
       $('.linksbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.carouselfg').hover(function() {
       $('.carouselbg').css('background-color', 'rgb(225, 225, 225, .8)');
    }, function() {
       $('.carouselbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.link_1_fg').hover(function() {
       $('.link_1_bg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
       $('.link_1_bg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.link_2_fg').hover(function() {
       $('.link_2_bg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
       $('.link_2_bg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.link_3_fg').hover(function() {
       $('.link_3_bg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
       $('.link_3_bg').css('background-color', 'rgb(73, 93, 78, .1)')
    });

$('.footerfg').hover(function() {
       $('.footerbg').css('background-color', 'rgb(225, 225, 225, .1)');
    }, function() {
       $('.footerbg').css('background-color', 'rgb(73, 93, 78, .1)')
    });


/////// END OF JS ////////
});
