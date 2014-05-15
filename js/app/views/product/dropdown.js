define([
  'underscore',
  'backbone',
  'app/collections/product',
  'text!app/templates/product/dropdown.html',
  'bootstrap_select'
], function(_, Backbone, ProductCollection, ProductDropdownTemplate){
  var ProductDropdownView = Backbone.View.extend({
    template: _.template(ProductDropdownTemplate),
    initialize: function(opt) {
      this.options = opt || {};
    },
    render: function() {
      this.$el.html(this.template({
        products: this.collection.models
      }));

      this.$el.find('.selectpick').selectpicker();

      return this;
    }
  });
  // Our module now returns our view
  return ProductDropdownView;
});