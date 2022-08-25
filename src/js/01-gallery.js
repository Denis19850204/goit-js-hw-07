import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryCard = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryCard);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'>
         <a class='gallery__link' href='${original}'>
         <img class='gallery__image'
         src='${preview}'
         data-source='${original}'
         alt='${description}'>
        </a>
        </div>`;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault()
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  
  const imageSrc = event.target.dataset.source;   

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">`)  

  instance.show()

  window.addEventListener('keydown', onEscapeCloseModal) 
  
  function onEscapeCloseModal(event) {
  if (event.code === 'Escape') {
    instance.close()
    
  }
  
}
  
}




