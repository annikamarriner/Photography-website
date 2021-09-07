var app = new Vue({
    el: '#app', // this must match the name of the div in html

    data: {

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



// javascript for sticky top to enable the navigation bar to be visible while scrolling down the pages//
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navigation = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navigation.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
}