<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group list-group-flush">{{propertyDetails.address}}</li>
            <li class="list-group list-group-flush">{{propertyDetails.state}}</li>
            <li class="list-group list-group-flush">{{propertyDetails.city}}</li>
            <li class="list-group list-group-flush"> {{propertyDetails.zip}}</li>
        </ul>
        <div>
            
            <div v-for="(x, index) in propertyDetails.todos" :key="x._id">
                <!-- make link unclickable if it is active -->
               <router-link class="nav-link" :to='"/properties/"+propertyDetails._id+"/"+index'> {{x.title}} </router-link>
            </div>
            <router-view></router-view> 
        </div>
    </div>
</template>
<script>
const API_URL = 'http://localhost:4000/properties';
export default {
    name: 'Property',
    data: () => ({
        error: '',
        propertyDetails: [],
            property: {
                //id: '',
                address: '',
                city: '',
                state: '',
                zip: null
            },
        route: null,
        toDoListRoute: null
    }),
    props : {
        propRoute: this.route
    },
    methods: { 
        foo: function(){}
    },
    created() {
        this.route = this.$route.params.propertyID
    },
    mounted() {
        fetch(API_URL + "/" +  this.route )
        .then(response => response.json())
        .then((result) => {
            this.propertyDetails = result[0];
        });
    },
    updated(){
        console.log("the route has changed")
    }
}
</script>
