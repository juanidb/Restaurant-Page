//function to create a the menu div.


const menuInfo = (...items) => {
    let menuDiv = document.createElement('div');
    menuDiv.setAttribute('class', 'menu-page');
    let menuTitle = document.createElement('h1');
    menuTitle.innerHTML = 'Restaurant Menu'
    menuDiv.appendChild(menuTitle)
    let menuList = document.createElement('ul');
    items.forEach(item => {
        let menuItem = document.createElement('li');
        menuItem.innerHTML = item;
        menuList.appendChild(menuItem);
    });
    menuDiv.appendChild(menuList);
    return menuDiv;
}

// for more detailed menu I should make a function to create food objects.

export {menuInfo}