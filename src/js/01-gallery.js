// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js'


// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery")
galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(galleryItems))
galleryListEl.addEventListener('click', onGalleryListItemClick)



function createGalleryCards(galleryItems) {
   return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join("");
}


function onGalleryListItemClick(event) {
    event.preventDefault();
}
 let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',captionDelay:'250'});