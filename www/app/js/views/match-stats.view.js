define(["backbone", "tpl!./match-stats.tpl"], (Backbone, tpl) => {
    return Backbone.View.extend({
      el: "#match-stats", // Parent element that the content will be rendered
      initialize() { // Initialize the view and listen to changes in the model
        this.listenTo(this.model, "sync change", this.render);
      },
      render() { // Renders the template using an external file (as defined in the first line)
        this.$el.html(tpl(this.model))
      }
    });
  });
  
  