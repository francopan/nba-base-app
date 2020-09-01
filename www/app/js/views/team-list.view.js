define(["backbone", "tpl!./team-list.tpl"], (Backbone, tpl) => {
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
        //this.model.myTeam();
      },
      render() { // Render the view from an external file as defined in the first line.
        this.$el.html(tpl(this.collection))
      }
    });
  });
  
  