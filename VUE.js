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
          var app_id = "appbdqnkQFbiMRoXS";
          var app_key = "keyQA6oWJrjzUmGUy";
          this.items = []

          //make sure to have the correct table name here
          axios.get(
              "https://api.airtable.com/v0/" + app_id + "/favourites?view=Grid%20view",
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


  //computed functions let us get a specific subset from the database that matches one of the fields 
  computed: {

      filteredRatings: function () {
          return this.items.filter(function (filteredItem) {
              return filteredItem.fields.reviewRating == 5

          })
      },

      filteredYears: function () {
          return this.items.filter(function (filteredItem) {
              return filteredItem.fields.year == 2019;

          })
      }
  }

})

// javascript for sticky top to enable the navigation bar to be visible while scrolling down the pages//
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navigation = document.querySelector(".navigation");

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


//Javascript to allow for drop down navigation to link to other html pages//
var ddOurWork = document.querySelector(".dropdown--OurWork");
ddOurWork.onclick = () => {
	document.location.href = "ourwork.html";
}

//Javascript to allow for drop down navigation to link to other html pages//
var ddContactUs = document.querySelector(".dropdown--ContactUs");
ddContactUs.onclick = () => {
	document.location.href = "contact-us.html";
}


//icon when responsive changes to mobile device//
function openMobileNav() {
    var topNav = document.querySelector(".topnav");
    if (topNav.className === "topnav") {
        topNav.classList.add("mobile-nav");  
  }
    else {
        topNav.classList.remove("mobile-nav");
    }
  }


  function expand() {
    const nav = document.querySelector(".navigation")
    if (nav.className === "navigation") {
        nav.classList.add("responsive")
    }
    else {
        nav.classList.remove("responsive")
    }
}
