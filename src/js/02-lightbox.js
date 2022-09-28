import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const imgMarcup = createImgGallery(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', imgMarcup);

function createImgGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`;
    }).join("");
}
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionsDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});