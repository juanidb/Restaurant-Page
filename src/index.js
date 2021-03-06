// importing the functions.

import {newTitle, newParag, newImg} from './page-load.js';
import {menuInfo} from './menu.js'
import {contactInfo} from './contact.js';

// main div.
const content = document.getElementById('content');

//creating the buttons inside of a div.

const btns = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

btns.setAttribute('class', 'buttons-div');
homeBtn.innerHTML = 'Home';
homeBtn.setAttribute('class', 'buttons')
menuBtn.innerHTML = 'Menu';
menuBtn.setAttribute('class', 'buttons')
contactBtn.innerHTML = 'Contact';
contactBtn.setAttribute('class', 'buttons')


// appending buttons to the div then the div to the main page.

btns.appendChild(homeBtn);
btns.appendChild(menuBtn);
btns.appendChild(contactBtn);
content.appendChild(btns);

// creating a div and appending its parts.
let homePage = document.createElement('div');
homePage.setAttribute('class', 'home-page');
homePage.appendChild(newTitle('Not a Real Restaurant'));
homePage.appendChild(newImg('/home/juanidb/Desktop/top/restaurant page/src/images/myRestaurant.jpeg', 'restaurant image'));
homePage.appendChild(newParag(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`));
homePage.appendChild(newParag(`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`));
homePage.appendChild(newParag(`t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`));


const menuPage = menuInfo('bread, 3.50', 'cheese, 5', 'burger, 7.50', 'steak, 15', 'pizza, 12', 'sandwich, 8', 'pie, 11');


//creating the var with the contact page outside of the button.

const contactPage = contactInfo('Not a Real Restaurant', '+43-688-5559-987', '2962  Hickory Ridge Drive', '57qtxnd5139@temporary-mail.net');


//adding the functionality to the menu button.

menuBtn.addEventListener('click', (e) => {
    
    //checking if theres content of other tabs.
    if(content.contains(homePage)) content.replaceChild(menuPage, homePage);
    else if (content.contains(contactPage)) content.replaceChild(menuPage, contactPage);
    
    // appending the menu list.
    else if (!content.contains(menuPage)) content.appendChild(menuPage);
});

//adding the functionality to the contact menu.

contactBtn.addEventListener('click', (e) => {
    if(content.contains(menuPage)) content.replaceChild(contactPage, menuPage);
    else if (content.contains(homePage)) content.replaceChild(contactPage, homePage);
    else if (!content.contains(contactPage)) content.appendChild(contactPage);
});

// adding the functions to the homeButton.

homeBtn.addEventListener('click', (e) => {
    if(content.contains(menuPage)) content.replaceChild(homePage, menuPage);
    else if (content.contains(contactPage)) content.replaceChild(homePage, contactPage);
    else if (!content.contains(homePage)) content.appendChild(homePage);
    });
//clicking the home button so the page loads with this and not empty.
 menuBtn.click();