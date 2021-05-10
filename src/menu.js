//function to create a the menu div.

console.log('porq carga esto');

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

export {menuInfo}