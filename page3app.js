$(() => {


const jobs = [
  {
    job: 'B & M Automotive',
    street: '4301 Main Street',
    city: 'Pittsburgh',
    state: 'Pennsylvania',
    zipcode: '15044'
  },
  {
    job: 'C & C Mailing',
    street: '4930 S Pioneer Rd',
    city: 'Gibsonia',
    state: 'Pennsylvania',
    zipcode: '15224'
  },
  {
    job: '52nd Street Market',
    street: '601 52nd Street',
    city: 'Pittsburgh',
    state: 'Pennsylvania',
    zipcode: '15201'
  }
];

const education = [
    {
     school: 'General Assembly',
     street: '902 Broadway, 4th Floor',
     city: 'New York',
     state: 'New York',
     zipcode: '10010'
    },
    {
      school: 'The George Washington University',
      street: '2121 I Street',
      city: 'Washington',
      state: 'DC',
      zipcode: '20052',
      degree: 'English Degree'
    },
    {
      school: 'Shady Side Academy',
      street: '423 Fox Chapel Road',
      city: 'Pittsburgh',
      state: 'Pennsylvania',
      zipcode: '15238'
    }
  ];

const schoolList = () => {

  const $address_ul = $('<ul>').addClass('address').appendTo('.dropdownContent');
   for(let i = 0; i < education.length; i++) {
    $('<br>').appendTo($address_ul);
    $('<li>').addClass('addlist').text(education[i].school).css('font-weight', 'bold').appendTo($address_ul);
    $('<li>').addClass('addlist').text(education[i].street).appendTo($address_ul);
    $('<li>').addClass('addlist').text(education[i].city).appendTo($address_ul);
    $('<li>').addClass('addlist').text(education[i].state).appendTo($address_ul);
    $('<li>').addClass('addlist').text(education[i].zipcode).appendTo($address_ul);
    $('<li>').addClass('addlist').text(education[i].degree).css('font-weight', 'bold').appendTo($address_ul);
  }
}


const jobList = () => {

  const $address_ul = $('<ul>').addClass('job_address').appendTo('.jobsDropdownContent');
   for(let i = 0; i < jobs.length; i++) {
    $('<br>').appendTo($address_ul);
    $('<li>').addClass('addlist_jobs').text(jobs[i].job).css('font-weight', 'bold').appendTo($address_ul);
    $('<li>').addClass('addlist_jobs').text(jobs[i].street).appendTo($address_ul);
    $('<li>').addClass('addlist_jobs').text(jobs[i].city).appendTo($address_ul);
    $('<li>').addClass('addlist_jobs').text(jobs[i].state).appendTo($address_ul);
    $('<li>').addClass('addlist_jobs').text(jobs[i].zipcode).appendTo($address_ul);

  }
}


///////// CLICK FUNCTIONS /////////

const $openBtn = $('#openModal');
const $modal = $('#contactModal');
const $closeBtn = $('#close');

const openModal = () => {
$modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

//////// CLICK LISTENERS ////////

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

////////// HOVER OVER LISTENERS /////////

$('.educationMain').hover(function() {
      schoolList();
      $('.dropdownContent').css('display', 'block');
    }, function() {
      $('.dropdownContent').css('display', 'none');
      $('.address').remove();
    });

$('.jobsMain').hover(function() {
      jobList();
      $('.jobsDropdownContent').css('display', 'block');
    }, function() {
        $('.jobsDropdownContent').css('display', 'none');
        $('.job_address').remove();
      });


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


});
