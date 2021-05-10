// function to create a new title

const newTitle = content => {
    const title = document.createElement('h1');
    title.innerHTML = content;
    title.setAttribute('class', 'title');
    return title;
}

// function to create a paragraph

const newParag = content => {
    const parag = document.createElement('p');
    parag.innerHTML = content;
    parag.setAttribute('class', 'paragraph');
    return parag
}

// function to create an image

const newImg = (imgSrc, alt) => {
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    if (alt) img.setAttribute('alt', alt);
    return img
}

// exporting the functions

export {newTitle, newParag, newImg}