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
      console.log('ProductDropdownView: render()');
      this.$el.html(this.template({
        products: this.collection.models
      }));

      this.$select = this.$el.find('select.selectpicker').selectpicker();
      return this;
    }
  });

  return ProductDropdownView;
});