import axios from "axios";

export const fetchData = () => {
  return axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7fcf6f892a6440cc974de455e61cde20"
    )
    .then((response) => response.data);
};
