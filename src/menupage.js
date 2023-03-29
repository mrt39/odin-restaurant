import carbonaraPic from './carbonara.jpg';
import pizzaPic from './pizza.jpeg';
import soupPic from './soup.jpeg';


export default function createMenuPage() {
    //creating a div element to append 
    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage');

    //add title
    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menuTitle');
    menuTitle.innerHTML = "Our Menu"
    //append the title
    menuPage.appendChild(menuTitle);

    //add container1
    const menuContainer1 = document.createElement('div');
    menuContainer1.classList.add('menuContainer');
    //Add the image
    const myPic1 = new Image();
    myPic1.src = soupPic;
    myPic1.classList.add('menuPic');
    //append the image
    menuContainer1.appendChild(myPic1);
    //add a para
    const menuContainer1p = document.createElement('p');
    menuContainer1p.classList.add('menuText');
    menuContainer1p.innerHTML = "This savory soup is fit for a mushroom-loving plumber!"
    //append the para
    menuContainer1.appendChild(menuContainer1p);

    //add container2
    const menuContainer2 = document.createElement('div');
    menuContainer2.classList.add('menuContainer');
    //Add the image
    const myPic2 = new Image();
    myPic2.src = pizzaPic;
    myPic2.classList.add('menuPic');
    //append the image
    menuContainer2.appendChild(myPic2);
    //add a para
    const menuContainer2p = document.createElement('p');
    menuContainer2p.classList.add('menuText');
    menuContainer2p.innerHTML = "Our signature pizza is a Mario-sized feast, fit for a Mushroom Kingdom celebration."
    //append the para
    menuContainer2.appendChild(menuContainer2p);


    //add container3
    const menuContainer3 = document.createElement('div');
    menuContainer3.classList.add('menuContainer');
    //Add the image
    const myPic3 = new Image();
    myPic3.src = carbonaraPic;
    myPic3.classList.add('menuPic');
    //append the image
    menuContainer3.appendChild(myPic3);
    //add a para
    const menuContainer3p = document.createElement('p');
    menuContainer3p.classList.add('menuText');
    menuContainer3p.innerHTML = "Made with al dente pasta and cream, just like Mama Mario used to make."
    //append the para
    menuContainer3.appendChild(menuContainer3p);

    
    menuPage.appendChild(menuContainer1);
    menuPage.appendChild(menuContainer2);
    menuPage.appendChild(menuContainer3);
    
    //append the menupage to main content div
    content.appendChild(menuPage);
}
