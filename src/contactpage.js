import mapPic from './map.png';


export default function createContactPage() {
    //creating a div element to append 
    const contactPage = document.createElement('div');
    contactPage.classList.add('contactPage');

    //add title
    const contactTitle = document.createElement('p');
    contactTitle.classList.add('contactTitle');
    contactTitle.innerHTML = "Contact Us"
    //append the title
    contactPage.appendChild(contactTitle);


    //add container
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    //add a para
    const contactPara = document.createElement('p');
    contactPara.classList.add('contactPara');
    contactPara.innerHTML = "+096 421 6699 <br><br><br> Luigi's Fine Dining <br> 9215 Toadstool Lane <br> Mushroom Kingdom, 6584 <br><br><br> contact@luirestaurant.com"
    //append the para
    contactContainer.appendChild(contactPara);
    //Add the image
    const myPic4 = new Image();
    myPic4.src = mapPic;
    myPic4.classList.add('mapPic');
    //append the image
    contactContainer.appendChild(myPic4);



    contactPage.appendChild(contactContainer);
    
    //append the contactpage to main content div
    content.appendChild(contactPage);

}