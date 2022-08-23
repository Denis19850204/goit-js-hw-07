import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryCard = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryCard)

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    console.log(event.target)
}

function createGalleryItem(galleryItems) {
  return galleryItems.map(({preview,original,description}) => {
    return `<div class='gallery__item'>
         <a class='gallery__link' href=${original}>
         <img class='gallery__image'
         src=${preview}
         alt=${description}>
        </a>
        </div>`;
  }).join('');   
    
}



