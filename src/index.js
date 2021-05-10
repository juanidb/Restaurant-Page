// importing the functions

import {newTitle, newParag, newImg} from './page-load.js';
import {menuInfo} from './menu.js'
import {contactInfo} from './contact.js';

const content = document.getElementById('content');

content.appendChild(newTitle('myRestaurant Page'));

content.appendChild(newImg('../src/images/myRestaurant.jpeg', 'restaurant image'));

content.appendChild(newParag('Dining out presents a great opportunity to unwind, relax and enjoy a delicious meal in a great atmosphere. While this is what most people are looking for when they decide to dine out, it is not always what they get. There are some very good restaurants, but unfortunately, they are few and far between. People will always make a return visit when they enjoy the dining experience and it is to everyone’s advantage for the restaurant to up its game! Following are some of the qualities or characteristics that distinguish between a great restaurant and other restaurants.'));

content.appendChild(menuInfo('pan con queso', 'queso con pan', 'jamon crudo'));

content.appendChild(contactInfo('9 platardos', 428740, 'bunge de galvez 29', 'pepitalapistolera@gmail.com'))