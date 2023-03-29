import luigiPic from './luigi.png';


export default function createHomePage() {
  
    //creating a div element to append 
    const homePage = document.createElement('div');
    
    //Add the image to our existing div.
    const myPic = new Image();
    myPic.src = luigiPic;
    myPic.classList.add('luigiPic');
    //append the pic
    homePage.appendChild(myPic);

    //add a paragraph
    const title = document.createElement('p');
    title.innerHTML = "Luigi's Fine Dining"
    title.classList.add('title');
    //append the paragraph
    homePage.appendChild(title);

    //create a div for appending text
    const homeTextContainer = document.createElement('div');
    homeTextContainer.classList.add('homeTextContainer');
        
    //add a paragraph
    const homeText = document.createElement('p');
    homeText.innerHTML = "<br><br><br>Welcome to Luigi's Fine Dining, where we serve up culinary <br> masterpieces that even Wario is jealous of. <br><br><br> <br> Our menu is bursting with creative and unique dishes <br> inspired by the flavors of the Mushroom Kingdom. <br><br><br> <br> Our attentive staff, led by Luigi himself, is passionate <br> about making your dining experience unforgettable. <br><br><br><br>  Whether you're in the mood for a romantic date for two<br> or a quick multiplayer game with friends and family, <br> our warm atmosphere is the perfect setting."
    homeText.classList.add('homeText');
    //append the paragraph to the container
    homeTextContainer.appendChild(homeText);
    //append the container to content
    homePage.appendChild(homeTextContainer);

    //append the homepage to main content div
    content.appendChild(homePage);

  }
