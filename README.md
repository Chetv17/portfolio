# portfolio
Chester Vincent's portfolio website

This portfolio is the assignment for Project Week #1 at General Assembly.

I will be using the skills and concepts from Unit 1 to build a personal portfolio.


General Approach:

For this portfolio project I decided to start with the overall theme/layout. At the end of the lecture section of this unit, I felt my weakest area was with html/css design, specifically with flex boxes. So I decided to start with laying out my flex boxes first -- and also trying to make it challenging. So every page has a header / footer thats a flex box, as well as content flex boxes in the middle sections.

To add to the challenge, I decided to layer the boxes on top of each other -- so each box is really two layered boxes -- and I used a 'click listener' along with a jQuery function to change the css background color of the lower box when the pointer 'hovers' over it. I think this gives the website a feeling of interactivity (especially since many of these boxes, such as the 'header' itself on all pages, and the main 'About Me', 'Resume', and 'Projects' boxes on page 1 are all actually navigational buttons!).

 NOTE: To make this count towards the project requirements I did use a click listener in the script page for the flex box buttons. However, the other regular links (such as in the footer or social links) I simply used a css hover to  make them turn yellow.

 In addition, every page features a pop-out modal for the contact link in the footer, which presents my contact info to visitors!

 Page 1:

 Apart from what I mentioned in the previous section, I created a pop-out photo carousel on the main page. It combines a modal box with the photo carousel exercise from class. It also has the added benefit of being an additional layout challenge, particularly when I used the media query to adjust the layout for smaller screens.

 I'm very happy with the way the carousel works when the screen size is reduced!

 Page 2:

The bio page is the simplest page of the four. I used the jQuery '.hide()' to keep the text hidden until the bio field is scrolled over. I intended to return to this page to make the whole field appear when the photo, or something else, is clicked, but ran out of time.

Page 3:

The resume page features two buttons that display my educational and employment history. Instead of hard coding the text into the HTML page, I made an array of objects in the JS and used a 'for loop' the cycle through and pull the info for both the Education and Resume buttons every time the visitor hovers over them! This seemed to be the best opportunity to show my 'for loop' skills in this project -- these loops feel like my weakest area in the javascript/jQuery area so I definitely wanted to make sure to work one into the design.

Page 4:

For the projects game, I decided to make a halloween themed game that attempts to take all of the other elements I focused on for this project but increase the difficulty even more! So it is a photo carousel, but with specific hidden boxes placed throughout the image field that will only become activated (and able to be 'clicked') once certain objectives were met.  I liked how the photo carousel could simulate a person turning 360 degrees inside a space!

So the first image: only the door was clickable, to simulate entering the cabin. I had to make a <div> that was the size of the door and place it in the doorway. But once the player passes through, I had to make it so the game removed that button. The next <div> is a drawer in the kitchen, which the player must find by exploring.

Once clicked the drawer reveals a potion vial. If the player clicks the vial, then it is added to the players items array -- and the drawer button and potion image are removed and no longer 'clickable'.

This act, however, activates the fireplace in the living room! And if the player follows the instructions, the next item that gets activated is the lamp in the bedroom -- and if that is clicked... a trippy surprise awaits! 

All of these effects required using my new knowledge of jQuery and Javascript, using hide() and show animations, and finally, precise box placements with css!


If I were to expand this game, I would add lots more items and secrets throughout the cabin, and make it so the curor did not change when secrets were hovered over -- so the player would really have to search by clicking without knowing if that section would reveal anything or not. I would also probably make it so the player could check and keep trackof items in his/her bag ('I strted this by pre-loading the items array with a 'map' -- in case i ever get to expland it!)

In addition, I could also have the player be able to navigate out the house into another nested carousel, maybe the back yard of the cabin? The options are many!
