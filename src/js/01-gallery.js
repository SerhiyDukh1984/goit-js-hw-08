import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const imageEl = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageEl);

function createImageMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  navText: ['<~', '~>'],
});
