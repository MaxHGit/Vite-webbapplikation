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
        this.article = data.articles[this.index]
      }
    }
  }
</script>

<style scoped>
  .article-image {
    margin: 2rem 0; /* Lägger till mellanrum mellan bilden och titeln på artikeln */
    width: 100%;
    height: auto;
    padding: 0 15rem;
  }

  .article-container {
    padding: 0rem 10rem; /* padding på sidorna av nyhetsartiklarnas container, med andra ord lite mellanrum mellan nyhetsartiklarna och hemsidasn kanter */
  }

  .article-content {
    padding: 0 20rem;
  }

  h1,
  h2 {
    text-align: center;
    padding: 2rem 10rem;
  }

  p,
  .breadcrumbs {
    padding: 0 10rem;
  }

  @media (max-width: 1250px) {
    .article-image {
      padding: 0;
    }

    .article-container {
      padding: 0;
    }

    .article-content {
      padding: 0 3rem;
    }

    h1,
    h2 {
      text-align: center;
      padding: 1rem;
    }

    p {
      padding: 0 2rem;
      text-overflow: ellipsis;
    }

    .breadcrumbs {
      padding: 0 2rem;
    }
  }
</style>
