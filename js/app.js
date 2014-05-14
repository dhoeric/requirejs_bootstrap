require.config({
	baseUrl: "js/libs",
  paths: {
    jquery: 'jquery/jquery',
    underscore: 'underscore/underscore',
    bootstrap: 'bootstrap/bootstrap',
    bootstrap_select: 'bootstrap-select/bootstrap-select',
    app: '../app'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    bootstrap_select: {
      deps: ['bootstrap']
    }
  }
});

require(['app/main']);