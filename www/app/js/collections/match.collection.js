define(["backbone-pageable", "../models/match.model"], (PageableCollection, MatchModel) => {
  return PageableCollection.extend({
    model: MatchModel,
    mode: "infinite",
    url: "https://free-nba.p.rapidapi.com/games",
    parse:  (response, options) => {
      return response.data;
    },
    state: {
      firstPage: 1,
      currentPage: 1
    },
    queryParams: {
      currentPage: "page",
      pageSize: "per_page",
      totalRecords: "total_count"
    }
  });
});
