'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchImages from './js/pixabay-api';
import renderGallery from './js/render-functions';

const notFoundImages =
  'Sorry, there are no images matching your search query. Please try again!';

const form = document.querySelector('form.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const { search } = e.target.elements;

  if (search.value.trim().length === 0) return false;

  document.querySelector('.gallery').innerHTML = '<span class="loader"></span>';

  fetchImages(search.value.trim())
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Status code: ${response.status}. Message: ${
            response.statusText || 'Something went wrong...'
          }`
        );
      }
    })
    .then(data => {
      const transformData = data.hits.map(hit => ({
        preview: hit.webformatURL,
        url: hit.largeImageURL,
        tags: hit.tags,
        likes: hit.likes,
        comments: hit.comments,
        downloads: hit.downloads,
        views: hit.views,
      }));
      if (transformData.length < 1) {
        iziToast.error({
          title: 'No item found',
          message: notFoundImages,
        });
      } else {
        renderGallery(transformData);
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      const loader = document.querySelector('.loader');
      loader ? loader.remove() : null;
    });

  form.reset();
});
