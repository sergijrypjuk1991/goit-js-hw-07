import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const imgMarcup = createImgGallery(galleryItems);

galleryContainer.addEventListener('click', onModalOpen);

galleryContainer.insertAdjacentHTML('beforeend', imgMarcup);

function createImgGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div> `;
    }).join('');
}

function onModalOpen(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const imgUrl = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">`,
    {
        onShow: instance => {
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    return instance.close();
                }
            });
        }
    },
    
  );

    instance.show();
}
 
