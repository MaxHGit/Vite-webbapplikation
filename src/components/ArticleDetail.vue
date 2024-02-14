<template>
  <div class="article-container">
    <h1>{{ article.title }}</h1>
    <b-breadcrumb :items="items" class="breadcrumbs" />
    <p>Author: {{ article.author }}</p>
    <img class="article-image" :src="article.urlToImage" :alt="article.title" />
    <p class="article-content">{{ article.content }}</p>
  </div>
</template>

<script>
  import { fetchData } from '../services/service.js'

  export default {
    props: {
      /* Tysäker prop: Index */
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        article: null
      }
    },
    computed: {
      /* Använder computed för att dynamiskt uppdatera titlen som används i breadcrumb, för att visa var du befinner dig */
      items() {
        return [
          {
            text: 'Home',
            to: { name: 'home' }
          },
          {
            text: this.article.title,
            /* to: används inte eftersom denna länk är den aktiva sidan så den behöver ej klickas på och är därför "active" istället */
            active: true
          }
        ]
      }
    },
    async created() {
      await this.loadArticle()
    },
    methods: {
      async loadArticle() {
        const data = await fetchData()
        /* Använde ChatGPT för att göra om this.index från string till int, bas 10 för decimaler */
        this.article = data.articles[parseInt(this.index, 10)]
      }
    }
  }
</script>

<style scoped>
  .article-image {
    margin: 2rem 0; /* Lägger till mellanrum mellan bilden och titeln på artikeln */
    width: 100%;
    height: auto;
    padding: 0 5rem;
  }

  .article-container {
    padding: 0rem 2rem; /* padding på sidorna av nyhetsartiklarnas container, med andra ord lite mellanrum mellan nyhetsartiklarna och hemsidasn kanter */
  }

  .article-content {
    padding: 0 10%;
  }

  h1,
  h2 {
    text-align: center;
    padding: 1rem;
  }

  @media (max-width: 1250px) {
    .article-image {
      padding: 0;
    }
  }
</style>
