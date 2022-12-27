// API utility function
// need to store/copy key into environment variables
// "b6da9fe983msha966....."

import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
  // destructuring data and using await for API fetching, that's it
}

// Axios is a simple promise based HTTP client for the browser and node.js. Axios
// provides a simple to use library in a small package with a very extensible.

// Just like javascript fetching functionalities, axios provides the the fetching
// data functionality from api.