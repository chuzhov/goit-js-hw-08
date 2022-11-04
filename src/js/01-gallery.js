// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryWrapper = document.querySelector("div.gallery");

let htmlString = "";
galleryItems.forEach(element => {
    htmlString+=
    `<div><a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            alt="${element.description}"
        />
    </a></div>`
});
galleryWrapper.insertAdjacentHTML("afterbegin", htmlString);

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: "alt", captionDelay: 250 });
lightbox.on('show.simplelightbox');

