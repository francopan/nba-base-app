define([
  "jquery",
  "bootstrap.bundle",
  "./routers/main.router"
], function ($, bootstrap, MainRouter) {
  constructor = () => {
    
    // The Router is instantiated. 
    // Accordingly to the page visited, a controller method will be called.
    var app_router = new MainRouter();
    Backbone.history.start();
    
  };
  return constructor();
});
