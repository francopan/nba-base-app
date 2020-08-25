define(["backbone","react","react-dom",  "./../lib/react-components/MatchCardList"], (Backbone,React, ReactDOM, MatchCardList) => {
  return Backbone.View.extend({
    el: "#router-applet",
    initialize() {
      this.listenTo(this.collection, "sync change", this.render);
    },
    render() {
      let template = React.createElement(MatchCardList.default, this.collection, null);
      ReactDOM.render(template, document.getElementById(this.$el[0].id));
    },
    remove() {
      ReactDOM.unmountComponentAtNode(document.getElementById(this.$el[0].id));
      Backbone.View.prototype.remove.call(this);
    },
  });
});

