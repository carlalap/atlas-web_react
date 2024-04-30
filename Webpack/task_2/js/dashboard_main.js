import $ from "jquery";
import _ from 'lodash';

$(function() {
  $('body').append('<p id="logo"></p>')
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  // Defines a function called 'updateCounter' that is executed every time the button is clicked
  function updateCounter() {
    
    count++;
    // Updates the text of the element with ID 'count' to show the number of clicks on the button
    $("#count").html(`${count} clicks on the button`);
    }
  
  // Create a 'debounced' version of the 'updateCounter' function that runs after 500 milliseconds
  const debounced = _.debounce(updateCounter, 500);
  $("button").on("click", debounced)
})
