<script>
  import { fetchData } from '../services/service.js'

  export default {
    data() {
      return {
        articles: [],
        searchQuery:
          '' /* När sidan laddas in är searchQuery tom, eftersom att användaren ej matat in något i sökfältet än */
      }
    },
    watch: {
      searchQuery(newValue, oldValue) {
        if (newValue !== oldValue) {
          /*  använder watch för att kolla om searchQuery (sökfältet) har ändrats innan den kallar på funktionen */
          this.performSearch()
        }
      }
    },
    methods: {
      performSearch() {
        fetchData(this.searchQuery).then((fetchedData) => {
          this.articles = fetchedData.articles
        })
      }
    },
    created() {
      this.performSearch()
    }
  }
</script>

<template>
  <!-- Searchknappen som använder v-model för data -->
  <div class="search-bar-container">
    <b-form-input v-model="searchQuery" placeholder="Search..." />
  </div>

  <section class="main">
    <div class="article-container">
      <h2 v-if="searchQuery === ''">Headlines</h2>
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
            <router-link
              :to="{ name: 'ArticleDetail', params: { index: index } }"
              >Read more</router-link
            >
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<style scoped>
  .main {
    padding: 0 150px;
  }
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

  p {
    padding-top: 1rem;
  }

  .hero {
    padding-bottom: 2rem;
  }

  .search-bar-container {
    background-color: #003366;
    padding: 0.75rem;
  }

  @media (max-width: 1250px) {
    .main {
      padding: 0;
    }
  }
</style>
