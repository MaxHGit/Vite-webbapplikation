<script>
import { fetchData } from "../services/service.js";

export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    fetchData().then((fetchedData) => {
      // Hämtar från Axios i service.js, och skriver sedan ut resultatet i "articles"
      this.articles = fetchedData.articles;
    });
  },
};
</script>

<template>
  <div class="article-container">
    <h1>This is the home page</h1>
    <h2>Headlines</h2>
    <b-row>
      <b-col
        cols="12"
        md="4"
        v-for="article in articles"
        :key="article.url"
        class="mb-4"
      >
        <div class="news-article">
          <h3>{{ article.title }}</h3>
          <img
            :src="article.urlToImage"
            :alt="article.title"
            class="article-image"
          />
          <p>{{ article.description }}</p>
          <a :href="article.url" target="_blank">Read more</a>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.news-article {
  display: flex;
  flex-direction: column;
}
/* Style for images */
.news-article img.article-image {
  margin-top: 10px; /* Lägger till mellanrum mellan bilden och titeln på artikeln */
}

.article-container {
  padding: 0rem 2rem; /* padding på sidorna av nyhetsartiklarnas container, med andra ord lite mellanrum mellan nyhetsartiklarna och hemsidasn kanter */
}

h1,
h2 {
  text-align: center;
  padding: 1rem;
}
</style>
