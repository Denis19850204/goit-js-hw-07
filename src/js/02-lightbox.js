import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryCard = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryCard);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         <a class='gallery__item' href='${original}'>
         <img class='gallery__image'
         src='${preview}'
         alt='${description}'>
        </a>
        </div>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox('.gallery a', {});

lightbox.options.captionsData = "alt";
lightbox.options.captionDelay = "250";

lightbox.on(('error.simplelightbox', function (e) {
  console.log(e)
}))