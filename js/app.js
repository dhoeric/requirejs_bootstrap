require.config({
	baseUrl: "js/libs",
  paths: {
    jquery: 'jquery/jquery',
    underscore: 'underscore/underscore',
    bootstrap: 'bootstrap/bootstrap',
    app: '../app'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require(['app/main']);