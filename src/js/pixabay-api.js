'use strict';

import axios from 'axios';

const apiKey = '43846975-899ff2de6e56efd8caf6f887c';
const apiBase = 'https://pixabay.com/api/';
const imageType = 'photo';
const orientation = 'horizontal';

async function fetchImages({ searchString, page = 1, perPage = 15 }) {
  let response;
  try {
    response = await axios.get(
      `${apiBase}?key=${apiKey}&q=${searchString
        .split(' ')
        .join(
          '+'
        )}&image_type=${imageType}&orientation=${orientation}&page=${page}&per_page=${perPage}`
    );
    return response;
  } catch (e) {
    throw new Error(e);
  }
}

export default fetchImages;
