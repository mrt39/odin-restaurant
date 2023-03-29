import './style.css';
import createHomePage from './homepage.js';
import createMenuPage from './menupage.js';
import createContactPage from './contactpage.js';


const content = document.getElementById("content")


//style the body
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "#e6280e";
document.body.style.color = "#FFFFFF";
document.body.style.fontFamily = "'Press Start 2P', cursive";


//create the navbar
const navBar = document.createElement('nav');
const homePageUl = document.createElement('ul');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

//li's and their innerhtml
li1.innerHTML = "<a href='#'>Home</a>";
li2.innerHTML = "<a href='#'>Menu</a>";
li3.innerHTML = "<a href='#'>Contact</a>";

//li's  and their eventlisteners for displaying other pages (tabbed browsing)
li1.addEventListener("click", function(){ 
  //removing the second child, which is the page content. navbar is the first child so it stays
  content.removeChild(content.children[1])
  createHomePage()
});

li2.addEventListener("click", function(){ 
  //removing the second child, which is the page content. navbar is the first child so it stays
  content.removeChild(content.children[1])
  createMenuPage()
});
li3.addEventListener("click", function(){ 
  //removing the second child, which is the page content. navbar is the first child so it stays
  content.removeChild(content.children[1])
  createContactPage()
});

//appending the navbar elements
homePageUl.appendChild(li1);
homePageUl.appendChild(li2);
homePageUl.appendChild(li3);

navBar.appendChild(homePageUl);

content.appendChild(navBar);


//when the page opens, by default, display the home page.
createHomePage()
