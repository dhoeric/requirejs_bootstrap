define([
  'backbone',
  'app/models/product'
], function(Backbone, ProductModel){
  var ProductCollection = Backbone.Collection.extend({
    model: ProductModel
  });

  return ProductCollection;
});