define([
  'backbone',
  'app/models/menu'
], function(Backbone, MenuModel){
  var MenuCollection = Backbone.Collection.extend({
    model: MenuModel
  });

  return MenuCollection;
});