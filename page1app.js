
$(() => {






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

///////////////










//////// CLICK LISTENERS ////////

$('#headerClick').on('click', navigateHome);
$('#aboutMeClick').on('click', navigateAboutMe);
$('#resumeClick').on('click', navigateResume);
$('#projectsClick').on('click', navigateProjects);

///////// HOVER-OVER LISTENERS //////////

$('.headerfg').hover(function() {
      $('.headerbg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
      $('.headerbg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.linksfg').hover(function() {
       $('.linksbg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
       $('.linksbg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.carouselfg').hover(function() {
       $('.carouselbg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
       $('.carouselbg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.link_1_fg').hover(function() {
       $('.link_1_bg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
       $('.link_1_bg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.link_2_fg').hover(function() {
       $('.link_2_bg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
       $('.link_2_bg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.link_3_fg').hover(function() {
       $('.link_3_bg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
       $('.link_3_bg').css('background-color', 'rgb(73, 93, 78, .5)')
    });

$('.footerfg').hover(function() {
       $('.footerbg').css('background-color', 'rgb(225, 225, 225, .5)');
    }, function() {
       $('.footerbg').css('background-color', 'rgb(73, 93, 78, .5)')
    });


/////// END OF JS ////////
});
