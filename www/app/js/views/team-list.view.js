define(["backbone", "tpl!./team-list.tpl","../models/menu.model", "./menu.view"], (Backbone, tpl, MenuModel, MenuView) => {
    return Backbone.View.extend({
      el: "#router-applet", // Parent element in which the content will be rendered.
      events: {
        "click .custom-control-input": "myTeam",
      },
      initialize() { // Paints first data onto screen and listen to model changes
        this.listenTo(this.collection, "sync change", this.render);
      },
      myTeam: (e) => {
        localStorage.setItem('myTeam', e.target.value);
        let menu = new MenuModel();
        new MenuView({model: menu});
      },
      render() { // Render the view from an external file as defined in the first line.
        this.$el.html(tpl(this.collection));
      }
    });
  });
  
  