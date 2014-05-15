require.config({
	baseUrl: "js/libs",
  paths: {
    jquery: 'jquery/jquery',
    underscore: 'underscore/underscore',
    backbone: 'backbone/backbone',
    bootstrap: 'bootstrap/bootstrap',
    bootstrap_select: 'bootstrap-select/bootstrap-select',
    app: '../app'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore']
    },
    bootstrap: {
      deps: ['jquery']
    },
    bootstrap_select: {
      deps: ['bootstrap']
    }
  }
});

require(['app/main']);
