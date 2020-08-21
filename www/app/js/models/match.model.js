define(["backbone"], function (Backbone) {
  return Backbone.Model.extend({
    defaults: function () {
      return {
        id: 0,
        date: new Date().toLocaleString(),
        home_team: {
          id: 0,
          abbreviation: null,
          city: null,
          conference: null,
          division: null,
          full_name: null,
          name: null,
        },
        home_team_score: 0,
        period: 0,
        postseason: false,
        season: 0,
        status: null,
        time: null,
        visitor_team: {
          id: 0,
          abbreviation: null,
          city: null,
          conference: null,
          division: null,
          full_name: null,
          name: null,
        },
        visitor_team_score: 0,
      };
    },
  });
});