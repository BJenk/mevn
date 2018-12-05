<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group list-group-flush">{{propertyDetails.address}}</li>
            <li class="list-group list-group-flush">{{propertyDetails.state}}</li>
            <li class="list-group list-group-flush">{{propertyDetails.city}}</li>
            <li class="list-group list-group-flush"> {{propertyDetails.zip}}</li>
        </ul>
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
    route: null
    }),
    created() {
        console.log(this.$route.params.propertyID)
        this.route = this.$route.params.propertyID
    },
    mounted() {
        fetch(API_URL + "/" +  this.route )
        .then(response => response.json())
        .then((result) => {
            console.log(result)
            this.propertyDetails = result[0];
        });
    }
}
</script>
