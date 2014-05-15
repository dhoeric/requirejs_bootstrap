define([
  'app/collections/product',
  'app/views/product/dropdown'
], function(ProdcutCollection, ProductDropdownView) {
  var cars = new ProdcutCollection([{
    name: 'Toyota'
  }, {
    name: 'Honda'
  }, {
    name: 'Ford'
  }, {
    name: 'Tesla'
  }]);
  var carView = new ProductDropdownView({
    collection: cars
  });
  carView.render();
  $('.dropdown').append(carView.$el);

  var phones = new ProdcutCollection([{
    name: 'Apple'
  }, {
    name: 'Samsung'
  }, {
    name: 'Sony'
  }, {
    name: 'HTC'
  }]);
  var phoneView = new ProductDropdownView({
    collection: phones
  });
  phoneView.render();
  $('.dropdown').append(phoneView.$el);
});