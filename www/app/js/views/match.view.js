define(["backbone", "tpl!./match.tpl"], (Backbone, tpl) => {
  return Backbone.View.extend({
    el: "#router-applet",
    initialize() {
      this.listenTo(this.model, "sync change", this.render);
    },
    render() {
      this.$el.html(tpl(this.model))
    }
  });
});

