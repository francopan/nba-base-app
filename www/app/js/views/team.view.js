define(["backbone", "tpl!./team.tpl"], (Backbone, tpl) => {
  return Backbone.View.extend({
    el: "#router-applet", // Parent element in which the content will be rendered.
    initialize() { // Paints first data onto screen and listen to model changes
      this.listenTo(this.model, "sync change", this.render);
      this.$el.html();
    },
    render() { // Render the view from an external file as defined in the first line.
      this.$el.html(tpl(this.model))
    }
  });
});

