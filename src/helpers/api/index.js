import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(value, page = 1) {
  const searchParams = new URLSearchParams({
    key: `33354076-0a876f5b723d518ba8fae8563`,
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
    q: value,
  });

  const response = await axios.get(`?${searchParams}`);
  return response.data;
}
