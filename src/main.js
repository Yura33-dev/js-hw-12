'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchImages from './js/pixabay-api';
import renderGallery, {
  hideBtnMore,
  resetGallery,
  showBtnMore,
} from './js/render-functions';

const notFoundImages =
  'Sorry, there are no images matching your search query. Please try again!';

let userInputData = null;

const container = document.querySelector('.container');
const form = container.querySelector('form.form');

let page = 1;
const loader = '<span class="loader"></span>';

form.addEventListener('submit', async e => {
  e.preventDefault();

  const { search } = e.target.elements;
  userInputData = search.value.trim();

  if (!userInputData) return false;

  container.insertAdjacentHTML('beforeend', loader);
  resetGallery();
  hideBtnMore();

  try {
    const response = await fetchImages({ searchString: search.value.trim() });
    const images = response.data.hits.map(image => transformData(image));

    if (images.length) {
      renderGallery(images);
      showBtnMore();
    } else {
      iziToast.error({
        title: 'No item found',
        message: notFoundImages,
      });
    }
  } catch (e) {
    console.log(e);
  }

  form.reset();
  resetFormLoader();
});

container.addEventListener('click', async e => {
  if (e.target.classList.contains('more') && userInputData) {
    container.insertAdjacentHTML('beforeend', loader);
    hideBtnMore();
    let totalHits = null;

    const cardHeight = parseFloat(
      document
        .querySelector('.gallery-item')
        .getBoundingClientRect()
        .height.toFixed(1)
    );

    page += 1;

    try {
      const response = await fetchImages({
        searchString: userInputData,
        page,
      });
      const images = response.data.hits.map(image => transformData(image));
      totalHits = response.data.totalHits;

      showBtnMore();
      renderGallery(images, false);

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(error);
    }

    console.log(totalHits);

    if (
      totalHits &&
      totalHits === document.querySelectorAll('.gallery-item').length
    ) {
      iziToast.warning({
        title: 'Oops',
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideBtnMore();
    }
    resetFormLoader();
  }
});

function transformData(image) {
  return {
    preview: image.webformatURL,
    url: image.largeImageURL,
    tags: image.tags,
    likes: image.likes,
    comments: image.comments,
    downloads: image.downloads,
    views: image.views,
  };
}

function resetFormLoader() {
  const loader = document.querySelector('.loader');
  loader ? loader.remove() : null;
}
