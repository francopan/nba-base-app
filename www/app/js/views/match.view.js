define(["backbone", "tpl!./match.tpl"], (Backbone, tpl) => {
  return Backbone.View.extend({
    el: "#router-applet",
    events: {
      scroll: "getNextPage",
    },
    initialize: function () {
      this.listenTo(this.collection, "sync change", this.render);
      this.listenTo(this.collection.fullCollection, "add", this.render);
    },

    addMatch: function () {
      console.log("lalala");
    },

    getNextPage: function () {
      this.collection.getNextPage();
    },

    render: function () {
      this.$el.html(tpl(this.collection));
    },
  });
});


// define(["backbone","react-dom", "jsx!./Match"], (Backbone,ReactDOM, Match) => {
//   return Backbone.View.extend({
//     el: "#router-applet",
//     events: {
//       scroll: "getNextPage",
//     },
//     initialize() {
//       this.listenTo(this.collection, "sync change", this.render);
//       this.listenTo(this.collection.fullCollection, "add", this.render);
//     },

//     addMatch() {
//       console.log("lalala");
//     },

//     getNextPage() {
//       this.collection.getNextPage();
//     },

//     render() {
//       ReactDOM.render(Match, this.$el);
//     },
//     remove() {
//       ReactDOM.unmountComponentAtNode(this.$el);
//       Backbone.View.prototype.remove.call(this);
//     },
//   });
// });

