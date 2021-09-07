var app = new Vue({
    el: '#app', // this must match the name of the div in html
})    data: {

        items: [], //an array to hold all of the items it gets from the database 

    },
    mounted: function() {
        this.loadItems();
    },
    methods: {
        loadItems: function() {

            //Init variables - these are in your airtable
            var self = this
            var app_id = "hghghghg";
            var app_key = "hhhghghgh";
            this.items = []

            //make sure to have the correct label name here
            axios.get(
                "https://api.airtable.com/v0/" + app_id + "fjhghg",
                {
                    headers: { Authorization: "Bearer " + app_key }                
                }

            ).then(function(response) {
                self.items = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})

