define([
  "backbone",
  "react",
  "react-dom",
  "./../lib/react-components/MatchCardList"
], (Backbone, React, ReactDOM, MatchCardList) => {
  return Backbone.View.extend({
    el: "#router-applet", // Parent Element that the view will render
    events: { // Events listened by the view and what will do when these events happen
      "scroll": "fetchData"
    },
    headers: {
      "x-rapidapi-key":
        "1ff61dbd37msha92c1bc11eeea7bp1b3cdcjsnc6850808e820",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
    },

    /**
     * @author franco.pan
     * This function initializes the view, rendering the first paint and listening to changes in the model
     */
    initialize() {
      this.collection.state.currentPage = 1;
      this.listenTo(this.collection, "sync change", this.render);
    },

    /**
     * @author franco.pan
     * This function fetches data when the user scrolls the page
     */
    fetchData: function () {
      if (this.$el.scrollTop() >= (this.$el.prop("scrollTopMax") - 500)) { // When last 500px of screen are met, fetch next page
        // Collection fetches data from next page. Current page is controlled by collection.

        this.collection.getNextPage({
          headers: this.headers,
        });
      }
    },

    /**
     * @author franco.pan
     * This function renders a page through ReactDOM
     */
    render() {
      let newPage = document.createElement("div");
      let template = React.createElement(MatchCardList.default, this.collection, null);
      ReactDOM.render(template, newPage);
      
      // If is first page, replace entire content
      if (this.collection.state.currentPage == this.collection.state.firstPage) {
        this.$el.html(newPage);  
      }  else { // If is not first page, simply append content
        this.$el.append(newPage);  
      }
    },
    /**
     * @author franco.pan
     * This function removes a react component from the view and the view itself from backbone
     */
    remove() {
      ReactDOM.unmountComponentAtNode(document.getElementById(this.$el[0].id));
      Backbone.View.prototype.remove.call(this);
    },
  });
});
