define([
  'underscore',
  'backbone',
  'text!app/templates/product/menu.html'
], function(_, Backbone, ProductMenuTemplate){
  var ProductMenuView = Backbone.View.extend({
    template: _.template(ProductMenuTemplate),
    initialize: function(opt) {
      this.options = opt || {};
    },
    render: function() {
      this.$el.html(this.template({
        products: this.collection.models
      }));

      return this;
    },
    events: {
      'click button': 'updateDropdown'
    },
    updateDropdown: function(e) {
      console.log('ProductMenuView: updateDropdown()');
      console.log($(e.currentTarget).text());

      var curCid = $(e.currentTarget).attr('data-cid');
      var curModel = this.collection.get(curCid);
      var curView = curModel.get('view');

      $('.dropdown').html(curView.render().$el);
    }
  });

  return ProductMenuView;
});