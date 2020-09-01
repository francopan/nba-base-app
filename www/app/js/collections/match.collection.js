define(["backbone-pageable", "../models/match.model"], (PageableCollection, MatchModel) => {
  return PageableCollection.extend({
    model: MatchModel,
    mode: "server",
    url: "https://free-nba.p.rapidapi.com/games",
    parse:  (response, options) => {
      return response.data;
    },
    state: {
      firstPage: 1,
      currentPage: 1,
      "team_ids\[\]": null 
    },
    queryParams: {
      currentPage: "page",
      pageSize: "per_page",
      totalRecords: "total_count",
      "team_ids\[\]": function () { return this.state["team_ids\[\]"]; }
    },
    /**
     * This function parses the links from the response metadata
     * so that the collection knows which page should go (previous, next)
     * @author franco.pan
     * @param {*} resp Response
     */
    parseLinks: function (resp) {
      return {
        next: this.url + "/?page=" + resp.meta.next_page,
        previousPage: this.url + "?page=" + resp.meta.previous_page,
        currentPage: this.url + "/?page=" + resp.meta.current_page,
        lastPage: this.url + "/?page=" + resp.meta.total_pages
      };
    }
  });
});
