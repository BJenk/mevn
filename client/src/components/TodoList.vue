<template>
   <div>
       <h2>{{toDoDetails.title}}</h2>
       {{toDoDetails.description}}
   </div>
</template>

<script>
    const API_URL = 'http://localhost:4000/properties';
    export default {
        name: "TodoList",
        data: () => ({
         toDoDetails: [],
         updates: this.route
        }),
        route: null,
        created() {
          this.route = this.$route.params 
        fetch(API_URL + "/" +  this.route.propertyID + "/" + this.route.todoIndex )
        .then(response => response.json())
        .then((result) => {
            console.log(result)
           this.toDoDetails = result;
        });
        },
        updated() {
            console.log(this.updates)
        },
        beforeUpdate() {
            console.log("updated2")
        }
    }
    
</script>
