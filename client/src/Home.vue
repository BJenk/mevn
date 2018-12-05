<template>
  <div>
    <div class="container">
     <div class="row">
        <div class="col col-md-2">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/properties">Go to Properties</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/bar">Go to Bar</router-link>
          </li>
        </ul>
      </div>
        <div class="col col-md-10">
        <router-view></router-view>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
const API_URL = "http://localhost:4000/messages";
 
export default {
  name: "home",
  data: () => ({
    error: "",
    messages: []
  }),
  mounted() {
    // fetch(API_URL)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.messages = result;
    //   });
  },
  methods: {}
};
</script>
 
<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
