<script>
  import { fetchData } from '../services/service.js'

  export default {
    data() {
      return {
        articles: []
      }
    },
    created() {
      fetchData().then((fetchedData) => {
        // Hämtar från Axios i service.js, och skriver sedan ut resultatet i "articles"
        this.articles = fetchedData.articles
      })
    }
  }
</script>

<template>
  <div class="hero">
    <b-img
      src="https://picsum.photos/1024/400/?image=41"
      fluid-grow
      alt="Header Image"
    ></b-img>
  </div>

  <div class="article-container">
    <h1>This is the home page</h1>
    <h2>Headlines</h2>
    <!-- BootstrapVue grid system som använder v-for för att rendrera ut alla artiklar i APIn -->
    <!-- Loopar igenom article. En unik nyckel baserat på artikelns URL (i API:n) tilldelas till alla artiklar,
         Index används för navigering till ArticleDetails.vue med dynamisk data när man klickar på "Read More" -->
    <b-row>
      <b-col
        cols="12"
        md="4"
        v-for="(article, index) in articles"
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
          <!-- Vue Router Addressparameter: Read me knappen tar dig dynamiskt till en sida med information om den valda artikeln, index id och index data -->
          <router-link :to="{ name: 'ArticleDetail', params: { index: index } }"
            >Read more</router-link
          >
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
