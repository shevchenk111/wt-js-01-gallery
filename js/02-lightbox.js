import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`,
    )
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});