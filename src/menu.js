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
        let splitedItem = item.split(', ');
        menuItem.innerHTML = `${splitedItem[0]} ${' . '.repeat(65 - splitedItem[0].length)} $${splitedItem[1]}`;
        menuItem.setAttribute('style', 'margin-top: 7px;')
        menuList.appendChild(menuItem);
    });
    menuDiv.appendChild(menuList);
    return menuDiv;
}

// for more detailed menu I should make a function to create food objects.

export {menuInfo}