import axios from "axios";

const KEY = "AIzaSyCiTOw2HcT5VUa1vFS1GLqKwqjDU0R1EXg";

// https://www.googleapis.com/youtube/v3/search
// part= snippet, maxResults=5, q

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
