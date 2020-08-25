define(["backbone", "../models/stats.model"], (Backbone, StatsModel) => {
    return Backbone.Collection.extend({
      model: StatsModel,
      url: "https://free-nba.p.rapidapi.com/stats",
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
  