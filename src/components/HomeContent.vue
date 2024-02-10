<script>
import { fetchData } from "../services/service.js";

export default {
  data() {
    return {
      data: "",
    };
  },
  created() {
    fetchData().then((fetchedData) => {
      // Hämtar från Axios i service.js, och skriver sedan ut resultatet i "data"
      this.data = fetchedData;
    });
  },
};
</script>

<template>
  <div>
    <h1>This is the home page</h1>
    <h2>API Testing (Cities-Tjänsten används bara tillfälligt för testning)</h2>
    <BTableSimple responsive>
      <BThead>
        <BTr>
          <BTh sticky-column>Name</BTh>
          <BTh>Population</BTh>
        </BTr>
      </BThead>
      <BTbody>
        <BTr v-for="city in data" :key="city.id">
          <BTd>{{ city.name }}</BTd>
          <BTd>{{ city.population }}</BTd>
        </BTr>
      </BTbody>
    </BTableSimple>
  </div>
</template>
