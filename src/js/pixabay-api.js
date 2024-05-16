'use strict';

const apiKey = '43846975-899ff2de6e56efd8caf6f887c';
const apiBase = 'https://pixabay.com/api/';
const imageType = 'photo';
const orientation = 'horizontal';
const safesearch = true;

function fetchImages(searchString) {
  return fetch(
    `${apiBase}?key=${apiKey}&q=${searchString
      .split(' ')
      .join('+')}&image_type=${imageType}&orientation=${orientation}`
  );
}

export default fetchImages;
