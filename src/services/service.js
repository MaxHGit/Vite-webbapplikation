import axios from 'axios'

/* Tar in "Query" som parameter, som är tom från början för att hämta all data från APIn */
export const fetchData = (query = '') => {
  let apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7fcf6f892a6440cc974de455e61cde20`
  /* Kollar om query parametern som skickas in är tom, är den inte tom så läggs parametern till via t.ex q=sökning */
  if (query) {
    apiUrl += `&q=${encodeURIComponent(query)}`
  }
  /* Här är självaste weppanropet */
  return axios.get(apiUrl).then((response) => response.data)
}
