import axios from "axios";

export const fetchData = () => {
  return axios
    .get("https://avancera.app/cities/")
    .then((response) => response.data);
};
