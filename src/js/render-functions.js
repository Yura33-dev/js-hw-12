'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

function renderGallery(images, newQuery = true) {
  const content = images
    .map(image => {
      return `
            <li class="gallery-item">
                <a href="${image.url}">
                    <div class="image-wrapper">
                        <img
                            src="${image.preview}"
                            alt="${image.tags}"
                        />
                    </div>
                    <div class="image-info">
                        <div class="option likes">
                            <div class="key">Likes</div>
                            <div class="value">${image.likes}</div>
                        </div>
                        <div class="option views">
                            <div class="key">Views</div>
                            <div class="value">${image.views}</div>
                        </div>
                        <div class="option comments">
                            <div class="key">Comments</div>
                            <div class="value">${image.comments}</div>
                        </div>
                        <div class="option downloads">
                            <div class="key">Downloads</div>
                            <div class="value">${image.comments}</div>
                        </div>
                    </div>
                </a>
            </li>
        `;
    })
    .join('');

  if (newQuery) {
    resetGallery();
  }
  gallery.insertAdjacentHTML('beforeend', content);
  lightbox.refresh();
}

export function resetGallery() {
  gallery.innerHTML = '';
}

export function hideBtnMore() {
  document.querySelector('.more').classList.add('hide');
}

export function showBtnMore() {
  document.querySelector('.more').classList.remove('hide');
}

export default renderGallery;
