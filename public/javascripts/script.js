/*global Vue*/
/*global axios*/
/*global moment*/

var app = new Vue({

   el: '#app',

   data: {
     comment: '',
     alias: '',
     time: moment().format('MMMM Do YYYY, h:mm:ss a'),
     comments: [],
   },

   methods: {
     clearUser() {
       this.alias = '';
     },

     clearComment() {
       this.comment = '';
     },

     menu_hover() {
       let menuStyle = document.getElementById('menu').style;
       menuStyle.background = '-webkit-linear-gradient(right, #85ceeb, #8860d0)';
     },

     menu_leave() {
       let menuStyle = document.getElementById('menu').style;
       menuStyle.background = '';
     },

     search_hover() {
       let barStyle = document.getElementById('searchBar').style;
       let searchStyle = document.getElementById('searchText').style;

       barStyle.background = '-webkit-linear-gradient(left, #5ab8eb, #5580ea)';
       searchStyle.background = 'white';
       searchStyle.color = 'black';
     },

     search_leave() {
       let barStyle = document.getElementById('searchBar').style;
       let search = document.getElementById('searchText');

       barStyle.background = '';
       search.style.background = '#525252';
       search.style.color = 'white';
     },

     comment_active() {
       let boxStyle = document.getElementById('box').style;
       let commentStyle = document.getElementById('comment').style;
       let userStyle = document.getElementById('user').style;

       boxStyle.background = '-webkit-linear-gradient(top, #5580ea, #8860d0';
       commentStyle.background = 'white';
       commentStyle.color = 'black';
       userStyle.background = 'white';
       userStyle.color = 'black';
     },

     comment_leave() {
       let boxStyle = document.getElementById('box').style;
       let commentStyle = document.getElementById('comment').style;
       let userStyle = document.getElementById('user').style;

       boxStyle.background = '';
       commentStyle.background = '#525252';
       commentStyle.color = 'white';
       userStyle.background = '#525252';
       userStyle.color = 'white';
     },

     getComments() {

     },

     postComment() {
        this.time = moment().format('MMMM Do YYYY, h:mm:ss a');

        this.comments.unshift({
          user: this.alias,
          content: this.comment,
          time: this.time,
        });

        this.comment = '';
        this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
     },

     deleteComment() {

     },

     firstComment() {
       this.time = moment().format('MMMM Do YYYY, h:mm:ss a');

       this.comments.unshift({
         user: "Josh Skousen",
         content: "Thank you for using Freespeak!",
         time: this.time,
       });
     },
   },

   created() {
     //getComments();
     this.firstComment();
   },

});
