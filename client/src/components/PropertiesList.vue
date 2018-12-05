<template>
    <div>List of Properties  
        <div v-for="(x) in properties" :key="x._id">
            <a :href="'/properties/' + x._id">{{x.address}}</a>
            <button 
                class="btn"
                v-bind:id="x._id"
                v-on:click.once="deleteProperty1"
            >x
             </button>
        </div>
        <div>
            <form @submit.prevent="createProperty" class="mb-3">
                <input
                    type="text"
                    placeholder="Address"
                    class="form-control"
                    v-model="property.address"
                >
                <input
                    type="text"
                    placeholder="City"
                    class="form-control"
                    v-model="property.city"
                >
                <input
                    type="text"
                    placeholder="State"
                    class="form-control"
                    v-model="property.state"
                >
                <input
                    type="number"
                    placeholder="Zip"
                    class="form-control"
                    v-model="property.zip"
                >
                <button type="submit" class="btn btn-primary">Add Property</button>
            </form>
        </div>
    </div>
</template>

<script>
const API_URL = 'http://localhost:4000/properties';
export default {
 name: 'PropertiesList',
 data: () => ({
    error: '',
    properties: [],
    property: {
        //id: '',
        address: '',
        city: '',
        state: '',
        zip: null
    }
 }),
 mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then((result) => {
        this.properties = result;
      });
  },
  methods: {
      createProperty(){
          this.number = Number(this.number)
          fetch(API_URL, {
              method: 'POST',
              body: JSON.stringify(this.property),
              headers: {
                  'content-type': 'application/json',
              },
          })
          .then(response => response.json())
          .then((result) => {
              if(result.details){
                  const error = result.details
                  .map(detail => detail.property)
                  .join('. ');
                  this.error = error;
              } else {
                  this.error = '';
                //   this.showMessageForm
                    this.properties.push(result)
                    this.property = {
                    address: '',
                    city: '',
                    state: '',
                    zip: null
                }
              }
          })
      },
      deleteProperty1(e){
          fetch(API_URL+"/"+e.target.id, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
          })
          .then((result) => {
              if(result.details){
                  const error = results.details
                  .map(detail => detail.property)
                  .join('. ');
                  this.error = error;
              }else{
                  this.error = '';
                  //refactor with Vue.delete 
                  for(var x in this.properties){
                      if (this.properties[x]._id === e.target.id){
                          this.properties.splice(x,1)
                      }
                  }
              }
          })
      }
  }
}
</script>
