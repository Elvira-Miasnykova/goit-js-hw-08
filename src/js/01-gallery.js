// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

const simpleLightBoxGallery = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
//console.log(galleryItemsMarkup);
//console.log(createGalleryItemsMarkup(galleryItems));
simpleLightBoxGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);




function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `<li style="list-style: none"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
        }).join("");
}
//console.log(createGalleryItemsMarkup);

const gallerySimpleBox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt',
});






console.log(galleryItems);
