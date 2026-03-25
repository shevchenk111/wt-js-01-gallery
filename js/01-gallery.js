import { galleryItems } from './gallery-items.js';

const refs = {
  galleryListEl: document.querySelector('ul.gallery'),
  modalContainerEl: document.querySelector('div.lightbox'),
  lightboxOverlayEl: document.querySelector('div.lightbox__overlay'),
  modalImgEl: document.querySelector('img.lightbox__image'),
  modalCloseBtnEl: document.querySelector('[data-action="close-lightbox"]'),
};

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`,
    )
    .join('');
}

refs.galleryListEl.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);
refs.galleryListEl.addEventListener('click', onGalleryItemClick);
refs.modalCloseBtnEl.addEventListener('click', closeModal);
refs.lightboxOverlayEl.addEventListener('click', closeModal);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) return;

  refs.modalContainerEl.classList.add('is-open');
  refs.modalImgEl.src = event.target.dataset.source;
  refs.modalImgEl.alt = event.target.getAttribute('alt');

  document.addEventListener('keydown', onEscPress);
  document.addEventListener('keydown', onArrowPress);
}

function closeModal() {
  refs.modalContainerEl.classList.remove('is-open');
  refs.modalImgEl.src = '';
  refs.modalImgEl.alt = '';

  document.removeEventListener('keydown', onEscPress);
  document.removeEventListener('keydown', onArrowPress);
}

function onEscPress(event) {
  if (event.key === 'Escape') closeModal();
}

const turnRight = currentIndex => {
  if (currentIndex === galleryItems.length - 1) return;
  refs.modalImgEl.src = galleryItems[currentIndex + 1].original;
};

const turnLeft = currentIndex => {
  if (currentIndex === 0) return;
  refs.modalImgEl.src = galleryItems[currentIndex - 1].original;
};

function onArrowPress(event) {
  if (!refs.modalContainerEl.classList.contains('is-open')) return;

  const currentSrc = refs.modalImgEl.getAttribute('src');
  const currentIndex = galleryItems.findIndex(
    item => item.original === currentSrc,
  );

  if (event.code === 'ArrowRight') turnRight(currentIndex);
  if (event.code === 'ArrowLeft') turnLeft(currentIndex);
}