define([
  'app/collections/product',
  'app/views/product/dropdown',
  'app/collections/menu',
  'app/views/product/menu'
], function(ProdcutCollection, ProductDropdownView, MenuCollection, MenuView) {
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
  }).render();
  // $('.dropdown').append(carView.$el);

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
  }).render();
  // $('.dropdown').append(phoneView.$el);


  /* Set the menu */
  var menu = new MenuCollection([{
    name: 'Car',
    collection: cars,
    view: carView
  }, {
    name: 'Phone',
    collection: phones,
    view: phoneView
  }]);
  var menuView = new MenuView({
    collection: menu
  });
  $('.menu').append(menuView.render().$el);
});