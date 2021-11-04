
var app = new Vue({
    el: '#app', //this must match the name of the div in your html
  
    data: {
  
        items: [], //an array to hold all the items it gets from the database
  
    },
    mounted: function () {
        this.loadItems();
    },
    methods: {
        loadItems: function () {
  
            // Init variables - these are in your airtable
            var self = this
            var app_id = "appuQPbAAfwU2pm8u";
            var app_key = "keyps0p7b8GQWQsfC";
            this.items = []
  
            //make sure to have the correct table name here
            axios.get(
                "https://api.airtable.com/v0/" + app_id + "/Gallery?view=Grid%20view",
                {
                    headers: { Authorization: "Bearer " + app_key }
                }
            ).then(function (response) {
                self.items = response.data.records
            }).catch(function (error) {
                console.log(error)
            })
        }
  
    },
  
  })
    // computed functions let us get a specific subset from the database that matches one of the fields 
//     computed: {
  
//         filteredRatings: function () {
//             return this.items.filter(function (filteredItem) {
//                 return filteredItem.fields.reviewRating == 5
  
//             })
//         };
  
//         filteredYears: function () {
//             return this.items.filter(function (filteredItem) {
//                 return filteredItem.fields.year == 2019;
  
//             })
//         }
//     }
  
//   })
  