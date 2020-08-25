define(["backbone", "tpl!./match-stats.tpl"], (Backbone, tpl) => {
    return Backbone.View.extend({
      el: "#match-stats",
      initialize() {
        this.listenTo(this.model, "sync change", this.render);
      },
      render() {
        this.$el.html(tpl(this.model))
      }
    });
  });
  
  