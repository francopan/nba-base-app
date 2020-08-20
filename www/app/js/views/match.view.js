// define(["backbone", "tpl!./match.tpl"], (Backbone, tpl) => {
//   return Backbone.View.extend({
//     el: "#router-applet",
//     events: {
//       scroll: "getNextPage",
//     },
//     initialize: function () {
//       this.listenTo(this.collection, "sync change", this.render);
//       this.listenTo(this.collection.fullCollection, "add", this.render);
//     },

//     addMatch: function () {
//       console.log("lalala");
//     },

//     getNextPage: function () {
//       this.collection.getNextPage();
//     },

//     render: function () {
//       this.$el.html(tpl(this.collection));
//     },
//   });
// });


define(["backbone","react","react-dom",  "./../lib/react-components/MatchCard"], (Backbone,React, ReactDOM, MatchCardList) => {
  return Backbone.View.extend({
    el: "#router-applet",
    initialize() {
      this.listenTo(this.collection, "sync change", this.render);
      //this.listenTo(this.collection.fullCollection, "add", this.render);
    },
    render() {
      console.log(MatchCardList.default)
      let template = React.createElement(MatchCardList.default, this.collection, null);
      ReactDOM.render(template, document.getElementById(this.$el[0].id));
    },
    remove() {
      ReactDOM.unmountComponentAtNode(document.getElementById(this.$el[0].id));
      Backbone.View.prototype.remove.call(this);
    },
  });
});

