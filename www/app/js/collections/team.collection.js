define(["backbone", "../models/team.model"], (Backbone, TeamModel) => {
    return Backbone.Collection.extend({
      model: TeamModel,
      url: "https://free-nba.p.rapidapi.com/teams",
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
  