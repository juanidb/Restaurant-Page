//function to create a the contact div.

const contactInfo = (name, phone, direction, email) => {
    let contactDiv = document.createElement('div');
    let contactName = document.createElement('h3');
    let contactPhone = document.createElement('h3');  
    let contactDirection = document.createElement('h3');
    let contactEmail = document.createElement('h3');
    contactName.innerHTML = name;
    contactPhone.innerHTML = 'Phone number: ' + Number(phone);
    contactDirection.innerHTML = 'Adress: ' + direction;
    contactEmail.innerHTML = 'E-mail: ' + email; 
    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactPhone);
    contactDiv.appendChild(contactDirection);
    contactDiv.appendChild(contactEmail);
    contactDiv.setAttribute('class', 'contact-page');
    return contactDiv;
}

export {contactInfo};