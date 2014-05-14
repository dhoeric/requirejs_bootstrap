define([
  'jquery',
  'bootstrap'
], function($) {
  console.log('Hello World!');
  console.log($);
  console.log($().dropdown);

  console.log($('.dropdown-toggle'));
  $('.dropdown-toggle').dropdown();

});