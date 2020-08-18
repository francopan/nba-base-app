define([
  "jquery",
  "bootstrap.bundle",
  "./routers/main.router"
], function ($, bootstrap, MainRouter) {
  constructor = () => {
    var app_router = new MainRouter();
    Backbone.history.start();
  };
  return constructor();
});
